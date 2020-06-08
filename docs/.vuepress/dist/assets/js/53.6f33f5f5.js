(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{253:function(e,a,r){"use strict";r.r(a);var t=r(0),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"enabling-dapper-like-tracing-in-hadoop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enabling-dapper-like-tracing-in-hadoop"}},[e._v("#")]),e._v(" Enabling Dapper-like Tracing in Hadoop")]),e._v(" "),r("h2",{attrs:{id:"dapper-like-tracing-in-hadoop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dapper-like-tracing-in-hadoop"}},[e._v("#")]),e._v(" Dapper-like Tracing in Hadoop")]),e._v(" "),r("h3",{attrs:{id:"htrace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#htrace"}},[e._v("#")]),e._v(" HTrace")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-5274",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS-5274"),r("OutboundLink")],1),e._v(" added support for tracing requests through HDFS, using the open source tracing library, "),r("a",{attrs:{href:"http://htrace.incubator.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache HTrace"),r("OutboundLink")],1),e._v(". Setting up tracing is quite simple, however it requires some very minor changes to your client code.")]),e._v(" "),r("h3",{attrs:{id:"spanreceivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spanreceivers"}},[e._v("#")]),e._v(" SpanReceivers")]),e._v(" "),r("p",[e._v("The tracing system works by collecting information in structs called ‘Spans’. It is up to you to choose how you want to receive this information by using implementation of "),r("a",{attrs:{href:"http://htrace.incubator.apache.org/developer_guide.html#SpanReceivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpanReceiver"),r("OutboundLink")],1),e._v(" interface bundled with HTrace or implementing it by yourself.")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://htrace.incubator.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTrace"),r("OutboundLink")],1),e._v(" provides options such as")]),e._v(" "),r("ul",[r("li",[e._v("FlumeSpanReceiver")]),e._v(" "),r("li",[e._v("HBaseSpanReceiver")]),e._v(" "),r("li",[e._v("HTracedRESTReceiver")]),e._v(" "),r("li",[e._v("ZipkinSpanReceiver")])]),e._v(" "),r("p",[e._v("See core-default.xml for a description of HTrace configuration keys. In some cases, you will also need to add the jar containing the SpanReceiver that you are using to the classpath of Hadoop on each node. (In the example above, LocalFileSpanReceiver is included in the htrace-core4 jar which is bundled with Hadoop.)")]),e._v(" "),r("pre",[r("code",[e._v("    $ cp htrace-htraced/target/htrace-htraced-4.1.0-incubating.jar $HADOOP_HOME/share/hadoop/common/lib/\n")])]),e._v(" "),r("h3",{attrs:{id:"dynamic-update-of-tracing-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-update-of-tracing-configuration"}},[e._v("#")]),e._v(" Dynamic update of tracing configuration")]),e._v(" "),r("p",[e._v("You can use hadoop trace command to see and update the tracing configuration of each servers. You must specify IPC server address of namenode or datanode by -host option. You need to run the command against all servers if you want to update the configuration of all servers.")]),e._v(" "),r("p",[e._v("hadoop trace -list shows list of loaded span receivers associated with the id.")]),e._v(" "),r("pre",[r("code",[e._v("  $ hadoop trace -list -host 192.168.56.2:9000\n  ID  CLASS\n  1   org.apache.htrace.core.LocalFileSpanReceiver\n\n  $ hadoop trace -list -host 192.168.56.2:9867\n  ID  CLASS\n  1   org.apache.htrace.core.LocalFileSpanReceiver\n")])]),e._v(" "),r("p",[e._v("hadoop trace -remove removes span receiver from server. -remove options takes id of span receiver as argument.")]),e._v(" "),r("pre",[r("code",[e._v("  $ hadoop trace -remove 1 -host 192.168.56.2:9000\n  Removed trace span receiver 1\n")])]),e._v(" "),r("p",[e._v("hadoop trace -add adds span receiver to server. You need to specify the class name of span receiver as argument of -class option. You can specify the configuration associated with span receiver by -Ckey=value options.")]),e._v(" "),r("pre",[r("code",[e._v("  $ hadoop trace -add -class org.apache.htrace.core.LocalFileSpanReceiver -Chadoop.htrace.local.file.span.receiver.path=/tmp/htrace.out -host 192.168.56.2:9000\n  Added trace span receiver 2 with configuration hadoop.htrace.local.file.span.receiver.path = /tmp/htrace.out\n\n  $ hadoop trace -list -host 192.168.56.2:9000\n  ID  CLASS\n  2   org.apache.htrace.core.LocalFileSpanReceiver\n")])]),e._v(" "),r("p",[e._v("If the cluster is Kerberized, the service principal name must be specified using -principal option. For example, to show list of span receivers of a namenode:")]),e._v(" "),r("pre",[r("code",[e._v("$ hadoop trace -list -host NN1:8020 -principal namenode/NN1@EXAMPLE.COM\n")])]),e._v(" "),r("p",[e._v("Or, for a datanode:")]),e._v(" "),r("pre",[r("code",[e._v("$ hadoop trace -list -host DN2:9867 -principal datanode/DN1@EXAMPLE.COM\n")])]),e._v(" "),r("h3",{attrs:{id:"starting-tracing-spans-by-htrace-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starting-tracing-spans-by-htrace-api"}},[e._v("#")]),e._v(" Starting tracing spans by HTrace API")]),e._v(" "),r("p",[e._v("In order to trace, you will need to wrap the traced logic with tracing span as shown below. When there is running tracing spans, the tracing information is propagated to servers along with RPC requests.")]),e._v(" "),r("pre",[r("code",[e._v('    import org.apache.hadoop.hdfs.HdfsConfiguration;\n    import org.apache.htrace.core.Tracer;\n    import org.apache.htrace.core.TraceScope;\n\n    ...\n\n\n    ...\n\n        TraceScope ts = tracer.newScope("Gets");\n        try {\n          ... // traced logic\n        } finally {\n          ts.close();\n        }\n')])]),e._v(" "),r("h3",{attrs:{id:"sample-code-for-tracing-by-htrace-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sample-code-for-tracing-by-htrace-api"}},[e._v("#")]),e._v(" Sample code for tracing by HTrace API")]),e._v(" "),r("p",[e._v("The TracingFsShell.java shown below is the wrapper of FsShell which start tracing span before invoking HDFS shell command.")]),e._v(" "),r("pre",[r("code",[e._v('    import org.apache.hadoop.fs.FileSystem;\n    import org.apache.hadoop.fs.Path;\n    import org.apache.hadoop.conf.Configuration;\n    import org.apache.hadoop.conf.Configured;\n    import org.apache.hadoop.tracing.TraceUtils;\n    import org.apache.hadoop.util.Tool;\n    import org.apache.hadoop.util.ToolRunner;\n    import org.apache.htrace.core.Tracer;\n    import org.apache.htrace.core.TraceScope;\n    \n    public class Sample extends Configured implements Tool {\n      @Override\n      public int run(String argv[]) throws Exception {\n        FileSystem fs = FileSystem.get(getConf());\n        Tracer tracer = new Tracer.Builder("Sample").\n            conf(TraceUtils.wrapHadoopConf("sample.htrace.", getConf())).\n            build();\n        int res = 0;\n        try (TraceScope scope = tracer.newScope("sample")) {\n          Thread.sleep(1000);\n          fs.listStatus(new Path("/"));\n        }\n        tracer.close();\n        return res;\n      }\n      \n      public static void main(String argv[]) throws Exception {\n        ToolRunner.run(new Sample(), argv);\n      }\n    }\n')])]),e._v(" "),r("p",[e._v("You can compile and execute this code as shown below.")]),e._v(" "),r("pre",[r("code",[e._v("$ javac -cp `hadoop classpath` Sample.java\n$ java -cp .:`hadoop classpath` Sample \\\n    -Dsample.htrace.span.receiver.classes=LocalFileSpanReceiver \\\n    -Dsample.htrace.sampler.classes=AlwaysSampler\n")])]),e._v(" "),r("h3",{attrs:{id:"starting-tracing-spans-by-filesystem-shell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starting-tracing-spans-by-filesystem-shell"}},[e._v("#")]),e._v(" Starting tracing spans by FileSystem Shell")]),e._v(" "),r("p",[e._v("The FileSystem Shell can enable tracing by configuration properties.")]),e._v(" "),r("p",[e._v("Configure the span receivers and samplers in core-site.xml or command line by properties fs.client.htrace.sampler.classes and fs.client.htrace.spanreceiver.classes.")]),e._v(" "),r("pre",[r("code",[e._v("$ hdfs dfs -Dfs.shell.htrace.span.receiver.classes=LocalFileSpanReceiver \\\n           -Dfs.shell.htrace.sampler.classes=AlwaysSampler \\\n           -ls /\n")])]),e._v(" "),r("h3",{attrs:{id:"starting-tracing-spans-by-configuration-for-hdfs-client"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starting-tracing-spans-by-configuration-for-hdfs-client"}},[e._v("#")]),e._v(" Starting tracing spans by configuration for HDFS client")]),e._v(" "),r("p",[e._v("The DFSClient can enable tracing internally. This allows you to use HTrace with your client without modifying the client source code.")]),e._v(" "),r("p",[e._v("Configure the span receivers and samplers in hdfs-site.xml by properties fs.client.htrace.sampler.classes and fs.client.htrace.spanreceiver.classes. The value of fs.client.htrace.sampler.classes can be NeverSampler, AlwaysSampler or ProbabilitySampler.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("NeverSampler: HTrace is OFF for all requests to namenodes and datanodes;")])]),e._v(" "),r("li",[r("p",[e._v("AlwaysSampler: HTrace is ON for all requests to namenodes and datanodes;")])]),e._v(" "),r("li",[r("p",[e._v("ProbabilitySampler: HTrace is ON for some percentage% of requests to namenodes and datanodes")]),e._v(" "),r("pre",[r("code",[e._v("  <property>\n    <name>hadoop.htrace.span.receiver.classes</name>\n    <value>LocalFileSpanReceiver</value>\n  </property>\n  <property>\n    <name>fs.client.htrace.sampler.classes</name>\n    <value>ProbabilitySampler</value>\n  </property>\n  <property>\n    <name>fs.client.htrace.sampler.fraction</name>\n    <value>0.01</value>\n  </property>\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);