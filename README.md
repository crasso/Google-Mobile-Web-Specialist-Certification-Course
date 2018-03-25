# Google-Mobile-Web-Specialist-Certification-Course

Course project related to the Google Mobile Web Specialist Scholarship at Udacity

----------------------------
-------HOW TO SET UP--------
----------------------------

" In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.
In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

With your server running, visit the site: http://localhost:8000, and look around for a bit to see what the current experience looks like. "

  Taken from the original repo: https://github.com/udacity/mws-restaurant-stage-1

----------------------------
---PROJECT SPECIFICATIONS---
----------------------------

***Responsive Design***

CRITERIA

Is the site UI compatible with a range of display sizes?

MEETS SPECIFICATIONS

All content is responsive and displays on a range of display sizes.

Content should make use of available screen real estate and should display correctly at all screen sizes.

An image's associated title and text renders next to the image in all viewport sizes.

CRITERIA

Are images responsive?

MEETS SPECIFICATIONS

Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.

CRITERIA

Are application elements visible and usable in all viewports?

MEETS SPECIFICATIONS

On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

***Accessibility***

CRITERIA

Are images accessible?

MEETS SPECIFICATIONS

All content-related images include appropriate alternate text that clearly describes the content of the image.

CRITERIA

Is focus used appropriately to allow easy navigation of the site?

MEETS SPECIFICATIONS

Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

CRITERIA

Are site elements defined semantically?

MEETS SPECIFICATIONS

Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

***Offline Availability***

CRITERIA

Are pages that have been visited available offline?

MEETS SPECIFICATIONS

When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.
