(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{307:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"opportunistic-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opportunistic-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Opportunistic Containers")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("This document introduces the notion of opportunistic container execution, and discusses how opportunistic containers are allocated and executed.")]),e._v(" "),a("h2",{attrs:{id:"quick-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Quick Guide")]),e._v(" "),a("p",[e._v("We start by providing a brief overview of opportunistic containers, including how a user can enable this feature and run a sample job using such containers.")]),e._v(" "),a("h3",{attrs:{id:"main-goal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-goal","aria-hidden":"true"}},[e._v("#")]),e._v(" Main Goal")]),e._v(" "),a("p",[e._v("Unlike existing YARN containers that are scheduled in a node only if there are unallocated resources, opportunistic containers can be dispatched to an NM, even if their execution at that node cannot start immediately. In such a case, opportunistic containers will be queued at that NM until resources become available. The main goal of opportunistic container execution is to improve cluster resource utilization, and therefore increase task throughput. Resource utilization and task throughput improvements are more pronounced for workloads that include relatively short tasks (in the order of seconds).")]),e._v(" "),a("h3",{attrs:{id:"enabling-opportunistic-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-opportunistic-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabling Opportunistic Containers")]),e._v(" "),a("p",[e._v("To enable opportunistic container allocation, the following two properties have to be present in conf/yarn-site.xml:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("yarn.resourcemanager.opportunistic-container-allocation.enabled")]),e._v(" "),a("td",[e._v("Enables opportunistic container allocation.")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.nodemanager.opportunistic-containers-max-queue-length")]),e._v(" "),a("td",[e._v("Determines the max number of opportunistic containers that can be queued at an NM.")]),e._v(" "),a("td",[e._v("0")])])])]),e._v(" "),a("p",[e._v("The first parameter above has to be set to true. The second one has to be set to a positive value to allow queuing of opportunistic containers at the NM. A value of 10 can be used to start experimenting with opportunistic containers. The optimal value depends on the jobs characteristics, the cluster configuration and the target utilization.")]),e._v(" "),a("p",[e._v("By default, allocation of opportunistic containers is performed centrally through the RM. However, a user can choose to enable distributed allocation of opportunistic containers, which can further improve allocation latency for short tasks. Distributed scheduling can be enabling by setting to true the following parameter (note that non-opportunistic containers will continue being scheduled through the RM):")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("yarn.nodemanager.distributed-scheduling.enabled")]),e._v(" "),a("td",[e._v("Enables distributed scheduling.")]),e._v(" "),a("td",[e._v("false")])])])]),e._v(" "),a("p",[e._v("In order to submit jobs to a cluster that has AMRMProxy turned on, one must create a separate set of configs for the client from which jobs will be submitted. In these, the conf/yarn-site.xml should have the following additional configurations:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("yarn.resourcemanager.scheduler.address")]),e._v(" "),a("td",[e._v("localhost:8049")]),e._v(" "),a("td",[e._v("Redirects jobs to the Node Manager’s AMRMProxy port.")])])])]),e._v(" "),a("h3",{attrs:{id:"running-a-sample-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-sample-job","aria-hidden":"true"}},[e._v("#")]),e._v(" Running a Sample Job")]),e._v(" "),a("h4",{attrs:{id:"mapreduce-pi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce-pi","aria-hidden":"true"}},[e._v("#")]),e._v(" MapReduce PI")]),e._v(" "),a("p",[e._v("The following command can be used to run a sample pi map-reduce job, executing 40% of mappers using opportunistic containers:")]),e._v(" "),a("pre",[a("code",[e._v('$ hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.2.1.jar pi -Dmapreduce.job.num-opportunistic-maps-percent="40" 50 100\n')])]),e._v(" "),a("p",[e._v("By changing the value of mapreduce.job.num-opportunistic-maps-percent in the above command, we can specify the percentage of mappers that can be executed through opportunistic containers.")]),e._v(" "),a("h4",{attrs:{id:"distributed-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distributed-shell","aria-hidden":"true"}},[e._v("#")]),e._v(" Distributed Shell")]),e._v(" "),a("p",[e._v("Another sample job is the distributed shell, it allows us to run a given shell command on a set of containers. The following command can be used to run sleep 10 command in 10 opportunistic containers:")]),e._v(" "),a("pre",[a("code",[e._v("$ yarn org.apache.hadoop.yarn.applications.distributedshell.Client -jar share/hadoop/yarn/hadoop-yarn-applications-distributedshell-3.2.1.jar.jar -shell_command sleep -shell_args 10 -num_containers 10 -container_type OPPORTUNISTIC\n")])]),e._v(" "),a("p",[e._v("By change the value of container_type to OPPORTUNISTIC or GUARANTEED in the above command, we can specify the tasks to be running in opportunistic or guaranteed containers. The default type is GUARANTEED. By adding flag -promote_opportunistic_after_start to the above command, application master will attempt to promote all opportunistic containers to guaranteed once they are started. By adding flag ‘-enforce_execution_type’ to the above command, scheduler will honor execution type of the containers.")]),e._v(" "),a("h3",{attrs:{id:"opportunistic-containers-in-web-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opportunistic-containers-in-web-ui","aria-hidden":"true"}},[e._v("#")]),e._v(" Opportunistic Containers in Web UI")]),e._v(" "),a("p",[e._v("When opportunistic container allocation is enabled, the following new columns can be observed in the Nodes page of the Web UI (rm-address:8088/cluster/nodes):")]),e._v(" "),a("ul",[a("li",[e._v("Running Containers (O): number of running opportunistic containers on each node;")]),e._v(" "),a("li",[e._v("Mem Used (O): Total memory used by opportunistic containers on each node;")]),e._v(" "),a("li",[e._v("VCores Used (O): Total CPU virtual cores used by opportunistic containers on each node;")]),e._v(" "),a("li",[e._v("Queued Containers: Number of containers queued at each node.")])]),e._v(" "),a("p",[e._v("When clicking on a specific container running on a node, the execution type of the container is also shown.")]),e._v(" "),a("p",[e._v("In the rest of the document, we provide an in-depth description of opportunistic containers, including details about their allocation and execution.")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The existing schedulers in YARN (Fair and Capacity Scheduler) allocate containers to a node only if there are unallocated resources at that node at the moment of scheduling the containers. This guaranteed type of execution has the advantage that once the AM dispatches a container to a node, the container execution will start immediately, since it is guaranteed that there will be available resources. Moreover, unless fairness or capacity constraints are violated, containers are guaranteed to run to completion without being preempted.")]),e._v(" "),a("p",[e._v("Although this design offers a more predictable task execution, it has two main drawbacks that can lead to suboptimal cluster resource utilization:")]),e._v(" "),a("ul",[a("li",[e._v("Feedback delays. When a container finishes its execution at a node, the RM gets notified that there are available resources through the next NM-RM heartbeat, then the RM schedules a new container at that node, the AM gets notified through the next AM-RM heartbeat, and finally the AM launches the new container at the node. These delays result in idle node resources, which in turn lead to lower resource utilization, especially when workloads involve tasks whose duration is relatively short.")]),e._v(" "),a("li",[e._v("Allocated vs. utilized resources. The RM allocates containers based on the allocated resources at each node, which might be significantly higher than the actually utilized resources (e.g., think of a container for which 4GB memory have been allocated, but only 2GB are being utilized). This lowers effective resource utilization, and can be avoided if the RM takes into account the utilized resources during scheduling. However, this has to be done in a way that allows resources to be reclaimed in case the utilized resources of a running container increase.")])]),e._v(" "),a("p",[e._v("To mitigate the above problems, in addition to the existing containers (which we term guaranteed containers hereafter), we introduce the notion of opportunistic containers. An opportunistic container can be dispatched to an NM, even if there are no available (unallocated) resources for it at the moment of scheduling. In such a case, the opportunistic container will be queued at the NM, waiting for resources to become available for its execution to start. The opportunistic containers are of lower priority than the guaranteed ones, which means that they can be preempted for guaranteed containers to start their execution. Therefore, they can be used to improve cluster resource utilization without impacting the execution of existing guaranteed containers.")]),e._v(" "),a("p",[e._v("An additional advantage of opportunistic containers is that they introduce a notion of execution priority at the NMs. For instance, a lower priority job that does not require strict execution guarantees can use opportunistic containers or a mix of container execution types for its tasks.")]),e._v(" "),a("p",[e._v("We have introduced two ways of allocating opportunistic containers: a centralized and a distributed one. In the centralized scheduling, opportunistic containers are allocated through the YARN RM, whereas in the distributed one, through local schedulers that reside at each NM. Centralized allocation allows for higher quality placement decisions and for implementing more involved sharing policies across applications (e.g., fairness). On the other hand, distributed scheduling can offer faster container allocation, which is useful for short tasks, as it avoids the round-trip to the RM. In both cases, the scheduling of guaranteed containers remains intact and happens through the YARN RM (using the existing Fair or Capacity Scheduler).")]),e._v(" "),a("p",[e._v("Note that in the current implementation, we are allocating containers based on allocated (and not utilized) resources. Therefore, we tackle the “feedback delays” problem mentioned above, but not the “allocated vs. utilized resources” one. There is ongoing work (YARN-1011) that employs opportunistic containers to address the latter problem too.")]),e._v(" "),a("p",[e._v("Below, we describe in more detail the container execution types, as well as the execution (including the container queuing at the NMs) and allocation of opportunistic containers. Then we discuss how to fine-tune opportunistic containers through some advanced configuration parameters. Finally, we discuss open items for future work.")]),e._v(" "),a("h2",{attrs:{id:"container-execution-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-execution-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Container Execution Types")]),e._v(" "),a("p",[e._v("We introduce the following two types of containers:")]),e._v(" "),a("ul",[a("li",[e._v("Guaranteed containers correspond to the existing YARN containers. They are allocated by the Fair or Capacity Scheduler, and once dispatched to a node, it is guaranteed that there are available resources for their execution to start immediately. Moreover, these containers run to completion (as long as there are no failures). They can be preempted only in case the scheduler’s queue to which they belong, violates fairness or capacity constraints.")]),e._v(" "),a("li",[e._v("Opportunistic containers are not guaranteed to have resources for their execution to start when they get dispatched to a node. Instead, they might be queued at the NM until resources become available. In case a guaranteed container arrives at a node and there are no resources available for it, one or more opportunistic containers will be preempted to execute the guaranteed one.")])]),e._v(" "),a("p",[e._v("When an AM submits its resource requests to the RM, it specifies the type for each container (default is guaranteed), determining the way the container will be allocated. Subsequently, when the container is launched by the AM at an NM, its type determines how it will be executed by the NM.")]),e._v(" "),a("h2",{attrs:{id:"execution-of-opportunistic-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution-of-opportunistic-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Execution of Opportunistic Containers")]),e._v(" "),a("p",[e._v("When a container arrives at an NM, its execution is determined by the available resources at the NM and the container type. Guaranteed containers start their execution immediately, and if needed, the NM will kill running opportunistic containers to ensure there are sufficient resources for the guaranteed ones to start. On the other hand, opportunistic containers can be queued at the NM, if there are no resources available to start their execution when they arrive at the NM. To enable this, we extended the NM by allowing queuing of containers at each node. The NM monitors the local resources, and when there are sufficient resources available, it starts the execution of the opportunistic container that is at the head of the queue.")]),e._v(" "),a("p",[e._v("In particular, when a container arrives at an NM, localization is performed (i.e., all required resources are downloaded), and then the container moves to a SCHEDULED state, in which the container is queued, waiting for its execution to begin:")]),e._v(" "),a("ul",[a("li",[e._v("If there are available resources, the execution of the container starts immediately, irrespective of its execution type.")]),e._v(" "),a("li",[e._v("If there are no available resources:\n"),a("ul",[a("li",[e._v("If the container is guaranteed, we kill as many running opportunistic containers as required for the guaranteed container to be executed, and then start its execution.")]),e._v(" "),a("li",[e._v("If the container is opportunistic, it remains at the queue until resources become available.")])])]),e._v(" "),a("li",[e._v("When a container (guaranteed or opportunistic) finishes its execution and resources get freed up, we examine the queued containers and if there are available resources we start their execution. We pick containers from the queue in a FIFO order.")])]),e._v(" "),a("p",[e._v("In the future work items below, we discuss different ways of prioritizing task execution (queue reordering) and of killing opportunistic containers to make space for guaranteed ones.")]),e._v(" "),a("h2",{attrs:{id:"allocation-of-opportunistic-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allocation-of-opportunistic-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Allocation of Opportunistic Containers")]),e._v(" "),a("p",[e._v("As mentioned above, we provide both a centralized and a distributed way of allocating opportunistic containers, which we describe below.")]),e._v(" "),a("h3",{attrs:{id:"centralized-allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centralized-allocation","aria-hidden":"true"}},[e._v("#")]),e._v(" Centralized Allocation")]),e._v(" "),a("p",[e._v("We have introduced a new service at the RM, namely the OpportunisticContainerAllocatorAMService, which extends the ApplicationMasterService. When the centralized opportunistic allocation is enabled, the resource requests from the AMs are served at the RM side by the OpportunisticContainerAllocatorAMService, which splits them into two sets of resource requests:")]),e._v(" "),a("ul",[a("li",[e._v("The guaranteed set is forwarded to the existing ApplicationMasterService and is subsequently handled by the Fair or Capacity Scheduler.")]),e._v(" "),a("li",[e._v("The opportunistic set is handled by the new OpportunisticContainerAllocator, which performs the scheduling of opportunistic containers to nodes.")])]),e._v(" "),a("p",[e._v("The OpportunisticContainerAllocator maintains a list with the least loaded nodes of the cluster at each moment, and assigns containers to them in a round-robin fashion. Note that in the current implementation, we purposely do not take into account node locality constraints. Since an opportunistic container (unlike the guaranteed ones) might wait at the queue of an NM before its execution starts, it is more important to allocate it at a node that is less loaded (i.e., where queuing delay will be smaller) rather than respect its locality constraints. Moreover, we do not take into account sharing (fairness/capacity) constraints for opportunistic containers at the moment. Support for both locality and sharing constraints can be added in the future if required.")]),e._v(" "),a("h3",{attrs:{id:"distributed-allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distributed-allocation","aria-hidden":"true"}},[e._v("#")]),e._v(" Distributed Allocation")]),e._v(" "),a("p",[e._v("In order to enable distributed scheduling of opportunistic containers, we have introduced a new service at each NM, called AMRMProxyService. The AMRMProxyService implements the ApplicationMasterService protocol, and acts as a proxy between the AMs running at that node and the RM. When the AMRMProxyService is enabled (through a parameter), we force all AMs running at a particular node to communicate with the AMRMProxyService of the same node, instead of going directly to the RM. Moreover, to ensure that the AMs will not talk directly with the RM, when a new AM gets initialized, we replace its AMRMToken with a token signed by the AMRMProxyService.")]),e._v(" "),a("p",[e._v("A chain of interceptors can be registered with the AMRMProxyService. One of these interceptors is the DistributedScheduler that is responsible for allocating opportunistic containers in a distributed way, without needing to contact the RM. This modular design makes the AMRMProxyService instrumental in other scenarios too, such as YARN federation (YARN-2915) or throttling down misbehaving AMs, which can be enabled simply by adding additional interceptors at the interceptor chain.")]),e._v(" "),a("p",[e._v("When distributed opportunistic scheduling is enabled, each AM sends its resource requests to the AMRMProxyService running at the same node. The AMRMProxyService splits the resource requests into two sets:")]),e._v(" "),a("ul",[a("li",[e._v("The guaranteed set is forwarded to the RM. In this case the AMRMProxyService simply acts as a proxy between the AM and the RM, and the container allocation remains intact (using the Fair or Capacity Scheduler).")]),e._v(" "),a("li",[e._v("The opportunistic set is not forwarded to the RM. Instead, it is handled by the DistributedScheduler that is running locally at the node. In particular, the DistributedScheduler maintains a list with the least loaded nodes in the cluster, and allocates containers to them in a round-robin fashion. The RM informs the DistributedScheduler about the least loaded nodes at regular intervals through the NM-RM heartbeats.")])]),e._v(" "),a("p",[e._v("The above procedure is similar to the one performed by the OpportunisticContainerAllocatorAMService in the case of centralized opportunistic scheduling described above. The main difference is that in the distributed case, the splitting of requests into guaranteed and opportunistic happens locally at the node, and only the guaranteed requests are forwarded to the RM, while the opportunistic ones are handled without contacting the RM.")]),e._v(" "),a("h3",{attrs:{id:"determining-nodes-for-allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determining-nodes-for-allocation","aria-hidden":"true"}},[e._v("#")]),e._v(" Determining Nodes for Allocation")]),e._v(" "),a("p",[e._v("Each NM informs the RM periodically through the NM-RM heartbeats about the number of running guaranteed and opportunistic containers, as well as the number of queued opportunistic containers. The RM gathers this information from all nodes and determines the least loaded ones.")]),e._v(" "),a("p",[e._v("In the case of centralized allocation of opportunistic containers, this information is immediately available, since the allocation happens centrally. In the case of distributed scheduling, the list with the least loaded nodes is propagated to all NMs (and thus becomes available to the DistributedSchedulers) through the heartbeat responses from the RM to the NMs. The number of least loaded nodes sent to the NMs is configurable.")]),e._v(" "),a("p",[e._v("At the moment, we take into account only the number of queued opportunistic containers at each node in order to estimate the time an opportunistic container would have to wait if sent to that node and, thus, determine the least loaded nodes. If the AM provided us with information about the estimated task durations, we could take them into account in order to have better estimates of the queue waiting times.")]),e._v(" "),a("h3",{attrs:{id:"rebalancing-node-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebalancing-node-load","aria-hidden":"true"}},[e._v("#")]),e._v(" Rebalancing Node Load")]),e._v(" "),a("p",[e._v("Occasionally poor placement choices for opportunistic containers may be made (due to stale queue length estimates), which can lead to load imbalance between nodes. The problem is more pronounced under high cluster load, and also in the case of distributed scheduling (multiple DistributedSchedulers may place containers at the same NM, since they do not coordinate with each other). To deal with this load imbalance between the NM queues, we perform load shedding to dynamically re-balance the load between NMs. In particular, while aggregating at the RM the queue time estimates published by each NM, we construct a distribution and find a targeted maximal value for the length of the NM queues (based on the mean and standard deviation of the distribution). Then the RM disseminates this value to the various NMs through the heartbeat responses. Subsequently, using this information, an NM on a node whose queue length is above the threshold discards opportunistic containers to meet this maximal value. This forces the associated individual AMs to reschedule those containers elsewhere.")]),e._v(" "),a("h2",{attrs:{id:"advanced-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Advanced Configuration")]),e._v(" "),a("p",[e._v("The main properties for enabling opportunistic container allocation and choosing between centralized and distributed allocation were described in the quick guide in the beginning of this document. Here we present more advanced configuration. Note that using default values for those parameters should be sufficient in most cases. All parameters below have to be defined in the conf/yarn-site.xml file.")]),e._v(" "),a("p",[e._v("To determine the number of least loaded nodes that will be used when scheduling opportunistic containers and how often this list will be refreshed, we use the following parameters:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("yarn.resourcemanager.opportunistic-container-allocation.nodes-used")]),e._v(" "),a("td",[e._v("Number of least loaded nodes to be used by the Opportunistic Container allocator for dispatching containers during container allocation. A higher value can improve load balance in large clusters.")]),e._v(" "),a("td",[e._v("10")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.nm-container-queuing.sorting-nodes-interval-ms")]),e._v(" "),a("td",[e._v("Frequency for computing least loaded nodes.")]),e._v(" "),a("td",[e._v("1000")])])])]),e._v(" "),a("p",[e._v("As discussed in the node load rebalancing section above, at regular intervals, the RM gathers all NM queue lengths and computes their mean value (avg) and standard deviation (stdev), as well as the value avg + k*stdev (where k a float). This value gets propagated through the NM-RM heartbeats to all NMs, who should respect that value by dequeuing containers (if required), as long as their current queue length is between a queue_min_length and a queue_max_length value (these values are used to avoid dequeuing tasks from very short queues and to aggressively dequeue tasks from long queues, respectively). The parameters k, queue_min_length and queue_max_length can be specified as follows:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("yarn.resourcemanager.nm-container-queuing.queue-limit-stdev")]),e._v(" "),a("td",[e._v("The k parameter.")]),e._v(" "),a("td",[e._v("1.0f")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.nm-container-queuing.min-queue-length")]),e._v(" "),a("td",[e._v("The queue_min_length parameter.")]),e._v(" "),a("td",[e._v("5")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.resourcemanager.nm-container-queuing.max-queue-length")]),e._v(" "),a("td",[e._v("The queue_max_length parameter.")]),e._v(" "),a("td",[e._v("15")])])])]),e._v(" "),a("p",[e._v("Finally, two more properties can further tune the AMRMProxyService in case distributed scheduling is used:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("yarn.nodemanager.amrmproxy.address")]),e._v(" "),a("td",[e._v("The address/port to which the AMRMProxyService is bound to.")]),e._v(" "),a("td",[e._v("0.0.0.0:8049")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.nodemanager.amrmproxy.client.thread-count")]),e._v(" "),a("td",[e._v("The number of threads that are used at each NM for serving the interceptors register to the AMRMProxyService by different jobs.")]),e._v(" "),a("td",[e._v("3")])])])]),e._v(" "),a("h2",{attrs:{id:"items-for-future-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#items-for-future-work","aria-hidden":"true"}},[e._v("#")]),e._v(" Items for Future Work")]),e._v(" "),a("p",[e._v("Here we describe multiple ways in which we can extend/enhance the allocation and execution of opportunistic containers. We also provide the JIRAs that track each item.")]),e._v(" "),a("ul",[a("li",[e._v("Resource overcommitment (YARN-1011). As already discussed, in order to further improve the cluster resource utilization, we can schedule containers not based on the allocated resources but on the actually utilized ones. When over-committing resources, there is the risk of running out of resources in case we have an increase in the utilized resources of the already running containers. Therefore, opportunistic execution should be used for containers whose allocation goes beyond the capacity of a node. This way, we can choose opportunistic containers to kill for reclaiming resources.")]),e._v(" "),a("li",[e._v("NM Queue reordering (YARN-5886). Instead of executing queued containers in a FIFO order, we can employ reordering strategies that dynamically determine which opportunistic container will be executed next. For example, we can prioritize containers that are expected to be short-running or which belong to applications that are close to completion.")]),e._v(" "),a("li",[e._v("Out of order killing at NMs (YARN-5887). As described above, when we need to free up resources for a guaranteed container to start its execution, we kill opportunistic containers in reverse order of arrival (first the most recently started ones). This might not always be the right decision. For example, we might want to minimize the number of containers killed or to refrain from killing containers of jobs that are very close to completion.")]),e._v(" "),a("li",[e._v("Container pausing (YARN-5292): At the moment we kill opportunistic containers to make room for guaranteed in case of resource contention. In busy clusters this can lower the effective cluster utilization: whenever we kill a running opportunistic container, it has to be restarted, and thus we lose work. To this end, we can instead pause running opportunistic containers. Note that this will require support from the container executor (e.g., the container technology used) and from the application.")]),e._v(" "),a("li",[e._v("Container promotion (YARN-5085). There are cases where changing the execution type of a container during its execution can be beneficial. For instance, an application might submit a container as opportunistic, and when its execution starts, it can request its promotion to a guaranteed container to avoid it getting killed.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);