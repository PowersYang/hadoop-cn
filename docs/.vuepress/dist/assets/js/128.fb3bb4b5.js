(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{328:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hadoop-yarn-ui-v2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-yarn-ui-v2"}},[e._v("#")]),e._v(" Hadoop: YARN-UI V2")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("Please make sure Hadoop is built by passing -Pyarn-ui to Maven (reference to BUILDING.txt for more details)")]),e._v(" "),r("h2",{attrs:{id:"configurations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),r("p",[e._v("In yarn-site.xml")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Configuration Property")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("yarn.webapp.ui2.enable")]),e._v(" "),r("td",[e._v("(Required) In the server side it indicates whether the new YARN-UI v2 is enabled or not. Defaults to false.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.webapp.ui2.war-file-path")]),e._v(" "),r("td",[e._v("(Optional) WAR file path for launching yarn UI2 web application. By default this is empty and YARN will lookup required war file from classpath")])])])]),e._v(" "),r("p",[e._v("Please note that, If you run YARN daemons locally in your machine for test purpose, you need the following configurations added to yarn-site.xml to enable cross origin (CORS) support.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Configuration Property")]),e._v(" "),r("th",[e._v("Value")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("yarn.timeline-service.http-cross-origin.enabled")]),e._v(" "),r("td",[e._v("true")]),e._v(" "),r("td",[e._v("Enable CORS support for Timeline Server")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.resourcemanager.webapp.cross-origin.enabled")]),e._v(" "),r("td",[e._v("true")]),e._v(" "),r("td",[e._v("Enable CORS support for Resource Manager")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.webapp.cross-origin.enabled")]),e._v(" "),r("td",[e._v("true")]),e._v(" "),r("td",[e._v("Enable CORS support for Node Manager")])])])]),e._v(" "),r("p",[e._v("Also please ensure that CORS related configurations are enabled in core-site.xml. Kindly refer "),r("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/HttpAuthentication.html"}},[e._v("here")])],1),e._v(" "),r("h2",{attrs:{id:"use-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-it"}},[e._v("#")]),e._v(" Use it")]),e._v(" "),r("p",[e._v("Open your browser, go to rm-address:8088/ui2 and try it!")]),e._v(" "),r("h2",{attrs:{id:"notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),r("p",[e._v("This UI framework is verified under security environment as well.")])])}),[],!1,null,null,null);t.default=o.exports}}]);