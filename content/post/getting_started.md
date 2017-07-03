+++
date = "2017-05-14T10:09:45+12:00"
title = "Getting Started"
subtitle = "Getting Started and Getting Help"
+++

{{< vimeo 146022717 >}}

#### Safety First

Although the examples given here are generally benign, I recommend that you start to script using the sample file (Acme Widgets) that ships with all versions of MoneyWorks.  Most of the example here were written against and will run on the sample data.  

Once you have the hang of MWScript, you can easily deploy scripts to your working documents.

#### Script Editor & Log File

You will find the script editor in MoneyWorks under **Show > Scripts** (or or Ctrl+Shift+S).   Note the **Log File** icon in the top toolbar of the script editor.  This is where ```syslog()``` outputs are displayed - useful for debugging.  I recommend that you keep the log file open when running the examples.  

Please note, however, that for live scripts you should delete (or comment-out) all ```syslog()``` functions - they will really slow down your scripts.

#### Help

MoneyWorks ships with an encyclopaedic user manual (available in pdf format under **Help**).  Here you will find comprehensive documentation on MWScript, MoneyWorks' many built-in functions, data structure etc.  Once you start composing your own scripts, you will refer to these often.

Help is also available under the **Help** menu (duh!).  For contextual assistance, try highlightling text within the script editor and selecting **Help > Help on this...**

<pre class="prettyprint lang-mwscript" id="code">

constant meta = "GitHub Fetch - xmw.io"

on load

  let result = Ask("Fetch GitHub File", "text", "File", "")  

  if result["cancel"]       
    return 1
  endif
  
  let file_name = result["File"]  

  let url = "https://api.github.com/repos/mwscript/xmw/contents/" + file_name

// SET HEADER INFO (IF REQUIRED)

  let headers = CreateArray()
  let headers[0] = "User-Agent: mwscript"  // https://developer.github.com/v3/#user-agent-required
  let headers[01] = "Accept: application/vnd.github.VERSION.raw"  // 

  let c = Curl_Init()


// SET CURL OPTIONS AND EXECUTE REQUEST

  curl_setopt(c, CURLOPT_URL, url)
  curl_setopt(c, CURLOPT_HEADER, 0)  // SET TO 0 TO AVOID RETURNING HEADER INFO
  curl_setopt(c, CURLOPT_HTTPHEADER, headers)
  let r = Curl_Exec(c)
  Curl_Close(c)


// PARSE THE JSON RESPONSE

  let xml = ""
  let xml = xml + "<?xml version=\"1.0\"?>"
  let xml = xml + "<moneyworks>"
  let xml = xml + "<install>"
  let xml = xml + "<script enable=\"false\" name=\"" + "hand" + "\"><![CDATA["  
  let xml = xml + r
  let xml = xml + "]]></script>"
  let xml = xml + "</install>"
  let xml = xml + "</moneyworks>"

// SAVE XML FILE

  let fd = File_Open(file_name + ".mwxml", "w") // creates in ~/Desktop/
  if fd <> NULL
    File_Write(fd, xml)
    File_Close(fd)
 endif

end

</pre>

