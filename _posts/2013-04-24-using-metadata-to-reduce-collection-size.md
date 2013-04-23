---
layout: blog_post
title: Using metadata to reduce collection size in document-oriented databases
summary: MongoDB stores all field names in every document to allow for its "schemaless" design.
img: /img/mongodb-leaf.png
date: April 24, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

A strategy to reduce the size of collections in document-oriented databases is to shorten the field
names. MongoDB stores all field names in every document to allow for its "schemaless" design. In very large
collections such as used at Foursquare, field names are
shortened to a single character. For example, the following document:

{% highlight json %}
{
  "_id": "1D004A27A6673A10",
  "event_name": "New York Yankees vs. Toronto Blue Jays",
  "event_datetime": "2013-04-25T19:05:00Z",
  "venue": {
    "venue_id": 237572,
    "venue_name": "Yankee Stadium",
    "address": "1 East 161st Street, Bronx",
    "state": "NY",
    "zip": 10451
  }
}
{% endhighlight %}

would be shortened to:

{% highlight json %}
{
  "_id": "1D004A27A6673A10",
  "n": "New York Yankees vs. Toronto Blue Jays",
  "d": "2013-04-25T19:05:00Z",
  "v": {
    "i": 237572,
    "n": "Yankee Stadium",
    "a": "1 East 161st Street, Bronx",
    "s": "NY",
    "z": 10451
  }
}
{% endhighlight %}

I do not recommend this if storage is not an issue. Shorter field names do not reduce the size of indexes. With the
diminishing cost of storage; descriptive, human-readable field names make the database easier to develop with, query,
and to troubleshoot. Nevertheless, storage, taking into account replication, can be an issue for very large collections.
Even using shorter names, such as "vid" for "venue_id" can lead to confusion and errors. Sometimes the meaning and
context of full english names cannot be adequately expressed in a name. For example, which fields are mandatory
and confirming that "event_datetime" is indeed the time of the event and not the time when tickets go on sale.

In either scenario, having metadata readily at hand can aid development and reduce errors. One strategy is to store
the metadata in the same database. This may not always be the best strategy. There are benefits to creating a common
registry of metadata that will be
available to different stakeholders, such as testers, product management, and data stewards, and which can support
development on multiple platforms as is typical in most organizations. Where to keep the metadata should
take these considerations into account.
