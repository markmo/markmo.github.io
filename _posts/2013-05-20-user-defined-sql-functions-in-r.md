---
layout: blog_post
title: User defined SQL functions in R
summary: The ability to use R to create user defined functions adds powerful statistical and data mining
         capabilities to a relational database.
img: /img/SQLplusR.jpg
date: May 20, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

A user defined function (UDF) extends the functionality of a database by adding a function that can be evaluated
in SQL statements. The Greenplum and PostgreSQL relational databases enable user defined functions to be defined
in the R language. R is a widely used programming language and environment for data manipulation and statistical
analysis. The ability to use R to create user defined functions adds powerful statistical and data mining
capabilities to a relational database. It also enables the analyst to leverage the flexibility and query optimizations
built into relational databases and avoid the overhead of exporting data and taking care to manage memory and
query performance manually.

I'll work through setting up R in PostgreSQL followed by a few examples of using R to extract word counts and perform
sentiment analysis on columns of text.

<div id="installation"></div>

* [Getting started](#installation)
* [Creating your first user defined function in R](#first)
* [Using SQL and R for Text Mining](#wordcount)
* [Sentiment Analysis](#sentiment)

<h3>Getting Started</h3>

PostgreSQL, often simply Postgres, is an open source relational database management system. It is released under
the PostgreSQL License, which is an MIT-style license, and is thus free and open for commercial use. It implements
the majority of the SQL:2008 standard, is ACID-compliant, and is fully transactional (including all DDL statements).
PostgreSQL evolved from the Ingres project at the University of California, Berkeley, and was developed with
extensibility in mind. It has extensible data types, operators, index methods, functions, aggregates, and procedural
languages.

PL/R is a bridge, developed by Joseph Conway, which enables the R environment to be used as a procedural language
in Postgres. PL/R offers most (if not all) of the capabilities a function writer has in the R language.

I'll assume that you have Postgres and R already installed. Installation is straightforward and distributions are
available for Linux, OS X, and Windows. I'm using Postgres version 9.2.1 and R version 3.0.0 on a MacBook Pro.

<div style="margin-left: 20px; font-size: 85%; color: #999;">
<p>Binary distributions for Postgres are available from <a href="http://www.postgresql.org/download/">http://www.postgresql.org/download/</a>. On OS X, Postgres can also
be installed using the <a href="http://brew.sh/">Homebrew</a> package manager:</p>

{% highlight bash %}
brew install postgresql
{% endhighlight %}

<p>Binary distributions for R are available from <a href="http://www.r-project.org/">http://www.r-project.org/</a>.</p>

<p>Both sites include installation instructions.</p>
</div>

PL/R and documentation is available from [http://www.joeconway.com/plr/](http://www.joeconway.com/plr/).

I'm going to be stepping through the setup on OS X. The PL/R website contains documentation for installation on other
platforms. The [Wiki](http://www.joeconway.com/web/guest/pl/r/-/wiki/Main/Installation+Tips) also provides installation
tips for specific platforms.

<div style="margin-left: 20px; font-size: 85%; color: #999;">
<p>On OS X, I built the PL/R library from source. According to the PL/R documentation, as of PostgreSQL 8.0.0, PL/R can
be built without the PostgreSQL source tree. However, I encountered a problem after successfully building PL/R when
attempting to create the PL/R extension in Postgres:</p>

{% highlight bash %}
ERROR: incompatible library /usr/local/Cellar/postgresql/9.2.1/lib/plr.so: version mismatch
DETAIL: Server is version 9.2, library is version 9.1.
{% endhighlight %}

<p>This may have been caused by older files left over from the upgrade from Postgres 9.1 to 9.2.1 on my machine. To
work around this issue, I built PL/R from within the relevant Postgres source tree as follows.</p>
</div>

Download the relevant Postgres source from [http://www.postgresql.org/ftp/source/](http://www.postgresql.org/ftp/source/). I'm using v9.2.1, which matches
the server version already installed on my machine. Unzip the archive to a directory of your choosing.

Grab the PL/R source and unzip into the 'contrib' directory in the Postgres source tree. If you have Git, you can
also cd to the contrib directory and fetch the PL/R source from GitHub:

{% highlight bash %}
git clone https://github.com/jconway/plr.git
{% endhighlight %}

Next, cd to the 'plr' directory under 'contrib' and enter the following statements from the command line:

{% highlight bash %}
export USE_PGXS=1
export CUSTOM_COPT="-arch x86_64"
{% endhighlight %}

You also must set R_HOME, which can be found by running R.home() from the R console. On my machine it is:

{% highlight bash %}
export R_HOME=/Library/Frameworks/R.framework/Resources
{% endhighlight %}

Build and install the PL/R library by running:

{% highlight bash %}
make
{% endhighlight %}

<div style="margin-left: 20px; font-size: 85%; color: #999;">
<p>On my machine, I received an error at this step:</p>

{% highlight bash %}
/bin/sh: /Applications/Xcode.app/Contents/Developer/Toolchains/OSX10.8.xctoolchain/usr/bin/cc: No such file or directory
{% endhighlight %}

<p>This appears to be the result of upgrading to OS X Mountain Lion (10.8) from version 10.7 instead of performing a
fresh install of 10.8. It can be fixed by running the following shell script from the command line:</p>

{% highlight bash %}
[ "$(sw_vers -productVersion | sed 's/^\(10\.[0-9]\).*/\1/')" = "10.8" ] && bash -c "[ -d /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain ] && sudo bash -c 'cd /Applications/Xcode.app/Contents/Developer/Toolchains/ && ln -vs XcodeDefault.xctoolchain OSX10.8.xctoolchain' || sudo bash -c 'mkdir -vp /Applications/Xcode.app/Contents/Developer/Toolchains/OSX10.8.xctoolchain/usr && cd /Applications/Xcode.app/Contents/Developer/Toolchains/OSX10.8.xctoolchain/usr && ln -vs /usr/bin'"
{% endhighlight %}

<p>This script creates a symbolic link from /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain to
/Applications/Xcode.app/Contents/Developer/Toolchains/OSX10.8.xctoolchain</p>
</div>

Moving on, 'make' should now complete successfully. Then install the PL/R library into Postgres:

{% highlight bash %}
make install
{% endhighlight %}

<div style="margin-left: 20px; font-size: 85%; color: #999;">
<p>You may need to run this command using sudo if you get an error. I installed Postgres using the Homebrew package manager, which installs it into /usr/local
for which my account has access privileges. The installation package downloaded from the Postgres website will likely
install it into a location for which you need to use the sudo command to elevate privileges:</p>

<div id="first"></div>

{% highlight bash %}
sudo make install
{% endhighlight %}
</div>

The PL/R library should now be installed and available to Postgres.

<h3>Creating your first user defined function in R</h3>

I use [pgAdmin3](http://www.pgadmin.org/visualtour16.php) as a graphical user interface for Postgres. Binary distributions can be obtained from
[http://www.pgadmin.org/download/](http://www.pgadmin.org/download/).

To start, we will create an aggregate function to calculate the median for a group of rows.

Create a test database using pgAdmin3 or from the command line, e.g.

{% highlight bash %}
createdb plr-test
{% endhighlight %}

Make sure the Postgres server is running. See the Postgres documentation for more information.

Create a table with test data:

{% highlight sql %}
create table foo(f0 int, f1 text, f2 float8);
insert into foo values
(1,'cat1',1.21), (2,'cat1',1.24), (3,'cat1',1.18),
(4,'cat1',1.26), (5,'cat1',1.15), (6,'cat2',1.15),
(7,'cat2',1.26), (8,'cat2',1.32), (9,'cat2',1.30);
{% endhighlight %}

Enable, PL/R support by issuing the following SQL command:

{% highlight sql %}
CREATE EXTENSION plr;
{% endhighlight %}

Next, we'll define a user defined function in R.

{% highlight r %}
CREATE OR REPLACE FUNCTION r_median(ANYARRAY) RETURNS ANYELEMENT AS $$
  median(arg1)
$$ LANGUAGE plr;
{% endhighlight %}

The body of the function is simply a block of R script. When the function is called, the argument values are passed as variables arg1 ... argN to the R script. The result is returned from the R code in the usual way.

In general, to create a new aggregate, a state transition function and possibly a final function are specified. The final function is used in case the desired output of the aggregate is different from the data that needs to be kept in the running state value.

{% highlight r %}
CREATE AGGREGATE median(ANYELEMENT)
(
  sfunc = array_append,
  stype = anyarray,
  finalfunc = r_median,
  initcond = '{}'
);
{% endhighlight %}

A simple aggregate can be defined using the predefined PostgreSQL C function, plr_array_accum as a state transition function, and a PL/R function as a finalizer.

Test the function by running the following query:

{% highlight sql %}
select f1, median(f2) from foo group by f1 order by f1;
{% endhighlight %}

You should see the following results:

<div id="wordcount"></div>

<table class="table">
<tr>
<th>f1</th><th>median</th>
</tr>
<tr>
<td>cat1</td><td>1.21</td>
</tr>
<tr>
<td>cat2</td><td>1.28</td>
</tr>
</table>

<h3>Using SQL and R for Text Mining</h3>

In this example, we'll create a function to do a word count for a column value containing text. The first thing we'll need is a
column of text. Stack Exchange kindly make their database of questions and answers from sites such as Stack
Overflow available through a SQL query interface at [http://data.stackexchange.com/](http://data.stackexchange.com/). I'm going to use data from
[Cross Validated](http://stats.stackexchange.com/), a question and answer site for statisticians, data analysts,
data miners and data visualization experts.

Select a site, then click on the 'Compose Query' button. The database schema is shown on the right hand side. I'm
using the following query to collect the top 1000 most viewed questions. (Please be considerate in using this
great resource by limiting query results.)

{% highlight sql %}
select top 1000 p.Id, ViewCount, Title, Body from Posts p, PostTypes t
where p.PostTypeId = t.Id and t.name = 'Question'
order by ViewCount desc
{% endhighlight %}

The query results can be downloaded as a CSV file.

Lets create a table in Postgres to store this data.

{% highlight sql %}
CREATE TABLE posts
(
  id int NOT NULL,
  viewcount int,
  title varchar(250),
  body varchar,
  CONSTRAINT posts_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
{% endhighlight %}

Next, we'll copy the data from the file into the table using the Postgres COPY command. You will first need to
edit the file and remove the header row for this to work.

{% highlight sql %}
copy posts from '/Users/markmo/Downloads/QueryResultsNoHeader.csv' delimiters ',' csv;
{% endhighlight %}

Change the location to the location of the edited CSV file.

Create the Word Count function:

{% highlight r %}
CREATE OR REPLACE FUNCTION wc(varchar) RETURNS int AS $$
  sapply(gregexpr("\\W+", arg1), length) + 1
$$ LANGUAGE plr;
{% endhighlight %}

Test the function by running the following query:

{% highlight sql %}
select id, wc(body), body from posts limit 10;
{% endhighlight %}

![Word Count Query Results](/img/wc_example.gif)

<div id="sentiment"></div>

You should see the word counts next to the body of text in each row.
<br>

<h3>Sentiment Analysis</h3>

In this last example, we'll define a function to assign a sentiment score given a body of text in a column. I have
adapted an approach proposed by [Jeffrey Breen](http://jeffreybreen.wordpress.com/2011/07/04/twitter-text-mining-r-slides/), used
to estimate the sentiment expressed in tweets about major U.S. airlines.
We will calculate a sentiment score as the difference between the sum of mentions of words expressing positive sentiment and mentions of words expressing negative sentiment. If
the score is greater than zero, then the body of text has an overall positive sentiment; less than zero, an overall
negative sentiment; and neutral if the score equals zero. It is a somewhat naive implementation as it does not
recognize sarcasm, and degree of sentiment would be misleading without normalization for length of text.
However, the implementation is easy to understand and could be extended by adding domain-specific words to the
corpus. I am using a list of positive and negative opinion words for English compiled by
Hu and Liu, available from [Opinion Mining, Sentiment Analysis, and Opinion Spam Detection](http://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html).

Download and extract the positive and negative word lists from [http://www.cs.uic.edu/~liub/FBS/opinion-lexicon-English.rar](http://www.cs.uic.edu/~liub/FBS/opinion-lexicon-English.rar).

I am also using the 'stringr' package from [Hadley Wickham](https://github.com/hadley/stringr). You may first need to install this package from within the R console:

{% highlight r %}
install.packages("stringr")
{% endhighlight %}

Next, create the sentiment function in Postgres, making sure to change the location of the word lists to the location
where you extracted them to. (Bear in mind that this code will require additional data condition checking and error
handling logic before use.)

{% highlight r %}
CREATE OR REPLACE FUNCTION sentiment(varchar) RETURNS varchar AS $$
library(stringr)

score.sentiment = function(sentence, pos.words, neg.words) {
	# clean up text
	sentence = gsub("[[:punct:]]", "", sentence)
	sentence = gsub("[[:cntrl:]]", "", sentence)
	sentence = gsub("\\d+", "", sentence)

	# convert to lower case
	sentence = tolower(sentence)

	word.list = str_split(sentence, "\\s+")
	words = unlist(word.list)

	pos.matches = match(words, pos.words)
	neg.matches = match(words, neg.words)
	pos.matches = !is.na(pos.matches)
	neg.matches = !is.na(neg.matches)

	score = sum(pos.matches) - sum(neg.matches)
	if (score > 0)
		return("positive")
	else if (score < 0)
		return ("negative")
	else
		return("neutral")
}

# perform once as an expensive operation
if (pg.state.firstpass == TRUE) {
	# read positive and negative words
	pos.words = readLines("/Users/markmo/data/sentiment/positive_words.txt")
	neg.words = readLines("/Users/markmo/data/sentiment/negative_words.txt")
}
score.sentiment(arg1, pos.words, neg.words)

$$ LANGUAGE plr;
{% endhighlight %}

Test the function by running the following query:

{% highlight sql %}
select id, sentiment(body), body from posts limit 10;
{% endhighlight %}

![Word Count Query Results](/img/sentiment_example.gif)

You can view sentiment over all rows using:

{% highlight sql %}
select sentiment(body), count(id) as count from posts
group by sentiment(body);
{% endhighlight %}

![Word Count Query Results](/img/sentiment_groupby_example.gif)

I hope these examples have sparked some ideas to leverage the power of using SQL and R together.
