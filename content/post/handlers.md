+++
date = "2017-05-14T10:09:45+12:00"
title = "Handlers"
subtitle = "When and Where to Run Scripts"
+++

#### What are Handlers?

We use handlers to determine when a script should run.

To give a few practical examples:

- run a script which prompts the user to add an email address to a contact when they try to save a contact with no email address; 

- run a script which launches a credit card dialog when a user selects 'credit card' from 'payment methods' on a receipt;   

- run a script which imports new orders from a website when a user presses a button that says 'import';   

#### 'On Load' Handler

In the 'Hello World!' example we came accross the ```on Load``` handler.  This runs when the relevant script is first 'activated' and, once activated, runs any time that a user logs into MoneyWorks.

This script is useful for loading toolbar buttons and menu command buttons, which can be used for running other scripts.

#### Menu Command

You can install menu commands using the ```InstallMenuCommand (menuItemText, handlerNameString)``` function (usually in an ```on Load``` handler.  This is installs a menu commmand, which can then be used to call another handler.  For example:

<pre class="prettyprint lang-mwscript">
on Load
  InstallMenuCommand("Greet", "greet_handler")
end


on greet_handler // use the name of the handler to call it
  Alert("hello")
end
</pre>

#### Toolbar Icon

You can add a clcikable toolbar icon to a view or form (e.g. a transaction list / view, a name entry form, a transaction entry form) and use this to trigger a script.

#### 