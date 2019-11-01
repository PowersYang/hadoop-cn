(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{293:function(e,t,o){"use strict";o.r(t);var a=o(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"archival-storage-ssd-memory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#archival-storage-ssd-memory"}},[e._v("#")]),e._v(" Archival Storage, SSD & Memory")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("Archival Storage is a solution to decouple growing storage capacity from compute capacity. Nodes with higher density and less expensive storage with low compute power are becoming available and can be used as cold storage in the clusters. Based on policy the data from hot can be moved to the cold. Adding more nodes to the cold storage can grow the storage independent of the compute capacity in the cluster.")]),e._v(" "),o("p",[e._v("The frameworks provided by Heterogeneous Storage and Archival Storage generalizes the HDFS architecture to include other kinds of storage media including SSD and memory. Users may choose to store their data in SSD or memory for a better performance.")]),e._v(" "),o("h2",{attrs:{id:"storage-types-and-storage-policies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-types-and-storage-policies"}},[e._v("#")]),e._v(" Storage Types and Storage Policies")]),e._v(" "),o("h3",{attrs:{id:"storage-types-archive-disk-ssd-and-ram-disk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-types-archive-disk-ssd-and-ram-disk"}},[e._v("#")]),e._v(" Storage Types: ARCHIVE, DISK, SSD and RAM_DISK")]),e._v(" "),o("p",[e._v("The first phase of "),o("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-2832",target:"_blank",rel:"noopener noreferrer"}},[e._v("Heterogeneous Storage (HDFS-2832)"),o("OutboundLink")],1),e._v(" changed datanode storage model from a single storage, which may correspond to multiple physical storage medias, to a collection of storages with each storage corresponding to a physical storage media. It also added the notion of storage types, DISK and SSD, where DISK is the default storage type.")]),e._v(" "),o("p",[e._v("A new storage type ARCHIVE, which has high storage density (petabyte of storage) but little compute power, is added for supporting archival storage.")]),e._v(" "),o("p",[e._v("Another new storage type RAM_DISK is added for supporting writing single replica files in memory.")]),e._v(" "),o("h3",{attrs:{id:"storage-policies-hot-warm-cold-all-ssd-one-ssd-lazy-persist-and-provided"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-policies-hot-warm-cold-all-ssd-one-ssd-lazy-persist-and-provided"}},[e._v("#")]),e._v(" Storage Policies: Hot, Warm, Cold, All_SSD, One_SSD, Lazy_Persist and Provided")]),e._v(" "),o("p",[e._v("A new concept of storage policies is introduced in order to allow files to be stored in different storage types according to the storage policy.")]),e._v(" "),o("p",[e._v("We have the following storage policies:")]),e._v(" "),o("ul",[o("li",[e._v("Hot - for both storage and compute. The data that is popular and still being used for processing will stay in this policy. When a block is hot, all replicas are stored in DISK.")]),e._v(" "),o("li",[e._v("Cold - only for storage with limited compute. The data that is no longer being used, or data that needs to be archived is moved from hot storage to cold storage. When a block is cold, all replicas are stored in ARCHIVE.")]),e._v(" "),o("li",[e._v("Warm - partially hot and partially cold. When a block is warm, some of its replicas are stored in DISK and the remaining replicas are stored in ARCHIVE.")]),e._v(" "),o("li",[e._v("All_SSD - for storing all replicas in SSD.")]),e._v(" "),o("li",[e._v("One_SSD - for storing one of the replicas in SSD. The remaining replicas are stored in DISK.")]),e._v(" "),o("li",[e._v("Lazy_Persist - for writing blocks with single replica in memory. The replica is first written in RAM_DISK and then it is lazily persisted in DISK.")]),e._v(" "),o("li",[e._v("Provided - for storing data outside HDFS. See also "),o("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/HdfsProvidedStorage.html"}},[e._v("HDFS Provided Storage")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("More formally, a storage policy consists of the following fields:")]),e._v(" "),o("ol",[o("li",[e._v("Policy ID")]),e._v(" "),o("li",[e._v("Policy name")]),e._v(" "),o("li",[e._v("A list of storage types for block placement")]),e._v(" "),o("li",[e._v("A list of fallback storage types for file creation")]),e._v(" "),o("li",[e._v("A list of fallback storage types for replication")])]),e._v(" "),o("p",[e._v("When there is enough space, block replicas are stored according to the storage type list specified in #3. When some of the storage types in list #3 are running out of space, the fallback storage type lists specified in #4 and #5 are used to replace the out-of-space storage types for file creation and replication, respectively.")]),e._v(" "),o("p",[e._v("The following is a typical storage policy table.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Policy ID")]),e._v(" "),o("th",[e._v("Policy Name")]),e._v(" "),o("th",[e._v("Block Placement (n replicas)")]),e._v(" "),o("th",[e._v("Fallback storages for creation")]),e._v(" "),o("th",[e._v("Fallback storages for replication")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("15")]),e._v(" "),o("td",[e._v("Lazy_Persist")]),e._v(" "),o("td",[e._v("RAM_DISK: 1, DISK: n-1")]),e._v(" "),o("td",[e._v("DISK")]),e._v(" "),o("td",[e._v("DISK")])]),e._v(" "),o("tr",[o("td",[e._v("12")]),e._v(" "),o("td",[e._v("All_SSD")]),e._v(" "),o("td",[e._v("SSD: n")]),e._v(" "),o("td",[e._v("DISK")]),e._v(" "),o("td",[e._v("DISK")])]),e._v(" "),o("tr",[o("td",[e._v("10")]),e._v(" "),o("td",[e._v("One_SSD")]),e._v(" "),o("td",[e._v("SSD: 1, DISK: n-1")]),e._v(" "),o("td",[e._v("SSD, DISK")]),e._v(" "),o("td",[e._v("SSD, DISK")])]),e._v(" "),o("tr",[o("td",[e._v("7")]),e._v(" "),o("td",[e._v("Hot (default)")]),e._v(" "),o("td",[e._v("DISK: n")]),e._v(" "),o("td",[o("none")],1),e._v(" "),o("td",[e._v("ARCHIVE")])]),e._v(" "),o("tr",[o("td",[e._v("5")]),e._v(" "),o("td",[e._v("Warm")]),e._v(" "),o("td",[e._v("DISK: 1, ARCHIVE: n-1")]),e._v(" "),o("td",[e._v("ARCHIVE, DISK")]),e._v(" "),o("td",[e._v("ARCHIVE, DISK")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("Cold")]),e._v(" "),o("td",[e._v("ARCHIVE: n")]),e._v(" "),o("td",[o("none")],1),e._v(" "),o("td",[o("none")],1)]),e._v(" "),o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("Provided")]),e._v(" "),o("td",[e._v("PROVIDED: 1, DISK: n-1")]),e._v(" "),o("td",[e._v("PROVIDED, DISK")]),e._v(" "),o("td",[e._v("PROVIDED, DISK")])])])]),e._v(" "),o("p",[e._v("Note 1: The Lazy_Persist policy is useful only for single replica blocks. For blocks with more than one replicas, all the replicas will be written to DISK since writing only one of the replicas to RAM_DISK does not improve the overall performance.")]),e._v(" "),o("p",[e._v("Note 2: For the erasure coded files with striping layout, the suitable storage policies are All_SSD, Hot, Cold. So, if user sets the policy for striped EC files other than the mentioned policies, it will not follow that policy while creating or moving block.")]),e._v(" "),o("h3",{attrs:{id:"storage-policy-resolution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-policy-resolution"}},[e._v("#")]),e._v(" Storage Policy Resolution")]),e._v(" "),o("p",[e._v("When a file or directory is created, its storage policy is unspecified. The storage policy can be specified using the “storagepolicies -setStoragePolicy” command. The effective storage policy of a file or directory is resolved by the following rules.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("If the file or directory is specified with a storage policy, return it.")])]),e._v(" "),o("li",[o("p",[e._v("For an unspecified file or directory, if it is the root directory, return the default storage policy. Otherwise, return its parent’s effective storage policy.")])])]),e._v(" "),o("p",[e._v("The effective storage policy can be retrieved by the “storagepolicies -getStoragePolicy” command.")]),e._v(" "),o("h3",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("ul",[o("li",[e._v("dfs.storage.policy.enabled - for enabling/disabling the storage policy feature. The default value is true.")]),e._v(" "),o("li",[e._v("dfs.datanode.data.dir - on each data node, the comma-separated storage locations should be tagged with their storage types. This allows storage policies to place the blocks on different storage types according to policy. For example:\n"),o("ol",[o("li",[e._v("A datanode storage location /grid/dn/disk0 on DISK should be configured with [DISK]file:///grid/dn/disk0")]),e._v(" "),o("li",[e._v("A datanode storage location /grid/dn/ssd0 on SSD can should configured with [SSD]file:///grid/dn/ssd0")]),e._v(" "),o("li",[e._v("A datanode storage location /grid/dn/archive0 on ARCHIVE should be configured with [ARCHIVE]file:///grid/dn/archive0")]),e._v(" "),o("li",[e._v("A datanode storage location /grid/dn/ram0 on RAM_DISK should be configured with [RAM_DISK]file:///grid/dn/ram0")])])])]),e._v(" "),o("p",[e._v("The default storage type of a datanode storage location will be DISK if it does not have a storage type tagged explicitly.")]),e._v(" "),o("h2",{attrs:{id:"storage-policy-based-data-movement"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-policy-based-data-movement"}},[e._v("#")]),e._v(" Storage Policy Based Data Movement")]),e._v(" "),o("p",[e._v("Setting a new storage policy on already existing file/dir will change the policy in Namespace, but it will not move the blocks physically across storage medias. Following 2 options will allow users to move the blocks based on new policy set. So, once user change/set to a new policy on file/directory, user should also perform one of the following options to achieve the desired data movement. Note that both options cannot be allowed to run simultaneously.")]),e._v(" "),o("h3",{attrs:{id:"storage-policy-satisfier-sps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-policy-satisfier-sps"}},[e._v("#")]),e._v(" Storage Policy Satisfier (SPS)")]),e._v(" "),o("p",[e._v("When user changes the storage policy on a file/directory, user can call HdfsAdmin API satisfyStoragePolicy() to move the blocks as per the new policy set. The SPS tool running external to namenode periodically scans for the storage mismatches between new policy set and the physical blocks placed. This will only track the files/directories for which user invoked satisfyStoragePolicy. If SPS identifies some blocks to be moved for a file, then it will schedule block movement tasks to datanodes. If there are any failures in movement, the SPS will re-attempt by sending new block movement tasks.")]),e._v(" "),o("p",[e._v("SPS can be enabled as an external service outside Namenode or disabled dynamically without restarting the Namenode.")]),e._v(" "),o("p",[e._v("Detailed design documentation can be found at "),o("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-10285",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Policy Satisfier(SPS) (HDFS-10285)"),o("OutboundLink")],1)]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Note: When user invokes satisfyStoragePolicy() API on a directory, SPS will scan all sub-directories and consider all the files for satisfy the policy..")])]),e._v(" "),o("li",[o("p",[e._v("HdfsAdmin API : public void satisfyStoragePolicy(final Path path) throws IOException")])]),e._v(" "),o("li",[o("p",[e._v("Arguments :")])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("path")])])])]),e._v(" "),o("h4",{attrs:{id:"configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("dfs.storage.policy.satisfier.mode - Used to enable external service outside NN or disable SPS. Following string values are supported - external, none. Configuring external value represents SPS is enable and none to disable. The default value is none.")])]),e._v(" "),o("li",[o("p",[e._v("dfs.storage.policy.satisfier.recheck.timeout.millis - A timeout to re-check the processed block storage movement command results from Datanodes.")])]),e._v(" "),o("li",[o("p",[e._v("dfs.storage.policy.satisfier.self.retry.timeout.millis - A timeout to retry if no block movement results reported from Datanode in this configured timeout.")])])]),e._v(" "),o("h3",{attrs:{id:"mover-a-new-data-migration-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mover-a-new-data-migration-tool"}},[e._v("#")]),e._v(" Mover - A New Data Migration Tool")]),e._v(" "),o("p",[e._v("A new data migration tool is added for archiving data. The tool is similar to Balancer. It periodically scans the files in HDFS to check if the block placement satisfies the storage policy. For the blocks violating the storage policy, it moves the replicas to a different storage type in order to fulfill the storage policy requirement. Note that it always tries to move block replicas within the same node whenever possible. If that is not possible (e.g. when a node doesn’t have the target storage type) then it will copy the block replicas to another node over the network.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Command:")]),e._v(" "),o("pre",[o("code",[e._v("hdfs mover [-p <files/dirs> | -f <local file name>]\n")])])]),e._v(" "),o("li",[o("p",[e._v("Arguments:")])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("-p <files/dirs>")])]),e._v(" "),o("tr",[o("td",[e._v("-f "),o("local",{attrs:{file:""}})],1)])])]),e._v(" "),o("p",[e._v("Note that, when both -p and -f options are omitted, the default path is the root directory.")]),e._v(" "),o("h4",{attrs:{id:"administrator-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#administrator-notes"}},[e._v("#")]),e._v(" Administrator notes:")]),e._v(" "),o("p",[e._v("StoragePolicySatisfier and Mover tool cannot run simultaneously. If a Mover instance is already triggered and running, SPS will be disabled while starting. In that case, administrator should make sure, Mover execution finished and then enable external SPS service again. Similarly when SPS enabled already, Mover cannot be run. If administrator is looking to run Mover tool explicitly, then he/she should make sure to disable SPS first and then run Mover. Please look at the commands section to know how to enable external service outside NN or disable SPS dynamically.")]),e._v(" "),o("h2",{attrs:{id:"storage-policy-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-policy-commands"}},[e._v("#")]),e._v(" Storage Policy Commands")]),e._v(" "),o("h3",{attrs:{id:"list-storage-policies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#list-storage-policies"}},[e._v("#")]),e._v(" List Storage Policies")]),e._v(" "),o("p",[e._v("List out all the storage policies.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Command:")]),e._v(" "),o("pre",[o("code",[e._v("hdfs storagepolicies -listPolicies\n")])])]),e._v(" "),o("li",[o("p",[e._v("Arguments: none.")])])]),e._v(" "),o("h3",{attrs:{id:"set-storage-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-storage-policy"}},[e._v("#")]),e._v(" Set Storage Policy")]),e._v(" "),o("p",[e._v("Set a storage policy to a file or a directory.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Command:")]),e._v(" "),o("pre",[o("code",[e._v("hdfs storagepolicies -setStoragePolicy -path <path> -policy <policy>\n")])])]),e._v(" "),o("li",[o("p",[e._v("Arguments:")])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("-path "),o("path")])]),e._v(" "),o("tr",[o("td",[e._v("-policy "),o("policy")],1)])])]),e._v(" "),o("h3",{attrs:{id:"unset-storage-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unset-storage-policy"}},[e._v("#")]),e._v(" Unset Storage Policy")]),e._v(" "),o("p",[e._v("Unset a storage policy to a file or a directory. After the unset command the storage policy of the nearest ancestor will apply, and if there is no policy on any ancestor then the default storage policy will apply.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Command:")]),e._v(" "),o("pre",[o("code",[e._v("hdfs storagepolicies -unsetStoragePolicy -path <path>\n")])])]),e._v(" "),o("li",[o("p",[e._v("Arguments:")])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("-path "),o("path")])])])]),e._v(" "),o("h3",{attrs:{id:"get-storage-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-storage-policy"}},[e._v("#")]),e._v(" Get Storage Policy")]),e._v(" "),o("p",[e._v("Get the storage policy of a file or a directory.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Command:")]),e._v(" "),o("pre",[o("code",[e._v("hdfs storagepolicies -getStoragePolicy -path <path>\n")])])]),e._v(" "),o("li",[o("p",[e._v("Arguments:")])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("-path "),o("path")])])])]),e._v(" "),o("h3",{attrs:{id:"satisfy-storage-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#satisfy-storage-policy"}},[e._v("#")]),e._v(" Satisfy Storage Policy")]),e._v(" "),o("p",[e._v("Schedule blocks to move based on file’s/directory’s current storage policy.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Command:")]),e._v(" "),o("pre",[o("code",[e._v("hdfs storagepolicies -satisfyStoragePolicy -path <path>\n")])])]),e._v(" "),o("li",[o("p",[e._v("Arguments:")])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("-path "),o("path")])])])]),e._v(" "),o("h3",{attrs:{id:"enable-external-service-outside-nn-or-disable-sps-without-restarting-namenode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-external-service-outside-nn-or-disable-sps-without-restarting-namenode"}},[e._v("#")]),e._v(" Enable external service outside NN or Disable SPS without restarting Namenode")]),e._v(" "),o("p",[e._v("If administrator wants to switch modes of SPS feature while Namenode is running, first he/she needs to update the desired value(external or none) for the configuration item dfs.storage.policy.satisfier.mode in configuration file (hdfs-site.xml) and then run the following Namenode reconfig command")]),e._v(" "),o("ul",[o("li",[e._v("Command:")])]),e._v(" "),o("p",[e._v("hdfs dfsadmin -reconfig namenode "),o("a",{attrs:{href:"host:ipc_port"}},[e._v("host:ipc_port")]),e._v(" start")]),e._v(" "),o("h3",{attrs:{id:"start-external-sps-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-external-sps-service"}},[e._v("#")]),e._v(" Start External SPS Service.")]),e._v(" "),o("p",[e._v("If administrator wants to start external sps, first he/she needs to configure property dfs.storage.policy.satisfier.mode with external value in configuration file (hdfs-site.xml) and then run Namenode reconfig command. Please ensure that network topology configurations in the configuration file are same as namenode, this cluster will be used for matching target nodes. After this, start external sps service using following command")]),e._v(" "),o("ul",[o("li",[e._v("Command:")])]),e._v(" "),o("p",[e._v("hdfs –daemon start sps")])])}),[],!1,null,null,null);t.default=i.exports}}]);