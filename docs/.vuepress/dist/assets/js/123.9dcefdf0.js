(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{325:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"hadoop-yarn-introduction-to-the-web-services-rest-api’s"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-yarn-introduction-to-the-web-services-rest-api’s"}},[e._v("#")]),e._v(" Hadoop YARN - Introduction to the web services REST API’s")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The Hadoop YARN web service REST APIs are a set of URI resources that give access to the cluster, nodes, applications, and application historical information. The URI resources are grouped into APIs based on the type of information returned. Some URI resources return collections while others return singletons.")]),e._v(" "),n("h2",{attrs:{id:"uri’s"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uri’s"}},[e._v("#")]),e._v(" URI’s")]),e._v(" "),n("p",[e._v("The URIs for the REST-based Web services have the following syntax:")]),e._v(" "),n("pre",[n("code",[e._v("  http://{http address of service}/ws/{version}/{resourcepath}\n")])]),e._v(" "),n("p",[e._v("The elements in this syntax are as follows:")]),e._v(" "),n("pre",[n("code",[e._v("  {http address of service} - The http address of the service to get information about. \n                              Currently supported are the ResourceManager, NodeManager, \n                              MapReduce application master, and history server.\n  {version} - The version of the APIs. In this release, the version is v1.\n  {resourcepath} - A path that defines a singleton resource or a collection of resources. \n")])]),e._v(" "),n("h2",{attrs:{id:"http-requests"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-requests"}},[e._v("#")]),e._v(" HTTP Requests")]),e._v(" "),n("p",[e._v("To invoke a REST API, your application calls an HTTP operation on the URI associated with a resource.")]),e._v(" "),n("h3",{attrs:{id:"summary-of-http-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary-of-http-operations"}},[e._v("#")]),e._v(" Summary of HTTP operations")]),e._v(" "),n("p",[e._v("Currently only GET is supported. It retrieves information about the resource specified.")]),e._v(" "),n("h3",{attrs:{id:"security"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),n("p",[e._v("The web service REST API’s go through the same security as the web UI. If your cluster adminstrators have filters enabled you must authenticate via the mechanism they specified.")]),e._v(" "),n("h3",{attrs:{id:"headers-supported"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#headers-supported"}},[e._v("#")]),e._v(" Headers Supported")]),e._v(" "),n("ul",[n("li",[e._v("Accept\n"),n("ul",[n("li",[e._v("Accept-Encoding")])])])]),e._v(" "),n("p",[e._v("Currently the only fields used in the header is Accept and Accept-Encoding. Accept currently supports XML and JSON for the response type you accept. Accept-Encoding currently supports only gzip format and will return gzip compressed output if this is specified, otherwise output is uncompressed. All other header fields are ignored.")]),e._v(" "),n("h2",{attrs:{id:"http-responses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-responses"}},[e._v("#")]),e._v(" HTTP Responses")]),e._v(" "),n("p",[e._v("The next few sections describe some of the syntax and other details of the HTTP Responses of the web service REST APIs.")]),e._v(" "),n("h3",{attrs:{id:"compression"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),n("p",[e._v("This release supports gzip compression if you specify gzip in the Accept-Encoding header of the HTTP request (Accept-Encoding: gzip).")]),e._v(" "),n("h3",{attrs:{id:"response-formats"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-formats"}},[e._v("#")]),e._v(" Response Formats")]),e._v(" "),n("p",[e._v("This release of the web service REST APIs supports responses in JSON and XML formats. JSON is the default. To set the response format, you can specify the format in the Accept header of the HTTP request.")]),e._v(" "),n("p",[e._v("As specified in HTTP Response Codes, the response body can contain the data that represents the resource or an error message. In the case of success, the response body is in the selected format, either JSON or XML. In the case of error, the resonse body is in either JSON or XML based on the format requested. The Content-Type header of the response contains the format requested. If the application requests an unsupported format, the response status code is 500. Note that the order of the fields within response body is not specified and might change. Also, additional fields might be added to a response body. Therefore, your applications should use parsing routines that can extract data from a response body in any order.")]),e._v(" "),n("h3",{attrs:{id:"response-errors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-errors"}},[e._v("#")]),e._v(" Response Errors")]),e._v(" "),n("p",[e._v("After calling an HTTP request, an application should check the response status code to verify success or detect an error. If the response status code indicates an error, the response body contains an error message. The first field is the exception type, currently only RemoteException is returned. The following table lists the items within the RemoteException error message:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Item")]),e._v(" "),n("th",[e._v("Data Type")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("exception")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("Exception type")])]),e._v(" "),n("tr",[n("td",[e._v("javaClassName")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("Java class name of exception")])]),e._v(" "),n("tr",[n("td",[e._v("message")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("Detailed message of exception")])])])]),e._v(" "),n("h3",{attrs:{id:"response-examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-examples"}},[e._v("#")]),e._v(" Response Examples")]),e._v(" "),n("h4",{attrs:{id:"json-response-with-single-resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-response-with-single-resource"}},[e._v("#")]),e._v(" JSON response with single resource")]),e._v(" "),n("p",[e._v("_1324057493980_0001HTTP Request: GET "),n("a",{attrs:{href:"http://rmhost.domain:8088/ws/v1/cluster/apps/application",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://rmhost.domain:8088/ws/v1/cluster/apps/application"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Response Status Line: HTTP/1.1 200 OK")]),e._v(" "),n("p",[e._v("Response Header:")]),e._v(" "),n("pre",[n("code",[e._v("  HTTP/1.1 200 OK\n  Content-Type: application/json\n  Transfer-Encoding: chunked\n  Server: Jetty(6.1.26)\n")])]),e._v(" "),n("p",[e._v("Response Body:")]),e._v(" "),n("pre",[n("code",[e._v('{\n  app":\n  {\n    "id":"application_1324057493980_0001",\n    "user":"user1",\n    "name":"",\n    "queue":"default",\n    "state":"ACCEPTED",\n    "finalStatus":"UNDEFINED",\n    "progress":0,\n    "trackingUI":"UNASSIGNED",\n    "diagnostics":"",\n    "clusterId":1324057493980,\n    "startedTime":1324057495921,\n    "finishedTime":0,\n    "elapsedTime":2063,\n    "amContainerLogs":"http:\\/\\/amNM:2\\/node\\/containerlogs\\/container_1324057493980_0001_01_000001",\n    "amHostHttpAddress":"amNM:2"\n  }\n}\n')])]),e._v(" "),n("h4",{attrs:{id:"json-response-with-error-response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-response-with-error-response"}},[e._v("#")]),e._v(" JSON response with Error response")]),e._v(" "),n("p",[e._v("Here we request information about an application that doesn’t exist yet.")]),e._v(" "),n("p",[e._v("_1324057493980_9999HTTP Request: GET "),n("a",{attrs:{href:"http://rmhost.domain:8088/ws/v1/cluster/apps/application",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://rmhost.domain:8088/ws/v1/cluster/apps/application"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Response Status Line: HTTP/1.1 404 Not Found")]),e._v(" "),n("p",[e._v("Response Header:")]),e._v(" "),n("pre",[n("code",[e._v("  HTTP/1.1 404 Not Found\n  Content-Type: application/json\n  Transfer-Encoding: chunked\n  Server: Jetty(6.1.26)\n")])]),e._v(" "),n("p",[e._v("Response Body:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "RemoteException" : {\n      "javaClassName" : "org.apache.hadoop.yarn.webapp.NotFoundException",\n      "exception" : "NotFoundException",\n      "message" : "java.lang.Exception: app with id: application_1324057493980_9999 not found"\n   }\n}\n')])]),e._v(" "),n("h2",{attrs:{id:"sample-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sample-usage"}},[e._v("#")]),e._v(" Sample Usage")]),e._v(" "),n("p",[e._v("You can use any number of ways/languages to use the web services REST API’s. This example uses the curl command line interface to do the REST GET calls.")]),e._v(" "),n("p",[e._v("In this example, a user submits a MapReduce application to the ResourceManager using a command like:")]),e._v(" "),n("pre",[n("code",[e._v("  hadoop jar hadoop-mapreduce-test.jar sleep -Dmapred.job.queue.name=a1 -m 1 -r 1 -rt 1200000 -mt 20\n")])]),e._v(" "),n("p",[e._v("The client prints information about the job submitted along with the application id, similar to:")]),e._v(" "),n("pre",[n("code",[e._v("12/01/18 04:25:15 INFO mapred.ResourceMgrDelegate: Submitted application application_1326821518301_0010 to ResourceManager at host.domain.com/10.10.10.10:8032\n12/01/18 04:25:15 INFO mapreduce.Job: Running job: job_1326821518301_0010\n12/01/18 04:25:21 INFO mapred.ClientServiceDelegate: The url to track the job: host.domain.com:8088/proxy/application_1326821518301_0010/\n12/01/18 04:25:22 INFO mapreduce.Job: Job job_1326821518301_0010 running in uber mode : false\n12/01/18 04:25:22 INFO mapreduce.Job:  map 0% reduce 0%\n")])]),e._v(" "),n("p",[e._v("The user then wishes to track the application. The users starts by getting the information about the application from the ResourceManager. Use the –comopressed option to request output compressed. curl handles uncompressing on client side.")]),e._v(" "),n("pre",[n("code",[e._v('curl --compressed -H "Accept: application/json" -X GET "http://host.domain.com:8088/ws/v1/cluster/apps/application_1326821518301_0010" \n')])]),e._v(" "),n("p",[e._v("Output:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "app" : {\n      "finishedTime" : 0,\n      "amContainerLogs" : "http://host.domain.com:8042/node/containerlogs/container_1326821518301_0010_01_000001",\n      "trackingUI" : "ApplicationMaster",\n      "state" : "RUNNING",\n      "user" : "user1",\n      "id" : "application_1326821518301_0010",\n      "clusterId" : 1326821518301,\n      "finalStatus" : "UNDEFINED",\n      "amHostHttpAddress" : "host.domain.com:8042",\n      "progress" : 82.44703,\n      "name" : "Sleep job",\n      "startedTime" : 1326860715335,\n      "elapsedTime" : 31814,\n      "diagnostics" : "",\n      "trackingUrl" : "http://host.domain.com:8088/proxy/application_1326821518301_0010/",\n      "queue" : "a1"\n   }\n}\n')])]),e._v(" "),n("p",[e._v("_1326821518301_0010. This could either go to the web browser or use the web service REST APIThe user then wishes to get more details about the running application and goes directly to the MapReduce application master for this application. The ResourceManager lists the trackingUrl that can be used for this application: "),n("a",{attrs:{href:"http://host.domain.com:8088/proxy/application",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://host.domain.com:8088/proxy/application"),n("OutboundLink")],1),e._v("’s. The user uses the web services REST API’s to get the list of jobs this MapReduce application master is running:")]),e._v(" "),n("pre",[n("code",[e._v(' curl --compressed -H "Accept: application/json" -X GET "http://host.domain.com:8088/proxy/application_1326821518301_0010/ws/v1/mapreduce/jobs"\n')])]),e._v(" "),n("p",[e._v("Output:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "jobs" : {\n      "job" : [\n         {\n            "runningReduceAttempts" : 1,\n            "reduceProgress" : 72.104515,\n            "failedReduceAttempts" : 0,\n            "newMapAttempts" : 0,\n            "mapsRunning" : 0,\n            "state" : "RUNNING",\n            "successfulReduceAttempts" : 0,\n            "reducesRunning" : 1,\n            "acls" : [\n               {\n                  "value" : " ",\n                  "name" : "mapreduce.job.acl-modify-job"\n               },\n               {\n                  "value" : " ",\n                  "name" : "mapreduce.job.acl-view-job"\n               }\n            ],\n            "reducesPending" : 0,\n            "user" : "user1",\n            "reducesTotal" : 1,\n            "mapsCompleted" : 1,\n            "startTime" : 1326860720902,\n            "id" : "job_1326821518301_10_10",\n            "successfulMapAttempts" : 1,\n            "runningMapAttempts" : 0,\n            "newReduceAttempts" : 0,\n            "name" : "Sleep job",\n            "mapsPending" : 0,\n            "elapsedTime" : 64432,\n            "reducesCompleted" : 0,\n            "mapProgress" : 100,\n            "diagnostics" : "",\n            "failedMapAttempts" : 0,\n            "killedReduceAttempts" : 0,\n            "mapsTotal" : 1,\n            "uberized" : false,\n            "killedMapAttempts" : 0,\n            "finishTime" : 0\n         }\n      ]\n   }\n}\n')])]),e._v(" "),n("p",[e._v("The user then wishes to get the task details about the job with job id job_1326821518301_10_10 that was listed above.")]),e._v(" "),n("pre",[n("code",[e._v(' curl --compressed -H "Accept: application/json" -X GET "http://host.domain.com:8088/proxy/application_1326821518301_0010/ws/v1/mapreduce/jobs/job_1326821518301_10_10/tasks" \n')])]),e._v(" "),n("p",[e._v("Output:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "tasks" : {\n      "task" : [\n         {\n            "progress" : 100,\n            "elapsedTime" : 5059,\n            "state" : "SUCCEEDED",\n            "startTime" : 1326860725014,\n            "id" : "task_1326821518301_10_10_m_0",\n            "type" : "MAP",\n            "successfulAttempt" : "attempt_1326821518301_10_10_m_0_0",\n            "finishTime" : 1326860730073\n         },\n         {\n            "progress" : 72.104515,\n            "elapsedTime" : 0,\n            "state" : "RUNNING",\n            "startTime" : 1326860732984,\n            "id" : "task_1326821518301_10_10_r_0",\n            "type" : "REDUCE",\n            "successfulAttempt" : "",\n            "finishTime" : 0\n         }\n      ]\n   }\n}\n')])]),e._v(" "),n("p",[e._v("The map task has finished but the reduce task is still running. The users wishes to get the task attempt information for the reduce task task_1326821518301_10_10_r_0, note that the Accept header isn’t really required here since JSON is the default output format:")]),e._v(" "),n("pre",[n("code",[e._v('  curl --compressed -X GET "http://host.domain.com:8088/proxy/application_1326821518301_0010/ws/v1/mapreduce/jobs/job_1326821518301_10_10/tasks/task_1326821518301_10_10_r_0/attempts"\n')])]),e._v(" "),n("p",[e._v("Output:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "taskAttempts" : {\n      "taskAttempt" : [\n         {\n            "elapsedMergeTime" : 158,\n            "shuffleFinishTime" : 1326860735378,\n            "assignedContainerId" : "container_1326821518301_0010_01_000003",\n            "progress" : 72.104515,\n            "elapsedTime" : 0,\n            "state" : "RUNNING",\n            "elapsedShuffleTime" : 2394,\n            "mergeFinishTime" : 1326860735536,\n            "rack" : "/10.10.10.0",\n            "elapsedReduceTime" : 0,\n            "nodeHttpAddress" : "host.domain.com:8042",\n            "type" : "REDUCE",\n            "startTime" : 1326860732984,\n            "id" : "attempt_1326821518301_10_10_r_0_0",\n            "finishTime" : 0\n         }\n      ]\n   }\n}\n')])]),e._v(" "),n("p",[e._v("The reduce attempt is still running and the user wishes to see the current counter values for that attempt:")]),e._v(" "),n("pre",[n("code",[e._v(' curl --compressed -H "Accept: application/json"  -X GET "http://host.domain.com:8088/proxy/application_1326821518301_0010/ws/v1/mapreduce/jobs/job_1326821518301_10_10/tasks/task_1326821518301_10_10_r_0/attempts/attempt_1326821518301_10_10_r_0_0/counters" \n')])]),e._v(" "),n("p",[e._v("Output:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "JobTaskAttemptCounters" : {\n      "taskAttemptCounterGroup" : [\n         {\n            "counterGroupName" : "org.apache.hadoop.mapreduce.FileSystemCounter",\n            "counter" : [\n               {\n                  "value" : 4216,\n                  "name" : "FILE_BYTES_READ"\n               }, \n               {\n                  "value" : 77151,\n                  "name" : "FILE_BYTES_WRITTEN"\n               }, \n               {\n                  "value" : 0,\n                  "name" : "FILE_READ_OPS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "FILE_LARGE_READ_OPS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "FILE_WRITE_OPS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "HDFS_BYTES_READ"\n               },\n               {\n                  "value" : 0,\n                  "name" : "HDFS_BYTES_WRITTEN"\n               },\n               {\n                  "value" : 0,\n                  "name" : "HDFS_READ_OPS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "HDFS_LARGE_READ_OPS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "HDFS_WRITE_OPS"\n               }\n            ]  \n         }, \n         {\n            "counterGroupName" : "org.apache.hadoop.mapreduce.TaskCounter",\n            "counter" : [\n               {\n                  "value" : 0,\n                  "name" : "COMBINE_INPUT_RECORDS"\n               }, \n               {\n                  "value" : 0,\n                  "name" : "COMBINE_OUTPUT_RECORDS"\n               }, \n               {  \n                  "value" : 1767,\n                  "name" : "REDUCE_INPUT_GROUPS"\n               },\n               {  \n                  "value" : 25104,\n                  "name" : "REDUCE_SHUFFLE_BYTES"\n               },\n               {\n                  "value" : 1767,\n                  "name" : "REDUCE_INPUT_RECORDS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "REDUCE_OUTPUT_RECORDS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "SPILLED_RECORDS"\n               },\n               {\n                  "value" : 1,\n                  "name" : "SHUFFLED_MAPS"\n               },\n               {\n                  "value" : 0,\n                  "name" : "FAILED_SHUFFLE"\n               },\n               {\n                  "value" : 1,\n                  "name" : "MERGED_MAP_OUTPUTS"\n               },\n               {\n                  "value" : 50,\n                  "name" : "GC_TIME_MILLIS"\n               },\n               {\n                  "value" : 1580,\n                  "name" : "CPU_MILLISECONDS"\n               },\n               {\n                  "value" : 141320192,\n                  "name" : "PHYSICAL_MEMORY_BYTES"\n               },\n              {\n                  "value" : 1118552064,\n                  "name" : "VIRTUAL_MEMORY_BYTES"\n               }, \n               {  \n                  "value" : 73728000,\n                  "name" : "COMMITTED_HEAP_BYTES"\n               }\n            ]\n         },\n         {  \n            "counterGroupName" : "Shuffle Errors",\n            "counter" : [\n               {  \n                  "value" : 0,\n                  "name" : "BAD_ID"\n               },\n               {  \n                  "value" : 0,\n                  "name" : "CONNECTION"\n               },\n               {  \n                  "value" : 0,\n                  "name" : "IO_ERROR"\n               },\n               {  \n                  "value" : 0,\n                  "name" : "WRONG_LENGTH"\n               },\n               {  \n                  "value" : 0,\n                  "name" : "WRONG_MAP"\n               },\n               {  \n                  "value" : 0,\n                  "name" : "WRONG_REDUCE"\n               }\n            ]\n         },\n         {  \n            "counterGroupName" : "org.apache.hadoop.mapreduce.lib.output.FileOutputFormatCounter",\n            "counter" : [\n              {  \n                  "value" : 0,\n                  "name" : "BYTES_WRITTEN"\n               }\n            ]\n         }\n      ],\n      "id" : "attempt_1326821518301_10_10_r_0_0"\n   }\n}\n')])]),e._v(" "),n("p",[e._v("The job finishes and the user wishes to get the final job information from the history server for this job.")]),e._v(" "),n("pre",[n("code",[e._v('  curl --compressed -X GET "http://host.domain.com:19888/ws/v1/history/mapreduce/jobs/job_1326821518301_10_10" \n')])]),e._v(" "),n("p",[e._v("Output:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "job" : {\n      "avgReduceTime" : 1250784,\n      "failedReduceAttempts" : 0,\n      "state" : "SUCCEEDED",\n      "successfulReduceAttempts" : 1,\n      "acls" : [\n         {\n            "value" : " ",\n            "name" : "mapreduce.job.acl-modify-job"\n         },\n         {\n            "value" : " ",\n            "name" : "mapreduce.job.acl-view-job"\n         }\n      ],\n      "user" : "user1",\n      "reducesTotal" : 1,\n      "mapsCompleted" : 1,\n      "startTime" : 1326860720902,\n      "id" : "job_1326821518301_10_10",\n      "avgMapTime" : 5059,\n      "successfulMapAttempts" : 1,\n      "name" : "Sleep job",\n      "avgShuffleTime" : 2394,\n      "reducesCompleted" : 1,\n      "diagnostics" : "",\n      "failedMapAttempts" : 0,\n      "avgMergeTime" : 2552,\n      "killedReduceAttempts" : 0,\n      "mapsTotal" : 1,\n      "queue" : "a1",\n      "uberized" : false,\n      "killedMapAttempts" : 0,\n      "finishTime" : 1326861986164\n   }\n}\n')])]),e._v(" "),n("p",[e._v("The user also gets the final applications information from the ResourceManager.")]),e._v(" "),n("pre",[n("code",[e._v('  curl --compressed -H "Accept: application/json" -X GET "http://host.domain.com:8088/ws/v1/cluster/apps/application_1326821518301_0010" \n')])]),e._v(" "),n("p",[e._v("Output:")]),e._v(" "),n("pre",[n("code",[e._v('{\n   "app" : {\n      "finishedTime" : 1326861991282,\n      "amContainerLogs" : "http://host.domain.com:8042/node/containerlogs/container_1326821518301_0010_01_000001",\n      "trackingUI" : "History",\n      "state" : "FINISHED",\n      "user" : "user1",\n      "id" : "application_1326821518301_0010",\n      "clusterId" : 1326821518301,\n      "finalStatus" : "SUCCEEDED",\n      "amHostHttpAddress" : "host.domain.com:8042",\n      "progress" : 100,\n      "name" : "Sleep job",\n      "startedTime" : 1326860715335,\n      "elapsedTime" : 1275947,\n      "diagnostics" : "",\n      "trackingUrl" : "http://host.domain.com:8088/proxy/application_1326821518301_0010/jobhistory/job/job_1326821518301_10_10",\n      "queue" : "a1"\n   }\n}\n')])])])}),[],!1,null,null,null);t.default=a.exports}}]);