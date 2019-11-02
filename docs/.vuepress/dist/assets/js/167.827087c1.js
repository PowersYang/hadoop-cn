(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{366:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hadoop-cli-minicluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-cli-minicluster"}},[e._v("#")]),e._v(" Hadoop: CLI MiniCluster.")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("Using the CLI MiniCluster, users can simply start and stop a single-node Hadoop cluster with a single command, and without the need to set any environment variables or manage configuration files. The CLI MiniCluster starts both a YARN/MapReduce & HDFS clusters.")]),e._v(" "),a("p",[e._v("This is useful for cases where users want to quickly experiment with a real Hadoop cluster or test non-Java programs that rely on significant Hadoop functionality.")]),e._v(" "),a("h2",{attrs:{id:"hadoop-tarball"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-tarball"}},[e._v("#")]),e._v(" Hadoop Tarball")]),e._v(" "),a("p",[e._v("You should be able to obtain the Hadoop tarball from the release. Also, you can directly create a tarball from the source:")]),e._v(" "),a("pre",[a("code",[e._v("$ mvn clean install -DskipTests\n$ mvn package -Pdist -Dtar -DskipTests -Dmaven.javadoc.skip\n")])]),e._v(" "),a("p",[e._v("NOTE: You will need "),a("a",{attrs:{href:"http://code.google.com/p/protobuf/",target:"_blank",rel:"noopener noreferrer"}},[e._v("protoc 2.5.0"),a("OutboundLink")],1),e._v(" installed.")]),e._v(" "),a("p",[e._v("The tarball should be available in hadoop-dist/target/ directory.")]),e._v(" "),a("h2",{attrs:{id:"running-the-minicluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-minicluster"}},[e._v("#")]),e._v(" Running the MiniCluster")]),e._v(" "),a("p",[e._v("From inside the root directory of the extracted tarball, you can start the CLI MiniCluster using the following command:")]),e._v(" "),a("pre",[a("code",[e._v("$ bin/mapred minicluster -rmport RM_PORT -jhsport JHS_PORT\n")])]),e._v(" "),a("p",[e._v("In the example command above, RM_PORT and JHS_PORT should be replaced by the user’s choice of these port numbers. If not specified, random free ports will be used.")]),e._v(" "),a("p",[e._v("There are a number of command line arguments that the users can use to control which services to start, and to pass other configuration properties. The available command line arguments:")]),e._v(" "),a("pre",[a("code",[e._v("$ -D <property=value>    Options to pass into configuration object\n$ -datanodes <arg>       How many datanodes to start (default 1)\n$ -format                Format the DFS (default false)\n$ -help                  Prints option help.\n$ -jhsport <arg>         JobHistoryServer port (default 0--we choose)\n$ -namenode <arg>        URL of the namenode (default is either the DFS\n$                        cluster or a temporary dir)\n$ -nnport <arg>          NameNode port (default 0--we choose)\n$ -nnhttpport <arg>      NameNode HTTP port (default 0--we choose)\n$ -nodemanagers <arg>    How many nodemanagers to start (default 1)\n$ -nodfs                 Don't start a mini DFS cluster\n$ -nomr                  Don't start a mini MR cluster\n$ -rmport <arg>          ResourceManager port (default 0--we choose)\n$ -writeConfig <path>    Save configuration to this XML file.\n$ -writeDetails <path>   Write basic information to this JSON file.\n")])]),e._v(" "),a("p",[e._v("To display this full list of available arguments, the user can pass the -help argument to the above command.")])])}),[],!1,null,null,null);t.default=r.exports}}]);