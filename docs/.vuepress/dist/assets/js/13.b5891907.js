(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hadoop-auth-java-http-spnego-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-auth-java-http-spnego-examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Hadoop Auth, Java HTTP SPNEGO - Examples")]),e._v(" "),a("h2",{attrs:{id:"accessing-a-hadoop-auth-protected-url-using-a-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-a-hadoop-auth-protected-url-using-a-browser","aria-hidden":"true"}},[e._v("#")]),e._v(" Accessing a Hadoop Auth protected URL Using a browser")]),e._v(" "),a("p",[e._v("IMPORTANT: The browser must support HTTP Kerberos SPNEGO. For example, Firefox or Internet Explorer.")]),e._v(" "),a("p",[e._v("For Firefox access the low level configuration page by loading the about:config page. Then go to the network.negotiate-auth.trusted-uris preference and add the hostname or the domain of the web server that is HTTP Kerberos SPNEGO protected (if using multiple domains and hostname use comma to separate them).")]),e._v(" "),a("h2",{attrs:{id:"accessing-a-hadoop-auth-protected-url-using-curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-a-hadoop-auth-protected-url-using-curl","aria-hidden":"true"}},[e._v("#")]),e._v(" Accessing a Hadoop Auth protected URL Using curl")]),e._v(" "),a("p",[e._v("IMPORTANT: The curl version must support GSS, run curl -V.")]),e._v(" "),a("pre",[a("code",[e._v("$ curl -V\ncurl 7.19.7 (universal-apple-darwin10.0) libcurl/7.19.7 OpenSSL/0.9.8l zlib/1.2.3\nProtocols: tftp ftp telnet dict ldap http file https ftps\nFeatures: GSS-Negotiate IPv6 Largefile NTLM SSL libz\n")])]),e._v(" "),a("p",[e._v("Login to the KDC using kinit and then use curl to fetch protected URL:")]),e._v(" "),a("pre",[a("code",[e._v("$ kinit\nPlease enter the password for tucu@LOCALHOST:\n$ curl --negotiate -u : -b ~/cookiejar.txt -c ~/cookiejar.txt http://$(hostname -f):8080/hadoop-auth-examples/kerberos/who\nEnter host password for user 'tucu':\n\nHello Hadoop Auth Examples!\n")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The --negotiate option enables SPNEGO in curl.")])]),e._v(" "),a("li",[a("p",[e._v("The -u : option is required but the user ignored (the principal that has been kinit-ed is used).")])]),e._v(" "),a("li",[a("p",[e._v("The -b and -c are use to store and send HTTP Cookies.")])])]),e._v(" "),a("h2",{attrs:{id:"using-the-java-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-java-client","aria-hidden":"true"}},[e._v("#")]),e._v(" Using the Java Client")]),e._v(" "),a("p",[e._v("Use the AuthenticatedURL class to obtain an authenticated HTTP connection:")]),e._v(" "),a("pre",[a("code",[e._v('...\nURL url = new URL("http://localhost:8080/hadoop-auth/kerberos/who");\nAuthenticatedURL.Token token = new AuthenticatedURL.Token();\n...\nHttpURLConnection conn = new AuthenticatedURL().openConnection(url, token);\n...\nconn = new AuthenticatedURL().openConnection(url, token);\n...\n')])]),e._v(" "),a("h2",{attrs:{id:"building-and-running-the-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-and-running-the-examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Building and Running the Examples")]),e._v(" "),a("p",[e._v("Download Hadoop-Auth’s source code, the examples are in the src/main/examples directory.")]),e._v(" "),a("h3",{attrs:{id:"server-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Server Example:")]),e._v(" "),a("p",[e._v("Edit the hadoop-auth-examples/src/main/webapp/WEB-INF/web.xml and set the right configuration init parameters for the AuthenticationFilter definition configured for Kerberos (the right Kerberos principal and keytab file must be specified). Refer to the "),a("router-link",{attrs:{to:"/docs/hadoop-auth/Configuration.html"}},[e._v("Configuration document")]),e._v(" for details.")],1),e._v(" "),a("p",[e._v("Create the web application WAR file by running the mvn package command.")]),e._v(" "),a("p",[e._v("Deploy the WAR file in a servlet container. For example, if using Tomcat, copy the WAR file to Tomcat’s webapps/ directory.")]),e._v(" "),a("p",[e._v("Start the servlet container.")]),e._v(" "),a("h3",{attrs:{id:"accessing-the-server-using-curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-server-using-curl","aria-hidden":"true"}},[e._v("#")]),e._v(" Accessing the server using curl")]),e._v(" "),a("p",[e._v("Try accessing protected resources using curl. The protected resources are:")]),e._v(" "),a("pre",[a("code",[e._v("$ kinit\nPlease enter the password for tucu@LOCALHOST:\n\n$ curl http://localhost:8080/hadoop-auth-examples/anonymous/who\n\n$ curl http://localhost:8080/hadoop-auth-examples/simple/who?user.name=foo\n\n$ curl --negotiate -u : -b ~/cookiejar.txt -c ~/cookiejar.txt http://$(hostname -f):8080/hadoop-auth-examples/kerberos/who\n")])]),e._v(" "),a("h3",{attrs:{id:"accessing-the-server-using-the-java-client-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-server-using-the-java-client-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Accessing the server using the Java client example")]),e._v(" "),a("pre",[a("code",[e._v('$ kinit\nPlease enter the password for tucu@LOCALHOST:\n\n$ cd examples\n\n$ mvn exec:java -Durl=http://localhost:8080/hadoop-auth-examples/kerberos/who\n\n....\n\nToken value: "u=tucu,p=tucu@LOCALHOST,t=kerberos,e=1295305313146,s=sVZ1mpSnC5TKhZQE3QLN5p2DWBo="\nStatus code: 200 OK\n\nYou are: user[tucu] principal[tucu@LOCALHOST]\n\n....\n')])])])}),[],!1,null,null,null);t.default=r.exports}}]);