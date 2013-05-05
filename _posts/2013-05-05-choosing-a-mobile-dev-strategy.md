---
layout: blog_post
title: Choosing a Mobile Development Strategy
summary:
img: /img/mobile.jpg
date: May 5, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

Data is increasingly collected from mobile devices, and touch devices can make exploring information a more fluid
experience. Mobile has also become a key channel in ecommerce as it imposes less restrictions on the time and place
to access product information and recommendations that will facilitate the decision to buy.

The question then arises, what is the best way to go about build a mobile app. There are many options and the
choice is not clear cut. I will outline the pros and cons of some of these options. A summary of the main options are:

* _Mobile Web Application_ - an application built using web technologies: HTML, CSS, and JavaScript, and the various
sub-options including:
  * _Responsive Design_ vs. Separate mobile templates
  * _Single Page Application_ (SPA)


* _Native Application_ - an application built using the programming language and Software Development Kit (SDK) native
to the type of device

* _Hybrid Application_ - using a combination of web and native development. An example is an application developed
using PhoneGap (aka Apache Cordova).

* _Generated Application_ - an application developed in a non-native language and converted to a native executable.

Responsive Design

This approach constructs the HTML templates and CSS in a way that will automatically adjust to different screen sizes.
For example, a right-hand side area on a desktop screen will be positioned under the left-hand side on a phone. It
uses a feature of CSS3 called "media queries" to discover characteristics of the browser environment such as
device height, width, and resolution, and adjust the stylesheet properties accordingly.

Responsive design is typically used together with another strategy called "progressive enhancement". Progressive
enhancement uses web technologies in a layered fashion that will allow more modern browsers to access enhanced
features while providing a fallback to older browsers and devices. JavaScript libraries such as Modernizr can detect
which HTML5 and CSS3 features are supported by the client browser and conditionally execute code accordingly.

Pros:

* A single user-interface implementation can support both the desktop website and various mobile devices of different
sizes and capabilities.
* Potentially lower cost of maintenance and change as there is a single front-end code base.
* Ability to support older devices and browser versions without penalizing users with up-to-date browsers and new
phones.

Cons:

* The up-front complexity and cost of building and testing the front-end may be higher than simply building a separate user
interface for mobile and desktop. This will depend on the number of templates required based on variation of the
devices to be supported.
* The page size of the mobile site is not that much smaller than the desktop site due to the same code base, but
the impact of performance on customer attrition and sales is compounded by the slower mobile broadband speeds and
the fact that mobile users tend to exhibit less patience. http://blog.kissmetrics.com/loading-time/?wide=1
* The UI differences between mobile and desktop experiences is usually much greater than just layout and image
size. Some workflows such as authentication and payments can be achieved in a completely different way.

Single Page Application

A "single page application" uses JavaScript to build a stateful client-side application that uses AJAX to send and
receive packets of data (typically in JSON format) instead of a fully rendered HTML page. As a result, the web
application can look and behave like a native application. For example, new pages can slide into focus instead
of the momentary blank screen as a new page from the server finishes loading.

Pros:

* Applications are richer and more fluid than a traditional request-response style of application.
* Web technologies are better suited to displaying and, importantly, linking mixed content than native components.
* There is a large community of support and a large number of resources, frameworks and libraries for building web
applications, and HTML is a flexible medium for achieving custom layouts and branded designs.
* The application code can also be used to support the desktop site.
* There is a large pool of developers with skills in web technologies including HTML5, CSS, and JavaScript who can
use those skills to build mobile applications. (Although this can be somewhat overstated. See below.)

Cons:

* Application development is more complex than a traditional request-response style of application. Additional
considerations on a mobile device include memory management, modularisation, and code size.
* Developers with skills in modular, full-application JavaScript development are comparatively rare compared to
general web skills.
* Even taking into account that most smart phones use later versions Webkit, there is enough variation in screen size,
browser compatibilty and the side effects of manufacturer added "features" such as HTC Sense and Samsung TouchWiz
to make testing and debugging challenging.
