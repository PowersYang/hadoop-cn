(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{274:function(e,n,t){"use strict";t.r(n);var o=t(0),s=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hdfs-support-for-multihomed-networks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-support-for-multihomed-networks","aria-hidden":"true"}},[e._v("#")]),e._v(" HDFS Support for Multihomed Networks")]),e._v(" "),t("p",[e._v("This document is targetted to cluster administrators deploying HDFS in multihomed networks. Similar support for YARN/MapReduce is work in progress and will be documented when available.")]),e._v(" "),t("h2",{attrs:{id:"multihoming-background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multihoming-background","aria-hidden":"true"}},[e._v("#")]),e._v(" Multihoming Background")]),e._v(" "),t("p",[e._v("In multihomed networks the cluster nodes are connected to more than one network interface. There could be multiple reasons for doing so.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Security: Security requirements may dictate that intra-cluster traffic be confined to a different network than the network used to transfer data in and out of the cluster.")])]),e._v(" "),t("li",[t("p",[e._v("Performance: Intra-cluster traffic may use one or more high bandwidth interconnects like Fiber Channel, Infiniband or 10GbE.")])]),e._v(" "),t("li",[t("p",[e._v("Failover/Redundancy: The nodes may have multiple network adapters connected to a single network to handle network adapter failure.")])])]),e._v(" "),t("p",[e._v("Note that NIC Bonding (also known as NIC Teaming or Link Aggregation) is a related but separate topic. The following settings are usually not applicable to a NIC bonding configuration which handles multiplexing and failover transparently while presenting a single ‘logical network’ to applications.")]),e._v(" "),t("h2",{attrs:{id:"fixing-hadoop-issues-in-multihomed-environments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-hadoop-issues-in-multihomed-environments","aria-hidden":"true"}},[e._v("#")]),e._v(" Fixing Hadoop Issues In Multihomed Environments")]),e._v(" "),t("h3",{attrs:{id:"ensuring-hdfs-daemons-bind-all-interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ensuring-hdfs-daemons-bind-all-interfaces","aria-hidden":"true"}},[e._v("#")]),e._v(" Ensuring HDFS Daemons Bind All Interfaces")]),e._v(" "),t("p",[e._v("By default HDFS endpoints are specified as either hostnames or IP addresses. In either case HDFS daemons will bind to a single IP address making the daemons unreachable from other networks.")]),e._v(" "),t("p",[e._v("The solution is to have separate setting for server endpoints to force binding the wildcard IP address INADDR_ANY i.e. 0.0.0.0. Do NOT supply a port number with any of these settings.")]),e._v(" "),t("p",[e._v("NOTE: Prefer using hostnames over IP addresses in master/slave configuration files.")]),e._v(" "),t("pre",[t("code",[e._v("<property>\n  <name>dfs.namenode.rpc-bind-host</name>\n  <value>0.0.0.0</value>\n  <description>\n    The actual address the RPC server will bind to. If this optional address is\n    set, it overrides only the hostname portion of dfs.namenode.rpc-address.\n    It can also be specified per name node or name service for HA/Federation.\n    This is useful for making the name node listen on all interfaces by\n    setting it to 0.0.0.0.\n  </description>\n</property>\n\n<property>\n  <name>dfs.namenode.servicerpc-bind-host</name>\n  <value>0.0.0.0</value>\n  <description>\n    The actual address the service RPC server will bind to. If this optional address is\n    set, it overrides only the hostname portion of dfs.namenode.servicerpc-address.\n    It can also be specified per name node or name service for HA/Federation.\n    This is useful for making the name node listen on all interfaces by\n    setting it to 0.0.0.0.\n  </description>\n</property>\n\n<property>\n  <name>dfs.namenode.http-bind-host</name>\n  <value>0.0.0.0</value>\n  <description>\n    The actual address the HTTP server will bind to. If this optional address\n    is set, it overrides only the hostname portion of dfs.namenode.http-address.\n    It can also be specified per name node or name service for HA/Federation.\n    This is useful for making the name node HTTP server listen on all\n    interfaces by setting it to 0.0.0.0.\n  </description>\n</property>\n\n<property>\n  <name>dfs.namenode.https-bind-host</name>\n  <value>0.0.0.0</value>\n  <description>\n    The actual address the HTTPS server will bind to. If this optional address\n    is set, it overrides only the hostname portion of dfs.namenode.https-address.\n    It can also be specified per name node or name service for HA/Federation.\n    This is useful for making the name node HTTPS server listen on all\n    interfaces by setting it to 0.0.0.0.\n  </description>\n</property>\n")])]),e._v(" "),t("h3",{attrs:{id:"clients-use-hostnames-when-connecting-to-datanodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clients-use-hostnames-when-connecting-to-datanodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Clients use Hostnames when connecting to DataNodes")]),e._v(" "),t("p",[e._v("By default HDFS clients connect to DataNodes using the IP address provided by the NameNode. Depending on the network configuration this IP address may be unreachable by the clients. The fix is letting clients perform their own DNS resolution of the DataNode hostname. The following setting enables this behavior.")]),e._v(" "),t("pre",[t("code",[e._v("<property>\n  <name>dfs.client.use.datanode.hostname</name>\n  <value>true</value>\n  <description>Whether clients should use datanode hostnames when\n    connecting to datanodes.\n  </description>\n</property>\n")])]),e._v(" "),t("h3",{attrs:{id:"datanodes-use-hostnames-when-connecting-to-other-datanodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datanodes-use-hostnames-when-connecting-to-other-datanodes","aria-hidden":"true"}},[e._v("#")]),e._v(" DataNodes use HostNames when connecting to other DataNodes")]),e._v(" "),t("p",[e._v("Rarely, the NameNode-resolved IP address for a DataNode may be unreachable from other DataNodes. The fix is to force DataNodes to perform their own DNS resolution for inter-DataNode connections. The following setting enables this behavior.")]),e._v(" "),t("pre",[t("code",[e._v("<property>\n  <name>dfs.datanode.use.datanode.hostname</name>\n  <value>true</value>\n  <description>Whether datanodes should use datanode hostnames when\n    connecting to other datanodes for data transfer.\n  </description>\n</property>\n")])]),e._v(" "),t("h2",{attrs:{id:"multihoming-and-hadoop-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multihoming-and-hadoop-security","aria-hidden":"true"}},[e._v("#")]),e._v(" Multihoming and Hadoop Security")]),e._v(" "),t("p",[e._v("Configuring multihomed hosts with "),t("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/SecureMode.html"}},[e._v("Hadoop in Secure Mode")]),e._v(" may require additional configuration.")],1),e._v(" "),t("h3",{attrs:{id:"hostname-lookup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hostname-lookup","aria-hidden":"true"}},[e._v("#")]),e._v(" Hostname Lookup")]),e._v(" "),t("p",[e._v("Kerberos principals for Hadoop Services are specified using the pattern ServiceName/_HOST@REALM.TLD e.g. nn/_HOST@REALM.TLD. This allows the same configuration file to be used on all hosts. Services will substitute _HOST in the principal with their own hostname looked up at runtime.")]),e._v(" "),t("p",[e._v("When nodes are configured to have multiple hostnames in DNS or in /etc/hosts files, a service may lookup a different hostname than what is expected by the server. e.g. intra-cluster traffic between two services may be routed over a private interface but the client service looked up its public hostname. Kerberos authentication will fail since the hostname in the principal does not match the IP address over which the traffic arrived.")]),e._v(" "),t("p",[e._v("The following setting (available starting Apache Hadoop 2.8.0) can be used to control the hostname looked up the service.")]),e._v(" "),t("pre",[t("code",[e._v("<property>\n  <name>hadoop.security.dns.interface</name>\n  <description>\n    The name of the Network Interface from which the service should determine\n    its host name for Kerberos login. e.g. eth2. In a multi-homed environment,\n    the setting can be used to affect the _HOST subsitution in the service\n    Kerberos principal. If this configuration value is not set, the service\n    will use its default hostname as returned by\n    InetAddress.getLocalHost().getCanonicalHostName().\n\n    Most clusters will not require this setting.\n  </description>\n</property>\n")])]),e._v(" "),t("p",[e._v("Services can also be configured to use a specific DNS server for hostname lookups (rarely required).")]),e._v(" "),t("pre",[t("code",[e._v("<property>\n  <name>hadoop.security.dns.nameserver</name>\n  <description>\n    The host name or IP address of the name server (DNS) which a service Node\n    should use to determine its own host name for Kerberos Login. Requires\n    hadoop.security.dns.interface.\n\n    Most clusters will not require this setting.\n  </description>\n</property>\n")])])])}),[],!1,null,null,null);n.default=s.exports}}]);