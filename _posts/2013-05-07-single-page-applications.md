---
layout: blog_post
title: Choosing a Mobile Development Strategy III - Single Page Applications
summary:
img: /img/html5.png
date: May 7, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

A "single page application" uses JavaScript to build a stateful client-side application that uses AJAX to send and
receive packets of data (typically in JSON format) instead of a fully rendered HTML page. As a result, the web
application can look and behave like a native application. For example, new pages can slide into focus instead
of the momentary blank screen as a new page from the server finishes loading.

The client-side architecture for a mobile application may look like the following:

![Mobile Architecture](/img/mobile_architecture.jpg)

<h4>Pros:</h4>
* Applications are richer and more fluid than a traditional request-response style of application.
* Web technologies are better suited to displaying and, importantly, linking mixed content than native components.
* There is a large community of support and a large number of resources, frameworks and libraries for building web
applications, and HTML is a flexible medium for achieving custom layouts and branded designs.
* The application code can also be used to support the desktop site.
* There is a large pool of developers with skills in web technologies including HTML5, CSS, and JavaScript who can
use those skills to build mobile applications. (Although this can be somewhat overstated. See below.)

<h4>Cons:</h4>
* Application development is more complex than a traditional request-response style of application. Additional
considerations on a mobile device include memory management, modularisation, and code size.
* Developers with skills in modular, full-application JavaScript development are comparatively rare compared to
general web skills.
* Even taking into account that most smart phones use later versions Webkit, there is enough variation in screen size,
browser compatibilty and the side effects of manufacturer-added "features" such as HTC Sense and Samsung TouchWiz
to make testing and debugging challenging.
