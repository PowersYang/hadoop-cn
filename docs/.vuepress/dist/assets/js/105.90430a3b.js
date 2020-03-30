(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{308:function(e,a,t){"use strict";t.r(a);var o=t(0),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"yarn-node-labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-node-labels"}},[e._v("#")]),e._v(" YARN Node Labels")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Node label is a way to group nodes with similar characteristics and applications can specify where to run.")]),e._v(" "),t("p",[e._v("Now we only support node partition, which is:")]),e._v(" "),t("ul",[t("li",[e._v('One node can have only one node partition, so a cluster is partitioned to several disjoint sub-clusters by node partitions. By default, nodes belong to DEFAULT partition (partition="")')]),e._v(" "),t("li",[e._v("User need to configure how much resources of each partition can be used by different queues. For more detail, please refer next section.")]),e._v(" "),t("li",[e._v("There are two kinds of node partitions:\n"),t("ul",[t("li",[e._v("Exclusive: containers will be allocated to nodes with exactly match node partition. (e.g. asking partition=“x” will be allocated to node with partition=“x”, asking DEFAULT partition will be allocated to DEFAULT partition nodes).")]),e._v(" "),t("li",[e._v("Non-exclusive: if a partition is non-exclusive, it shares idle resource to container requesting DEFAULT partition.")])])])]),e._v(" "),t("p",[e._v("User can specify set of node labels which can be accessed by each queue, one application can only use subset of node labels that can be accessed by the queue which contains the application.")]),e._v(" "),t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("p",[e._v("The Node Labels supports the following features for now:")]),e._v(" "),t("ul",[t("li",[e._v("Partition cluster - each node can be assigned one label, so the cluster will be divided to several smaller disjoint partitions.")]),e._v(" "),t("li",[e._v("ACL of node-labels on queues - user can set accessible node labels on each queue so only some nodes can only be accessed by specific queues.")]),e._v(" "),t("li",[e._v("Specify percentage of resource of a partition which can be accessed by a queue - user can set percentage like: queue A can access 30% of resources on nodes with label=hbase. Such percentage setting will be consistent with existing resource manager")]),e._v(" "),t("li",[e._v("Specify required node label in resource request, it will only be allocated when node has the same label. If no node label requirement specified, such Resource Request will only be allocated on nodes belong to DEFAULT partition.")]),e._v(" "),t("li",[e._v("Operability\n"),t("ul",[t("li",[e._v("Node labels and node labels mapping can be recovered across RM restart")]),e._v(" "),t("li",[e._v("Update node labels - admin can update labels on nodes and labels on queues when RM is running")])])]),e._v(" "),t("li",[e._v("Mapping of NM to node labels can be done in three ways, but in all of the approaches Partition Label should be one among the valid node labels list configured in the RM.\n"),t("ul",[t("li",[e._v("Centralized : Node to labels mapping can be done through RM exposed CLI, REST or RPC.")]),e._v(" "),t("li",[e._v("Distributed : Node to labels mapping will be set by a configured Node Labels Provider in NM. We have two different providers in YARN: Script based provider and Configuration based provider. In case of script, NM can be configured with a script path and the script can emit the labels of the node. In case of config, node Labels can be directly configured in the NM’s yarn-site.xml. In both of these options dynamic refresh of the label mapping is supported.")]),e._v(" "),t("li",[e._v("Delegated-Centralized : Node to labels mapping will be set by a configured Node Labels Provider in RM. This would be helpful when label mapping cannot be provided by each node due to security concerns and to avoid interaction through RM Interfaces for each node in a large cluster. Labels will be fetched from this interface during NM registration and periodical refresh is also supported.")])])])]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("h3",{attrs:{id:"setting-up-resourcemanager-to-enable-node-labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-resourcemanager-to-enable-node-labels"}},[e._v("#")]),e._v(" Setting up ResourceManager to enable Node Labels")]),e._v(" "),t("p",[e._v("Setup following properties in yarn-site.xml")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.node-labels.fs-store.root-dir")]),e._v(" "),t("td",[t("router-link",{attrs:{to:"hdfs://namenode/:port/path/to/store/node-labels/"}},[e._v("hdfs://namenode:port/path/to/store/node-labels/")])],1)]),e._v(" "),t("tr",[t("td",[e._v("yarn.node-labels.enabled")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.node-labels.configuration-type")]),e._v(" "),t("td",[e._v("Set configuration type for node labels. Administrators can specify “centralized”, “delegated-centralized” or “distributed”. Default value is “centralized”.")])])])]),e._v(" "),t("p",[e._v("Notes:")]),e._v(" "),t("ul",[t("li",[e._v("Make sure yarn.node-labels.fs-store.root-dir is created and ResourceManager has permission to access it. (Typically from “yarn” user)")]),e._v(" "),t("li",[e._v("If user want to store node label to local file system of RM (instead of HDFS), paths like file:///home/yarn/node-label can be used")])]),e._v(" "),t("h3",{attrs:{id:"add-modify-node-labels-list-to-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-modify-node-labels-list-to-yarn"}},[e._v("#")]),e._v(" Add/modify node labels list to YARN")]),e._v(" "),t("ul",[t("li",[e._v("Add cluster node labels list:\n"),t("ul",[t("li",[e._v('Executing yarn rmadmin -addToClusterNodeLabels "label_1(exclusive=true/false),label_2(exclusive=true/false)" to add node label.')]),e._v(" "),t("li",[e._v("If user don’t specify “(exclusive=…)”, exclusive will be true by default.")]),e._v(" "),t("li",[e._v("Run yarn cluster --list-node-labels to check added node labels are visible in the cluster.")])])])]),e._v(" "),t("h3",{attrs:{id:"remove-node-labels-from-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-node-labels-from-yarn"}},[e._v("#")]),e._v(" Remove node labels from YARN")]),e._v(" "),t("ul",[t("li",[e._v("Remove cluster node labels:\n"),t("ul",[t("li",[e._v('To remove one or more node labels, execute the following command: yarn rmadmin -removeFromClusterNodeLabels "'),t("label",[e._v("[,"),t("label",[e._v(',...]". The command argument should be a comma-separated list of node labels to remove.')])])]),e._v(" "),t("li",[e._v("It is not allowed to remove a label which has been associated with queues, i.e., one or more queues have access to this label.")]),e._v(" "),t("li",[e._v("To verify if specified node labels have been successfully removed, run yarn cluster --list-node-labels.")])])])]),e._v(" "),t("h3",{attrs:{id:"add-modify-node-to-labels-mapping-to-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-modify-node-to-labels-mapping-to-yarn"}},[e._v("#")]),e._v(" Add/modify node-to-labels mapping to YARN")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Configuring nodes to labels mapping in Centralized NodeLabel setup")]),e._v(" "),t("ul",[t("li",[e._v("Executing yarn rmadmin -replaceLabelsOnNode “node1[:port]=label1 node2=label2” [-failOnUnknownNodes]. Added label1 to node1, label2 to node2. If user don’t specify port, it adds the label to all NodeManagers running on the node. If option -failOnUnknownNodes is set, this command will fail if specified nodes are unknown.")])])]),e._v(" "),t("li",[t("p",[e._v("Configuring nodes to labels mapping in Distributed NodeLabel setup")])])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.node-labels.configuration-type")]),e._v(" "),t("td",[e._v("Needs to be set as “distributed” in RM, to fetch node to labels mapping from a configured Node Labels Provider in NM.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.nodemanager.node-labels.provider")]),e._v(" "),t("td",[e._v("When “yarn.node-labels.configuration-type” is configured with “distributed” in RM, Administrators can configure the provider for the node labels by configuring this parameter in NM. Administrators can configure “config”, “script” or the class name of the provider. Configured class needs to extend org.apache.hadoop.yarn.server.nodemanager.nodelabels.NodeLabelsProvider. If “config” is configured, then “ConfigurationNodeLabelsProvider” and if “script” is configured, then “ScriptNodeLabelsProvider” will be used.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.nodemanager.node-labels.resync-interval-ms")]),e._v(" "),t("td",[e._v("Interval at which NM syncs its node labels with RM. NM will send its loaded labels every x intervals configured, along with heartbeat to RM. This resync is required even when the labels are not modified because admin might have removed the cluster label which was provided by NM. Default is 2 mins.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.nodemanager.node-labels.provider.fetch-interval-ms")]),e._v(" "),t("td",[e._v("When “yarn.nodemanager.node-labels.provider” is configured with “config”, “script” or the configured class extends AbstractNodeLabelsProvider, then periodically node labels are retrieved from the node labels provider. This configuration is to define the interval period. If -1 is configured, then node labels are retrieved from provider only during initialization. Defaults to 10 mins.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.nodemanager.node-labels.provider.fetch-timeout-ms")]),e._v(" "),t("td",[e._v("When “yarn.nodemanager.node-labels.provider” is configured with “script”, then this configuration provides the timeout period after which it will interrupt the script which queries the node labels. Defaults to 20 mins.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.nodemanager.node-labels.provider.script.path")]),e._v(" "),t("td",[e._v("The node label script to run. Script output Line starting with “NODE_PARTITION:” will be considered as node label Partition. In case multiple lines of script output have this pattern, then the last one will be considered.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.nodemanager.node-labels.provider.script.opts")]),e._v(" "),t("td",[e._v("The arguments to pass to the node label script.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.nodemanager.node-labels.provider.configured-node-partition")]),e._v(" "),t("td",[e._v("When “yarn.nodemanager.node-labels.provider” is configured with “config”, then ConfigurationNodeLabelsProvider fetches the partition label from this parameter.")])])])]),e._v(" "),t("ul",[t("li",[e._v("Configuring nodes to labels mapping in Delegated-Centralized NodeLabel setup")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.node-labels.configuration-type")]),e._v(" "),t("td",[e._v("Needs to be set as “delegated-centralized” to fetch node to labels mapping from a configured Node Labels Provider in RM.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.resourcemanager.node-labels.provider")]),e._v(" "),t("td",[e._v("When “yarn.node-labels.configuration-type” is configured with “delegated-centralized”, then administrators should configure the class for fetching node labels by ResourceManager. Configured class needs to extend org.apache.hadoop.yarn.server.resourcemanager.nodelabels.RMNodeLabelsMappingProvider.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.resourcemanager.node-labels.provider.fetch-interval-ms")]),e._v(" "),t("td",[e._v("When “yarn.node-labels.configuration-type” is configured with “delegated-centralized”, then periodically node labels are retrieved from the node labels provider. This configuration is to define the interval. If -1 is configured, then node labels are retrieved from provider only once for each node after it registers. Defaults to 30 mins.")])])])]),e._v(" "),t("h3",{attrs:{id:"configuration-of-schedulers-for-node-labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-schedulers-for-node-labels"}},[e._v("#")]),e._v(" Configuration of Schedulers for node labels")]),e._v(" "),t("ul",[t("li",[e._v("Capacity Scheduler Configuration")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.scheduler.capacity."),t("queue-path",[e._v(".capacity")])],1),e._v(" "),t("td",[e._v("Set the percentage of the queue can access to nodes belong to DEFAULT partition. The sum of DEFAULT capacities for direct children under each parent, must be equal to 100.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.scheduler.capacity."),t("queue-path",[e._v(".accessible-node-labels")])],1),e._v(" "),t("td",[e._v("Admin need specify labels can be accessible by each queue, split by comma, like “hbase,storm” means queue can access label hbase and storm. All queues can access to nodes without label, user don’t have to specify that. If user don’t specify this field, it will inherit from its parent. If user want to explicitly specify a queue can only access nodes without labels, just put a space as the value.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.scheduler.capacity."),t("queue-path",[e._v(".accessible-node-labels."),t("label",[e._v(".capacity")])])],1),e._v(" "),t("td",[e._v("Set the percentage of the queue can access to nodes belong to "),t("label",[e._v(" partition . The sum of "),t("label",[e._v(" capacities for direct children under each parent, must be equal to 100. By default, it’s 0.")])])])]),e._v(" "),t("tr",[t("td",[e._v("yarn.scheduler.capacity."),t("queue-path",[e._v(".accessible-node-labels."),t("label",[e._v(".maximum-capacity")])])],1),e._v(" "),t("td",[e._v("Similar to yarn.scheduler.capacity."),t("queue-path",[e._v(".maximum-capacity, it is for maximum-capacity for labels of each queue. By default, it’s 100.")])],1)]),e._v(" "),t("tr",[t("td",[e._v("yarn.scheduler.capacity."),t("queue-path",[e._v(".default-node-label-expression")])],1),e._v(" "),t("td",[e._v("Value like “hbase”, which means: if applications submitted to the queue without specifying node label in their resource requests, it will use “hbase” as default-node-label-expression. By default, this is empty, so application will get containers from nodes without label.")])])])]),e._v(" "),t("p",[e._v("An example of node label configuration:")]),e._v(" "),t("p",[e._v("Assume we have a queue structure")]),e._v(" "),t("pre",[t("code",[e._v("                root\n            /     |    \\\n     engineer    sales  marketing\n")])]),e._v(" "),t("p",[e._v("We have 5 nodes (hostname=h1..h5) in the cluster, each of them has 24G memory, 24 vcores. 1 among the 5 nodes has GPU (assume it’s h5). So admin added GPU label to h5.")]),e._v(" "),t("p",[e._v("Assume user have a Capacity Scheduler configuration like: (key=value is used here for readability)")]),e._v(" "),t("pre",[t("code",[e._v("yarn.scheduler.capacity.root.queues=engineering,marketing,sales\nyarn.scheduler.capacity.root.engineering.capacity=33\nyarn.scheduler.capacity.root.marketing.capacity=34\nyarn.scheduler.capacity.root.sales.capacity=33\n\nyarn.scheduler.capacity.root.engineering.accessible-node-labels=GPU\nyarn.scheduler.capacity.root.marketing.accessible-node-labels=GPU\n\nyarn.scheduler.capacity.root.engineering.accessible-node-labels.GPU.capacity=50\nyarn.scheduler.capacity.root.marketing.accessible-node-labels.GPU.capacity=50\n\nyarn.scheduler.capacity.root.engineering.default-node-label-expression=GPU\n")])]),e._v(" "),t("p",[e._v("You can see root.engineering/marketing/sales.capacity=33, so each of them can has guaranteed resource equals to 1/3 of resource without partition. So each of them can use 1/3 resource of h1..h4, which is 24 * 4 * (1/3) = (32G mem, 32 v-cores).")]),e._v(" "),t("p",[e._v("And only engineering/marketing queue has permission to access GPU partition (see root."),t("queue-name",[e._v(".accessible-node-labels).")])],1),e._v(" "),t("p",[e._v("Each of engineering/marketing queue has guaranteed resource equals to 1/2 of resource with partition=GPU. So each of them can use 1/2 resource of h5, which is 24 * 0.5 = (12G mem, 12 v-cores).")]),e._v(" "),t("p",[e._v("Notes:")]),e._v(" "),t("ul",[t("li",[e._v("After finishing configuration of CapacityScheduler, execute yarn rmadmin -refreshQueues to apply changes")]),e._v(" "),t("li",[e._v("Go to scheduler page of RM Web UI to check if you have successfully set configuration.")])]),e._v(" "),t("h2",{attrs:{id:"specifying-node-label-for-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specifying-node-label-for-application"}},[e._v("#")]),e._v(" Specifying node label for application")]),e._v(" "),t("p",[e._v("Applications can use following Java APIs to specify node label to request")]),e._v(" "),t("ul",[t("li",[e._v("ApplicationSubmissionContext.setNodeLabelExpression(..) to set node label expression for all containers of the application.")]),e._v(" "),t("li",[e._v("ResourceRequest.setNodeLabelExpression(..) to set node label expression for individual resource requests. This can overwrite node label expression set in ApplicationSubmissionContext")]),e._v(" "),t("li",[e._v("Specify setAMContainerResourceRequest.setNodeLabelExpression in ApplicationSubmissionContext to indicate expected node label for application master container.")])]),e._v(" "),t("h2",{attrs:{id:"monitoring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[e._v("#")]),e._v(" Monitoring")]),e._v(" "),t("h3",{attrs:{id:"monitoring-through-web-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-through-web-ui"}},[e._v("#")]),e._v(" Monitoring through web UI")]),e._v(" "),t("p",[e._v("Following label-related fields can be seen on web UI:")]),e._v(" "),t("ul",[t("li",[e._v("Nodes page: "),t("a",{attrs:{href:"http://RM-Address:port/cluster/nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://RM-Address:port/cluster/nodes"),t("OutboundLink")],1),e._v(", you can get labels on each node")]),e._v(" "),t("li",[e._v("Node labels page: "),t("a",{attrs:{href:"http://RM-Address:port/cluster/nodelabels",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://RM-Address:port/cluster/nodelabels"),t("OutboundLink")],1),e._v(", you can get type (exclusive/non-exclusive), number of active node managers, total resource of each partition")]),e._v(" "),t("li",[e._v("Scheduler page: "),t("a",{attrs:{href:"http://RM-Address:port/cluster/scheduler",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://RM-Address:port/cluster/scheduler"),t("OutboundLink")],1),e._v(", you can get label-related settings of each queue, and resource usage of queue partitions.")])]),e._v(" "),t("h3",{attrs:{id:"monitoring-through-commandline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-through-commandline"}},[e._v("#")]),e._v(" Monitoring through commandline")]),e._v(" "),t("ul",[t("li",[e._v("Use yarn cluster --list-node-labels to get labels in the cluster")]),e._v(" "),t("li",[e._v("Use yarn node -status "),t("NodeId",[e._v(" to get node status including labels on a given node")])],1)]),e._v(" "),t("h2",{attrs:{id:"useful-links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful links")]),e._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/CapacityScheduler.html"}},[e._v("YARN Capacity Scheduler")]),e._v(", if you need more understanding about how to configure Capacity Scheduler")],1),e._v(" "),t("li",[e._v("Write YARN application using node labels, you can see following two links as examples: "),t("a",{attrs:{href:"https://issues.apache.org/jira/browse/YARN-2502",target:"_blank",rel:"noopener noreferrer"}},[e._v("YARN distributed shell"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://issues.apache.org/jira/browse/MAPREDUCE-6304",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hadoop MapReduce"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);