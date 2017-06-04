+++
date = "2017-05-27T10:09:45+12:00"
title = "Hello World"
subtitle = "See, it works!"

+++

As is traditional, we will start with a simple 'Hello World' example.  This script does nothing more than launch an 'alert' that says "Hello World".  

<pre class="prettyprint lang-mwscript">
constant meta = "Script by YOUR NAME. http://YOUR_URL"

// ON LOAD, INSTALL A MENU COMMAND TO LAUNCH YOUR SCRIPT

on Load
  InstallMenuCommand("Hello", "Hello")
end

// THE SCRIPT CALLED 'HELLO' WILL LAUNCH WHEN THE MENU COMMAND
// IS CLICKED

on Hello

  let greeting = "Hello World"

  syslog(greeting)
  Alert(greeting)

end
</pre>

To install, you can follow these steps:    

#### Option A:  Copy / Paste

- copy the text of the script above
- open the MWScript editor (__Show > Scripts__ or Ctrl+Shift+S)
- click __"+"__ in the bottom left corner.
- choose __Add a new script__
- name it "Hello_World"
- click __Activate__ (green button at the top of the screen) to activate the script.  

___  

#### Option B:  Download and Install

- make sure MoneyWorks is open (preferrably in the sample document, Acme Widgets)
- download the script <b><a href="/scripts/hello_world.mwxml" download>here</a></b>
- open the file
- click __Yes__ to install
- click __Close__ to close the installation dialogue
- click __Activate__ (green button at the top of the screen) to activate the script.  

___

#### Running the Script

Once installed and activated, the script adds a new 'Hello' command to the command menu.  

Click __Command > Hello__ and you will see a 'Hello World!' alert.

Open the MWScript editor at **Show > Scripts** ( or **Ctrl + Shift + S**), click on 'Log Files' and you will see that 'Hello World' has also been printed to the log file.

In the next post, we'll take a closer look at how this all works.
