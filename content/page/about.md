+++
date = "2017-05-16T10:09:45+12:00"
title = "About"
menu = "main"

+++

hello

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<pre class="prettyprint lang-mwscript">
on Load
    InstallMenuCommand("Test GET Function", "test_xmw_get")
end

on test_xmw_get

let url = "http://requestb.in/vxe7sdvx"

let headers = CreateArray()
//let headers[0] = "Authorization: Basic " + base64encode("root:Datacentre:blah")
let headers[0] = "Authorization: Basic " + base64encode("Admin:Document:fred")
let headers[1] = "Content-Type: application/xml"
let headers[2] = "X-SPECIAL: azby"

let ch = Curl_Init()

curl_setopt(ch, CURLOPT_URL, url)
curl_setopt(ch, CURLOPT_HEADER, 1)
//curl_setopt(ch, CURLOPT_CUSTOMREQUEST, "POST")
curl_setopt(ch, CURLOPT_POST, 1)
curl_setopt(ch, CURLOPT_POSTFIELDS, "<test>test</test>")
curl_setopt(ch, CURLOPT_HTTPHEADER, headers)
let r = Curl_Exec(ch)

alert(r)

Curl_Close(ch)

end

</pre>
