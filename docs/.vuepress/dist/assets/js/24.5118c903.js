(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{298:function(e,a,t){"use strict";t.r(a);var o=t(0),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"apache-hadoop-mapreduce-migrating-from-apache-hadoop-1-x-to-apache-hadoop-2-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-hadoop-mapreduce-migrating-from-apache-hadoop-1-x-to-apache-hadoop-2-x"}},[e._v("#")]),e._v(" Apache Hadoop MapReduce - Migrating from Apache Hadoop 1.x to Apache Hadoop 2.x")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("This document provides information for users to migrate their Apache Hadoop MapReduce applications from Apache Hadoop 1.x to Apache Hadoop 2.x.")]),e._v(" "),t("p",[e._v("In Apache Hadoop 2.x we have spun off resource management capabilities into Apache Hadoop YARN, a general purpose, distributed application management framework while Apache Hadoop MapReduce (aka MRv2) remains as a pure distributed computation framework.")]),e._v(" "),t("p",[e._v("In general, the previous MapReduce runtime (aka MRv1) has been reused and no major surgery has been conducted on it. Therefore, MRv2 is able to ensure satisfactory compatibility with MRv1 applications. However, due to some improvements and code refactorings, a few APIs have been rendered backward-incompatible.")]),e._v(" "),t("p",[e._v("The remainder of this page will discuss the scope and the level of backward compatibility that we support in Apache Hadoop MapReduce 2.x (MRv2).")]),e._v(" "),t("h2",{attrs:{id:"binary-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binary-compatibility"}},[e._v("#")]),e._v(" Binary Compatibility")]),e._v(" "),t("p",[e._v("First, we ensure binary compatibility to the applications that use old mapred APIs. This means that applications which were built against MRv1 mapred APIs can run directly on YARN without recompilation, merely by pointing them to an Apache Hadoop 2.x cluster via configuration.")]),e._v(" "),t("h2",{attrs:{id:"source-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-compatibility"}},[e._v("#")]),e._v(" Source Compatibility")]),e._v(" "),t("p",[e._v("We cannot ensure complete binary compatibility with the applications that use mapreduce APIs, as these APIs have evolved a lot since MRv1. However, we ensure source compatibility for mapreduce APIs that break binary compatibility. In other words, users should recompile their applications that use mapreduce APIs against MRv2 jars. One notable binary incompatibility break is Counter and CounterGroup.")]),e._v(" "),t("h2",{attrs:{id:"not-supported"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#not-supported"}},[e._v("#")]),e._v(" Not Supported")]),e._v(" "),t("p",[e._v("MRAdmin has been removed in MRv2 because because mradmin commands no longer exist. They have been replaced by the commands in rmadmin. We neither support binary compatibility nor source compatibility for the applications that use this class directly.")]),e._v(" "),t("h2",{attrs:{id:"tradeoffs-between-mrv1-users-and-early-mrv2-adopters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tradeoffs-between-mrv1-users-and-early-mrv2-adopters"}},[e._v("#")]),e._v(" Tradeoffs between MRv1 Users and Early MRv2 Adopters")]),e._v(" "),t("p",[e._v("Unfortunately, maintaining binary compatibility for MRv1 applications may lead to binary incompatibility issues for early MRv2 adopters, in particular Hadoop 0.23 users. For mapred APIs, we have chosen to be compatible with MRv1 applications, which have a larger user base. For mapreduce APIs, if they don’t significantly break Hadoop 0.23 applications, we still change them to be compatible with MRv1 applications. Below is the list of MapReduce APIs which are incompatible with Hadoop 0.23.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Problematic Function")]),e._v(" "),t("th",[e._v("Incompatibility Issue")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("org.apache.hadoop.util.ProgramDriver#drive")]),e._v(" "),t("td",[e._v("Return type changes from void to int")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapred.jobcontrol.Job#getMapredJobID")]),e._v(" "),t("td",[e._v("Return type changes from String to JobID")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapred.TaskReport#getTaskId")]),e._v(" "),t("td",[e._v("Return type changes from String to TaskID")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapred.ClusterStatus#UNINITIALIZED_MEMORY_VALUE")]),e._v(" "),t("td",[e._v("Data type changes from long to int")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapreduce.filecache.DistributedCache#getArchiveTimestamps")]),e._v(" "),t("td",[e._v("Return type changes from long[] to String[]")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapreduce.filecache.DistributedCache#getFileTimestamps")]),e._v(" "),t("td",[e._v("Return type changes from long[] to String[]")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapreduce.Job#failTask")]),e._v(" "),t("td",[e._v("Return type changes from void to boolean")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapreduce.Job#killTask")]),e._v(" "),t("td",[e._v("Return type changes from void to boolean")])]),e._v(" "),t("tr",[t("td",[e._v("org.apache.hadoop.mapreduce.Job#getTaskCompletionEvents")]),e._v(" "),t("td",[e._v("Return type changes from o.a.h.mapred.TaskCompletionEvent[] to o.a.h.mapreduce.TaskCompletionEvent[]")])])])]),e._v(" "),t("h2",{attrs:{id:"malicious"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#malicious"}},[e._v("#")]),e._v(" Malicious")]),e._v(" "),t("p",[e._v("For the users who are going to try hadoop-examples-1.x.x.jar on YARN, please note that hadoop -jar hadoop-examples-1.x.x.jar will still use hadoop-mapreduce-examples-2.x.x.jar, which is installed together with other MRv2 jars. By default Hadoop framework jars appear before the users’ jars in the classpath, such that the classes from the 2.x.x jar will still be picked. Users should remove hadoop-mapreduce-examples-2.x.x.jar from the classpath of all the nodes in a cluster. Otherwise, users need to set HADOOP_USER_CLASSPATH_FIRST=true and HADOOP_CLASSPATH=...:hadoop-examples-1.x.x.jar to run their target examples jar, and add the following configuration in mapred-site.xml to make the processes in YARN containers pick this jar as well.")]),e._v(" "),t("pre",[t("code",[e._v("    <property>\n        <name>mapreduce.job.user.classpath.first</name>\n        <value>true</value>\n    </property>\n")])])])}),[],!1,null,null,null);a.default=r.exports}}]);