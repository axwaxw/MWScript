+++
date = "2017-05-16T10:09:45+12:00"
title = "Hello World - A Closer Look"

+++

Our simple example contains some elements that are common to most, if not all MWScripts:

#### 1. The 'Meta' Constant

This is required.

<pre class="prettyprint lang-mwscript">
constant meta = "Script by YOUR NAME. http://YOUR_URL"
</pre>

You should always use it to identify the author of the script (and, ideally, their contact details) in case the script fails.

#### 2. The 'Handles'

A 'handle' determines when the code that follows it will run.  

<pre class="prettyprint lang-mwscript">
on Load
  InstallMenuCommand("Hello", "Hello")
end
</pre>

In this case, the ```on Load``` handle fires every time the script is loaded (i.e. any a user logs in).  Here, we want to install a command every time the script loads.  
___
The next handle, ```on Hello``` only runs when the 'Hello' command we installed above is clicked.

<pre class="prettyprint lang-mwscript">
on Hello
  let greeting = "Hello World"
  syslog(greeting)
  Alert(greeting)
end
</pre>

The are a number of different handles that we can use to fire our code.  For instance, a script can be triggered by our navigation to a particular view (e.g. the __Transactions__ list), a particular form (e.g. a __Purchase Order Form__), or even a control or field within a form (e.g. a __Delivery Address__ field).  

We can also target other events to trigger a script, such as a user attempting to post a transaction or a user logging out.

For the purposes of testing a script, it is useful to use the method we have used hee (i.e. install a new command using ```InstallMenuCommand()```).

#### 3. Variables

We set/assign the value of __variables__ using ``let``

<pre class="prettyprint lang-mwscript">
  let greeting = "Hello World"  
</pre>

This sets the value within the relevant 'handle'.  

__Properties__ are variables that last for the lifetime of the script.  We will see examples later.

#### 4. Alert() and syslog()

The ```Alert()``` function launches a message box - and can have various options.  

```Syslog()``` adds messages to the log and is very useful for debugging.  However, you should __remove__ (or comment-out) ```syslog()``` functions from your working scripts as it slows them down significantly.

#### 5. Comments

use ```//``` to add comments to your scripts.  Use ```/* ...  */``` for multiline comments - or comments in the middle of a line

<pre class="prettyprint lang-mwscript">
  // single-line comment
  syslog("comments are ignored")

  /*
  Multi-line..
  ..comment
  */

  let /* in-line comment */ description = "ignored"
  syslog("comments are " + description)
</pre>
