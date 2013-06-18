---
layout: blog_post
title: Ten reasons why Metadata is important
summary: Metadata is used to link, place, ascribe, authenticate and add other contextual information that can be more revealing than the underlying content.
img: /img/network.png
date: June 18, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

1. __Metadata is a valuable source of information for analysis in its own right__

    Metadata is used to link, place, ascribe, authenticate and add other contextual information that can be more
    revealing than the underlying content.<br>
    (Perhaps if this was more widely understood then initiatives that collect metadata would be seen in a different
    light, and not considered less pertinent in comparison to access to the actual content.)

2. __Having metadata at hand helps to avoid rework, reduce defects, and accelerate analysis, thereby reducing the cost
of information solutions__

    Data aggregation and reporting is very sensitive to the schema of the data. Changes to the schema usually involves
    changes to the data processing pipeline all the way back to the source, which becomes more costly the later the
    change is discovered.

    The same is true for late discovery of quality issues, which could have been found early by profiling the data and
    capturing the results as metadata.

3. __It also significantly reduces the cost of maintaining information solutions__

    It is both frustrating and time consuming to make a change to a data process when the meaning of a data item
    or business term
    is not obvious and there is no documentation of its definition, where it came from, and what impact it has on
    other data or processes. Maybe it was documented, but now that document can't be easily found amongst the thousands
    of other documents.

4. __Metadata lowers the risk of penalties and losses from compliance issues, such as breach of confidentiality, loss of
customer data, and leakage of intellectual property__

    In industries such as financial services and health care, there are significant penalties for losing control
    of customer data and other sensitive information. Companies must comply with strict policies and procedures
    that govern data access and collection of audit records on data usage.

    Metadata keeps tracks of which data is sensitive, who has access to the data, data lineage, and of
    security incidents.

5. __Metadata is critical for successful technology migrations such as business transformations, SOE migrations, and
infrastructure upgrades__

    A critical function of major system upgrades and transformation projects is the migration of data and content
    from the old systems to the new. These migrations are more challenging than just conversions from one database
    system to another, or one format to another. There are usually semantic differences between systems. For example,
    a financial measure in the source system may be aggregated using a different chart of accounts, which are orthogonal to the
    ones used in the target system. Figure 1 below shows an example that compares extracts of two University
    course catalogs.

    ![Semantic matching result when comparing two example course catalogs.](/img/s-match-default-example.png)
    <small>Figure 1: Semantic matching result when comparing two example course catalogs (from
    <a href="http://semanticmatching.org/semantic-matching.html" target="_blank">s&middot;match.org</a>).</small>

6. __It elevates trust in data resources and therefore the effectiveness of analytics__

    The best analytics are useless if people do not trust the data on which the analysis is based. Access to Metadata
    will establish where the data came from, ensure that specified quality checks pass, and provide annotations and
    commentary to support the data and note any limitations. Lack of trust is one of the reasons why people create
    their own shadow databases. Unfortunately, there is usually misplaced optimism in the quality of data in these
    databases and they typically contain only a subset of the data that is available.

7. __Metadata enables key insights into areas such as customer behaviour, operational performance, and
market conditions by streamlining access to relevant data__

    Metadata is the glue that enables different data sets to be meaningfully joined; that is, it enables data to
    be linked to a time, place, person or organization, etc.

8. __Metadata facilitates business and systems integration through reconciling differences in terminology and
resolving ambiguities and inconsistencies__

    A simple example is resolving the definition of a Customer. From the financial perspective, a Customer might be
    someone who has paid the company money. On the other hand, the Support organization may regard Customers as
    registered users of their products, some of whom may be using trial versions and have not yet paid anything. Yet
    another definition may be from the Sales organization where Customer and Prospect is used synonymously.

    At a more technical level, a database column has been given the name "AMT". Without current documentation, the
    only way to determine what this means - Amount? Sale Amount? Sale Amount Excluding GST? - is to manually
    review the Extract-Transform-Load procedures to determine how and from where that column was populated, which
    might involve multiple iterations all the way back to the source system or external party. This is incredibly
    time consuming for what should be a simple task.

9. __Metadata is like statistics - it enables a large volume of data to be scanned and brings focus to only
relevant information__

    With the rapidly growing volume of information that is being collected, it is becoming increasingly inviable
    to consume data without the ability to first zero-in on just the relevant information. Metadata is a critical
    dependency for finding, linking, and summarizing information, using tools such as Guided Search, Document
    Clustering, Semantic Search, and Machine Learning.

10. __In general, Metadata prevents throwing money away through either losing track of valuable data or diminishing its value
because it is not understood or trusted__

    Data is only useful insofar as we can understand what it represents, and have some assurances on its accuracy,
    completeness, consistency, etc. Metadata provides these assurances and adds valuable content to the information.
    In particular, Metadata contributes information about relationships such as who, when, and where. This
    information can be more revealing; it is the means by which Google delivers relevant content to search requests,
    it is how LinkedIn and Facebook are able to suggest new connections and friends, and how Amazon makes its product
    recommendations.

    On a more mundane level, a good Metadata Management tool takes away a lot of the laborious work in preparing and
    transforming data for analysis.

    <hr>

    ![Dilbert on Data Quality](/img/dilbert_data_quality.gif)
    [Dilbert on Data Quality](http://dilbert.com/strips/comic/2008-05-07/)