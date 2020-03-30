(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{305:function(t,e,i){"use strict";i.r(e);var r=i(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"yarn-node-attributes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#yarn-node-attributes"}},[t._v("#")]),t._v(" YARN Node Attributes")]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("Node Attribute is a way to describe the attributes of a Node without resource guarantees. This could be used by applications to pick up the right nodes for their container to be placed based on expression of multitude of these attributes.")]),t._v(" "),i("h2",{attrs:{id:"features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),i("p",[t._v("The salient features of Node Attributes is as follows:")]),t._v(" "),i("ul",[i("li",[t._v("A Node can be associated with multiple attributes.")]),t._v(" "),i("li",[t._v("Value can be associated with a attribute tagged to a node. String type values are only supported currently.")]),t._v(" "),i("li",[t._v("Unlike Node Labels, Node Attributes need not be specified explicitly at the cluster level, but there are API’s to list the attributes available at the cluster level.")]),t._v(" "),i("li",[t._v("As its non tangible resource, its not associated with any queue and thus queue resource planning and authorisation is not required for attributes.")]),t._v(" "),i("li",[t._v("Similar to the allocation tags, Applications will be able to request containers using expressions containing one or more of these attributes using Placement Constraints.")]),t._v(" "),i("li",[t._v("Equals (=) and Not Equals (!=) are the only supported operators in the expression. AND & OR can also be used as part of attribute expression.")]),t._v(" "),i("li",[t._v("Node attribute constraints are hard limits, that says the allocation can only be made if the node satisfies the node attribute constraint. In another word, the request keeps pending until it finds a valid node satisfying the constraint. There is no relax policy at present.")]),t._v(" "),i("li",[t._v("Operability\n"),i("ul",[i("li",[t._v("Node Attributes and its mapping to nodes can be recovered across RM restart")]),t._v(" "),i("li",[t._v("Update node attributes - admin can add, remove and replace attributes on nodes when RM is running")])])]),t._v(" "),i("li",[t._v("Mapping of NM to node attributes can be done in two ways,\n"),i("ul",[i("li",[t._v("Centralised : Node to attributes mapping can be done through RM exposed CLI or RPC (REST is yet to be supported).")]),t._v(" "),i("li",[t._v("Distributed : Node to attributes mapping will be set by a configured Node Attributes Provider in NM. We have two different providers in YARN: Script based provider and Configuration based provider. In case of script, NM can be configured with a script path and the script can emit the attribute(s) of the node. In case of config, node Attributes can be directly configured in the NM’s yarn-site.xml. In both of these options dynamic refresh of the attribute mapping is supported.")])])]),t._v(" "),i("li",[t._v("Unlike labels, attributes can be mapped to a node from both Centralised and Distributed modes at the same time. There will be no clashes as attributes are identified with different prefix in different modes. In case of Centralized attributes are identified by prefix “rm.yarn.io” and in case of Distributed attributes are identified by prefix “nm.yarn.io”. This implies attributes are uniquely identified by prefix and name.")])]),t._v(" "),i("h2",{attrs:{id:"configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),i("h3",{attrs:{id:"setting-up-resourcemanager-for-node-attributes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-resourcemanager-for-node-attributes"}},[t._v("#")]),t._v(" Setting up ResourceManager for Node Attributes")]),t._v(" "),i("p",[t._v("Unlike Node Labels, Node Attributes need not be explicitly enabled as it will always exist and would have no impact in terms of performance or compatibility even if feature is not used.")]),t._v(" "),i("p",[t._v("Setup following properties in yarn-site.xml")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Property")]),t._v(" "),i("th",[t._v("Value")]),t._v(" "),i("th",[t._v("Default Value")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("yarn.node-attribute.fs-store.root-dir")]),t._v(" "),i("td",[t._v("path where centralized attribute mappings are stored")]),t._v(" "),i("td",[t._v("<file:///tmp/hadoop-yarn-${user}/node-attribute/>")])]),t._v(" "),i("tr",[i("td",[t._v("yarn.node-attribute.fs-store.impl.class")]),t._v(" "),i("td",[t._v("Configured class needs to extend org.apache.hadoop.yarn.nodelabels.NodeAttributeStore")]),t._v(" "),i("td",[t._v("FileSystemNodeAttributeStore")])])])]),t._v(" "),i("p",[t._v("Notes:")]),t._v(" "),i("ul",[i("li",[t._v("Make sure yarn.node-attribute.fs-store.root-dir is created with resource manager process user and ResourceManager has permission to access it. (Typically from “yarn” user)")]),t._v(" "),i("li",[t._v("If user want to store node attributes to local file system of RM, paths like file:///home/yarn/node-attributes can be used else if in hdfs paths like hdfs://namenode:port/path/to/store/node-attributes/ can be used.")])]),t._v(" "),i("h3",{attrs:{id:"centralised-node-attributes-mapping"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#centralised-node-attributes-mapping"}},[t._v("#")]),t._v(" Centralised Node Attributes mapping.")]),t._v(" "),i("p",[t._v("Three options are supported to map attributes to node in Centralised approach:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("add Executing yarn nodeattributes -add “node1:attribute[(type)][=value],attribute2 node2:attribute2[=value],attribute3 adds attributes to the nodes without impacting already existing mapping on the node(s).")])]),t._v(" "),i("li",[i("p",[t._v('remove Executing yarn nodeattributes -remove “node1:attribute,attribute1 node2:attribute2" removes attributes to the nodes without impacting already existing mapping on the node(s).')])]),t._v(" "),i("li",[i("p",[t._v('replace Executing yarn nodeattributes -replace “node1:attribute[(type)][=value],attribute1[=value],attribute2 node2:attribute2[=value],attribute3"" replaces the existing attributes to the nodes with the one configured as part of this command.')])])]),t._v(" "),i("p",[t._v("Notes:")]),t._v(" "),i("ul",[i("li",[t._v("Ports need not be mentioned, attributes are mapped to all the NM instances in the node.")]),t._v(" "),i("li",[t._v("Space is the delimiter for multiple node-Attribute mapping pair")]),t._v(" "),i("li",[t._v("“,” is used as delimiter for multiple attributes of a node.")]),t._v(" "),i("li",[t._v("“type” defaults to string if not specified which is the only type currently supported.")]),t._v(" "),i("li",[t._v("All the above 3 operations can be performed only by admin user.")])]),t._v(" "),i("h3",{attrs:{id:"distributed-node-attributes-mapping"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#distributed-node-attributes-mapping"}},[t._v("#")]),t._v(" Distributed Node Attributes mapping.")]),t._v(" "),i("p",[t._v("Configuring attributes to nodes in Distributed mode")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Property")]),t._v(" "),i("th",[t._v("Value")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("yarn.nodemanager.node-attributes.provider")]),t._v(" "),i("td",[t._v("Administrators can configure the provider for the node attributes by configuring this parameter in NM. Administrators can configure “config”, “script” or the class name of the provider. Configured class needs to extend org.apache.hadoop.yarn.server.nodemanager.nodelabels.NodeAttributesProvider. If “config” is configured, then “ConfigurationNodeAttributesProvider” and if “script” is configured, then “ScriptBasedNodeAttributesProvider” will be used.")])]),t._v(" "),i("tr",[i("td",[t._v("yarn.nodemanager.node-attributes.provider.fetch-interval-ms")]),t._v(" "),i("td",[t._v("When “yarn.nodemanager.node-attributes.provider” is configured with “config”, “script” or the configured class extends NodeAttributesProvider, then periodically node attributes are retrieved from the node attributes provider. This configuration is to define the interval period. If -1 is configured, then node attributes are retrieved from provider only during initialisation. Defaults to 10 mins.")])]),t._v(" "),i("tr",[i("td",[t._v("yarn.nodemanager.node-attributes.provider.fetch-timeout-ms")]),t._v(" "),i("td",[t._v("When “yarn.nodemanager.node-attributes.provider” is configured with “script”, then this configuration provides the timeout period after which it will interrupt the script which queries the node attributes. Defaults to 20 mins.")])]),t._v(" "),i("tr",[i("td",[t._v("yarn.nodemanager.node-attributes.provider.script.path")]),t._v(" "),i("td",[t._v("The node attribute script NM runs to collect node attributes. Lines in the script output starting with “NODE_ATTRIBUTE:” will be considered as a record of node attribute, attribute name, type and value should be delimited by comma. Each of such lines will be parsed to a node attribute.")])]),t._v(" "),i("tr",[i("td",[t._v("yarn.nodemanager.node-attributes.provider.script.opts")]),t._v(" "),i("td",[t._v("The arguments to pass to the node attribute script.")])]),t._v(" "),i("tr",[i("td",[t._v("yarn.nodemanager.node-attributes.provider.configured-node-attributes")]),t._v(" "),i("td",[t._v("When “yarn.nodemanager.node-attributes.provider” is configured with “config” then ConfigurationNodeAttributesProvider fetches node attributes from this parameter.")])])])]),t._v(" "),i("h2",{attrs:{id:"specifying-node-attributes-for-application"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specifying-node-attributes-for-application"}},[t._v("#")]),t._v(" Specifying node attributes for application")]),t._v(" "),i("p",[t._v("Applications can use Placement Constraint APIs to specify node attribute request as mentioned in "),i("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/PlacementConstraints.html"}},[t._v("Placement Constraint documentation")]),t._v(".")],1),t._v(" "),i("p",[t._v("Here is an example for creating a Scheduling Request object with NodeAttribute expression:")]),t._v(" "),i("pre",[i("code",[t._v('//expression : AND(python!=3:java=1.8)\nSchedulingRequest schedulingRequest =\n    SchedulingRequest.newBuilder().executionType(\n        ExecutionTypeRequest.newInstance(ExecutionType.GUARANTEED))\n        .allocationRequestId(10L).priority(Priority.newInstance(1))\n        .placementConstraintExpression(\n            PlacementConstraints.and(\n                PlacementConstraints\n                    .targetNodeAttribute(PlacementConstraints.NODE,\n                        NodeAttributeOpCode.NE,\n                        PlacementConstraints.PlacementTargets\n                            .nodeAttribute("python", "3")),\n                PlacementConstraints\n                    .targetNodeAttribute(PlacementConstraints.NODE,\n                        NodeAttributeOpCode.EQ,\n                        PlacementConstraints.PlacementTargets\n                            .nodeAttribute("java", "1.8")))\n                .build()).resourceSizing(\n        ResourceSizing.newInstance(1, Resource.newInstance(1024, 1)))\n        .build();\n')])]),t._v(" "),i("p",[t._v("The above SchedulingRequest requests for 1 container on nodes that must satisfy following constraints: 1. Node attribute rm.yarn.io/python doesn’t exist on the node or it exist but its value is not equal to 3 2. Node attribute rm.yarn.io/java must exist on the node and its value is equal to 1.8")]),t._v(" "),i("h2",{attrs:{id:"monitoring"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[t._v("#")]),t._v(" Monitoring")]),t._v(" "),i("h3",{attrs:{id:"monitoring-through-rest"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-through-rest"}},[t._v("#")]),t._v(" Monitoring through REST")]),t._v(" "),i("p",[t._v("As part of http://rm-http-address:port/ws/v1/cluster/nodes/{nodeid} REST output attributes and its values mapped to the given node can be got.")]),t._v(" "),i("h3",{attrs:{id:"monitoring-through-web-ui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-through-web-ui"}},[t._v("#")]),t._v(" Monitoring through web UI")]),t._v(" "),i("p",[t._v("Yet to be supported")]),t._v(" "),i("h3",{attrs:{id:"monitoring-through-commandline"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-through-commandline"}},[t._v("#")]),t._v(" Monitoring through commandline")]),t._v(" "),i("ul",[i("li",[t._v("Use yarn cluster --list-node-attributes to get all the attributes in the cluster")]),t._v(" "),i("li",[t._v("Use yarn nodeattributes -list to get attributes in the cluster")]),t._v(" "),i("li",[t._v("Use yarn nodeattributes -attributestonodes -attributes "),i("Attributes",[t._v(" to list for each attribute, all the mapped nodes and the attribute value configured for each node. Optionally we can specify for the specified attributes using -attributes.")])],1),t._v(" "),i("li",[t._v("Use yarn nodeattributes -nodestoattributes -nodes "),i("Host",{attrs:{Names:""}},[t._v(" to list all the attributes and its value mapped to a node. Optionally we can specify for the specified node using -nodes.")])],1),t._v(" "),i("li",[t._v("Node status/detail got from yarn node -status will list all the attributes and its value associated with the node.")])]),t._v(" "),i("h2",{attrs:{id:"useful-links"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[t._v("#")]),t._v(" Useful links")]),t._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/PlacementConstraints.html"}},[t._v("Placement Constraint documentation")]),t._v(", if you need more understanding about how to configure Placement Constraints.")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);