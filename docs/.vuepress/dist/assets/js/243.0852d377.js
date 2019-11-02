(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{440:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"resourcemanager-high-availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resourcemanager-high-availability"}},[e._v("#")]),e._v(" ResourceManager High Availability")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("This guide provides an overview of High Availability of YARN’s ResourceManager, and details how to configure and use this feature. The ResourceManager (RM) is responsible for tracking the resources in a cluster, and scheduling applications (e.g., MapReduce jobs). Prior to Hadoop 2.4, the ResourceManager is the single point of failure in a YARN cluster. The High Availability feature adds redundancy in the form of an Active/Standby ResourceManager pair to remove this otherwise single point of failure.")]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("img",{attrs:{src:"/rm-ha-overview.png",alt:"Overview of ResourceManager High Availability"}}),e._v(" "),a("h3",{attrs:{id:"rm-failover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rm-failover"}},[e._v("#")]),e._v(" RM Failover")]),e._v(" "),a("p",[e._v("ResourceManager HA is realized through an Active/Standby architecture - at any point of time, one of the RMs is Active, and one or more RMs are in Standby mode waiting to take over should anything happen to the Active. The trigger to transition-to-active comes from either the admin (through CLI) or through the integrated failover-controller when automatic-failover is enabled.")]),e._v(" "),a("h4",{attrs:{id:"manual-transitions-and-failover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-transitions-and-failover"}},[e._v("#")]),e._v(" Manual transitions and failover")]),e._v(" "),a("p",[e._v("When automatic failover is not enabled, admins have to manually transition one of the RMs to Active. To failover from one RM to the other, they are expected to first transition the Active-RM to Standby and transition a Standby-RM to Active. All this can be done using the “yarn rmadmin” CLI.")]),e._v(" "),a("h4",{attrs:{id:"automatic-failover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-failover"}},[e._v("#")]),e._v(" Automatic failover")]),e._v(" "),a("p",[e._v("The RMs have an option to embed the Zookeeper-based ActiveStandbyElector to decide which RM should be the Active. When the Active goes down or becomes unresponsive, another RM is automatically elected to be the Active which then takes over. Note that, there is no need to run a separate ZKFC daemon as is the case for HDFS because ActiveStandbyElector embedded in RMs acts as a failure detector and a leader elector instead of a separate ZKFC deamon.")]),e._v(" "),a("h4",{attrs:{id:"client-applicationmaster-and-nodemanager-on-rm-failover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-applicationmaster-and-nodemanager-on-rm-failover"}},[e._v("#")]),e._v(" Client, ApplicationMaster and NodeManager on RM failover")]),e._v(" "),a("p",[e._v("When there are multiple RMs, the configuration (yarn-site.xml) used by clients and nodes is expected to list all the RMs. Clients, ApplicationMasters (AMs) and NodeManagers (NMs) try connecting to the RMs in a round-robin fashion until they hit the Active RM. If the Active goes down, they resume the round-robin polling until they hit the “new” Active. This default retry logic is implemented as org.apache.hadoop.yarn.client.ConfiguredRMFailoverProxyProvider. You can override the logic by implementing org.apache.hadoop.yarn.client.RMFailoverProxyProvider and setting the value of yarn.client.failover-proxy-provider to the class name.")]),e._v(" "),a("h3",{attrs:{id:"recovering-previous-active-rm’s-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recovering-previous-active-rm’s-state"}},[e._v("#")]),e._v(" Recovering previous active-RM’s state")]),e._v(" "),a("p",[e._v("With the "),a("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/ResourceManagerRestart.html"}},[e._v("ResourceManager Restart")]),e._v(" enabled, the RM being promoted to an active state loads the RM internal state and continues to operate from where the previous active left off as much as possible depending on the RM restart feature. A new attempt is spawned for each managed application previously submitted to the RM. Applications can checkpoint periodically to avoid losing any work. The state-store must be visible from the both of Active/Standby RMs. Currently, there are two RMStateStore implementations for persistence - FileSystemRMStateStore and ZKRMStateStore. The ZKRMStateStore implicitly allows write access to a single RM at any point in time, and hence is the recommended store to use in an HA cluster. When using the ZKRMStateStore, there is no need for a separate fencing mechanism to address a potential split-brain situation where multiple RMs can potentially assume the Active role. When using the ZKRMStateStore, it is advisable to NOT set the “zookeeper.DigestAuthenticationProvider.superDigest” property on the Zookeeper cluster to ensure that the zookeeper admin does not have access to YARN application/user credential information.")],1),e._v(" "),a("h2",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),a("h3",{attrs:{id:"configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),a("p",[e._v("Most of the failover functionality is tunable using various configuration properties. Following is a list of required/important ones. yarn-default.xml carries a full-list of knobs. See "),a("a",{attrs:{href:"../hadoop-yarn-common/yarn-default.xml"}},[e._v("yarn-default.xml")]),e._v(" for more information including default values. See the document for "),a("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/ResourceManagerRestart.html"}},[e._v("ResourceManager Restart")]),e._v(" also for instructions on setting up the state-store.")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Configuration Properties")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("hadoop.zk.address")]),e._v(" "),a("td",[e._v("Address of the ZK-quorum. Used both for the state-store and embedded leader-election.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.ha.enabled")]),e._v(" "),a("td",[e._v("Enable RM HA.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.ha.rm-ids")]),e._v(" "),a("td",[e._v("List of logical IDs for the RMs. e.g., “rm1,rm2”.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.hostname.rm-id")]),e._v(" "),a("td",[e._v("For each rm-id, specify the hostname the RM corresponds to. Alternately, one could set each of the RM’s service addresses.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.address.rm-id")]),e._v(" "),a("td",[e._v("For each rm-id, specify host:port for clients to submit jobs. If set, overrides the hostname set in yarn.resourcemanager.hostname.rm-id.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.scheduler.address.rm-id")]),e._v(" "),a("td",[e._v("For each rm-id, specify scheduler host:port for ApplicationMasters to obtain resources. If set, overrides the hostname set in yarn.resourcemanager.hostname.rm-id.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.resource-tracker.address.rm-id")]),e._v(" "),a("td",[e._v("For each rm-id, specify host:port for NodeManagers to connect. If set, overrides the hostname set in yarn.resourcemanager.hostname.rm-id.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.admin.address.rm-id")]),e._v(" "),a("td",[e._v("For each rm-id, specify host:port for administrative commands. If set, overrides the hostname set in yarn.resourcemanager.hostname.rm-id.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.webapp.address.rm-id")]),e._v(" "),a("td",[e._v("For each rm-id, specify host:port of the RM web application corresponds to. You do not need this if you set yarn.http.policy to HTTPS_ONLY. If set, overrides the hostname set in yarn.resourcemanager.hostname.rm-id.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.webapp.https.address.rm-id")]),e._v(" "),a("td",[e._v("For each rm-id, specify host:port of the RM https web application corresponds to. You do not need this if you set yarn.http.policy to HTTP_ONLY. If set, overrides the hostname set in yarn.resourcemanager.hostname.rm-id.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.ha.id")]),e._v(" "),a("td",[e._v("Identifies the RM in the ensemble. This is optional; however, if set, admins have to ensure that all the RMs have their own IDs in the config.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.ha.automatic-failover.enabled")]),e._v(" "),a("td",[e._v("Enable automatic failover; By default, it is enabled only when HA is enabled.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.ha.automatic-failover.embedded")]),e._v(" "),a("td",[e._v("Use embedded leader-elector to pick the Active RM, when automatic failover is enabled. By default, it is enabled only when HA is enabled.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.cluster-id")]),e._v(" "),a("td",[e._v("Identifies the cluster. Used by the elector to ensure an RM doesn’t take over as Active for another cluster.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.client.failover-proxy-provider")]),e._v(" "),a("td",[e._v("The class to be used by Clients, AMs and NMs to failover to the Active RM.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.client.failover-max-attempts")]),e._v(" "),a("td",[e._v("The max number of times FailoverProxyProvider should attempt failover.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.client.failover-sleep-base-ms")]),e._v(" "),a("td",[e._v("The sleep base (in milliseconds) to be used for calculating the exponential delay between failovers.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.client.failover-sleep-max-ms")]),e._v(" "),a("td",[e._v("The maximum sleep time (in milliseconds) between failovers.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.client.failover-retries")]),e._v(" "),a("td",[e._v("The number of retries per attempt to connect to a ResourceManager.")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.client.failover-retries-on-socket-timeouts")]),e._v(" "),a("td",[e._v("The number of retries per attempt to connect to a ResourceManager on socket timeouts.")])])])]),e._v(" "),a("h4",{attrs:{id:"sample-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-configurations"}},[e._v("#")]),e._v(" Sample configurations")]),e._v(" "),a("p",[e._v("Here is the sample of minimal setup for RM failover.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>yarn.resourcemanager.ha.enabled</name>\n  <value>true</value>\n</property>\n<property>\n  <name>yarn.resourcemanager.cluster-id</name>\n  <value>cluster1</value>\n</property>\n<property>\n  <name>yarn.resourcemanager.ha.rm-ids</name>\n  <value>rm1,rm2</value>\n</property>\n<property>\n  <name>yarn.resourcemanager.hostname.rm1</name>\n  <value>master1</value>\n</property>\n<property>\n  <name>yarn.resourcemanager.hostname.rm2</name>\n  <value>master2</value>\n</property>\n<property>\n  <name>yarn.resourcemanager.webapp.address.rm1</name>\n  <value>master1:8088</value>\n</property>\n<property>\n  <name>yarn.resourcemanager.webapp.address.rm2</name>\n  <value>master2:8088</value>\n</property>\n<property>\n  <name>hadoop.zk.address</name>\n  <value>zk1:2181,zk2:2181,zk3:2181</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"admin-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-commands"}},[e._v("#")]),e._v(" Admin commands")]),e._v(" "),a("p",[e._v("yarn rmadmin has a few HA-specific command options to check the health/state of an RM, and transition to Active/Standby. Commands for HA take service id of RM set by yarn.resourcemanager.ha.rm-ids as argument.")]),e._v(" "),a("pre",[a("code",[e._v(" $ yarn rmadmin -getServiceState rm1\n active\n \n $ yarn rmadmin -getServiceState rm2\n standby\n")])]),e._v(" "),a("p",[e._v("If automatic failover is enabled, you can not use manual transition command. Though you can override this by –forcemanual flag, you need caution.")]),e._v(" "),a("pre",[a("code",[e._v(" $ yarn rmadmin -transitionToStandby rm1\n Automatic failover is enabled for org.apache.hadoop.yarn.client.RMHAServiceTarget@1d8299fd\n Refusing to manually manage HA state, since it may cause\n a split-brain scenario or other incorrect state.\n If you are very sure you know what you are doing, please\n specify the forcemanual flag.\n")])]),e._v(" "),a("p",[e._v("See "),a("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/YarnCommands.html"}},[e._v("YarnCommands")]),e._v(" for more details.")],1),e._v(" "),a("h3",{attrs:{id:"resourcemanager-web-ui-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resourcemanager-web-ui-services"}},[e._v("#")]),e._v(" ResourceManager Web UI services")]),e._v(" "),a("p",[e._v("Assuming a standby RM is up and running, the Standby automatically redirects all web requests to the Active, except for the “About” page.")]),e._v(" "),a("h3",{attrs:{id:"web-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-services"}},[e._v("#")]),e._v(" Web Services")]),e._v(" "),a("p",[e._v("Assuming a standby RM is up and running, RM web-services described at "),a("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/ResourceManagerRest.html"}},[e._v("ResourceManager REST APIs")]),e._v(" when invoked on a standby RM are automatically redirected to the Active RM.")],1),e._v(" "),a("h3",{attrs:{id:"load-balancer-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-setup"}},[e._v("#")]),e._v(" Load Balancer Setup")]),e._v(" "),a("p",[e._v("If you are running a set of ResourceManagers behind a Load Balancer (e.g. "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS"),a("OutboundLink")],1),e._v(" ) and would like the Load Balancer to point to the active RM, you can use the /isActive HTTP endpoint as a health probe. "),a("a",{attrs:{href:"http://RM_HOSTNAME/isActive",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://RM_HOSTNAME/isActive"),a("OutboundLink")],1),e._v(" will return a 200 status code response if the RM is in Active HA State, 405 otherwise.")])])}),[],!1,null,null,null);t.default=o.exports}}]);