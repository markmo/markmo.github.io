---
layout: blog_post
title: Thinking is the best way to travel
summary: Agile is not a panacea. We must be agile in how we apply agile methods.
img: /img/burndown.png
date: May 14, 2013
author: Mark Moloney
omit_img: false
omit_title: false
---

The line is borrowed from a 1968 song by the Moody Blues. I was reflecting on the applicability of agile practices to
data projects and how agile methodologies have become so mainstream. I was reminded that agile is not a panacea.

Some of the challenges I have encountered are:

__Operating within a contractual model that is not agile__

Agile thinking is not limited to the development team. All parts of the organization must be on board. The
contractual delivery model will heaviliy influence the development methodology. While it is still valid to adopt agile
practices within predetermined increments, it does seriously constrain how risk is managed. For example, the supplier
will try to enforce early scope definition and subsequent change control, and the customer will tend to define
excess scope and delay sign-off to protect against likely change. Both behaviours are rational attempts to manage
risk within the respective straight-jackets. However, the behaviour taken as a whole, is irrational because it
does not deliver the lowest risk at the lowest cost. Upfront work is required to educate, negotiate, and identify
untenable positions before commitments are made.

__Preventing the build-up of technical debt__

The focus on business value to product owners and users does help to counter overengineering. On the negative
side however, business features tend to consistently get higher priority than requirements to refactor existing work to
accommodate new features with the effect of creating repetitive blocks of code. Over time, the impact of these decisions
accumulate to become like excess cholesterol in the system, either slowing innovation or requiring the
equivalent of open heart surgery at some future date. One way to address this risk is to ensure the
CTO or equivalent role is a key active stakeholder of the system, or to establish a Technology Council that can
represent the technology governance concerns, and agree upfront a sensible ratio of architectural
requirements against business needs appropriate to the expected life of the system.

__Using the same measures for KPIs as for learning__

I support the notion of collecting data to measure the effectiveness of processes rather than rely solely on
personal biases. The problem arises when measures are used as KPIs before
learning has occurred. Once a measure is used as a KPI, the behaviour will focus on meeting the KPI, and its
correlation to consistently better outcomes will not be clear. A simple example is the burndown
chart. Project managers like to see a clean burndown where actual effort matches expected effort. If we reward
or punish deviations too early then valuable information about natural pace or the impact of process improvement
efforts is lost, replaced by increased conservatism to fit the line. I prefer a system in
which KPIs are based on overall outcomes such as customer satisfaction, profitability, and uptime instead of
getting too granular.


__Not having an overall plan__

Being agile does not make having an overall project plan and architectural design redundant as long as the plan is
not expected to be written in stone. An effective agile process is enabled through having an architectural design
to determine how work can be subdivided into teams to maximize parallel activity. An agile process doesn't reduce
the time it takes to do productive work. It can reduce overall timeframes by removing barriers to communication that
would otherwise block work getting done, or by more efficiently distributing the work across available participants.
A high-level plan helps to efficiently distribute the work. Its not that useful if it attempts to break every activity
into detailed tasks because at that point it has crossed over from being a planning tool to being a prediction tool
and there will be too little data at that stage for the predictions to be meaningful.

<hr>

The reason the agile movement has become so popular is, I believe, because it more accurately reflects the reality
of how systems get built. It doesn't mean that earlier techniques are not useful; they had limitations, which agile
processes are attempting to address by improving the quality of interaction between people in the process and
expecting change instead of a mechanistic worldview. With this in mind, we should be careful not to apply agile
processes rigidly with the expectation that projects will somehow be faster and cheaper just because of the process.
Thinking is the best strategy; connecting observation to learning and action as an ongoing cycle and being prepared
to question the status quo.
