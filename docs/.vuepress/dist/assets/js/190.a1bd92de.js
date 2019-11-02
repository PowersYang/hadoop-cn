(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{392:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hdfs-router-based-federation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-router-based-federation"}},[e._v("#")]),e._v(" HDFS Router-based Federation")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("NameNodes have scalability limits because of the metadata overhead comprised of inodes (files and directories) and file blocks, the number of Datanode heartbeats, and the number of HDFS RPC client requests. The common solution is to split the filesystem into smaller subclusters "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/Federation.html"}},[e._v("HDFS Federation")]),e._v(" and provide a federated view "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/ViewFs.html"}},[e._v("ViewFs")]),e._v(". The problem is how to maintain the split of the subclusters (e.g., namespace partition), which forces users to connect to multiple subclusters and manage the allocation of folders/files to them.")],1),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[e._v("A natural extension to this partitioned federation is to add a layer of software responsible for federating the namespaces. This extra layer allows users to access any subcluster transparently, lets subclusters manage their own block pools independently, and will support rebalancing of data across subclusters later (see more info in "),a("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-13123",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS-13123"),a("OutboundLink")],1),e._v("). The subclusters in RBF are not required to be the independent HDFS clusters, a normal federation cluster (with multiple block pools) or a mixed cluster with federation and independent cluster is also allowed. To accomplish these goals, the federation layer directs block accesses to the proper subcluster, maintains the state of the namespaces, and provides mechanisms for data rebalancing. This layer must be scalable, highly available, and fault tolerant.")]),e._v(" "),a("p",[e._v("This federation layer comprises multiple components. The Router component that has the same interface as a NameNode, and forwards the client requests to the correct subcluster, based on ground-truth information from a State Store. The State Store combines a remote Mount Table (in the flavor of "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/ViewFs.html"}},[e._v("ViewFs")]),e._v(", but shared between clients) and utilization (load/capacity) information about the subclusters. This approach has the same architecture as "),a("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/Federation.html"}},[e._v("YARN federation")]),e._v(".")],1),e._v(" "),a("img",{attrs:{src:"/images/routerfederation.png",alt:"Router-based Federation Sequence Diagram | width=800"}}),e._v(" "),a("h3",{attrs:{id:"example-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-flow"}},[e._v("#")]),e._v(" Example flow")]),e._v(" "),a("p",[e._v("The simplest configuration deploys a Router on each NameNode machine. The Router monitors the local NameNode and heartbeats the state to the State Store. When a regular DFS client contacts any of the Routers to access a file in the federated filesystem, the Router checks the Mount Table in the State Store (i.e., the local cache) to find out which subcluster contains the file. Then it checks the Membership table in the State Store (i.e., the local cache) for the NameNode responsible for the subcluster. After it has identified the correct NameNode, the Router proxies the request. The client accesses Datanodes directly.")]),e._v(" "),a("h3",{attrs:{id:"router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[e._v("#")]),e._v(" Router")]),e._v(" "),a("p",[e._v("There can be multiple Routers in the system with soft state. Each Router has two roles:")]),e._v(" "),a("h4",{attrs:{id:"federated-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#federated-interface"}},[e._v("#")]),e._v(" Federated interface")]),e._v(" "),a("p",[e._v("The Router receives a client request, checks the State Store for the correct subcluster, and forwards the request to the active NameNode of that subcluster. The reply from the NameNode then flows in the opposite direction. The Routers are stateless and can be behind a load balancer. For health checking, you can use /isActive endpoint as a health probe (e.g. "),a("a",{attrs:{href:"http://ROUTER_HOSTNAME:ROUTER_PORT/isActive",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ROUTER_HOSTNAME:ROUTER_PORT/isActive"),a("OutboundLink")],1),e._v("). For performance, the Router also caches remote mount table entries and the state of the subclusters. To make sure that changes have been propagated to all Routers, each Router heartbeats its state to the State Store.")]),e._v(" "),a("p",[e._v("The communications between the Routers and the State Store are cached (with timed expiration for freshness). This improves the performance of the system.")]),e._v(" "),a("h4",{attrs:{id:"namenode-heartbeat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namenode-heartbeat"}},[e._v("#")]),e._v(" NameNode heartbeat")]),e._v(" "),a("p",[e._v("For this role, the Router periodically checks the state of a NameNode (usually on the same server) and reports their high availability (HA) state and load/space status to the State Store. Note that this is an optional role, as a Router can be independent of any subcluster. For performance with NameNode HA, the Router uses the high availability state information in the State Store to forward the request to the NameNode that is most likely to be active. Note that this service can be embedded into the NameNode itself to simplify the operation.")]),e._v(" "),a("h4",{attrs:{id:"availability-and-fault-tolerance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#availability-and-fault-tolerance"}},[e._v("#")]),e._v(" Availability and fault tolerance")]),e._v(" "),a("p",[e._v("The Router operates with failures at multiple levels.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Federated interface HA: The Routers are stateless and metadata operations are atomic at the NameNodes. If a Router becomes unavailable, any Router can take over for it. The clients configure their DFS HA client (e.g., ConfiguredFailoverProvider or RequestHedgingProxyProvider) with all the Routers in the federation as endpoints.")])]),e._v(" "),a("li",[a("p",[e._v("Unavailable State Store: If a Router cannot contact the State Store, it will enter into a Safe Mode state which disallows it from serving requests. Clients will treat Routers in Safe Mode as it was an Standby NameNode and try another Router. There is a manual way to manage the Safe Mode for the Router.")])])]),e._v(" "),a("p",[e._v("The Safe Mode state can be managed by using the following command:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -safemode enter | leave | get\n")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("NameNode heartbeat HA: For high availability and flexibility, multiple Routers can monitor the same NameNode and heartbeat the information to the State Store. This increases clients’ resiliency to stale information, should a Router fail. Conflicting NameNode information in the State Store is resolved by each Router via a quorum.")])]),e._v(" "),a("li",[a("p",[e._v("Unavailable NameNodes: If a Router cannot contact the active NameNode, then it will try the other NameNodes in the subcluster. It will first try those reported as standby and then the unavailable ones. If the Router cannot reach any NameNode, then it throws an exception.")])]),e._v(" "),a("li",[a("p",[e._v("Expired NameNodes: If a NameNode heartbeat has not been recorded in the State Store for a multiple of the heartbeat interval, the monitoring Router will record that the NameNode has expired and no Routers will attempt to access it. If an updated heartbeat is subsequently recorded for the NameNode, the monitoring Router will restore the NameNode from the expired state.")])])]),e._v(" "),a("h4",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),a("p",[e._v("To interact with the users and the administrators, the Router exposes multiple interfaces.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("RPC: The Router RPC implements the most common interfaces clients use to interact with HDFS. The current implementation has been tested using analytics workloads written in plain MapReduce, Spark, and Hive (on Tez, Spark, and MapReduce). Advanced functions like snapshot, encryption and tiered storage are left for future versions. All unimplemented functions will throw exceptions.")])]),e._v(" "),a("li",[a("p",[e._v("Admin: Administrators can query information from clusters and add/remove entries from the mount table over RPC. This interface is also exposed through the command line to get and modify information from the federation.")])]),e._v(" "),a("li",[a("p",[e._v("Web UI: The Router exposes a Web UI visualizing the state of the federation, mimicking the current NameNode UI. It displays information about the mount table, membership information about each subcluster, and the status of the Routers.")])]),e._v(" "),a("li",[a("p",[e._v("WebHDFS: The Router provides the HDFS REST interface (WebHDFS) in addition to the RPC one.")])]),e._v(" "),a("li",[a("p",[e._v("JMX: It exposes metrics through JMX mimicking the NameNode. This is used by the Web UI to get the cluster status.")])])]),e._v(" "),a("p",[e._v("Some operations are not available in Router-based federation. The Router throws exceptions for those. Examples users may encounter include the following.")]),e._v(" "),a("ul",[a("li",[e._v("Rename file/folder in two different nameservices.")]),e._v(" "),a("li",[e._v("Copy file/folder in two different nameservices.")]),e._v(" "),a("li",[e._v("Write into a file/folder being rebalanced.")])]),e._v(" "),a("h3",{attrs:{id:"quota-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quota-management"}},[e._v("#")]),e._v(" Quota management")]),e._v(" "),a("p",[e._v("Federation supports and controls global quota at mount table level. For performance reasons, the Router caches the quota usage and updates it periodically. These quota usage values will be used for quota-verification during each WRITE RPC call invoked in RouterRPCSever. See "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/HdfsQuotaAdminGuide.html"}},[e._v("HDFS Quotas Guide")]),e._v(" for the quota detail.")],1),e._v(" "),a("h3",{attrs:{id:"state-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-store"}},[e._v("#")]),e._v(" State Store")]),e._v(" "),a("p",[e._v("The (logically centralized, but physically distributed) State Store maintains:")]),e._v(" "),a("ul",[a("li",[e._v("The state of the subclusters in terms of their block access load, available disk space, HA state, etc.")]),e._v(" "),a("li",[e._v("The mapping between folder/files and subclusters, i.e. the remote mount table.")])]),e._v(" "),a("p",[e._v("The backend of the State Store is pluggable. We leverage the fault tolerance of the backend implementations. The main information stored in the State Store and its implementation:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Membership: The membership information encodes the state of the NameNodes in the federation. This includes information about the subcluster, such as storage capacity and the number of nodes. The Router periodically heartbeats this information about one or more NameNodes. Given that multiple Routers can monitor a single NameNode, the heartbeat from every Router is stored. The Routers apply a quorum of the data when querying this information from the State Store. The Routers discard the entries older than a certain threshold (e.g., ten Router heartbeat periods).")])]),e._v(" "),a("li",[a("p",[e._v("Mount Table: This table hosts the mapping between folders and subclusters. It is similar to the mount table in "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/ViewFs.html"}},[e._v("ViewFs")]),e._v(" where it specifies the federated folder, the destination subcluster and the path in that folder.")],1)])]),e._v(" "),a("h3",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("p",[e._v("Secure authentication and authorization are not supported yet, so the Router will not proxy to Hadoop clusters with security enabled.")]),e._v(" "),a("h2",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),a("p",[e._v("By default, the Router is ready to take requests and monitor the NameNode in the local machine. It needs to know the State Store endpoint by setting dfs.federation.router.store.driver.class. The rest of the options are documented in "),a("a",{attrs:{href:"../hadoop-hdfs-rbf/hdfs-rbf-default.xml"}},[e._v("hdfs-rbf-default.xml")]),e._v(".")]),e._v(" "),a("p",[e._v("Once the Router is configured, it can be started:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_PREFIX/bin/hdfs --daemon start dfsrouter\n")])]),e._v(" "),a("p",[e._v("And to stop it:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_PREFIX/bin/hdfs --daemon stop dfsrouter\n")])]),e._v(" "),a("h3",{attrs:{id:"mount-table-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-table-management"}},[e._v("#")]),e._v(" Mount table management")]),e._v(" "),a("p",[e._v("The mount table entries are pretty much the same as in "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/ViewFs.html"}},[e._v("ViewFs")]),e._v(". A good practice for simplifying the management is to name the federated namespace with the same names as the destination namespaces. For example, if we to mount /data/app1 in the federated namespace, it is recommended to have that same name as in the destination namespace.")],1),e._v(" "),a("p",[e._v("The federation admin tool supports managing the mount table. For example, to create three mount points and list them:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -add /tmp ns1 /tmp\n[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -add /data/app1 ns2 /data/app1\n[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -add /data/app2 ns3 /data/app2\n[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -ls\n")])]),e._v(" "),a("p",[e._v("It also supports mount points that disallow writes:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -add /readonly ns1 / -readonly\n")])]),e._v(" "),a("p",[e._v("If a mount point is not set, the Router will map it to the default namespace dfs.federation.router.default.nameserviceId.")]),e._v(" "),a("p",[e._v("Mount table have UNIX-like permissions, which restrict which users and groups have access to the mount point. Write permissions allow users to add , update or remove mount point. Read permissions allow users to list mount point. Execute permissions are unused.")]),e._v(" "),a("p",[e._v("Mount table permission can be set by following command:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -add /tmp ns1 /tmp -owner root -group supergroup -mode 0755\n")])]),e._v(" "),a("p",[e._v("The option mode is UNIX-style permissions for the mount table. Permissions are specified in octal, e.g. 0755. By default, this is set to 0755.")]),e._v(" "),a("h4",{attrs:{id:"quotas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quotas"}},[e._v("#")]),e._v(" Quotas")]),e._v(" "),a("p",[e._v("Router-based federation supports global quota at mount table level. Mount table entries may spread multiple subclusters and the global quota will be accounted across these subclusters.")]),e._v(" "),a("p",[e._v("The federation admin tool supports setting quotas for specified mount table entries:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -setQuota /path -nsQuota 100 -ssQuota 1024\n")])]),e._v(" "),a("p",[e._v("The above command means that we allow the path to have a maximum of 100 file/directories and use at most 1024 bytes storage space. The parameter for ssQuota supports multiple size-unit suffix (e.g. 1k is 1KB, 5m is 5MB). If no suffix is specified then bytes is assumed.")]),e._v(" "),a("p",[e._v("Ls command will show below information for each mount table entry:")]),e._v(" "),a("pre",[a("code",[e._v("Source                    Destinations              Owner                     Group                     Mode                      Quota/Usage\n/path                     ns0->/path                root                      supergroup                rwxr-xr-x                 [NsQuota: 50/0, SsQuota: 100 B/0 B]\n")])]),e._v(" "),a("h4",{attrs:{id:"multiple-subclusters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-subclusters"}},[e._v("#")]),e._v(" Multiple subclusters")]),e._v(" "),a("p",[e._v("A mount point also supports mapping multiple subclusters. For example, to create a mount point that stores files in subclusters ns1 and ns2.")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -add /data ns1,ns2 /data -order SPACE\n")])]),e._v(" "),a("p",[e._v("When listing /data, it will show all the folders and files in both subclusters. For deciding where to create a new file/folder it uses the order parameter, it currently supports the following methods:")]),e._v(" "),a("ul",[a("li",[e._v("HASH: Follow consistent hashing in the first level. Deeper levels will be in the one of the parent.")]),e._v(" "),a("li",[e._v("LOCAL: Try to write data in the local subcluster.")]),e._v(" "),a("li",[e._v("RANDOM: Random subcluster. This is usually useful for balancing the load across. Folders are created in all subclusters.")]),e._v(" "),a("li",[e._v("HASH_ALL: Follow consistent hashing at all the levels. This approach tries to balance the reads and writes evenly across subclusters. Folders are created in all subclusters.")]),e._v(" "),a("li",[e._v("SPACE: Try to write data in the subcluster with the most available space. Folders are created in all subclusters.")])]),e._v(" "),a("p",[e._v("For the hash-based approaches, the difference is that HASH would make all the files/folders within a folder belong to the same subcluster while HASH_ALL will spread all files under a mount point. For example, assuming we have a HASH mount point for /data/hash, files and folders under /data/hash/folder0 will all be in the same subcluster. On the other hand, a HASH_ALL mount point for /data/hash_all, will spread files under /data/hash_all/folder0 across all the subclusters for that mount point (subfolders will be created to all subclusters).")]),e._v(" "),a("p",[e._v("RANDOM can be used for reading and writing data from/into different subclusters. The common use for this approach is to have the same data in multiple subclusters and balance the reads across subclusters. For example, if thousands of containers need to read the same data (e.g., a library), one can use RANDOM to read the data from any of the subclusters.")]),e._v(" "),a("p",[e._v("Note that consistency of the data across subclusters is not guaranteed by the Router.")]),e._v(" "),a("h3",{attrs:{id:"disabling-nameservices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-nameservices"}},[e._v("#")]),e._v(" Disabling nameservices")]),e._v(" "),a("p",[e._v("To prevent accessing a nameservice (sublcuster), it can be disabled from the federation. For example, one can disable ns1, list it and enable it again:")]),e._v(" "),a("pre",[a("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -nameservice disable ns1\n[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -getDisabledNameservices\n[hdfs]$ $HADOOP_HOME/bin/hdfs dfsrouteradmin -nameservice enable ns1\n")])]),e._v(" "),a("p",[e._v("This is useful when decommissioning subclusters or when one subcluster is missbehaving (e.g., low performance or unavailability).")]),e._v(" "),a("h2",{attrs:{id:"client-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-configuration"}},[e._v("#")]),e._v(" Client configuration")]),e._v(" "),a("p",[e._v("For clients to use the federated namespace, they need to create a new one that points to the routers. For example, a cluster with 4 namespaces ns0, ns1, ns2, ns3, can add a new one to hdfs-site.xml called ns-fed which points to two of the routers:")]),e._v(" "),a("pre",[a("code",[e._v("<configuration>\n  <property>\n    <name>dfs.nameservices</name>\n    <value>ns0,ns1,ns2,ns3,ns-fed</value>\n  </property>\n  <property>\n    <name>dfs.ha.namenodes.ns-fed</name>\n    <value>r1,r2</value>\n  </property>\n  <property>\n    <name>dfs.namenode.rpc-address.ns-fed.r1</name>\n    <value>router1:rpc-port</value>\n  </property>\n  <property>\n    <name>dfs.namenode.rpc-address.ns-fed.r2</name>\n    <value>router2:rpc-port</value>\n  </property>\n  <property>\n    <name>dfs.client.failover.proxy.provider.ns-fed</name>\n    <value>org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider</value>\n  </property>\n  <property>\n    <name>dfs.client.failover.random.order</name>\n    <value>true</value>\n  </property>\n</configuration>\n")])]),e._v(" "),a("p",[e._v("The dfs.client.failover.random.order set to true allows distributing the load evenly across the routers.")]),e._v(" "),a("p",[e._v("With this setting a user can interact with ns-fed as a regular namespace:")]),e._v(" "),a("pre",[a("code",[e._v("$ $HADOOP_HOME/bin/hdfs dfs -ls hdfs://ns-fed/\n/tmp\n/data\n")])]),e._v(" "),a("p",[e._v("This federated namespace can also be set as the default one at core-site.xml using fs.defaultFS.")]),e._v(" "),a("h2",{attrs:{id:"router-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-configuration"}},[e._v("#")]),e._v(" Router configuration")]),e._v(" "),a("p",[e._v("One can add the configurations for Router-based federation to hdfs-site.xml. The main options are documented in "),a("a",{attrs:{href:"../hadoop-hdfs-rbf/hdfs-rbf-default.xml"}},[e._v("hdfs-rbf-default.xml")]),e._v(". The configuration values are described in this section.")]),e._v(" "),a("h3",{attrs:{id:"rpc-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc-server"}},[e._v("#")]),e._v(" RPC server")]),e._v(" "),a("p",[e._v("The RPC server to receive connections from the clients.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.default.nameserviceId")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("Nameservice identifier of the default subcluster to monitor.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.rpc.enable")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("If true, the RPC service to handle client requests in the router is enabled.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.rpc-address")]),e._v(" "),a("td",[e._v("0.0.0.0:8888")]),e._v(" "),a("td",[e._v("RPC address that handles all clients requests.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.rpc-bind-host")]),e._v(" "),a("td",[e._v("0.0.0.0")]),e._v(" "),a("td",[e._v("The actual address the RPC server will bind to.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.handler.count")]),e._v(" "),a("td",[e._v("10")]),e._v(" "),a("td",[e._v("The number of server threads for the router to handle RPC requests from clients.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.handler.queue.size")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("The size of the queue for the number of handlers to handle RPC client requests.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.reader.count")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("The number of readers for the router to handle RPC client requests.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.reader.queue.size")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("The size of the queue for the number of readers for the router to handle RPC client requests.")])])])]),e._v(" "),a("h4",{attrs:{id:"connection-to-the-namenodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-to-the-namenodes"}},[e._v("#")]),e._v(" Connection to the Namenodes")]),e._v(" "),a("p",[e._v("The Router forwards the client requests to the NameNodes. It uses a pool of connections to reduce the latency of creating them.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.connection.pool-size")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("Size of the pool of connections from the router to namenodes.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.connection.clean.ms")]),e._v(" "),a("td",[e._v("10000")]),e._v(" "),a("td",[e._v("Time interval, in milliseconds, to check if the connection pool should remove unused connections.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.connection.pool.clean.ms")]),e._v(" "),a("td",[e._v("60000")]),e._v(" "),a("td",[e._v("Time interval, in milliseconds, to check if the connection manager should remove unused connection pools.")])])])]),e._v(" "),a("h3",{attrs:{id:"admin-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-server"}},[e._v("#")]),e._v(" Admin server")]),e._v(" "),a("p",[e._v("The administration server to manage the Mount Table.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.admin.enable")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("If true, the RPC admin service to handle client requests in the router is enabled.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.admin-address")]),e._v(" "),a("td",[e._v("0.0.0.0:8111")]),e._v(" "),a("td",[e._v("RPC address that handles the admin requests.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.admin-bind-host")]),e._v(" "),a("td",[e._v("0.0.0.0")]),e._v(" "),a("td",[e._v("The actual address the RPC admin server will bind to.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.admin.handler.count")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("The number of server threads for the router to handle RPC requests from admin.")])])])]),e._v(" "),a("h3",{attrs:{id:"http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-server"}},[e._v("#")]),e._v(" HTTP Server")]),e._v(" "),a("p",[e._v("The HTTP Server to provide Web UI and the HDFS REST interface ("),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS.html"}},[e._v("WebHDFS")]),e._v(") for the clients. The default URL is “http://router_host:50071”.")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.http.enable")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("If true, the HTTP service to handle client requests in the router is enabled.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.http-address")]),e._v(" "),a("td",[e._v("0.0.0.0:50071")]),e._v(" "),a("td",[e._v("HTTP address that handles the web requests to the Router.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.http-bind-host")]),e._v(" "),a("td",[e._v("0.0.0.0")]),e._v(" "),a("td",[e._v("The actual address the HTTP server will bind to.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.https-address")]),e._v(" "),a("td",[e._v("0.0.0.0:50072")]),e._v(" "),a("td",[e._v("HTTPS address that handles the web requests to the Router.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.https-bind-host")]),e._v(" "),a("td",[e._v("0.0.0.0")]),e._v(" "),a("td",[e._v("The actual address the HTTPS server will bind to.")])])])]),e._v(" "),a("h3",{attrs:{id:"state-store-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-store-2"}},[e._v("#")]),e._v(" State Store")]),e._v(" "),a("p",[e._v("The connection to the State Store and the internal caching at the Router.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.store.enable")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("If true, the Router connects to the State Store.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.store.serializer")]),e._v(" "),a("td",[e._v("org.apache.hadoop.hdfs.server.federation.store.driver.impl.StateStoreSerializerPBImpl")]),e._v(" "),a("td",[e._v("Class to serialize State Store records.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.store.driver.class")]),e._v(" "),a("td",[e._v("org.apache.hadoop.hdfs.server.federation.store.driver.impl.StateStoreZooKeeperImpl")]),e._v(" "),a("td",[e._v("Class to implement the State Store.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.store.connection.test")]),e._v(" "),a("td",[e._v("60000")]),e._v(" "),a("td",[e._v("How often to check for the connection to the State Store in milliseconds.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.cache.ttl")]),e._v(" "),a("td",[e._v("60000")]),e._v(" "),a("td",[e._v("How often to refresh the State Store caches in milliseconds.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.store.membership.expiration")]),e._v(" "),a("td",[e._v("300000")]),e._v(" "),a("td",[e._v("Expiration time in milliseconds for a membership record.")])])])]),e._v(" "),a("h3",{attrs:{id:"routing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),a("p",[e._v("Forwarding client requests to the right subcluster.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.file.resolver.client.class")]),e._v(" "),a("td",[e._v("org.apache.hadoop.hdfs.server.federation.resolver.MountTableResolver")]),e._v(" "),a("td",[e._v("Class to resolve files to subclusters.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.namenode.resolver.client.class")]),e._v(" "),a("td",[e._v("org.apache.hadoop.hdfs.server.federation.resolver.MembershipNamenodeResolver")]),e._v(" "),a("td",[e._v("Class to resolve the namenode for a subcluster.")])])])]),e._v(" "),a("h3",{attrs:{id:"namenode-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namenode-monitoring"}},[e._v("#")]),e._v(" Namenode monitoring")]),e._v(" "),a("p",[e._v("Monitor the namenodes in the subclusters for forwarding the client requests.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.heartbeat.enable")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("If true, the Router heartbeats into the State Store.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.heartbeat.interval")]),e._v(" "),a("td",[e._v("5000")]),e._v(" "),a("td",[e._v("How often the Router should heartbeat into the State Store in milliseconds.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.monitor.namenode")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("The identifier of the namenodes to monitor and heartbeat.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.monitor.localnamenode.enable")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("If true, the Router should monitor the namenode in the local machine.")])])])]),e._v(" "),a("p",[e._v("Note: The config dfs.nameservice.id is recommended to configure if dfs.federation.router.monitor.localnamenode.enable is enabled. This will allow the Router finding the local node directly. Otherwise, it will find the nameservice Id by matching namenode RPC address with the local node address. If multiple addresses are matched, the Router will fail to start. In addition, if the local node is in a HA mode, it is recommend to configure dfs.ha.namenode.id.")]),e._v(" "),a("h3",{attrs:{id:"quota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quota"}},[e._v("#")]),e._v(" Quota")]),e._v(" "),a("p",[e._v("Global quota supported in federation.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("dfs.federation.router.quota.enable")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("If true, the quota system enabled in the Router.")])]),e._v(" "),a("tr",[a("td",[e._v("dfs.federation.router.quota-cache.update.interval")]),e._v(" "),a("td",[e._v("60s")]),e._v(" "),a("td",[e._v("How often the Router updates quota cache. This setting supports multiple time unit suffixes. If no suffix is specified then milliseconds is assumed.")])])])]),e._v(" "),a("h2",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),a("p",[e._v("The Router and State Store statistics are exposed in metrics/JMX. These info will be very useful for monitoring. More metrics info can see "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-common/Metrics.html#RouterRPCMetrics"}},[e._v("Router RPC Metrics")]),e._v(" and "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-common/Metrics.html#StateStoreMetrics"}},[e._v("State Store Metrics")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);