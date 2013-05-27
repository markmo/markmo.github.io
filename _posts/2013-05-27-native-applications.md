---
layout: blog_post
title: Choosing a Mobile Development Strategy IV - Native Applications
summary: Native apps are still faster and provide access to more hardware features than mobile web apps.
img: /img/mobile-apps.jpg
date: May 27, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

Native applications are developed using the software development kits (SDK) provided by the platform makers:

* iOS for Apple devices. iOS uses the Objective-C programming language.
* Android, which uses the Java programming language.
* Windows RT and the Metro user interface for Windows Phone 8. Windows RT is a variant
of the Windows 8 operating system. Applications can be developed in C++ or a .NET managed language such as C#.

I'm skipping over some of the lesser used platforms such as Blackberry.

The native SDK provides an application programming interface (API) to more hardware features
than a Web app, which can only use the features accessible to the built-in web browser.

The distribution of native applications is controlled through App Stores, although Android is more open than
Apple in this respect. The benefit of the App Stores is that applications are reviewed for malware and
quality control to ensure that they will not interfere with other apps and normal phone operation. The stores
also provide a mechanism to find apps and read reviews, although this functionality could be much improved.

There are two key questions, which can be separated:

1. How would the target users most likely find the app and expect to use it?
2. Do the application usage scenarios require access to particular hardware features and require a design
that puts a heavier load on graphics processing?

The answer to the first question will determine if the application should be distributed through an App Store,
which can be achieved both for a native application or by packaging a web application within a container app such as
PhoneGap. The answer to the second question determines the application design and if it is best
achieved using a native SDK.

As with any technology, the business requirements and expected usage scenarios drive the architecture and
implementation strategy. The following outlines some of the key pros and cons for native development.

<h4>Pros:</h4>
* The application can access built-in hardware features such as the camera, local secure data storage, and
the accelerometer
* Performance is faster resulting in smoother animations and transitions such as page slides and scrolling
through long lists of mixed content
* The look and feel is more consistent with built-in applications on the device, raising the overall perception
of quality

<h4>Cons:</h4>
* Each type of device (platform), i.e. Apple, Android, Windows Phone, uses its own unique software development kit
requiring different programming language skills, frameworks and libraries. Therefore the time and cost to deploy an
application to multiple platforms is multiplied by the number of platforms. This cost is increased further as a result of the
additional maintenance.
* Each platform also requires its own set of tools. iOS applications can only be deployed from a Mac. Windows
Phone development requires Visual Studio, which only runs on Windows.<sup><a href="#footnote1">1</a></sup>
It is not uncommon to see senior mobile developers with 3 or 4 monitors on their desk. I would have Xcode
running on one monitor,
WebStorm (an excellent IDE for JavaScript development) on another, Eclipse on the third running Selenium
tests in the background, and finally Visual Studio since our server application was developed
in .NET. These requirements can be a real challenge for IT departments and locked-down organizations
equipped only for supporting an homogeneous environment.
* The application must be downloaded and installed before it can be used. (Although this can be recast as a pro in terms of
how the app stores are used to find apps. It depends on how your users are likely to find the app and how frequently
they are likely to use it.)

<hr>

<div id="footnote1" style="margin-left: 20px; font-size: 85%; color: #999;">
<sup>1</sup>Android development can be done on either Windows or Mac using Eclipse or the <a href="http://developer.android.com/sdk/installing/studio.html" target="_blank">recently announced Android Studio</a>,
which is based on IntelliJ IDEA. JetBrains also make AppCode, an IDE for iOS development. Combined with IntelliJ
for Android and Web development, use of JetBrains' tools can reduce some of the complexity in learning multiple
IDEs. (BTW I'm not sponsored, I just think they make good tools.)
</div>
