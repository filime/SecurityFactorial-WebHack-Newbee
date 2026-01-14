# S! WebHack Tutorial Lecture
## TL;DR
This lecture is made for SecurityFactorial by filime.
Author : filime (JeongHo Kim, Sejong Univ)
Contact : filime

## Table of Contents
### Background (OT)
+ Why study we Web hacking?
+ Relationship between web hacking and development

### 1 ~ 2W - Baby-Step (To know web architecture)
+ L1 - What is html,js,css? / simple practice
    + HTML
    + Javascript
        + let, var, const
        + -,+,*,/
        + function
        + DOM
        + Eventhandler
    + Cascading Style Sheets
        + simple styling
        + selector
+ L2 - Developing simple ur own web site / simple practice
    + PHP 
    + Mysql
    + Apache
    + (Linux)

### 3 ~ 4W - Become a newbee hacker (Client-Side)
+ Easy Client-Side hacking technic
    + L3 - XSS (Cross-Site-Scripting)
        + What is XSS?
        + How to find Attack vectors
        + Takeover victim's cookies(session)
        + XSS bypass technic    
            + replace string bypass
            + string detection bypass
            + input value bypass
            + hidden tag bypass
    + L4 - CSRF (Client-Side Request Forgery)
        + What is CSRF?
        + practice
    + L5 - XS-leak (Cross-Site leak or search)
        + What is XS-leak?
        + XS-leak with status code
        + XS-leak with ... # as you want

5 ~ 6W - Become a newbee hacker (Server-Side)
+ Easy Server-Side hacking technic
    + L6 - SQL Injection (Mysql) - with LoS
        + What is SQLi?
        + Logical based SQL Injection (1==1)
        + Union based SQL Injection (Union)
        + Blind based SQL Injection (substr, like and etc...)
    + L7 - PHP Tricky Trick
        + Type juggling
        + The sequence of $_(GET,POST,COOKIE,REQUST)
        + Difference between header and exit
    + L8 - Analysis module or CVE
        + Prob1 - CVE-2025-6985
            + No poc code, Solve to analysis github commit and code - REF: https://github.com/lxml/lxml/commit/89e7aad6e7ff9ecd88678ff25f885988b184b26e / https://dreamhack.io/wargame/challenges/1831
        + Prob2 - CVE-2022-29217
            + Yes poc code(well-known cve), Solve to analysis how to use poc code - REF: https://www.vicarius.io/vsociety/posts/risky-algorithms-algorithm-confusion-in-pyjwt-cve-2022-29217

7 ~ 8W - Become a verified S! Hacker
+ Solving filime's dungeon
    + TOW - Server-Side
    + WHD - Client-Side
