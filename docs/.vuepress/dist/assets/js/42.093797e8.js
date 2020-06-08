(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{244:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"apache-hadoop-downstream-developer’s-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-hadoop-downstream-developer’s-guide"}},[e._v("#")]),e._v(" Apache Hadoop Downstream Developer’s Guide")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("The point of this document is to provide downstream developers with a clear reference for what to expect when building applications against the Hadoop source base. This document is primarily a distillation of the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/Compatibility.html"}},[e._v("Hadoop Compatibility Guidelines")]),e._v(" and hence focuses on what the compatibility guarantees are for the various Hadoop interfaces across releases.")],1),e._v(" "),a("h3",{attrs:{id:"target-audience"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-audience"}},[e._v("#")]),e._v(" Target Audience")]),e._v(" "),a("p",[e._v("The target audience for this document is any developer working on a project or application that builds or depends on Apache Hadoop, whether the dependency is on the source code itself, a build artifact, or interacting with a running system.")]),e._v(" "),a("h2",{attrs:{id:"hadoop-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-releases"}},[e._v("#")]),e._v(" Hadoop Releases")]),e._v(" "),a("p",[e._v("The Hadoop development community periodically produces new Hadoop releases to introduce new functionality and fix existing issues. Realeses fall into three categories:")]),e._v(" "),a("ul",[a("li",[e._v("Major: a major release will typically include significant new functionality and generally represents the largest upgrade compatibility risk. A major release increments the first number of the release version, e.g. going from 2.8.2 to 3.0.0.")]),e._v(" "),a("li",[e._v("Minor: a minor release will typically include some new functionality as well as fixes for some notable issues. A minor release should not pose much upgrade risk in most cases. A minor release increments the middle number of release version, e.g. going from 2.8.2 to 2.9.0.")]),e._v(" "),a("li",[e._v("Maintenance: a maintenance release should not include any new functionality. The purpose of a maintenance release is to resolve a set of issues that are deemed by the developer community to be significant enough to be worth pushing a new release to address them. Maintenance releases should pose very little upgrade risk. A maintenance release increments the final number in the release version, e.g. going from 2.8.2 to 2.8.3.")])]),e._v(" "),a("h2",{attrs:{id:"consuming-hadoop-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consuming-hadoop-apis"}},[e._v("#")]),e._v(" Consuming Hadoop APIs")]),e._v(" "),a("p",[e._v("When writing software that calls methods or uses classes that belong to Apache Hadoop, developers should adhere to the following guidelines. Failure to adhere to the guidelines may result in problems transitioning from one Hadoop release to another.")]),e._v(" "),a("h3",{attrs:{id:"privacy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacy"}},[e._v("#")]),e._v(" Privacy")]),e._v(" "),a("p",[e._v("Packages, classes, and methods may be annotated with an audience annotation. The three privacy levels are: "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Public"}},[e._v("Public")]),e._v(", "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Limited-Private"}},[e._v("Limited-Private")]),e._v(", and "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(". Downstream developers should only use packages, classes, methods, and fields that are marked as "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Public"}},[e._v("Public")]),e._v(". Packages, classes, and methods that are not marked as "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Public"}},[e._v("Public")]),e._v(" are considered internal to Hadoop and are intended only for consumption by other components of Hadoop.")],1),e._v(" "),a("p",[e._v("If an element has an annotation that conflicts with it’s containing element’s annotation, then the most restrictive annotation takes precedence. For example, If a "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(" method is contained in a "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Public"}},[e._v("Public")]),e._v(" class, then the method should be treated as "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(". If a "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Public"}},[e._v("Public")]),e._v(" method is contained in a "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(" class, the method should be treated as "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(".")],1),e._v(" "),a("p",[e._v("If a method has no privacy annotation, then it inherits its privacy from its class. If a class has no privacy, it inherits its privacy from its package. If a package has no privacy, it should be assumed to be "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"stability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stability"}},[e._v("#")]),e._v(" Stability")]),e._v(" "),a("p",[e._v("Packages, classes, and methods may be annotated with a stability annotation. There are three classes of stability: "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Stable"}},[e._v("Stable")]),e._v(", "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Evolving"}},[e._v("Evolving")]),e._v(", and "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Unstable"}},[e._v("Unstable")]),e._v(". The stability annotations determine when "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Change-Compatibility"}},[e._v("incompatible changes")]),e._v(" are allowed to be made. "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Stable"}},[e._v("Stable")]),e._v(" means that no incompatible changes are allowed between major releases. "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Evolving"}},[e._v("Evolving")]),e._v(" means no incompatible changes are allowed between minor releases. "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Unstable"}},[e._v("Unstable")]),e._v(" means that incompatible changes are allowed at any time. As a downstream developer, it is best to avoid "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Unstable"}},[e._v("Unstable")]),e._v(" APIs and where possible to prefer "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Stable"}},[e._v("Stable")]),e._v(" ones.")],1),e._v(" "),a("p",[e._v("If a method has no stability annotation, then it inherits its stability from its class. If a class has no stability, it inherits its stability from its package. If a package has no stability, it should be assumed to be "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Unstable"}},[e._v("Unstable")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"releases-and-stability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#releases-and-stability"}},[e._v("#")]),e._v(" Releases and Stability")]),e._v(" "),a("p",[e._v("Per the above rules on API stability, new releases are allowed to change APIs as follows:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Release Type")]),e._v(" "),a("th",[e._v("Stable API Changes")]),e._v(" "),a("th",[e._v("Evolving API Changes")]),e._v(" "),a("th",[e._v("Unstable API Changes")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Major")]),e._v(" "),a("td",[e._v("Allowed")]),e._v(" "),a("td",[e._v("Allowed")]),e._v(" "),a("td",[e._v("Allowed")])]),e._v(" "),a("tr",[a("td",[e._v("Minor")]),e._v(" "),a("td",[e._v("Not Allowed")]),e._v(" "),a("td",[e._v("Allowed")]),e._v(" "),a("td",[e._v("Allowed")])]),e._v(" "),a("tr",[a("td",[e._v("Maintenance")]),e._v(" "),a("td",[e._v("Not Allowed")]),e._v(" "),a("td",[e._v("Not Allowed")]),e._v(" "),a("td",[e._v("Allowed")])])])]),e._v(" "),a("p",[e._v("Note that a major release is allowed to break compatibility of any API, even though the Hadoop developer community strives to maintain compatibility as much as possible, even across major releases. Note also that an "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Unstable"}},[e._v("Unstable")]),e._v(" API may change at any time without notice.")],1),e._v(" "),a("h3",{attrs:{id:"deprecation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecation"}},[e._v("#")]),e._v(" Deprecation")]),e._v(" "),a("p",[e._v("Classes or methods that are annotated as @Deprecated are no longer safe to use. The deprecated element should continue to function, but may and likely will be removed in a subsequent release. The stability annotation will determine the earliest release when the deprecated element can be removed. A "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Stable"}},[e._v("Stable")]),e._v(" element cannot be removed until the next major release. An "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Evolving"}},[e._v("Evolving")]),e._v(" element cannot be removed until the next minor release. An "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Unstable"}},[e._v("Unstable")]),e._v(" element may be removed at any time and will typically not be marked as deprecated before it is removed. "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Stable"}},[e._v("Stable")]),e._v(" and "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Evolving"}},[e._v("Evolving")]),e._v(" elements must be marked as deprecated for a full major or minor release (respectively) before they can be removed. For example, if a "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Stable"}},[e._v("Stable")]),e._v(" is marked as deprecated in Hadoop 3.1, it cannot be removed until Hadoop 5.0.")],1),e._v(" "),a("h3",{attrs:{id:"semantic-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantic-compatibility"}},[e._v("#")]),e._v(" Semantic Compatibility")]),e._v(" "),a("p",[e._v("The Apache Hadoop developer community strives to ensure that the behavior of APIs remains consistent across releases, though changes for correctness may result in changes in behavior. The API JavaDocs are considered the primary authority for the expected behavior of an API. In cases where the JavaDocs are insufficient or missing, the unit tests are considered the fallback authority for expected behavior. Where unit tests are not present, the intended behavior should be inferred from the naming. As much as possible downstream developers should avoid looking at the source code for the API itself to determine expected behavior as that approach can create dependencies on implementation details that are not expressly held as expected behavior by the Hadoop development community.")]),e._v(" "),a("p",[e._v("In cases where the JavaDocs are insufficient to infer expected behavior, downstream developers are strongly encouraged to file a Hadoop JIRA to request the JavaDocs be added or improved.")]),e._v(" "),a("p",[e._v("Be aware that fixes done for correctness reasons may cause changes to the expected behavior of an API, though such changes are expected to be accompanied by documentation that clarifies the new behavior.")]),e._v(" "),a("p",[e._v("The Apache Hadoop developer community tries to maintain binary compatibility for end user applications across releases. Ideally no updates to applications will be required when upgrading to a new Hadoop release, assuming the application does not use "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(", "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Limited-Private"}},[e._v("Limited-Private")]),e._v(", or "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Unstable"}},[e._v("Unstable")]),e._v(" APIs. MapReduce applications in particular are guaranteed binary compatibility across releases.")],1),e._v(" "),a("h3",{attrs:{id:"compatibility-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-issues"}},[e._v("#")]),e._v(" Compatibility Issues")]),e._v(" "),a("p",[e._v("The "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/Compatibility.html"}},[e._v("Hadoop Compatibility Specification")]),e._v(" states the standards that the Hadoop development community is expected to uphold, but for various reasons, the source code may not live up to the ideals of the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/Compatibility.html"}},[e._v("compatibility specification")]),e._v(".")],1),e._v(" "),a("p",[e._v("Two common issues that a downstream developer will encounter are:")]),e._v(" "),a("ol",[a("li",[e._v("APIs that are needed for application development aren’t "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Public"}},[e._v("Public")])],1),e._v(" "),a("li",[e._v("A "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Public"}},[e._v("Public")]),e._v(" API on which a downstream application depends is changed unexpectedly and incompatibly.")],1)]),e._v(" "),a("p",[e._v("In both of these cases, downstream developers are strongly encouraged to raise the issues with the Hadoop developer community either by sending an email to the appropriate "),a("a",{attrs:{href:"https://hadoop.apache.org/mailing_lists.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("developer mailing list"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://hadoop.apache.org/issue_tracking.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("filing a JIRA"),a("OutboundLink")],1),e._v(" or both. The developer community appreciates the feedback.")]),e._v(" "),a("p",[e._v("Downstream developers are encouraged to reach out to the Hadoop development community in any case when they encounter an issue while developing an application against Hadoop. Odds are good that if it’s an issue for one developer, it’s an issue that numerous developers have or will encounter.")]),e._v(" "),a("h2",{attrs:{id:"using-the-filesystem-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-filesystem-api"}},[e._v("#")]),e._v(" Using the FileSystem API")]),e._v(" "),a("p",[e._v("In the specific case of working with streams in Hadoop, e.g. FSDataOutputStream, an application can programmatically query for the capabilities of the stream using the methods of the "),a("a",{attrs:{href:"http://hadoop.apache.org/docs/current/api/org/apache/hadoop/fs/StreamCapabilities.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("StreamCapabilities"),a("OutboundLink")],1),e._v(" class. Dynamically adjusting to stream capabilities can make an applcation more robust in the face of changing implementations and environments.")]),e._v(" "),a("h2",{attrs:{id:"consuming-hadoop-rest-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consuming-hadoop-rest-apis"}},[e._v("#")]),e._v(" Consuming Hadoop REST APIs")]),e._v(" "),a("p",[e._v("The Hadoop REST APIs are a primary interface for a variety of downstream and internal applications and services. To support REST clients, the Hadoop REST APIs are versioned and will not change incompatibly within a version. Both the endpoint itself along with the list of supported parameters and the output from the endpoint are prohibited from changing incompatibly within a REST endpoint version. Note, however, that introducing new fields and other additive changes are considered compatible changes, so any consumer of the REST API should be flexible enough to ignore unknown fields.")]),e._v(" "),a("p",[e._v("The REST API version is a single number and has no relationship with the Hadoop version number. The version number is encoded in the endpoint URL prefixed with a ‘v’, for example ‘v1’. A new REST endpoint version may only be introduced with a minor or major release. A REST endpoint version may only be removed after being labeled as deprecated for a full major release.")]),e._v(" "),a("h2",{attrs:{id:"consuming-hadoop-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consuming-hadoop-output"}},[e._v("#")]),e._v(" Consuming Hadoop Output")]),e._v(" "),a("p",[e._v("Hadoop produces a variety of outputs that could conceivably be consumed by application clients or downstream libraries. When consuming output from Hadoop, please consider the following:")]),e._v(" "),a("ul",[a("li",[e._v("Hadoop log output is not expected to change with a maintenance release unless it resolves a correctness issue. While log output can be consumed by software directly, it is intended primarily for a human reader.")]),e._v(" "),a("li",[e._v("Hadoop produces audit logs for a variety of operations. The audit logs are intended to be machine readable, though the addition of new records and fields are considered to be compatible changes. Any consumer of the audit logs should allow for unexpected records and fields. The audit log format must not change incompatibly between major releases.")]),e._v(" "),a("li",[e._v("Metrics data produced by Hadoop is mostly intended for automated consumption. The metrics format may not change in an incompatible way between major releases, but new records and fields can be compatibly added at any time. Consumers of the metrics data should allow for unknown records and fields.")])]),e._v(" "),a("h2",{attrs:{id:"consuming-hadoop-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consuming-hadoop-data"}},[e._v("#")]),e._v(" Consuming Hadoop Data")]),e._v(" "),a("p",[e._v("Binary file formats used by Hadoop to store data, such as sequence files, HAR files, etc, are guaranteed to remain compatible between minor releases. In addition, in cases where changes are made between major releases, both backward and forward compatibility must be maintained. Note that only the sequence file format is guaranteed not to change incompatibly, not the serialized classes that are contained therein.")]),e._v(" "),a("p",[e._v("In addition to the data produced by operations, Hadoop maintains its state information in a variety of data stores in various formats, such as the HDFS metadata store, the YARN resource manager state store, and the YARN federation state store. All Hadoop internal data stores are considered internal and "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html#Private"}},[e._v("Private")]),e._v(" to Hadoop. Downstream developers should not attempt to consume data from the Hadoop state store as the data and/or data format may change unpredictably.")],1),e._v(" "),a("h2",{attrs:{id:"automating-operations-with-the-hadoop-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automating-operations-with-the-hadoop-cli"}},[e._v("#")]),e._v(" Automating Operations with the Hadoop CLI")]),e._v(" "),a("p",[e._v("The set of tools that make up the Hadoop command-line interface are intended both for consumption by end users and by downstream developers who are creating tools that execute the CLI tools and parse the output. For this reason the Hadoop CLI tools are treated like an interface and held stable between major releases. Between major releases, no CLI tool options will be removed or change semantically. The output from CLI tools will likewise remain the same within a major version number. Note that any change to CLI tool output is considered an incompatible change, so between major version, the CLI output will not change. Note that the CLI tool output is distinct from the log output produced by the CLI tools. Log output is not intended for automated consumption and may change at any time.")]),e._v(" "),a("h2",{attrs:{id:"consuming-the-hadoop-web-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consuming-the-hadoop-web-ui"}},[e._v("#")]),e._v(" Consuming the Hadoop Web UI")]),e._v(" "),a("p",[e._v("The web UIs that are exposed by Hadoop are for human consumption only. Scraping the UIs for data is not a supported use case. No effort is made to ensure any kind of compatibility between the data displayed in any of the web UIs across releases.")]),e._v(" "),a("h2",{attrs:{id:"working-with-hadoop-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-hadoop-configurations"}},[e._v("#")]),e._v(" Working with Hadoop configurations")]),e._v(" "),a("p",[e._v("Hadoop uses two primary forms of configuration files: XML configuration files and logging configuration files.")]),e._v(" "),a("h3",{attrs:{id:"xml-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml-configuration-files"}},[e._v("#")]),e._v(" XML Configuration Files")]),e._v(" "),a("p",[e._v("The XML configuration files contain a set of properties as name-value pairs. The names and meanings of the properties are defined by Hadoop and are guaranteed to be stable across minor releases. A property can only be removed in a major release and only if it has been marked as deprecated for at least a full major release. Most properties have a default value that will be used if the property is not explicitly set in the XML configuration files. The default property values will not be changed during a maintenance release. For details about the properties supported by the various Hadoop components, see the component documentation.")]),e._v(" "),a("p",[e._v("Downstream developers and users can add their own properties into the XML configuration files for use by their tools and applications. While Hadoop makes no formal restrictions about defining new properties, a new property that conflicts with a property defined by Hadoop can lead to unexpected and undesirable results. Users are encouraged to avoid using custom configuration property names that conflict with the namespace of Hadoop-defined properties and thus should avoid using any prefixes used by Hadoop, e.g. hadoop, io, ipc, fs, net, file, ftp, kfs, ha, file, dfs, mapred, mapreduce, and yarn.")]),e._v(" "),a("h3",{attrs:{id:"logging-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-configuration-files"}},[e._v("#")]),e._v(" Logging Configuration Files")]),e._v(" "),a("p",[e._v("The log output produced by Hadoop daemons and CLIs is governed by a set of configuration files. These files control the minimum level of log message that will be output by the various components of Hadoop, as well as where and how those messages are stored. Between minor releases no changes will be made to the log configuration that reduce, eliminate, or redirect the log messages.")]),e._v(" "),a("h3",{attrs:{id:"other-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-configuration-files"}},[e._v("#")]),e._v(" Other Configuration Files")]),e._v(" "),a("p",[e._v("Hadoop makes use of a number of other types of configuration files in a variety of formats, such as the JSON resource profiles configuration or the XML fair scheduler configuration. No incompatible changes will be introduced to the configuration file formats within a minor release. Even between minor releases incompatible configuration file format changes will be avoided if possible.")]),e._v(" "),a("h2",{attrs:{id:"using-and-consuming-hadoop-artifacts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-and-consuming-hadoop-artifacts"}},[e._v("#")]),e._v(" Using and Consuming Hadoop Artifacts")]),e._v(" "),a("h3",{attrs:{id:"source-and-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-and-configuration-files"}},[e._v("#")]),e._v(" Source and Configuration Files")]),e._v(" "),a("p",[e._v("As a downstream developer or consumer of Hadoop, it’s possible to access all elements of the Hadoop platform, including source code, configuration files, build artifacts, etc. While the open nature of the platform allows it, developers should not create dependencies on these internal details of Hadoop as they may change at any time. The Hadoop development community will attempt, however, to keep the existing structure stable within a major version.")]),e._v(" "),a("p",[e._v("The location and general structure of the Hadoop configuration files, job history information (as consumed by the job history server), and logs files generated by Hadoop will be maintained across maintenance releases.")]),e._v(" "),a("h3",{attrs:{id:"build-artifacts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-artifacts"}},[e._v("#")]),e._v(" Build Artifacts")]),e._v(" "),a("p",[e._v("The build artifacts produced by the Hadoop build process, e.g. JAR files, are subject to change at any time and should not be treated as reliable, except for the client artifacts. Client artifacts and their contents will remain compatible within a major release. It is the goal of the Hadoop development community to allow application code to continue to function unchanged across minor releases and, whenever possible, across major releases. The current list of client artifacts is as follows:")]),e._v(" "),a("ul",[a("li",[e._v("hadoop-client")]),e._v(" "),a("li",[e._v("hadoop-client-api")]),e._v(" "),a("li",[e._v("hadoop-client-minicluster")]),e._v(" "),a("li",[e._v("hadoop-client-runtime")]),e._v(" "),a("li",[e._v("hadoop-hdfs-client")]),e._v(" "),a("li",[e._v("hadoop-hdfs-native-client")]),e._v(" "),a("li",[e._v("hadoop-mapreduce-client-app")]),e._v(" "),a("li",[e._v("hadoop-mapreduce-client-common")]),e._v(" "),a("li",[e._v("hadoop-mapreduce-client-core")]),e._v(" "),a("li",[e._v("hadoop-mapreduce-client-jobclient")]),e._v(" "),a("li",[e._v("hadoop-mapreduce-client-nativetask")]),e._v(" "),a("li",[e._v("hadoop-yarn-client")])]),e._v(" "),a("h3",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment Variables")]),e._v(" "),a("p",[e._v("Some Hadoop components receive information through environment variables. For example, the HADOOP_OPTS environment variable is interpreted by most Hadoop processes as a string of additional JVM arguments to be used when starting a new JVM. Between minor releases the way Hadoop interprets environment variables will not change in an incompatible way. In other words, the same value placed into the same variable should produce the same result for all Hadoop releases within the same major version.")]),e._v(" "),a("h3",{attrs:{id:"library-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#library-dependencies"}},[e._v("#")]),e._v(" Library Dependencies")]),e._v(" "),a("p",[e._v("Hadoop relies on a large number of third-party libraries for its operation. As much as possible the Hadoop developer community works to hide these dependencies from downstream developers. Some common libraries, such as Guava, could cause significant compatibility issues between Hadoop and downstream applications if those dependencies were exposed downstream. Nonetheless Hadoop does expose some of its dependencies, especially prior to Hadoop 3. No new dependency will be exposed by Hadoop via the client artifacts between major releases.")]),e._v(" "),a("p",[e._v("A common downstream anti-pattern is to use the output of hadoop classpath to set the downstream application’s classpath or add all third-party JARs included with Hadoop to the downstream application’s classpath. This practice creates a tight coupling between the downstream application and Hadoop’s third-party dependencies, which leads to a fragile application that is hard to maintain as Hadoop’s dependencies change. This practice is strongly discouraged.")]),e._v(" "),a("p",[e._v("Hadoop depends on the Java virtual machine for its operation, which can impact downstream applications. To minimize disruption, the minimum supported version of the JVM will not change between major releases of Hadoop. In the event that the current minimum supported JVM version becomes unsupported between major releases, the minimum supported JVM version may be changed in a minor release.")]),e._v(" "),a("p",[e._v("Hadoop also includes several native components, including compression, the container executor binary, and various native integrations. These native components introduce a set of native dependencies for Hadoop. The set of native dependencies can change in a minor release, but the Hadoop developer community will try to limit any dependency version changes to minor version changes as much as possible.")]),e._v(" "),a("h3",{attrs:{id:"hardware-and-os-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-and-os-dependencies"}},[e._v("#")]),e._v(" Hardware and OS Dependencies")]),e._v(" "),a("p",[e._v("Hadoop is currently supported by the Hadoop developer community on Linux and Windows running on x86 and AMD processors. These OSes and processors are likely to remain supported for the foreseeable future. In the event that support plans change, the OS or processor to be dropped will be documented as deprecated for at least a full minor release, but ideally a full major release, before actually being dropped. Hadoop may function on other OSes and processor architectures, but the community may not be able to provide assistance in the event of issues.")]),e._v(" "),a("p",[e._v("There are no guarantees on how the minimum resources required by Hadoop daemons will change between releases, even maintenance releases. Nonetheless, the Hadoop developer community will try to avoid increasing the requirements within a minor release.")]),e._v(" "),a("p",[e._v("Any file systems supported Hadoop, such as through the FileSystem API, will in most cases continue to be supported throughout a major release. The only case where support for a file system can be dropped within a major version is if a clean migration path to an alternate client implementation is provided.")]),e._v(" "),a("h2",{attrs:{id:"questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[e._v("#")]),e._v(" Questions")]),e._v(" "),a("p",[e._v("For question about developing applications and projects against Apache Hadoop, please contact the developer mailing list for the relevant component(s):")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"mailto:common-dev@hadoop.apache.org"}},[e._v("common-dev")])]),e._v(" "),a("li",[a("a",{attrs:{href:"mailto:hdfs-dev@hadoop.apache.org"}},[e._v("hdfs-dev")])]),e._v(" "),a("li",[a("a",{attrs:{href:"mailto:mapreduce-dev@hadoop.apache.org"}},[e._v("mapreduce-dev")])]),e._v(" "),a("li",[a("a",{attrs:{href:"mailto:yarn-dev@hadoop.apache.org"}},[e._v("yarn-dev")])]),e._v(" "),a("li",[a("a",{attrs:{href:"mailto:submarine-dev@hadoop.apache.org"}},[e._v("submarine-dev")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);