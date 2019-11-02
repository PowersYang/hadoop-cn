(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{220:function(e,a,t){"use strict";t.r(a);var o=t(0),i=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hadoop-distributed-cache-deploy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-distributed-cache-deploy","aria-hidden":"true"}},[e._v("#")]),e._v(" Hadoop: Distributed Cache Deploy")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The MapReduce application framework has rudimentary support for deploying a new version of the MapReduce framework via the distributed cache. By setting the appropriate configuration properties, users can run a different version of MapReduce than the one initially deployed to the cluster. For example, cluster administrators can place multiple versions of MapReduce in HDFS and configure mapred-site.xml to specify which version jobs will use by default. This allows the administrators to perform a rolling upgrade of the MapReduce framework under certain conditions.")]),e._v(" "),t("h2",{attrs:{id:"preconditions-and-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-and-limitations","aria-hidden":"true"}},[e._v("#")]),e._v(" Preconditions and Limitations")]),e._v(" "),t("p",[e._v("The support for deploying the MapReduce framework via the distributed cache currently does not address the job client code used to submit and query jobs. It also does not address the ShuffleHandler code that runs as an auxilliary service within each NodeManager. As a result the following limitations apply to MapReduce versions that can be successfully deployed via the distributed cache in a rolling upgrade fashion:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The MapReduce version must be compatible with the job client code used to submit and query jobs. If it is incompatible then the job client must be upgraded separately on any node from which jobs using the new MapReduce version will be submitted or queried.")])]),e._v(" "),t("li",[t("p",[e._v("The MapReduce version must be compatible with the configuration files used by the job client submitting the jobs. If it is incompatible with that configuration (e.g.: a new property must be set or an existing property value changed) then the configuration must be updated first.")])]),e._v(" "),t("li",[t("p",[e._v("The MapReduce version must be compatible with the ShuffleHandler version running on the nodes in the cluster. If it is incompatible then the new ShuffleHandler code must be deployed to all the nodes in the cluster, and the NodeManagers must be restarted to pick up the new ShuffleHandler code.")])])]),e._v(" "),t("h2",{attrs:{id:"deploying-a-new-mapreduce-version-via-the-distributed-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-a-new-mapreduce-version-via-the-distributed-cache","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying a New MapReduce Version via the Distributed Cache")]),e._v(" "),t("p",[e._v("Deploying a new MapReduce version consists of three steps:")]),e._v(" "),t("ol",[t("li",[e._v("Upload the MapReduce archive to a location that can be accessed by the job submission client. Ideally the archive should be on the cluster’s default filesystem at a publicly-readable path. See the archive location discussion below for more details. You can use the framework uploader tool to perform this step like mapred frameworkuploader -target hdfs:///mapred/framework/hadoop-mapreduce-3.2.1.tar#mrframework. It will select the jar files that are in the classpath and put them into a tar archive specified by the -target and -fs options. The tool then returns a suggestion of how to set mapreduce.application.framework.path and mapreduce.application.classpath.")])]),e._v(" "),t("p",[e._v("-fs: The target file system. Defaults to the default filesystem set by fs.defaultFS.")]),e._v(" "),t("p",[e._v("-target is the target location of the framework tarball, optionally followed by a # with the localized alias. It then uploads the tar to the specified directory. gzip is not needed since the jar files are already compressed. Make sure the target directory is readable by all users but it is not writable by others than administrators to protect cluster security.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("Configure mapreduce.application.framework.path to point to the location where the archive is located. As when specifying distributed cache files for a job, this is a URL that also supports creating an alias for the archive if a URL fragment is specified. For example, hdfs:///mapred/framework/hadoop-mapreduce-3.2.1.tar.gz#mrframework will be localized as mrframework rather than hadoop-mapreduce-3.2.1.tar.gz.")])]),e._v(" "),t("li",[t("p",[e._v("Configure mapreduce.application.classpath to set the proper classpath to use with the MapReduce archive configured above. If the frameworkuploader tool is used, it uploads all dependencies and returns the value that needs to be configured here. NOTE: An error occurs if mapreduce.application.framework.path is configured but mapreduce.application.classpath does not reference the base name of the archive path or the alias if an alias was specified.")])])]),e._v(" "),t("p",[e._v("Note that the location of the MapReduce archive can be critical to job submission and job startup performance. If the archive is not located on the cluster’s default filesystem then it will be copied to the job staging directory for each job and localized to each node where the job’s tasks run. This will slow down job submission and task startup performance.")]),e._v(" "),t("p",[e._v("If the archive is located on the default filesystem then the job client will not upload the archive to the job staging directory for each job submission. However if the archive path is not readable by all cluster users then the archive will be localized separately for each user on each node where tasks execute. This can cause unnecessary duplication in the distributed cache.")]),e._v(" "),t("p",[e._v("When working with a large cluster it can be important to increase the replication factor of the archive to increase its availability. This will spread the load when the nodes in the cluster localize the archive for the first time.")]),e._v(" "),t("p",[e._v("The frameworkuploader tool mentioned above has additional parameters that help to adjust performance:")]),e._v(" "),t("p",[e._v("-initialReplication: This is the replication count that the framework tarball is created with. It is safe to leave this value at the default 3. This is the tested scenario.")]),e._v(" "),t("p",[e._v("-finalReplication: The uploader tool sets the replication once all blocks are collected and uploaded. If quick initial startup is required, then it is advised to set this to the commissioned node count divided by two but not more than 512. This will leverage HDFS to spread the tarball in a distributed manner. Once the jobs start they will likely hit a local HDFS node to localize from or they can select from a wide set of additional source nodes. If this is is set to a low value like 10, then the output bandwidth of those replicated nodes will affect how fast the first job will run. The replication count can be manually reduced to a low value like 10 once all the jobs started in the cluster to save disk space.")]),e._v(" "),t("p",[e._v("-acceptableReplication: The tool will wait until the tarball has been replicated this number of times before exiting. This should be a replication count less than or equal to the value in finalReplication. This is typically a 90% of the value in finalReplication to accomodate failing nodes.")]),e._v(" "),t("p",[e._v("-timeout: A timeout in seconds to wait to reach acceptableReplication before the tool exits. The tool logs an error otherwise and returns.")]),e._v(" "),t("h2",{attrs:{id:"mapreduce-archives-and-classpath-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce-archives-and-classpath-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" MapReduce Archives and Classpath Configuration")]),e._v(" "),t("p",[e._v("Setting a proper classpath for the MapReduce archive depends upon the composition of the archive and whether it has any additional dependencies. For example, the archive can contain not only the MapReduce jars but also the necessary YARN, HDFS, and Hadoop Common jars and all other dependencies. In that case, mapreduce.application.classpath would be configured to something like the following example, where the archive basename is hadoop-mapreduce-3.2.1.tar.gz and the archive is organized internally similar to the standard Hadoop distribution archive:")]),e._v(" "),t("p",[e._v("$HADOOP_CONF_DIR,$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/mapreduce/"),t("em",[e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/mapreduce/lib/")]),e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/common/"),t("em",[e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/common/lib/")]),e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/yarn/"),t("em",[e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/yarn/lib/")]),e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/hdfs/"),t("em",[e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/hdfs/lib/")])]),e._v(" "),t("p",[e._v("Another possible approach is to have the archive consist of just the MapReduce jars and have the remaining dependencies picked up from the Hadoop distribution installed on the nodes. In that case, the above example would change to something like the following:")]),e._v(" "),t("p",[e._v("$HADOOP_CONF_DIR,$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/mapreduce/"),t("em",[e._v(",$PWD/hadoop-mapreduce-3.2.1.tar.gz/hadoop-mapreduce-3.2.1/share/hadoop/mapreduce/lib/")]),e._v(",$HADOOP_COMMON_HOME/share/hadoop/common/"),t("em",[e._v(",$HADOOP_COMMON_HOME/share/hadoop/common/lib/")]),e._v(",$HADOOP_HDFS_HOME/share/hadoop/hdfs/"),t("em",[e._v(",$HADOOP_HDFS_HOME/share/hadoop/hdfs/lib/")]),e._v(",$HADOOP_YARN_HOME/share/hadoop/yarn/"),t("em",[e._v(",$HADOOP_YARN_HOME/share/hadoop/yarn/lib/")])]),e._v(" "),t("p",[e._v("The frameworkuploader tool has the following arguments to control which jars end up in the framework tarball:")]),e._v(" "),t("p",[e._v("-input: This is the input classpath that is iterated through. jars files found will be added to the tarball. It defaults to the classpath as returned by the hadoop classpath command.")]),e._v(" "),t("p",[e._v("-blacklist: This is a comma separated regex array to filter the jar file names to exclude from the class path. It can be used for example to exclude test jars or Hadoop services that are not necessary to localize.")]),e._v(" "),t("p",[e._v("-whitelist: This is a comma separated regex array to include certain jar files. This can be used to provide additional security, so that no external source can include malicious code in the classpath when the tool runs.")]),e._v(" "),t("p",[e._v("-nosymlink: This flag can be used to exclude symlinks that point to the same directory. This is not widely used. For example, /a/foo.jar and a symlink /a/bar.jar that points to /a/foo.jar would normally add foo.jar and bar.jar to the tarball as separate files despite them actually being the same file. This flag would make the tool exclude /a/bar.jar so only one copy of the file is added.")]),e._v(" "),t("p",[e._v("If shuffle encryption is also enabled in the cluster, then we could meet the problem that MR job get failed with exception like below:")]),e._v(" "),t("pre",[t("code",[e._v("2014-10-10 02:17:16,600 WARN [fetcher#1] org.apache.hadoop.mapreduce.task.reduce.Fetcher: Failed to connect to junpingdu-centos5-3.cs1cloud.internal:13562 with 1 map outputs\njavax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n    at com.sun.net.ssl.internal.ssl.Alerts.getSSLException(Alerts.java:174)\n    at com.sun.net.ssl.internal.ssl.SSLSocketImpl.fatal(SSLSocketImpl.java:1731)\n    at com.sun.net.ssl.internal.ssl.Handshaker.fatalSE(Handshaker.java:241)\n    at com.sun.net.ssl.internal.ssl.Handshaker.fatalSE(Handshaker.java:235)\n    at com.sun.net.ssl.internal.ssl.ClientHandshaker.serverCertificate(ClientHandshaker.java:1206)\n    at com.sun.net.ssl.internal.ssl.ClientHandshaker.processMessage(ClientHandshaker.java:136)\n    at com.sun.net.ssl.internal.ssl.Handshaker.processLoop(Handshaker.java:593)\n    at com.sun.net.ssl.internal.ssl.Handshaker.process_record(Handshaker.java:529)\n    at com.sun.net.ssl.internal.ssl.SSLSocketImpl.readRecord(SSLSocketImpl.java:925)\n    at com.sun.net.ssl.internal.ssl.SSLSocketImpl.performInitialHandshake(SSLSocketImpl.java:1170)\n    at com.sun.net.ssl.internal.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1197)\n    at com.sun.net.ssl.internal.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1181)\n    at sun.net.www.protocol.https.HttpsClient.afterConnect(HttpsClient.java:434)\n    at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.setNewClient(AbstractDelegateHttpsURLConnection.java:81)\n    at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.setNewClient(AbstractDelegateHttpsURLConnection.java:61)\n    at sun.net.www.protocol.http.HttpURLConnection.writeRequests(HttpURLConnection.java:584)\n    at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1193)\n    at java.net.HttpURLConnection.getResponseCode(HttpURLConnection.java:379)\n    at sun.net.www.protocol.https.HttpsURLConnectionImpl.getResponseCode(HttpsURLConnectionImpl.java:318)\n    at org.apache.hadoop.mapreduce.task.reduce.Fetcher.verifyConnection(Fetcher.java:427)\n....\n")])]),e._v(" "),t("p",[e._v("This is because MR client (deployed from HDFS) cannot access ssl-client.xml in local FS under directory of $HADOOP_CONF_DIR. To fix the problem, we can add the directory with ssl-client.xml to the classpath of MR which is specified in “mapreduce.application.classpath” as mentioned above. To avoid MR application being affected by other local configurations, it is better to create a dedicated directory for putting ssl-client.xml, e.g. a sub-directory under $HADOOP_CONF_DIR, like: $HADOOP_CONF_DIR/security.")]),e._v(" "),t("p",[e._v("The framework upload tool can be use to collect cluster jars that the MapReduce AM, mappers and reducers will use. It returns logs that provide the suggested configuration values")]),e._v(" "),t("pre",[t("code",[e._v("INFO uploader.FrameworkUploader: Uploaded hdfs://mynamenode/mapred/framework/mr-framework.tar#mr-framework\nINFO uploader.FrameworkUploader: Suggested mapreduce.application.classpath $PWD/mr-framework/*\n")])]),e._v(" "),t("p",[e._v("Set mapreduce.application.framework.path to the first and mapreduce.application.classpath to the second logged value above respectively.")])])}),[],!1,null,null,null);a.default=i.exports}}]);