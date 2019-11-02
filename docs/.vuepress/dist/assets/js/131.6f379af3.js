(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{331:function(e,a,r){"use strict";r.r(a);var t=r(0),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),r("p",[e._v("This document describes how to deploy services on YARN using the YARN Service framework.")]),e._v(" "),r("h2",{attrs:{id:"configure-and-start-hdfs-and-yarn-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-and-start-hdfs-and-yarn-components","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure and start HDFS and YARN components")]),e._v(" "),r("p",[e._v("Start all the hadoop components for HDFS and YARN as usual. To enable the YARN Service framework, add this property to yarn-site.xml and restart the ResourceManager or set the property before the ResourceManager is started. This property is required for using the YARN Service framework through the CLI or the REST API.")]),e._v(" "),r("pre",[r("code",[e._v("  <property>\n    <description>\n      Enable services rest api on ResourceManager.\n    </description>\n    <name>yarn.webapp.api-service.enable</name>\n    <value>true</value>\n  </property>\n")])]),e._v(" "),r("h2",{attrs:{id:"example-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Example service")]),e._v(" "),r("p",[e._v("Below is a simple service definition that launches sleep containers on YARN by writing a simple spec file and without writing any code.")]),e._v(" "),r("pre",[r("code",[e._v('{\n  "name": "sleeper-service",\n  "version": "1.0",\n  "components" : \n    [\n      {\n        "name": "sleeper",\n        "number_of_containers": 1,\n        "launch_command": "sleep 900000",\n        "resource": {\n          "cpus": 1, \n          "memory": "256"\n       }\n      }\n    ]\n}\n')])]),e._v(" "),r("p",[e._v("User can simply run a pre-built example service on YARN using below command:")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -launch <service-name> <example-name>\n")])]),e._v(" "),r("p",[e._v("e.g. Below command launches a sleeper service named as my-sleeper on YARN.")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -launch my-sleeper sleeper\n")])]),e._v(" "),r("p",[e._v("For launching docker based services using YARN Service framework, please refer to "),r("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/YarnServiceAPI.html"}},[e._v("API doc")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"manage-services-on-yarn-via-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#manage-services-on-yarn-via-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Manage services on YARN via CLI")]),e._v(" "),r("p",[e._v("Below steps walk you through deploying a services on YARN using CLI. Refer to "),r("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/YarnCommands.html"}},[e._v("Yarn Commands")]),e._v(" for the full list of commands and options.")],1),e._v(" "),r("h3",{attrs:{id:"deploy-a-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy a service")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -launch ${SERVICE_NAME} ${PATH_TO_SERVICE_DEF_FILE}\n")])]),e._v(" "),r("p",[e._v("Params:")]),e._v(" "),r("ul",[r("li",[e._v("SERVICE_NAME: The name of the service. Note that this needs to be unique across running services for the current user.")]),e._v(" "),r("li",[e._v("PATH_TO_SERVICE_DEF: The path to the service definition file in JSON format.")])]),e._v(" "),r("p",[e._v("For example:")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -launch sleeper-service /path/to/local/sleeper.json\n")])]),e._v(" "),r("h3",{attrs:{id:"flex-a-component-of-a-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flex-a-component-of-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Flex a component of a service")]),e._v(" "),r("p",[e._v("Increase or decrease the number of containers for a component.")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -flex ${SERVICE_NAME} -component ${COMPONENT_NAME} ${NUMBER_OF_CONTAINERS}\n")])]),e._v(" "),r("p",[e._v("For example, for a service named sleeper-service:")]),e._v(" "),r("p",[e._v("Set the sleeper component to 2 containers (absolute number).")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -flex sleeper-service -component sleeper 2\n")])]),e._v(" "),r("p",[e._v("Relative changes are also supported for the ${NUMBER_OF_CONTAINERS} in the flex command, such as +2 or -2.")]),e._v(" "),r("h3",{attrs:{id:"stop-a-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stop-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Stop a service")]),e._v(" "),r("p",[e._v("Stopping a service will stop all containers of the service and the ApplicationMaster, but does not delete the state of a service, such as the service root folder on hdfs.")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -stop ${SERVICE_NAME}\n")])]),e._v(" "),r("h3",{attrs:{id:"restart-a-stopped-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restart-a-stopped-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Restart a stopped service")]),e._v(" "),r("p",[e._v("Restarting a stopped service is easy - just call start!")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -start ${SERVICE_NAME}\n")])]),e._v(" "),r("h3",{attrs:{id:"destroy-a-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#destroy-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Destroy a service")]),e._v(" "),r("p",[e._v("In addition to stopping a service, it also deletes the service root folder on hdfs and the records in YARN Service Registry.")]),e._v(" "),r("pre",[r("code",[e._v("yarn app -destroy ${SERVICE_NAME}\n")])]),e._v(" "),r("h2",{attrs:{id:"manage-services-on-yarn-via-rest-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#manage-services-on-yarn-via-rest-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Manage services on YARN via REST API")]),e._v(" "),r("p",[e._v("The YARN API Server REST API is activated as part of the ResourceManager when yarn.webapp.api-service.enable is set to true.")]),e._v(" "),r("p",[e._v("Services can be deployed on YARN through the ResourceManager web endpoint.")]),e._v(" "),r("p",[e._v("Refer to "),r("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/YarnServiceAPI.html"}},[e._v("API doc")]),e._v(" for the detailed API specificatiosn.")],1),e._v(" "),r("h3",{attrs:{id:"deploy-a-service-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-service-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy a service")]),e._v(" "),r("p",[e._v("POST the aforementioned example service definition to the ResourceManager api-server endpoint:")]),e._v(" "),r("pre",[r("code",[e._v("POST  http://localhost:8088/app/v1/services\n")])]),e._v(" "),r("h3",{attrs:{id:"get-a-service-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-a-service-status","aria-hidden":"true"}},[e._v("#")]),e._v(" Get a service status")]),e._v(" "),r("pre",[r("code",[e._v("GET  http://localhost:8088/app/v1/services/${SERVICE_NAME}\n")])]),e._v(" "),r("h3",{attrs:{id:"flex-a-component-of-a-service-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flex-a-component-of-a-service-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Flex a component of a service")]),e._v(" "),r("pre",[r("code",[e._v("PUT  http://localhost:8088/app/v1/services/${SERVICE_NAME}/components/${COMPONENT_NAME}\n")])]),e._v(" "),r("p",[e._v("PUT Request body:")]),e._v(" "),r("pre",[r("code",[e._v('{\n    "name": "${COMPONENT_NAME}",\n    "number_of_containers": ${COUNT}\n}\n')])]),e._v(" "),r("p",[e._v("For example:")]),e._v(" "),r("pre",[r("code",[e._v('{\n    "name": "sleeper",\n    "number_of_containers": 2\n}\n')])]),e._v(" "),r("h3",{attrs:{id:"stop-a-service-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stop-a-service-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Stop a service")]),e._v(" "),r("p",[e._v("Stopping a service will stop all containers of the service and the ApplicationMaster, but does not delete the state of a service, such as the service root folder on hdfs.")]),e._v(" "),r("pre",[r("code",[e._v("PUT  http://localhost:8088/app/v1/services/${SERVICE_NAME}\n")])]),e._v(" "),r("p",[e._v("PUT Request body:")]),e._v(" "),r("pre",[r("code",[e._v('{\n  "name": "${SERVICE_NAME}",\n  "state": "STOPPED"\n}\n')])]),e._v(" "),r("h3",{attrs:{id:"restart-a-stopped-service-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restart-a-stopped-service-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Restart a stopped service")]),e._v(" "),r("p",[e._v("Restarting a stopped service is easy.")]),e._v(" "),r("pre",[r("code",[e._v("PUT  http://localhost:8088/app/v1/services/${SERVICE_NAME}\n")])]),e._v(" "),r("p",[e._v("PUT Request body:")]),e._v(" "),r("pre",[r("code",[e._v('{\n  "name": "${SERVICE_NAME}",\n  "state": "STARTED"\n}\n')])]),e._v(" "),r("h3",{attrs:{id:"destroy-a-service-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#destroy-a-service-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Destroy a service")]),e._v(" "),r("p",[e._v("In addition to stopping a service, it also deletes the service root folder on hdfs and the records in YARN Service Registry.")]),e._v(" "),r("pre",[r("code",[e._v("DELETE  http://localhost:8088/app/v1/services/${SERVICE_NAME}\n")])]),e._v(" "),r("h2",{attrs:{id:"services-ui-with-yarn-ui2-and-timeline-service-v2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#services-ui-with-yarn-ui2-and-timeline-service-v2","aria-hidden":"true"}},[e._v("#")]),e._v(" Services UI with YARN UI2 and Timeline Service v2")]),e._v(" "),r("p",[e._v("A new service tab is added in the YARN UI2 specially to show YARN Services in a first class manner. The services framework posts the data into TimelineService and the service UI reads data from TimelineService to render its content.")]),e._v(" "),r("h3",{attrs:{id:"enable-timeline-service-v2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-timeline-service-v2","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable Timeline Service v2")]),e._v(" "),r("p",[e._v("Please refer to "),r("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/TimelineServiceV2.html"}},[e._v("TimeLineService v2 doc")]),e._v(" for how to enable Timeline Service v2.")],1),e._v(" "),r("h3",{attrs:{id:"enable-new-yarn-ui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-new-yarn-ui","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable new YARN UI")]),e._v(" "),r("p",[e._v("Set below config in yarn-site.xml and start ResourceManager. If you are building from source code, make sure you use -Pyarn-ui in the mvn command - this will generate the war file for the new YARN UI.")]),e._v(" "),r("pre",[r("code",[e._v("  <property>\n    <description>To enable RM web ui2 application.</description>\n    <name>yarn.webapp.ui2.enable</name>\n    <value>true</value>\n  </property>\n")])]),e._v(" "),r("h1",{attrs:{id:"run-with-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-with-security","aria-hidden":"true"}},[e._v("#")]),e._v(" Run with security")]),e._v(" "),r("p",[e._v("YARN service framework supports running in a secure (kerberized) environment. User needs to specify the kerberos principal name and keytab when they launch the service. E.g. A typical configuration looks like below:")]),e._v(" "),r("pre",[r("code",[e._v('{\n  "name": "sample-service",\n  ...\n  ...\n  "kerberos_principal" : {\n    "principal_name" : "hdfs-demo/_HOST@EXAMPLE.COM",\n    "keytab" : "file:///etc/security/keytabs/hdfs.headless.keytab"\n  }\n}\n')])]),e._v(" "),r("p",[e._v("Note that _HOST is required in the principal_name field because Hadoop client validates that the server’s (in this case, the AM’s) principal has hostname present when communicating to the server. * principal_name : the principal name of the user who launches the service * keytab : URI of the keytab. Currently supports only files present on the bare host. * URI starts with file:// - A path on the local host where the keytab is stored. It is assumed that admin pre-installs the keytabs on the local host before AM launches.")]),e._v(" "),r("h1",{attrs:{id:"run-with-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-with-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Run with Docker")]),e._v(" "),r("p",[e._v("The above example is only for a non-docker container based service. YARN Service Framework also provides first-class support for managing docker based services. Most of the steps for managing docker based services are the same except that in docker the Artifact type for a component is DOCKER and the Artifact id is the name of the docker image. For details in how to setup docker on YARN, please check "),r("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/DockerContainers.html"}},[e._v("Docker on YARN")]),e._v(".")],1),e._v(" "),r("p",[e._v("With docker support, it also opens up a set of new possibilities to implement features such as discovering service containers on YARN with DNS. Check "),r("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/ServiceDiscovery.html"}},[e._v("ServiceDiscovery")]),e._v(" for more details.")],1)])}),[],!1,null,null,null);a.default=s.exports}}]);