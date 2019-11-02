(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{350:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hadoop-azure-support-azure-blob-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-azure-support-azure-blob-storage"}},[e._v("#")]),e._v(" Hadoop Azure Support: Azure Blob Storage")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The hadoop-azure module provides support for integration with "),a("a",{attrs:{href:"http://azure.microsoft.com/en-us/documentation/services/storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Blob Storage"),a("OutboundLink")],1),e._v(". The built jar file, named hadoop-azure.jar, also declares transitive dependencies on the additional artifacts it requires, notably the "),a("a",{attrs:{href:"https://github.com/Azure/azure-storage-java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage SDK for Java"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To make it part of Apache Hadoop’s default classpath, simply make sure that HADOOP_OPTIONAL_TOOLSin hadoop-env.sh has 'hadoop-azure in the list. Example:")]),e._v(" "),a("pre",[a("code",[e._v('export HADOOP_OPTIONAL_TOOLS="hadoop-azure,hadoop-azure-datalake"\n')])]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Read and write data stored in an Azure Blob Storage account.")]),e._v(" "),a("li",[e._v("Present a hierarchical file system view by implementing the standard Hadoop "),a("router-link",{attrs:{to:"/en/docs/api/org/apache/hadoop/fs/FileSystem.html"}},[e._v("FileSystem")]),e._v(" interface.")],1),e._v(" "),a("li",[e._v("Supports configuration of multiple Azure Blob Storage accounts.")]),e._v(" "),a("li",[e._v("Supports both block blobs (suitable for most use cases, such as MapReduce) and page blobs (suitable for continuous write use cases, such as an HBase write-ahead log).")]),e._v(" "),a("li",[e._v("Reference file system paths using URLs using the wasb scheme.")]),e._v(" "),a("li",[e._v("Also reference file system paths using URLs with the wasbs scheme for SSL encrypted access.")]),e._v(" "),a("li",[e._v("Can act as a source of data in a MapReduce job, or a sink.")]),e._v(" "),a("li",[e._v("Tested on both Linux and Windows.")]),e._v(" "),a("li",[e._v("Tested at scale.")])]),e._v(" "),a("h2",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),a("ul",[a("li",[e._v("File owner and group are persisted, but the permissions model is not enforced. Authorization occurs at the level of the entire Azure Blob Storage account.")]),e._v(" "),a("li",[e._v("File last access time is not tracked.")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("h3",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("p",[e._v("The Azure Blob Storage data model presents 3 core concepts:")]),e._v(" "),a("ul",[a("li",[e._v("Storage Account: All access is done through a storage account.")]),e._v(" "),a("li",[e._v("Container: A container is a grouping of multiple blobs. A storage account may have multiple containers. In Hadoop, an entire file system hierarchy is stored in a single container. It is also possible to configure multiple containers, effectively presenting multiple file systems that can be referenced using distinct URLs.")]),e._v(" "),a("li",[e._v("Blob: A file of any type and size. In Hadoop, files are stored in blobs. The internal implementation also uses blobs to persist the file system hierarchy and other metadata.")])]),e._v(" "),a("h3",{attrs:{id:"configuring-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-credentials"}},[e._v("#")]),e._v(" Configuring Credentials")]),e._v(" "),a("p",[e._v("Usage of Azure Blob Storage requires configuration of credentials. Typically this is set in core-site.xml. The configuration property name is of the form fs.azure.account.key."),a("account",{attrs:{name:""}},[e._v(".blob.core.windows.net and the value is the access key. The access key is a secret that protects access to your storage account. Do not share the access key (or the core-site.xml file) with an untrusted party.")])],1),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.account.key.youraccount.blob.core.windows.net</name>\n  <value>YOUR ACCESS KEY</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("In many Hadoop clusters, the core-site.xml file is world-readable. It is possible to protect the access key within a credential provider as well. This provides an encrypted file format along with protection with file permissions.")]),e._v(" "),a("h4",{attrs:{id:"protecting-the-azure-credentials-for-wasb-with-credential-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protecting-the-azure-credentials-for-wasb-with-credential-providers"}},[e._v("#")]),e._v(" Protecting the Azure Credentials for WASB with Credential Providers")]),e._v(" "),a("p",[e._v("To protect these credentials from prying eyes, it is recommended that you use the credential provider framework to securely store them and access them through configuration. The following describes its use for Azure credentials in WASB FileSystem.")]),e._v(" "),a("p",[e._v("For additional reading on the credential provider API see: "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-common/CredentialProviderAPI.html"}},[e._v("Credential Provider API")]),e._v(".")],1),e._v(" "),a("h5",{attrs:{id:"end-to-end-steps-for-distcp-and-wasb-with-credential-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-to-end-steps-for-distcp-and-wasb-with-credential-providers"}},[e._v("#")]),e._v(" End to End Steps for Distcp and WASB with Credential Providers")]),e._v(" "),a("h6",{attrs:{id:"provision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provision"}},[e._v("#")]),e._v(" provision")]),e._v(" "),a("pre",[a("code",[e._v("% hadoop credential create fs.azure.account.key.youraccount.blob.core.windows.net -value 123\n    -provider localjceks://file/home/lmccay/wasb.jceks\n")])]),e._v(" "),a("h6",{attrs:{id:"configure-core-site-xml-or-command-line-system-property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-core-site-xml-or-command-line-system-property"}},[e._v("#")]),e._v(" configure core-site.xml or command line system property")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>hadoop.security.credential.provider.path</name>\n  <value>localjceks://file/home/lmccay/wasb.jceks</value>\n  <description>Path to interrogate for protected credentials.</description>\n</property>\n")])]),e._v(" "),a("h6",{attrs:{id:"distcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distcp"}},[e._v("#")]),e._v(" distcp")]),e._v(" "),a("pre",[a("code",[e._v("% hadoop distcp\n    [-D hadoop.security.credential.provider.path=localjceks://file/home/lmccay/wasb.jceks]\n    hdfs://hostname:9001/user/lmccay/007020615 wasb://yourcontainer@youraccount.blob.core.windows.net/testDir/\n")])]),e._v(" "),a("p",[e._v("NOTE: You may optionally add the provider path property to the distcp command line instead of added job specific configuration to a generic core-site.xml. The square brackets above illustrate this capability.")]),e._v(" "),a("h4",{attrs:{id:"protecting-the-azure-credentials-for-wasb-within-an-encrypted-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protecting-the-azure-credentials-for-wasb-within-an-encrypted-file"}},[e._v("#")]),e._v(" Protecting the Azure Credentials for WASB within an Encrypted File")]),e._v(" "),a("p",[e._v("In addition to using the credential provider framework to protect your credentials, it’s also possible to configure it in encrypted form. An additional configuration property specifies an external program to be invoked by Hadoop processes to decrypt the key. The encrypted key value is passed to this external program as a command line argument:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.account.keyprovider.youraccount</name>\n  <value>org.apache.hadoop.fs.azure.ShellDecryptionKeyProvider</value>\n</property>\n\n<property>\n  <name>fs.azure.account.key.youraccount.blob.core.windows.net</name>\n  <value>YOUR ENCRYPTED ACCESS KEY</value>\n</property>\n\n<property>\n  <name>fs.azure.shellkeyprovider.script</name>\n  <value>PATH TO DECRYPTION PROGRAM</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"block-blob-with-compaction-support-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-blob-with-compaction-support-and-configuration"}},[e._v("#")]),e._v(" Block Blob with Compaction Support and Configuration")]),e._v(" "),a("p",[e._v("Block blobs are the default kind of blob and are good for most big-data use cases. However, block blobs have strict limit of 50,000 blocks per blob. To prevent reaching the limit WASB, by default, does not upload new block to the service after every hflush() or hsync().")]),e._v(" "),a("p",[e._v("For most of the cases, combining data from multiple write() calls in blocks of 4Mb is a good optimization. But, in others cases, like HBase log files, every call to hflush() or hsync() must upload the data to the service.")]),e._v(" "),a("p",[e._v("Block blobs with compaction upload the data to the cloud service after every hflush()/hsync(). To mitigate the limit of 50000 blocks, hflush()/hsync() runs once compaction process, if number of blocks in the blob is above 32,000.")]),e._v(" "),a("p",[e._v("Block compaction search and replaces a sequence of small blocks with one big block. That means there is associated cost with block compaction: reading small blocks back to the client and writing it again as one big block.")]),e._v(" "),a("p",[e._v("In order to have the files you create be block blobs with block compaction enabled, the client must set the configuration variable fs.azure.block.blob.with.compaction.dir to a comma-separated list of folder names.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.block.blob.with.compaction.dir</name>\n  <value>/hbase/WALs,/data/myblobfiles</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"page-blob-support-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-blob-support-and-configuration"}},[e._v("#")]),e._v(" Page Blob Support and Configuration")]),e._v(" "),a("p",[e._v("The Azure Blob Storage interface for Hadoop supports two kinds of blobs, "),a("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/azure/ee691964.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("block blobs and page blobs"),a("OutboundLink")],1),e._v(". Block blobs are the default kind of blob and are good for most big-data use cases, like input data for Hive, Pig, analytical map-reduce jobs etc. Page blob handling in hadoop-azure was introduced to support HBase log files. Page blobs can be written any number of times, whereas block blobs can only be appended to 50,000 times before you run out of blocks and your writes will fail. That won’t work for HBase logs, so page blob support was introduced to overcome this limitation.")]),e._v(" "),a("p",[e._v("Page blobs can be up to 1TB in size, larger than the maximum 200GB size for block blobs. You should stick to block blobs for most usage, and page blobs are only tested in context of HBase write-ahead logs.")]),e._v(" "),a("p",[e._v("In order to have the files you create be page blobs, you must set the configuration variable fs.azure.page.blob.dir to a comma-separated list of folder names.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.page.blob.dir</name>\n  <value>/hbase/WALs,/hbase/oldWALs,/data/mypageblobfiles</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("You can set this to simply / to make all files page blobs.")]),e._v(" "),a("p",[e._v("The configuration option fs.azure.page.blob.size is the default initial size for a page blob. It must be 128MB or greater, and no more than 1TB, specified as an integer number of bytes.")]),e._v(" "),a("p",[e._v("The configuration option fs.azure.page.blob.extension.size is the page blob extension size. This defines the amount to extend a page blob if it starts to get full. It must be 128MB or greater, specified as an integer number of bytes.")]),e._v(" "),a("h3",{attrs:{id:"custom-user-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-user-agent"}},[e._v("#")]),e._v(" Custom User-Agent")]),e._v(" "),a("p",[e._v("WASB passes User-Agent header to the Azure back-end. The default value contains WASB version, Java Runtime version, Azure Client library version, and the value of the configuration option fs.azure.user.agent.prefix. Customized User-Agent header enables better troubleshooting and analysis by Azure service.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n    <name>fs.azure.user.agent.prefix</name>\n    <value>Identifier</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"atomic-folder-rename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomic-folder-rename"}},[e._v("#")]),e._v(" Atomic Folder Rename")]),e._v(" "),a("p",[e._v("Azure storage stores files as a flat key/value store without formal support for folders. The hadoop-azure file system layer simulates folders on top of Azure storage. By default, folder rename in the hadoop-azure file system layer is not atomic. That means that a failure during a folder rename could, for example, leave some folders in the original directory and some in the new one.")]),e._v(" "),a("p",[e._v("HBase depends on atomic folder rename. Hence, a configuration setting was introduced called fs.azure.atomic.rename.dir that allows you to specify a comma-separated list of directories to receive special treatment so that folder rename is made atomic. The default value of this setting is just /hbase. Redo will be applied to finish a folder rename that fails. A file "),a("folderName",[e._v("-renamePending.json may appear temporarily and is the record of the intention of the rename operation, to allow redo in event of a failure.")])],1),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.atomic.rename.dir</name>\n  <value>/hbase,/data</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"accessing-wasb-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-wasb-urls"}},[e._v("#")]),e._v(" Accessing wasb URLs")]),e._v(" "),a("p",[e._v("After credentials are configured in core-site.xml, any Hadoop component may reference files in that Azure Blob Storage account by using URLs of the following format:")]),e._v(" "),a("pre",[a("code",[e._v("wasb[s]://<containername>@<accountname>.blob.core.windows.net/<path>\n")])]),e._v(" "),a("p",[e._v("The schemes wasb and wasbs identify a URL on a file system backed by Azure Blob Storage. wasb utilizes unencrypted HTTP access for all interaction with the Azure Blob Storage API. wasbs utilizes SSL encrypted HTTPS access.")]),e._v(" "),a("p",[e._v("For example, the following "),a("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-common/FileSystemShell.html"}},[e._v("FileSystem Shell")]),e._v(" commands demonstrate access to a storage account named youraccount and a container named yourcontainer.")],1),e._v(" "),a("pre",[a("code",[e._v("% hadoop fs -mkdir wasb://yourcontainer@youraccount.blob.core.windows.net/testDir\n\n% hadoop fs -put testFile wasb://yourcontainer@youraccount.blob.core.windows.net/testDir/testFile\n\n% hadoop fs -cat wasbs://yourcontainer@youraccount.blob.core.windows.net/testDir/testFile\ntest file content\n")])]),e._v(" "),a("p",[e._v("It’s also possible to configure fs.defaultFS to use a wasb or wasbs URL. This causes all bare paths, such as /testDir/testFile to resolve automatically to that file system.")]),e._v(" "),a("h3",{attrs:{id:"append-api-support-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#append-api-support-and-configuration"}},[e._v("#")]),e._v(" Append API Support and Configuration")]),e._v(" "),a("p",[e._v("The Azure Blob Storage interface for Hadoop has optional support for Append API for single writer by setting the configuration fs.azure.enable.append.support to true.")]),e._v(" "),a("p",[e._v("For Example:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.enable.append.support</name>\n  <value>true</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("It must be noted Append support in Azure Blob Storage interface DIFFERS FROM HDFS SEMANTICS. Append support does not enforce single writer internally but requires applications to guarantee this semantic. It becomes a responsibility of the application either to ensure single-threaded handling for a particular file path, or rely on some external locking mechanism of its own. Failure to do so will result in unexpected behavior.")]),e._v(" "),a("h3",{attrs:{id:"multithread-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multithread-support"}},[e._v("#")]),e._v(" Multithread Support")]),e._v(" "),a("p",[e._v("Rename and Delete blob operations on directories with large number of files and sub directories currently is very slow as these operations are done one blob at a time serially. These files and sub folders can be deleted or renamed parallel. Following configurations can be used to enable threads to do parallel processing")]),e._v(" "),a("p",[e._v("To enable 10 threads for Delete operation. Set configuration value to 0 or 1 to disable threads. The default behavior is threads disabled.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.delete.threads</name>\n  <value>10</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("To enable 20 threads for Rename operation. Set configuration value to 0 or 1 to disable threads. The default behavior is threads disabled.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.rename.threads</name>\n  <value>20</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"wasb-secure-mode-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasb-secure-mode-and-configuration"}},[e._v("#")]),e._v(" WASB Secure mode and configuration")]),e._v(" "),a("p",[e._v("WASB can operate in secure mode where the Storage access keys required to communicate with Azure storage does not have to be in the same address space as the process using WASB. In this mode all interactions with Azure storage is performed using SAS uris. There are two sub modes within the Secure mode, one is remote SAS key mode where the SAS keys are generated from a remote process and local mode where SAS keys are generated within WASB. By default the SAS Key mode is expected to run in Romote mode, however for testing purposes the local mode can be enabled to generate SAS keys in the same process as WASB.")]),e._v(" "),a("p",[e._v("To enable Secure mode following property needs to be set to true.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.secure.mode</name>\n  <value>true</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("To enable SAS key generation locally following property needs to be set to true.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.local.sas.key.mode</name>\n  <value>true</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("To use the remote SAS key generation mode, comma separated external REST services are expected to provided required SAS keys. Following property can used to provide the end point to use for remote SAS Key generation:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.cred.service.urls</name>\n  <value>{URL}</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("The remote service is expected to provide support for two REST calls {URL}/GET_CONTAINER_SAS and {URL}/GET_RELATIVE_BLOB_SAS, for generating container and relative blob sas keys. An example requests")]),e._v(" "),a("p",[e._v("{URL}/GET_CONTAINER_SAS?storage_account=<account_name>&container="),a("container",[e._v("&sas_expiry="),a("expiry",{attrs:{period:""}},[e._v("&delegation_token="),a("delegation",{attrs:{token:""}},[e._v(" {URL}/GET_CONTAINER_SAS?storage_account=<account_name>&container="),a("container",[e._v("&relative_path="),a("relative",{attrs:{path:""}},[e._v("&sas_expiry="),a("expiry",{attrs:{period:""}},[e._v("&delegation_token="),a("delegation",{attrs:{token:""}})],1)],1)],1)],1)],1)],1)],1),e._v(" "),a("p",[e._v("The service is expected to return a response in JSON format:")]),e._v(" "),a("pre",[a("code",[e._v('{\n  "responseCode" : 0 or non-zero <int>,\n  "responseMessage" : relavant message on failure <String>,\n  "sasKey" : Requested SAS Key <String>\n}\n')])]),e._v(" "),a("h3",{attrs:{id:"authorization-support-in-wasb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-support-in-wasb"}},[e._v("#")]),e._v(" Authorization Support in WASB")]),e._v(" "),a("p",[e._v("Authorization support can be enabled in WASB using the following configuration:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.authorization</name>\n  <value>true</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("The current implementation of authorization relies on the presence of an external service that can enforce the authorization. The service is expected to be running on comma separated URLs provided by the following config.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.authorization.remote.service.urls</name>\n  <value>{URL}</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("The remote service is expected to provide support for the following REST call: {URL}/CHECK_AUTHORIZATION An example request: {URL}/CHECK_AUTHORIZATION?wasb_absolute_path=<absolute_path>&operation_type="),a("operation",{attrs:{type:""}},[e._v("&delegation_token="),a("delegation",{attrs:{token:""}})],1)],1),e._v(" "),a("p",[e._v("The service is expected to return a response in JSON format:")]),e._v(" "),a("pre",[a("code",[e._v('{\n    "responseCode" : 0 or non-zero <int>,\n    "responseMessage" : relevant message on failure <String>,\n    "authorizationResult" : true/false <boolean>\n}\n')])]),e._v(" "),a("h3",{attrs:{id:"delegation-token-support-in-wasb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegation-token-support-in-wasb"}},[e._v("#")]),e._v(" Delegation token support in WASB")]),e._v(" "),a("p",[e._v("Delegation token support support can be enabled in WASB using the following configuration:")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.enable.kerberos.support</name>\n  <value>true</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("The current implementation of delegation token implementation relies on the presence of an external service instances that can generate and manage delegation tokens. The service is expected to be running on comma separated URLs provided by the following config.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.delegation.token.service.urls</name>\n  <value>{URL}</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("The remote service is expected to provide support for the following REST call: {URL}?op=GETDELEGATIONTOKEN, {URL}?op=RENEWDELEGATIONTOKEN and {URL}?op=CANCELDELEGATIONTOKEN An example request: {URL}?op=GETDELEGATIONTOKEN&renewer="),a("renewer",[e._v(" {URL}?op=RENEWDELEGATIONTOKEN&token="),a("delegation",{attrs:{token:""}},[e._v(" {URL}?op=CANCELDELEGATIONTOKEN&token="),a("delegation",{attrs:{token:""}})],1)],1)],1),e._v(" "),a("p",[e._v("The service is expected to return a response in JSON format for GETDELEGATIONTOKEN request:")]),e._v(" "),a("pre",[a("code",[e._v('{\n    "Token" : {\n        "urlString": URL string of delegation token.\n    }\n}\n')])]),e._v(" "),a("h3",{attrs:{id:"chown-behaviour-when-authorization-is-enabled-in-wasb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chown-behaviour-when-authorization-is-enabled-in-wasb"}},[e._v("#")]),e._v(" chown behaviour when authorization is enabled in WASB")]),e._v(" "),a("p",[e._v("When authorization is enabled, only the users listed in the following configuration are allowed to change the owning user of files/folders in WASB. The configuration value takes a comma separated list of user names who are allowed to perform chown.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.chown.allowed.userlist</name>\n  <value>user1,user2</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"chmod-behaviour-when-authorization-is-enabled-in-wasb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chmod-behaviour-when-authorization-is-enabled-in-wasb"}},[e._v("#")]),e._v(" chmod behaviour when authorization is enabled in WASB")]),e._v(" "),a("p",[e._v("When authorization is enabled, only the owner and the users listed in the following configurations are allowed to change the permissions of files/folders in WASB. The configuration value takes a comma separated list of user names who are allowed to perform chmod.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.azure.daemon.userlist</name>\n  <value>user1,user2</value>\n</property>\n<property>\n  <name>fs.azure.chmod.allowed.userlist</name>\n  <value>userA,userB</value>\n</property>\n")])]),e._v(" "),a("p",[e._v("Caching of both SAS keys and Authorization responses can be enabled using the following setting: The cache settings are applicable only when fs.azure.authorization is enabled. The cache is maintained at a filesystem object level.")]),e._v(" "),a("pre",[a("code",[e._v("    <property>\n      <name>fs.azure.authorization.caching.enable</name>\n      <value>true</value>\n    </property>\n")])]),e._v(" "),a("p",[e._v("The maximum number of entries that that cache can hold can be customized using the following setting:")]),e._v(" "),a("pre",[a("code",[e._v("    <property>\n      <name>fs.azure.authorization.caching.maxentries</name>\n      <value>512</value>\n    </property>\n")])]),e._v(" "),a("p",[e._v("The validity of an authorization cache-entry can be controlled using the following setting: Setting the value to zero disables authorization-caching. If the key is not specified, a default expiry duration of 5m takes effect.")]),e._v(" "),a("pre",[a("code",[e._v("   <property>\n     <name>fs.azure.authorization.cacheentry.expiry.period</name>\n     <value>5m</value>\n   </property>\n")])]),e._v(" "),a("p",[e._v("The validity of a SASKey cache-entry can be controlled using the following setting. Setting the value to zero disables SASKey-caching. If the key is not specified, the default expiry duration specified in the sas-key request takes effect.")]),e._v(" "),a("pre",[a("code",[e._v("   <property>\n     <name>fs.azure.saskey.cacheentry.expiry.period</name>\n     <value>90d</value>\n   </property>\n")])]),e._v(" "),a("p",[e._v("Use container saskey for access to all blobs within the container. Blob-specific saskeys are not used when this setting is enabled. This setting provides better performance compared to blob-specific saskeys.")]),e._v(" "),a("pre",[a("code",[e._v("   <property>\n     <name>fs.azure.saskey.usecontainersaskeyforallaccess</name>\n     <value>true</value>\n   </property>\n")])]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/en/docs/hadoop-azure/testing_azure.html"}},[e._v("Testing the Azure WASB client")]),e._v(".")],1),e._v(" "),a("li",[e._v("MSDN article, "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding Block Blobs, Append Blobs, and Page Blobs"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);