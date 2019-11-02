(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{232:function(e,t,r){"use strict";r.r(t);var o=r(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hadoop-benchmarking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-benchmarking","aria-hidden":"true"}},[e._v("#")]),e._v(" Hadoop Benchmarking")]),e._v(" "),r("ul",[r("li",[e._v("NNThroughputBenchmark\n"),r("ul",[r("li",[e._v("Overview")]),e._v(" "),r("li",[e._v("Commands\n"),r("ul",[r("li",[e._v("Generic Options")]),e._v(" "),r("li",[e._v("Command Options")])])]),e._v(" "),r("li",[e._v("Reports")])])])]),e._v(" "),r("p",[e._v("This page is to discuss benchmarking Hadoop using tools it provides.")]),e._v(" "),r("h2",{attrs:{id:"nnthroughputbenchmark"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nnthroughputbenchmark","aria-hidden":"true"}},[e._v("#")]),e._v(" NNThroughputBenchmark")]),e._v(" "),r("h3",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("NNThroughputBenchmark, as its name indicates, is a name-node throughput benchmark, which runs a series of client threads on a single node against a name-node. If no name-node is configured, it will firstly start a name-node in the same process (standalone mode), in which case each client repetitively performs the same operation by directly calling the respective name-node methods. Otherwise, the benchmark will perform the operations against a remote name-node via client protocol RPCs (remote mode). Either way, all clients are running locally in a single process rather than remotely across different nodes. The reason is to avoid communication overhead caused by RPC connections and serialization, and thus reveal the upper bound of pure name-node performance.")]),e._v(" "),r("p",[e._v("The benchmark first generates inputs for each thread so that the input generation overhead does not effect the resulting statistics. The number of operations performed by threads is practically the same. Precisely, the difference between the number of operations performed by any two threads does not exceed 1. Then the benchmark executes the specified number of operations using the specified number of threads and outputs the resulting stats by measuring the number of operations performed by the name-node per second.")]),e._v(" "),r("h3",{attrs:{id:"commands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),r("p",[e._v("The general command line syntax is:")]),e._v(" "),r("p",[e._v("hadoop org.apache.hadoop.hdfs.server.namenode.NNThroughputBenchmark [genericOptions] [commandOptions]")]),e._v(" "),r("h4",{attrs:{id:"generic-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generic-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Generic Options")]),e._v(" "),r("p",[e._v("This benchmark honors the "),r("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/CommandsManual.html#Generic_Options"}},[e._v("Hadoop command-line Generic Options")]),e._v(" to alter its behavior. The benchmark, as other tools, will rely on the fs.defaultFS config, which is overridable by -fs command option, to run standalone mode or remote mode. If the fs.defaultFS scheme is not specified or is file (local), the benchmark will run in standalone mode. Specially, the remote name-node config dfs.namenode.fs-limits.min-block-size should be set as 16 while in standalone mode the benchmark turns off minimum block size verification for its internal name-node.")],1),e._v(" "),r("h4",{attrs:{id:"command-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#command-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Command Options")]),e._v(" "),r("p",[e._v("The following are all supported command options:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("COMMAND_OPTION")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("-op")]),e._v(" "),r("td",[e._v("Specify the operation. This option must be provided and should be the first option.")])]),e._v(" "),r("tr",[r("td",[e._v("-logLevel")]),e._v(" "),r("td",[e._v("Specify the logging level when the benchmark runs. The default logging level is ERROR.")])]),e._v(" "),r("tr",[r("td",[e._v("-UGCacheRefreshCount")]),e._v(" "),r("td",[e._v("After every specified number of operations, the benchmark purges the name-node’s user group cache. By default the refresh is never called.")])]),e._v(" "),r("tr",[r("td",[e._v("-keepResults")]),e._v(" "),r("td",[e._v("If specified, do not clean up the name-space after execution. By default the name-space will be removed after test.")])])])]),e._v(" "),r("h5",{attrs:{id:"operations-supported"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operations-supported","aria-hidden":"true"}},[e._v("#")]),e._v(" Operations Supported")]),e._v(" "),r("p",[e._v("Following are all the operations supported along with their respective operation-specific parameters (all optional) and default values.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("OPERATION_OPTION")]),e._v(" "),r("th",[e._v("Operation-specific parameters")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("all")]),e._v(" "),r("td",[e._v("options for other operations")])]),e._v(" "),r("tr",[r("td",[e._v("create")]),e._v(" "),r("td",[e._v("[-threads 3] [-files 10] [-filesPerDir 4] [-close]")])]),e._v(" "),r("tr",[r("td",[e._v("mkdirs")]),e._v(" "),r("td",[e._v("[-threads 3] [-dirs 10] [-dirsPerDir 2]")])]),e._v(" "),r("tr",[r("td",[e._v("open")]),e._v(" "),r("td",[e._v("[-threads 3] [-files 10] [-filesPerDir 4] [-useExisting]")])]),e._v(" "),r("tr",[r("td",[e._v("delete")]),e._v(" "),r("td",[e._v("[-threads 3] [-files 10] [-filesPerDir 4] [-useExisting]")])]),e._v(" "),r("tr",[r("td",[e._v("fileStatus")]),e._v(" "),r("td",[e._v("[-threads 3] [-files 10] [-filesPerDir 4] [-useExisting]")])]),e._v(" "),r("tr",[r("td",[e._v("rename")]),e._v(" "),r("td",[e._v("[-threads 3] [-files 10] [-filesPerDir 4] [-useExisting]")])]),e._v(" "),r("tr",[r("td",[e._v("blockReport")]),e._v(" "),r("td",[e._v("[-datanodes 10] [-reports 30] [-blocksPerReport 100] [-blocksPerFile 10]")])]),e._v(" "),r("tr",[r("td",[e._v("replication")]),e._v(" "),r("td",[e._v("[-datanodes 10] [-nodesToDecommission 1] [-nodeReplicationLimit 100] [-totalBlocks 100] [-replication 3]")])]),e._v(" "),r("tr",[r("td",[e._v("clean")]),e._v(" "),r("td",[e._v("N/A")])])])]),e._v(" "),r("h5",{attrs:{id:"operation-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operation-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Operation Options")]),e._v(" "),r("p",[e._v("When running benchmarks with the above operation(s), please provide operation-specific parameters illustrated as following.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("OPERATION_SPECIFIC_OPTION")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("-threads")]),e._v(" "),r("td",[e._v("Number of total threads to run the respective operation.")])]),e._v(" "),r("tr",[r("td",[e._v("-files")]),e._v(" "),r("td",[e._v("Number of total files for the respective operation.")])]),e._v(" "),r("tr",[r("td",[e._v("-dirs")]),e._v(" "),r("td",[e._v("Number of total directories for the respective operation.")])]),e._v(" "),r("tr",[r("td",[e._v("-filesPerDir")]),e._v(" "),r("td",[e._v("Number of files per directory.")])]),e._v(" "),r("tr",[r("td",[e._v("-close")]),e._v(" "),r("td",[e._v("Close the files after creation.")])]),e._v(" "),r("tr",[r("td",[e._v("-dirsPerDir")]),e._v(" "),r("td",[e._v("Number of directories per directory.")])]),e._v(" "),r("tr",[r("td",[e._v("-useExisting")]),e._v(" "),r("td",[e._v("If specified, do not recreate the name-space, use existing data.")])]),e._v(" "),r("tr",[r("td",[e._v("-datanodes")]),e._v(" "),r("td",[e._v("Total number of simulated data-nodes.")])]),e._v(" "),r("tr",[r("td",[e._v("-reports")]),e._v(" "),r("td",[e._v("Total number of block reports to send.")])]),e._v(" "),r("tr",[r("td",[e._v("-blocksPerReport")]),e._v(" "),r("td",[e._v("Number of blocks per report.")])]),e._v(" "),r("tr",[r("td",[e._v("-blocksPerFile")]),e._v(" "),r("td",[e._v("Number of blocks per file.")])]),e._v(" "),r("tr",[r("td",[e._v("-nodesToDecommission")]),e._v(" "),r("td",[e._v("Total number of simulated data-nodes to decommission.")])]),e._v(" "),r("tr",[r("td",[e._v("-nodeReplicationLimit")]),e._v(" "),r("td",[e._v("The maximum number of outgoing replication streams for a data-node.")])]),e._v(" "),r("tr",[r("td",[e._v("-totalBlocks")]),e._v(" "),r("td",[e._v("Number of total blocks to operate.")])]),e._v(" "),r("tr",[r("td",[e._v("-replication")]),e._v(" "),r("td",[e._v("Replication factor. Will be adjusted to number of data-nodes if it is larger than that.")])])])]),e._v(" "),r("h3",{attrs:{id:"reports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reports","aria-hidden":"true"}},[e._v("#")]),e._v(" Reports")]),e._v(" "),r("p",[e._v("The benchmark measures the number of operations performed by the name-node per second. Specifically, for each operation tested, it reports the total running time in seconds (Elapsed Time), operation throughput (Ops per sec), and average time for the operations (Average Time). The higher, the better.")]),e._v(" "),r("p",[e._v("Following is a sample reports by running following commands that opens 100K files with 1K threads against a remote name-node. See "),r("a",{attrs:{href:"https://www.usenix.org/legacy/publications/login/2010-04/openpdfs/shvachko.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS scalability: the limits to growth"),r("OutboundLink")],1),e._v(" for real-world benchmark stats.")]),e._v(" "),r("pre",[r("code",[e._v("$ hadoop org.apache.hadoop.hdfs.server.namenode.NNThroughputBenchmark -fs hdfs://nameservice:9000 -op open -threads 1000 -files 100000\n\n--- open inputs ---\nnrFiles = 100000\nnrThreads = 1000\nnrFilesPerDir = 4\n--- open stats  ---\n# operations: 100000\nElapsed Time: 9510\n Ops per sec: 10515.247108307045\nAverage Time: 90\n")])])])}),[],!1,null,null,null);t.default=a.exports}}]);