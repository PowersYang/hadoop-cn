(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{268:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hdfs-datanode-admin-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-datanode-admin-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" HDFS DataNode Admin Guide")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The Hadoop Distributed File System (HDFS) namenode maintains states of all datanodes. There are two types of states. The fist type describes the liveness of a datanode indicating if the node is live, dead or stale. The second type describes the admin state indicating if the node is in service, decommissioned or under maintenance.")]),e._v(" "),a("p",[e._v("When an administrator decommission a datanode, the datanode will first be transitioned into DECOMMISSION_INPROGRESS state. After all blocks belonging to that datanode have been fully replicated elsewhere based on each block’s replication factor. the datanode will be transitioned to DECOMMISSIONED state. After that, the administrator can shutdown the node to perform long-term repair and maintenance that could take days or weeks. After the machine has been repaired, the machine can be recommissioned back to the cluster.")]),e._v(" "),a("p",[e._v("Sometimes administrators only need to take datanodes down for minutes/hours to perform short-term repair/maintenance. In such scenario, the HDFS block replication overhead incurred by decommission might not be necessary and a light-weight process is desirable. And that is what maintenance state is used for. When an administrator put a datanode in maintenance state, the datanode will first be transitioned to ENTERING_MAINTENANCE state. As long as all blocks belonging to that datanode is minimally replicated elsewhere, the datanode will immediately be transitioned to IN_MAINTENANCE state. After the maintenance has completed, the administrator can take the datanode out of the maintenance state. In addition, maintenance state supports timeout that allows administrators to config the maximum duration in which a datanode is allowed to stay in maintenance state. After the timeout, the datanode will be transitioned out of maintenance state automatically by HDFS without human intervention.")]),e._v(" "),a("p",[e._v("In summary, datanode admin operations include the followings:")]),e._v(" "),a("h3",{attrs:{id:"hostname-only-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname-only-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Hostname-only configuration")]),e._v(" "),a("p",[e._v("This is the default configuration used by the namenode. It only supports node decommission and recommission; it doesn’t support admin operations related to maintenance state. Use dfs.hosts and dfs.hosts.exclude as explained in "),a("a",{attrs:{href:"./hdfs-default.xml"}},[e._v("hdfs-default.xml")]),e._v(".")]),e._v(" "),a("p",[e._v("In the following example, host1 and host2 need to be in service. host3 and host4 need to be in decommissioned state.")]),e._v(" "),a("p",[e._v("dfs.hosts file")]),e._v(" "),a("pre",[a("code",[e._v("host1\nhost2\nhost3\nhost4\n")])]),e._v(" "),a("p",[e._v("dfs.hosts.exclude file")]),e._v(" "),a("pre",[a("code",[e._v("host3\nhost4\n")])]),e._v(" "),a("h3",{attrs:{id:"json-based-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-based-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" JSON-based configuration")]),e._v(" "),a("p",[e._v("JSON-based format is the new configuration format that supports generic properties on datanodes. Set the following configurations to enable JSON-based format as explained in "),a("a",{attrs:{href:"./hdfs-default.xml"}},[e._v("hdfs-default.xml")]),e._v(".")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Setting")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.namenode.hosts.provider.classname")]),e._v(" "),a("td",[e._v("org.apache.hadoop.hdfs.server.blockmanagement.CombinedHostFileManager")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.hosts")]),e._v(" "),a("td",[e._v("the path of the json hosts file")])])])]),e._v(" "),a("p",[e._v("Here is the list of currently supported properties by HDFS.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("hostName")]),e._v(" "),a("td",[e._v("Required. The host name of the datanode.")])]),e._v(" "),a("tr",[a("td",[e._v("upgradeDomain")]),e._v(" "),a("td",[e._v("Optional. The upgrade domain id of the datanode.")])]),e._v(" "),a("tr",[a("td",[e._v("adminState")]),e._v(" "),a("td",[e._v("Optional. The expected admin state. The default value is NORMAL; DECOMMISSIONED for decommission; IN_MAINTENANCE for maintenance state.")])]),e._v(" "),a("tr",[a("td",[e._v("port")]),e._v(" "),a("td",[e._v("Optional. the port number of the datanode")])]),e._v(" "),a("tr",[a("td",[e._v("maintenanceExpireTimeInMS")]),e._v(" "),a("td",[e._v("Optional. The epoch time in milliseconds until which the datanode will remain in maintenance state. The default value is forever.")])])])]),e._v(" "),a("p",[e._v("In the following example, host1 and host2 need to in service. host3 need to be in decommissioned state. host4 need to be in in maintenance state.")]),e._v(" "),a("p",[e._v("dfs.hosts file")]),e._v(" "),a("pre",[a("code",[e._v('[\n  {\n    "hostName": "host1"\n  },\n  {\n    "hostName": "host2",\n    "upgradeDomain": "ud0"\n  },\n  {\n    "hostName": "host3",\n    "adminState": "DECOMMISSIONED"\n  },\n  {\n    "hostName": "host4",\n    "upgradeDomain": "ud2",\n    "adminState": "IN_MAINTENANCE"\n  }\n]\n')])]),e._v(" "),a("h2",{attrs:{id:"cluster-level-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-level-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Cluster-level settings")]),e._v(" "),a("p",[e._v("There are several cluster-level settings related to datanode administration. For common use cases, you should rely on the default values. Please refer to "),a("a",{attrs:{href:"./hdfs-default.xml"}},[e._v("hdfs-default.xml")]),e._v(" for descriptions and default values.")]),e._v(" "),a("pre",[a("code",[e._v("dfs.namenode.maintenance.replication.min\ndfs.namenode.decommission.interval\ndfs.namenode.decommission.blocks.per.interval\ndfs.namenode.decommission.max.concurrent.tracked.nodes\n")])]),e._v(" "),a("h2",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics","aria-hidden":"true"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),a("p",[e._v("Admin states are part of the namenode’s webUI and JMX. As explained in "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html"}},[e._v("HDFSCommands.html")]),e._v(", you can also verify admin states using the following commands.")],1),e._v(" "),a("p",[e._v("Use dfsadmin to check admin states at the cluster level.")]),e._v(" "),a("p",[e._v("hdfs dfsadmin -report")]),e._v(" "),a("p",[e._v("Use fsck to check admin states of datanodes storing data at a specific path. For backward compatibility, a special flag is required to return maintenance states.")]),e._v(" "),a("pre",[a("code",[e._v("hdfs fsck <path> // only show decommission state\nhdfs fsck <path> -maintenance // include maintenance state\n")])])])}),[],!1,null,null,null);t.default=s.exports}}]);