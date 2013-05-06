---
layout: blog_post
title: Choosing a Mobile Development Strategy II - Responsive Design
summary:
img: /img/responsive-design.png
date: May 7, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

This approach constructs the HTML templates and CSS in a way that will automatically adjust to different screen sizes.
For example, a right-hand side area on a desktop screen will be positioned under the left-hand side on a phone. It
uses a feature of CSS3 called "media queries" to discover characteristics of the browser environment such as
device height, width, and resolution, and adjust the stylesheet properties accordingly.

Responsive design is typically used together with another strategy called "progressive enhancement". Progressive
enhancement uses web technologies in a layered fashion that will allow more modern browsers to access enhanced
features while providing a fallback to older browsers and devices. JavaScript libraries such as Modernizr can detect
which HTML5 and CSS3 features are supported by the client browser and conditionally execute code accordingly.

<h4>Pros:</h4>
* A single user-interface implementation can support both the desktop website and various mobile devices of different
sizes and capabilities.
* Potentially lower cost of maintenance and change as there is a single front-end code base.
* Ability to support older devices and browser versions without penalizing users with up-to-date browsers and new
phones.

<h4>Cons:</h4>
* The up-front complexity and cost of building and testing the front-end may be higher than simply building a separate user
interface for mobile and desktop. This will depend on the number of templates required based on variation of the
devices to be supported.
* The page size of the mobile site is not that much smaller than the desktop site due to the same code base, but
the <a href="http://blog.kissmetrics.com/loading-time/?wide=1" target="_blank">impact of performance on customer attrition and sales</a> is compounded by the slower mobile broadband speeds and
the fact that mobile users tend to exhibit less patience.
* The UI differences between mobile and desktop experiences is usually much greater than just layout and image
size. Some workflows such as authentication and payments can be achieved in a completely different way.
