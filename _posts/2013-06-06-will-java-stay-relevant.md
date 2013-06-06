---
layout: blog_post
title: Will Java Stay Relevant?
summary: Java turned 18 last month and the language continues to slowly evolve. Interest remains high for a number of likely reasons.
img: /img/java_phoenix.jpg
date: June 6, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

Java has been around now for 18 years since its first public release in May 1995. Since around 1999, Java has been a mainstay in enterprise development and has consistently ranked highly in popularity whether by vendor adoption, job postings, open source projects, forum postings, or published indexes such as the [TIOBE index](http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html). Its current ranking on the index is second. Its popularity has been due to a number of factors:

* Timing - Java emerged at the same time as object-oriented and web development was becoming mainstream for business applications.
* Java is a simpler object-oriented language than alternatives such as C++, which, for example, requires explicit memory management.
* Java runs on multiple operating systems, which coincided with the popularity of using Unix-based servers such as Solaris and Linux for web applications.
* The Virtual Machine as a design for abstracting the application programming interface away from the specifics of the underlying machine has proved to be very successful in keeping up with processor design while providing backwards compatibility.
* Java was picked up by major vendors such as IBM, which at the time was shifting away from a "not invented here" approach at the same time as Sun, Java's creator, was shifting to open standards and open source.

As with many trends, timing is everything.

The question is whether Java will continue to be popular for the foreseeable future. Some of the reasons that might explain why interest in Java remains high are:

* __Mobile__. According to the [latest figures from IDC](http://www.idc.com/getdoc.jsp?containerId=prUS24108913), Android accounts for 75% of smartphone shipments. Android is based on Java.
* __Big Data__. Hadoop and related tools are based on Java.
* __Open Source__. Java has been used heavily in open source projects, perhaps due in part to the availability of open source development tools such as Eclipse, JUnit, and a multitude of application frameworks; and also from not being tied to a single operating system. Open source has also seen increasing acceptance within enterprises and has long been a part of many commercial products.

There is a visible trend in enterprise software shifting away from big license fees and closed source products to revenue models based on services and add-on products on top of open source projects. According to the latest issue (May 2013) of the Thoughtworks Technology Radar:

> "Big enterprise solutions often obstruct effective delivery due to their accumulated bloat, cumbersome licensing restrictions, and feature sets that are driven by checklists and imaginary requirements far removed from the realities of most development teams."

Likewise, use of Java in the enterprise has often suffered from a tendency to overengineer solutions to accommodate imagined requirements for flexibility. This is not an inherent weakness of the language nor is it limited to Java. The same tendency occurred with .NET.

Java is showing its age. There has been increasing adoption of dynamic languages over the last five years in an attempt to reduce the amount of code and ceremony required to deliver typical business applications. For example, Ruby paired with the Rails framework has enabled web applications to be developed in less time, and Python is heavily used by the scientific and data analysis communities. There has also been growing interest in alternative languages for the Java Virtual Machine (JVM) such as Scala, Clojure, and JRuby. These languages attempt to deliver the best of both worlds:

* Increased productivity from new features such as dynamic typing or type inference, functional programming, and making it easier to develop reliable concurrent applications required for cloud-scale computing.
* The ability to run those applications in existing operational environments using current infrastructure.

In fact, many people see the future of Java as really the future of the JVM.

Java continues to evolve. Its current major version is 7, with version 8 expected next year. A key feature will be language level support for lambda expressions. A lambda expression is an anonymous function, which is convenient to pass as an argument to a higher-order function. They can be used to great effect to reduce the amount of code for many common operations such as transforming data structures, recursive operations, and asynchronous callbacks.

Therefore, one argument is that while new languages enable early adopters to implement new techniques for niche use cases and for everyone else to experiment and learn new skills, once the most useful of these features are adopted into Java then the mainstream community can safely apply them while ensuring backwards compatibiity with legacy code.

The counter argument is that evolution of the Java language moves very slowly and even when Java 8 is finally released, it will probably take many more years before most enterprises are using it. I suspect many enterprises are still using Java 6 with a good number still on version 5.

I think the middle path that attempts to blend the new with the proven adds the most value. For example, I have been introducing Scala to implement specific services where I can benefit from more concise and expressive code and relying on its ability to interoperate alongside Java. View and controller layers have, to a large extent, been moved to the client side and implemented in JavaScript to enable richer and more responsive user interfaces. Web services, domain models, and data persistence layers are implemented in Java. The benefit of using Java for the API and integration layers is in maintaining familiarity for the components that are more likely to be exposed to other development teams. I can also select from the large number of mature libraries that are available for Java.

Interestingly, I tend to reach for Scala to prototype a code solution where once I would have used Python for its brevity and readability, i.e. to write "executable psuedocode". I have also been using the Play 2 Framework as I am liking its ability to incrementally recompile on the fly when I refresh the browser, and to easily mix Java and Scala classes in the same project.

I highly recommend learning a dynamic language, e.g. JavaScript or Python, and a functional language, e.g. Scala, Clojure, Haskell, or JavaScript. It opens new ways of thinking that will improve the code you write in any language and there are techniques that can be applied irrespective of the constraints of your primary programming language. [I came across](http://emergingtech.chariotsolutions.com/2013/05/phillyete-screencast-14-patterns-and-functional-programming-michael-bevilacqua-linn/) this great quote recently:

> New ideas go through stages of acceptance, both from within and without. From within, the sequence moves from "barely seeing" a pattern several times, then noting it but not perceiving its "cosmic" significance, then using it operationally in several areas, then comes a "grand rotation" in which the pattern becomes the center of a new way of thinking, __and finally, it turns into the same kind of inflexible religion that it originally broke away from.__<br>
> <small>_Alan Kay - "The Early History of Smalltalk", 1993 ACM._</small>

To answer the original question, I believe that Java still has its place although we are more likely to see a mix of languages used in practice. The more important concern is that we, as developers, stay relevant, which means continually learning and staying open to new ideas.

I can recommend the following resources, which I have found helpful:

* [Scala for the Impatient](http://www.amazon.com/Scala-Impatient-Cay-S-Horstmann/dp/0321774094)
* [Functional JavaScript](http://shop.oreilly.com/product/0636920028857.do)
* [Patterns and Functional Programming](http://emergingtech.chariotsolutions.com/2013/05/phillyete-screencast-14-patterns-and-functional-programming-michael-bevilacqua-linn/)
