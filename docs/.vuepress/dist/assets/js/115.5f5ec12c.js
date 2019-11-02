(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{314:function(e,n,r){"use strict";r.r(n);var t=r(0),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"yarn-secure-containers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn-secure-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" YARN Secure Containers")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("YARN containers in a secure cluster use the operating system facilities to offer execution isolation for containers. Secure containers execute under the credentials of the job user. The operating system enforces access restriction for the container. The container must run as the use that submitted the application.")]),e._v(" "),r("p",[e._v("Secure Containers work only in the context of secured YARN clusters.")]),e._v(" "),r("h3",{attrs:{id:"container-isolation-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#container-isolation-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Container isolation requirements")]),e._v(" "),r("p",[e._v("The container executor must access the local files and directories needed by the container such as jars, configuration files, log files, shared objects etc. Although it is launched by the NodeManager, the container should not have access to the NodeManager private files and configuration. Container running applications submitted by different users should be isolated and unable to access each other files and directories. Similar requirements apply to other system non-file securable objects like named pipes, critical sections, LPC queues, shared memory etc.")]),e._v(" "),r("h3",{attrs:{id:"linux-secure-container-executor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-secure-container-executor","aria-hidden":"true"}},[e._v("#")]),e._v(" Linux Secure Container Executor")]),e._v(" "),r("p",[e._v("On Linux environment the secure container executor is the LinuxContainerExecutor. It uses an external program called the container-executor to launch the container. This program has the setuid access right flag set which allows it to launch the container with the permissions of the YARN application user.")]),e._v(" "),r("h3",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("The configured directories for yarn.nodemanager.local-dirs and yarn.nodemanager.log-dirs must be owned by the configured NodeManager user (yarn) and group (hadoop). The permission set on these directories must be drwxr-xr-x.")]),e._v(" "),r("p",[e._v("The container-executor program must be owned by root and have the permission set ---sr-s---.")]),e._v(" "),r("p",[e._v("To configure the NodeManager to use the LinuxContainerExecutor set the following in the conf/yarn-site.xml:")]),e._v(" "),r("pre",[r("code",[e._v("<property>\n  <name>yarn.nodemanager.container-executor.class</name>\n  <value>org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor</value>\n</property>\n\n<property>\n  <name>yarn.nodemanager.linux-container-executor.group</name>\n  <value>hadoop</value>\n</property>\n")])]),e._v(" "),r("p",[e._v("Additionally the LCE requires the container-executor.cfg file, which is read by the container-executor program.")]),e._v(" "),r("pre",[r("code",[e._v("yarn.nodemanager.linux-container-executor.group=#configured value of yarn.nodemanager.linux-container-executor.group\nbanned.users=#comma separated list of users who can not run applications\nallowed.system.users=#comma separated list of allowed system users\nmin.user.id=1000#Prevent other super-users\n")])]),e._v(" "),r("h3",{attrs:{id:"windows-secure-container-executor-wsce"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-secure-container-executor-wsce","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows Secure Container Executor (WSCE)")]),e._v(" "),r("p",[e._v("The Windows environment secure container executor is the WindowsSecureContainerExecutor. It uses the Windows S4U infrastructure to launch the container as the YARN application user. The WSCE requires the presense of the hadoopwinutilsvc service. This services is hosted by %HADOOP_HOME%\\bin\\winutils.exe started with the service command line argument. This service offers some privileged operations that require LocalSystem authority so that the NM is not required to run the entire JVM and all the NM code in an elevated context. The NM interacts with the hadoopwintulsvc service by means of Local RPC (LRPC) via calls JNI to the RCP client hosted in hadoop.dll.")]),e._v(" "),r("h3",{attrs:{id:"configuration-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("To configure the NodeManager to use the WindowsSecureContainerExecutor set the following in the conf/yarn-site.xml:")]),e._v(" "),r("pre",[r("code",[e._v("        <property>\n          <name>yarn.nodemanager.container-executor.class</name>\n          <value>org.apache.hadoop.yarn.server.nodemanager.WindowsSecureContainerExecutor</value>\n        </property>\n\n        <property>\n          <name>yarn.nodemanager.windows-secure-container-executor.group</name>\n          <value>yarn</value>\n        </property>\n")])]),e._v(" "),r("p",[e._v("The hadoopwinutilsvc uses %HADOOP_HOME%\\etc\\hadoop\\wsce_site.xml to configure access to the privileged operations.")]),e._v(" "),r("pre",[r("code",[e._v("<property>\n <name>yarn.nodemanager.windows-secure-container-executor.impersonate.allowed</name>\n  <value>HadoopUsers</value>\n</property>\n\n<property>\n  <name>yarn.nodemanager.windows-secure-container-executor.impersonate.denied</name>\n  <value>HadoopServices,Administrators</value>\n</property>\n\n<property>\n  <name>yarn.nodemanager.windows-secure-container-executor.allowed</name>\n  <value>nodemanager</value>\n</property>\n\n<property>\n  <name>yarn.nodemanager.windows-secure-container-executor.local-dirs</name>\n  <value>nm-local-dir, nm-log-dirs</value>\n</property>\n\n<property>\n  <name>yarn.nodemanager.windows-secure-container-executor.job-name</name>\n  <value>nodemanager-job-name</value>\n</property>  \n")])]),e._v(" "),r("p",[e._v("yarn.nodemanager.windows-secure-container-executor.allowed should contain the name of the service account running the nodemanager. This user will be allowed to access the hadoopwintuilsvc functions.")]),e._v(" "),r("p",[e._v("yarn.nodemanager.windows-secure-container-executor.impersonate.allowed should contain the users that are allowed to create containers in the cluster. These users will be allowed to be impersonated by hadoopwinutilsvc.")]),e._v(" "),r("p",[e._v("yarn.nodemanager.windows-secure-container-executor.impersonate.denied should contain users that are explicitly forbidden from creating containers. hadoopwinutilsvc will refuse to impersonate these users.")]),e._v(" "),r("p",[e._v("yarn.nodemanager.windows-secure-container-executor.local-dirs should contain the nodemanager local dirs. hadoopwinutilsvc will allow only file operations under these directories. This should contain the same values as $yarn.nodemanager.local-dirs, $yarn.nodemanager.log-dirs but note that hadoopwinutilsvc XML configuration processing does not do substitutions so the value must be the final value. All paths must be absolute and no environment variable substitution will be performed. The paths are compared LOCAL_INVARIANT case insensitive string comparison, the file path validated must start with one of the paths listed in local-dirs configuration. Use comma as path separator:,")]),e._v(" "),r("p",[e._v("yarn.nodemanager.windows-secure-container-executor.job-name should contain an Windows NT job name that all containers should be added to. This configuration is optional. If not set, the container is not added to a global NodeManager job. Normally this should be set to the job that the NM is assigned to, so that killing the NM kills also all containers. Hadoopwinutilsvc will not attempt to create this job, the job must exists when the container is launched. If the value is set and the job does not exists, container launch will fail with error 2 The system cannot find the file specified. Note that this global NM job is not related to the container job, which always gets created for each container and is named after the container ID. This setting controls a global job that spans all containers and the parent NM, and as such it requires nested jobs. Nested jobs are available only post Windows 8 and Windows Server 2012.")]),e._v(" "),r("h4",{attrs:{id:"useful-links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#useful-links","aria-hidden":"true"}},[e._v("#")]),e._v(" Useful Links")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"http://msdn.microsoft.com/en-us/magazine/cc188757.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Exploring S4U Kerberos Extensions in Windows Server 2003"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/windows/desktop/hh448388.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nested Jobs"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://issues.apache.org/jira/browse/YARN-1063",target:"_blank",rel:"noopener noreferrer"}},[e._v("Winutils needs ability to create task as domain user"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://issues.apache.org/jira/browse/YARN-1972",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implement secure Windows Container Executor"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://issues.apache.org/jira/browse/YARN-2198",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remove the need to run NodeManager as privileged account for Windows Secure Container Executor"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);n.default=a.exports}}]);