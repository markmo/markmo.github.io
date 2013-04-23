---
layout: blog_post
title: Why functional languages are a good match with data development
summary: The map-reduce programming model, that is at the core of Hadoop, is borrowed from a common functional pattern.
img: /img/Lambda.png
date: April 23, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

Functional languages such as Scala and Clojure have seen a resurgence in the last few years. Even JavaScript
has become better appreciated as a full-blown language which
supports sending functions as parameters and closures (the ability for a function to access variables not in its
parameter list from the enclosing environment in which it was defined).

There are many reasons for the renewed appreciation of functional styles of programming. Developers are looking for
ways to write more concise and expressive code. Dynamic languages such as Ruby and Python, which both have support
for functional programming styles, have been used to good effect in particular domains such as web applications and
prototyping for numerical applications. (I don't mean to imply that these languages have limited use cases, only that
these are some of the communities in which those languages have loyal adherents.)

Another reason is that the functional programming style, which favours immutable objects (an object whose state
cannot be modified after it is created), is less error prone when developing highly concurrent applications - the
type of applications required to deliver cloud-based services.

I think another reason is that the functional programming style maps well to writing data applications. The
map-reduce programming model that is at the core of Hadoop is borrowed from a common
functional pattern. A common pattern for data applications is to pull or react to data from one or
more sources, transform it in a series of stages arranged as a pipeline and then emit the data. I like to think
of these applications as data refineries that augment and refine data for visualization and reporting
or for further analysis. At any stage, it
is important that the original data remains unchanged so the process can be repeated in the event of an exception.
Functional programming matches this conceptual flow very closely. In contrast to an imperative object-oriented
language such as Java where it is common to read data into a set of objects in memory for manipulation, the
typical functional style is to read the data as a stream and transform the data in a chain (or pipeline) of
functions as in the following example code that is extracting words counts from an input file and writing the
result to an output file.

{% highlight scala %}
class WordCountJob(args: Args) extends Job(args) {

  TextLine(args("input"))
    .flatMap('line -> 'word) { line: String => tokenize(line) }
    .groupBy('word) { _.size }
    .write( Tsv(args("output")) )
}
{% endhighlight %}

I have been using Scala as it attempts to bridge the object-oriented and functional paradigms, allowing me to
easily reuse existing Java libraries while using Scala when doing the heavy lifting with data. Features of Scala,
such as pattern matching, allow for quite concise and elegant code. For example, the code fragment below
reads word and tag counts from a file in the following format:

<pre>
9 WORDTAG O Test
11 WORDTAG O cysts
43 WORDTAG O splice
6 WORDTAG O extensively
1 WORDTAG I-GENE heterodimer

13796 2-GRAM * *
749 3-GRAM * * I-GENE
11320 3-GRAM I-GENE O O
9622 3-GRAM I-GENE I-GENE O
</pre>


<div style="width: 810px;">
{% highlight scala %}
def extractCounts() {
  var counts: Source = null
  try {
    counts = Source.fromFile("/data/h1-p/gene.counts")
    counts.getLines().foreach(_ split "\\s+" match {
      case Array(k, "WORDTAG", tag, word)       => { wordTagCounts((tag, word)) = k.toInt; }
      case Array(k, "1-GRAM", tag)              => { unigramCounts(tag) = k.toInt }
      case Array(k, "2-GRAM", tag1, tag2)       => { bigramCounts((tag1, tag2)) = k.toInt }
      case Array(k, "3-GRAM", tag1, tag2, tag3) => { trigramCounts((tag1, tag2, tag3)) = k.toInt }
    })
  } finally {
    if (counts != null) counts.close()
  }
}
{% endhighlight %}
</div>

The code is a lot more concise than the equivalent code in Java or C#.
