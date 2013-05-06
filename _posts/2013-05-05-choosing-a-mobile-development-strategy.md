---
layout: blog_post
title: Choosing a Mobile Development Strategy I
summary:
img: /img/mobile.jpg
date: May 7, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

Data originating from mobile devices is growing, and touch devices make exploring information a more fluid
experience. Mobile has also become a key channel in ecommerce as it imposes less restrictions on the time and place
to access product information and recommendations and therefore closes the gap between the decision to buy and
the sale. Mobile strategies must be taken into account when formulating information management strategies
and vice versa.

The question then arises, what is the optimum strategy and set of technologies for developing mobile capabilitiy.
Unfortunately, the
choice is not clear cut. Over the next few posts, I will outline the pros and cons of each of the major options.

<ul>
  <li>
    Mobile Web Application - an application built using web technologies: HTML, CSS, and JavaScript. There are
    multiple alternative architectures for a mobile web application:
    <ul>
      <li><p><a href="/2013/05/07/responsive-design/">Responsive Design</a> as an alternative to separate mobile templates</p></li>
      <li><p><a href="/2013/05/07/single-page-applications/">Single Page Applications</a> (SPA)</p></li>
    </ul>
  </li>
  <li>
    <p>
      <a href="#">Native Applications</a> - an application developed using the programming language and Software Development Kit (SDK) that is native
      to the type of device.
    </p>
  </li>
  <li>
    <p>
      <a href="#">Hybrid Applications</a> - using a combination of web and native development. An example is an application developed
      using PhoneGap (aka Apache Cordova).
    </p>
  </li>
  <li>
    <p>
      <a href="#">Generated Applications and Cross-Platform Runtimes</a> - an application developed in a non-native language and converted to a native executable.
    </p>
  </li>
</ul>

<h4>Recommendations</h4>

There are no great options. The choice is dependent on the nature of the application,
patterns of usage, the skills of the development team, budget, customer expectations, etc. As a general guide, I will
make the following observations:

* The touch performance of a web application is not as smooth as a native application. Whether this will be an issue
depends on the design of the user interface. For example, an interface that employs an infinite scrolling list
will show a lag compared to the native version.
* The cost of native development is higher when developing for multiple platforms. Releasing to both iPhone and
Android at the same time requires parallel development teams with architectural oversight across both.
* At least a thin native layer is required to access phone capabilities such as the camera.
* An application with a lot of textual and hyperlinked content is best suited to an HTML application.
* Applications with a lot of visual effects, for example games, are better suited to native development. (Although
there are some pretty good HTML5 based games, it all depends on the level of realism that is being sought.)
* People tend to prefer web apps for occassional use scenarios. An example might be finding gate information at an
airport. However, customers may move to an app (installed from an app store) if there is a recurring use case or a
compelling feature such as the ability to rapidly change a booking in the event of a delayed or cancelled flight.

I believe that over time, as mobile browsers improve performance and access to device APIs, mobile web apps will
become more compelling. Web content and services can be more easily found and linked. The Android API defines an
Activity, which can be called from another application, with the appropriate permissions, to enable a larger
workflow. However, web development is further along this path, is not platform dependent, and the same code can
be delivered to all devices.
