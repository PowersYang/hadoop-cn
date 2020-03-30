(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{230:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mapreduce-commands-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce-commands-guide"}},[t._v("#")]),t._v(" MapReduce Commands Guide")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("All mapreduce commands are invoked by the bin/mapred script. Running the mapred script without any arguments prints the description for all commands.")]),t._v(" "),a("p",[t._v("Usage: mapred [SHELL_OPTIONS] COMMAND [GENERIC_OPTIONS] [COMMAND_OPTIONS]")]),t._v(" "),a("p",[t._v("Hadoop has an option parsing framework that employs parsing generic options as well as running classes.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("COMMAND_OPTIONS")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("SHELL_OPTIONS")]),t._v(" "),a("td",[t._v("The common set of shell options. These are documented on the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/CommandsManual.html#Shell_Options"}},[t._v("Hadoop Commands Reference")]),t._v(" page.")],1)]),t._v(" "),a("tr",[a("td",[t._v("GENERIC_OPTIONS")]),t._v(" "),a("td",[t._v("The common set of options supported by multiple commands. See the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/CommandsManual.html#Generic_Options"}},[t._v("Hadoop Commands Reference")]),t._v(" for more information.")],1)]),t._v(" "),a("tr",[a("td",[t._v("COMMAND COMMAND_OPTIONS")]),t._v(" "),a("td",[t._v("Various commands with their options are described in the following sections. The commands have been grouped into User Commands and Administration Commands.")])])])]),t._v(" "),a("h2",{attrs:{id:"user-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-commands"}},[t._v("#")]),t._v(" User Commands")]),t._v(" "),a("p",[t._v("Commands useful for users of a hadoop cluster.")]),t._v(" "),a("h3",{attrs:{id:"archive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archive"}},[t._v("#")]),t._v(" archive")]),t._v(" "),a("p",[t._v("Creates a hadoop archive. More information can be found at "),a("router-link",{attrs:{to:"/docs/hadoop-archives/HadoopArchives.html"}},[t._v("Hadoop Archives Guide")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"archive-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archive-logs"}},[t._v("#")]),t._v(" archive-logs")]),t._v(" "),a("p",[t._v("A tool to combine YARN aggregated logs into Hadoop archives to reduce the number of files in HDFS. More information can be found at "),a("router-link",{attrs:{to:"/docs/hadoop-archive-logs/HadoopArchiveLogs.html"}},[t._v("Hadoop Archive Logs Guide")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"classpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classpath"}},[t._v("#")]),t._v(" classpath")]),t._v(" "),a("p",[t._v("Usage: yarn classpath [--glob |--jar "),a("path",[t._v(" |-h |--help]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("COMMAND_OPTION")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--glob")]),t._v(" "),a("td",[t._v("expand wildcards")])]),t._v(" "),a("tr",[a("td",[t._v("--jar path")]),t._v(" "),a("td",[t._v("write classpath as manifest in jar named path")])]),t._v(" "),a("tr",[a("td",[t._v("-h, --help")]),t._v(" "),a("td",[t._v("print help")])])])]),t._v(" "),a("p",[t._v("Prints the class path needed to get the Hadoop jar and the required libraries. If called without arguments, then prints the classpath set up by the command scripts, which is likely to contain wildcards in the classpath entries. Additional options print the classpath after wildcard expansion or write the classpath into the manifest of a jar file. The latter is useful in environments where wildcards cannot be used and the expanded classpath exceeds the maximum supported command line length.")]),t._v(" "),a("h3",{attrs:{id:"distcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distcp"}},[t._v("#")]),t._v(" distcp")]),t._v(" "),a("p",[t._v("Copy file or directories recursively. More information can be found at "),a("router-link",{attrs:{to:"/docs/hadoop-distcp/DistCp.html"}},[t._v("Hadoop DistCp Guide")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job"}},[t._v("#")]),t._v(" job")]),t._v(" "),a("p",[t._v("Command to interact with Map Reduce Jobs.")]),t._v(" "),a("p",[t._v("Usage: mapred job | [GENERIC_OPTIONS] | [-submit "),a("job-file",[t._v("] | [-status "),a("job-id",[t._v("] | [-counter "),a("job-id",[a("group-name",[a("counter-name",[t._v("] | [-kill "),a("job-id",[t._v("] | [-events "),a("job-id",[t._v(" <from-event-#> <#-of-events>] | [-history [all] <jobHistoryFile|jobId> [-outfile "),a("file",[t._v("] [-format <human|json>]] | [-list [all]] | [-kill-task "),a("task-id",[t._v("] | [-fail-task "),a("task-id",[t._v("] | [-set-priority "),a("job-id",[a("priority",[t._v("] | [-list-active-trackers] | [-list-blacklisted-trackers] | [-list-attempt-ids "),a("job-id",[a("task-type",[a("task-state",[t._v("] [-logs "),a("job-id",[a("task-attempt-id",[t._v("] [-config "),a("job-id",[a("file",[t._v("]")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("COMMAND_OPTION")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-submit job-file")]),t._v(" "),a("td",[t._v("Submits the job.")])]),t._v(" "),a("tr",[a("td",[t._v("-status job-id")]),t._v(" "),a("td",[t._v("Prints the map and reduce completion percentage and all job counters.")])]),t._v(" "),a("tr",[a("td",[t._v("-counter job-id group-name counter-name")]),t._v(" "),a("td",[t._v("Prints the counter value.")])]),t._v(" "),a("tr",[a("td",[t._v("-kill job-id")]),t._v(" "),a("td",[t._v("Kills the job.")])]),t._v(" "),a("tr",[a("td",[t._v("-events job-id from-event-# #-of-events")]),t._v(" "),a("td",[t._v("Prints the events’ details received by jobtracker for the given range.")])]),t._v(" "),a("tr",[a("td",[t._v("-history [all] jobHistoryFilejobId [-outfile file] [-format humanjson]")]),t._v(" "),a("td",[t._v("Prints job details, failed and killed task details. More details about the job such as successful tasks, task attempts made for each task, task counters, etc can be viewed by specifying the [all] option. An optional file output path (instead of stdout) can be specified. The format defaults to human-readable but can also be changed to JSON with the [-format] option.")])]),t._v(" "),a("tr",[a("td",[t._v("-list [all]")]),t._v(" "),a("td",[t._v("Displays jobs which are yet to complete. -list all displays all jobs.")])]),t._v(" "),a("tr",[a("td",[t._v("-kill-task task-id")]),t._v(" "),a("td",[t._v("Kills the task. Killed tasks are NOT counted against failed attempts.")])]),t._v(" "),a("tr",[a("td",[t._v("-fail-task task-id")]),t._v(" "),a("td",[t._v("Fails the task. Failed tasks are counted against failed attempts.")])]),t._v(" "),a("tr",[a("td",[t._v("-set-priority job-id priority")]),t._v(" "),a("td",[t._v("Changes the priority of the job. Allowed priority values are VERY_HIGH, HIGH, NORMAL, LOW, VERY_LOW")])]),t._v(" "),a("tr",[a("td",[t._v("-list-active-trackers")]),t._v(" "),a("td",[t._v("List all the active NodeManagers in the cluster.")])]),t._v(" "),a("tr",[a("td",[t._v("-list-blacklisted-trackers")]),t._v(" "),a("td",[t._v("List the black listed task trackers in the cluster. This command is not supported in MRv2 based cluster.")])]),t._v(" "),a("tr",[a("td",[t._v("-list-attempt-ids job-id task-type task-state")]),t._v(" "),a("td",[t._v("List the attempt-ids based on the task type and the status given. Valid values for task-type are REDUCE, MAP. Valid values for task-state are running, pending, completed, failed, killed.")])]),t._v(" "),a("tr",[a("td",[t._v("-logs job-id task-attempt-id")]),t._v(" "),a("td",[t._v("Dump the container log for a job if taskAttemptId is not specified, otherwise dump the log for the task with the specified taskAttemptId. The logs will be dumped in system out.")])]),t._v(" "),a("tr",[a("td",[t._v("-config job-id file")]),t._v(" "),a("td",[t._v("Download the job configuration file.")])])])]),t._v(" "),a("h3",{attrs:{id:"pipes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipes"}},[t._v("#")]),t._v(" pipes")]),t._v(" "),a("p",[t._v("Runs a pipes job.")]),t._v(" "),a("p",[t._v("Usage: mapred pipes [-conf "),a("path",[t._v("] [-jobconf <key=value>, <key=value>, ...] [-input "),a("path",[t._v("] [-output "),a("path",[t._v("] [-jar "),a("jar",{attrs:{file:""}},[t._v("] [-inputformat "),a("class",[t._v("] [-map "),a("class",[t._v("] [-partitioner "),a("class",[t._v("] [-reduce "),a("class",[t._v("] [-writer "),a("class",[t._v("] [-program "),a("executable",[t._v("] [-reduces "),a("num",[t._v("]")])],1)],1)],1)],1)],1)],1)],1)],1)])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("COMMAND_OPTION")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-conf path")]),t._v(" "),a("td",[t._v("Configuration for job")])]),t._v(" "),a("tr",[a("td",[t._v("-jobconf key=value, key=value, …")]),t._v(" "),a("td",[t._v("Add/override configuration for job")])]),t._v(" "),a("tr",[a("td",[t._v("-input path")]),t._v(" "),a("td",[t._v("Input directory")])]),t._v(" "),a("tr",[a("td",[t._v("-output path")]),t._v(" "),a("td",[t._v("Output directory")])]),t._v(" "),a("tr",[a("td",[t._v("-jar jar file")]),t._v(" "),a("td",[t._v("Jar filename")])]),t._v(" "),a("tr",[a("td",[t._v("-inputformat class")]),t._v(" "),a("td",[t._v("InputFormat class")])]),t._v(" "),a("tr",[a("td",[t._v("-map class")]),t._v(" "),a("td",[t._v("Java Map class")])]),t._v(" "),a("tr",[a("td",[t._v("-partitioner class")]),t._v(" "),a("td",[t._v("Java Partitioner")])]),t._v(" "),a("tr",[a("td",[t._v("-reduce class")]),t._v(" "),a("td",[t._v("Java Reduce class")])]),t._v(" "),a("tr",[a("td",[t._v("-writer class")]),t._v(" "),a("td",[t._v("Java RecordWriter")])]),t._v(" "),a("tr",[a("td",[t._v("-program executable")]),t._v(" "),a("td",[t._v("Executable URI")])]),t._v(" "),a("tr",[a("td",[t._v("-reduces num")]),t._v(" "),a("td",[t._v("Number of reduces")])])])]),t._v(" "),a("h3",{attrs:{id:"queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[t._v("#")]),t._v(" queue")]),t._v(" "),a("p",[t._v("command to interact and view Job Queue information")]),t._v(" "),a("p",[t._v("Usage: mapred queue [-list] | [-info "),a("job-queue-name",[t._v(" [-showJobs]] | [-showacls]")])],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("COMMAND_OPTION")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-list")]),t._v(" "),a("td",[t._v("Gets list of Job Queues configured in the system. Along with scheduling information associated with the job queues.")])]),t._v(" "),a("tr",[a("td",[t._v("-info job-queue-name [-showJobs]")]),t._v(" "),a("td",[t._v("Displays the job queue information and associated scheduling information of particular job queue. If -showJobs options is present a list of jobs submitted to the particular job queue is displayed.")])]),t._v(" "),a("tr",[a("td",[t._v("-showacls")]),t._v(" "),a("td",[t._v("Displays the queue name and associated queue operations allowed for the current user. The list consists of only those queues to which the user has access.")])])])]),t._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" version")]),t._v(" "),a("p",[t._v("Prints the version.")]),t._v(" "),a("p",[t._v("Usage: mapred version")]),t._v(" "),a("h3",{attrs:{id:"envvars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#envvars"}},[t._v("#")]),t._v(" envvars")]),t._v(" "),a("p",[t._v("Usage: mapred envvars")]),t._v(" "),a("p",[t._v("Display computed Hadoop environment variables.")]),t._v(" "),a("h2",{attrs:{id:"administration-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#administration-commands"}},[t._v("#")]),t._v(" Administration Commands")]),t._v(" "),a("p",[t._v("Commands useful for administrators of a hadoop cluster.")]),t._v(" "),a("h3",{attrs:{id:"historyserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#historyserver"}},[t._v("#")]),t._v(" historyserver")]),t._v(" "),a("p",[t._v("Start JobHistoryServer.")]),t._v(" "),a("p",[t._v("Usage: mapred historyserver")]),t._v(" "),a("h3",{attrs:{id:"hsadmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsadmin"}},[t._v("#")]),t._v(" hsadmin")]),t._v(" "),a("p",[t._v("Runs a MapReduce hsadmin client for execute JobHistoryServer administrative commands.")]),t._v(" "),a("p",[t._v("Usage: mapred hsadmin [-refreshUserToGroupsMappings] | [-refreshSuperUserGroupsConfiguration] | [-refreshAdminAcls] | [-refreshLoadedJobCache] | [-refreshLogRetentionSettings] | [-refreshJobRetentionSettings] | [-getGroups [username]] | [-help [cmd]]")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("COMMAND_OPTION")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-refreshUserToGroupsMappings")]),t._v(" "),a("td",[t._v("Refresh user-to-groups mappings")])]),t._v(" "),a("tr",[a("td",[t._v("-refreshSuperUserGroupsConfiguration")]),t._v(" "),a("td",[t._v("Refresh superuser proxy groups mappings")])]),t._v(" "),a("tr",[a("td",[t._v("-refreshAdminAcls")]),t._v(" "),a("td",[t._v("Refresh acls for administration of Job history server")])]),t._v(" "),a("tr",[a("td",[t._v("-refreshLoadedJobCache")]),t._v(" "),a("td",[t._v("Refresh loaded job cache of Job history server")])]),t._v(" "),a("tr",[a("td",[t._v("-refreshJobRetentionSettings")]),t._v(" "),a("td",[t._v("Refresh job history period, job cleaner settings")])]),t._v(" "),a("tr",[a("td",[t._v("-refreshLogRetentionSettings")]),t._v(" "),a("td",[t._v("Refresh log retention period and log retention check interval")])]),t._v(" "),a("tr",[a("td",[t._v("-getGroups [username]")]),t._v(" "),a("td",[t._v("Get the groups which given user belongs to")])]),t._v(" "),a("tr",[a("td",[t._v("-help [cmd]")]),t._v(" "),a("td",[t._v("Displays help for the given command or all commands if none is specified.")])])])]),t._v(" "),a("h3",{attrs:{id:"frameworkuploader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frameworkuploader"}},[t._v("#")]),t._v(" frameworkuploader")]),t._v(" "),a("p",[t._v("Collects framework jars and uploads them to HDFS as a tarball.")]),t._v(" "),a("p",[t._v("Usage: mapred frameworkuploader -target "),a("target",[t._v(" [-fs "),a("filesystem",[t._v("] [-input "),a("classpath",[t._v("] [-blacklist "),a("list",[t._v("] [-whitelist "),a("list",[t._v("] [-initialReplication "),a("num",[t._v("] [-acceptableReplication "),a("num",[t._v("] [-finalReplication "),a("num",[t._v("] [-timeout "),a("seconds",[t._v("] [-nosymlink]")])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("COMMAND_OPTION")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-input classpath")]),t._v(" "),a("td",[t._v("This is the input classpath that is searched for jar files to be included in the tarball.")])]),t._v(" "),a("tr",[a("td",[t._v("-fs filesystem")]),t._v(" "),a("td",[t._v("The target file system. Defaults to the default filesystem set by fs.defaultFS.")])]),t._v(" "),a("tr",[a("td",[t._v("-target target")]),t._v(" "),a("td",[t._v("This is the target location of the framework tarball, optionally followed by a # with the localized alias. An example would be /usr/lib/framework.tar#framework. Make sure the target directory is readable by all users but it is not writable by others than administrators to protect cluster security.")])]),t._v(" "),a("tr",[a("td",[t._v("-blacklist list")]),t._v(" "),a("td",[t._v("This is a comma separated regex array to filter the jar file names to exclude from the class path. It can be used for example to exclude test jars or Hadoop services that are not necessary to localize.")])]),t._v(" "),a("tr",[a("td",[t._v("-whitelist list")]),t._v(" "),a("td",[t._v("This is a comma separated regex array to include certain jar files. This can be used to provide additional security, so that no external source can include malicious code in the classpath when the tool runs.")])]),t._v(" "),a("tr",[a("td",[t._v("-nosymlink")]),t._v(" "),a("td",[t._v("This flag can be used to exclude symlinks that point to the same directory. This is not widely used. For example, /a/foo.jar and a symlink /a/bar.jar that points to /a/foo.jar would normally add foo.jar and bar.jar to the tarball as separate files despite them actually being the same file. This flag would make the tool exclude /a/bar.jar so only one copy of the file is added.")])]),t._v(" "),a("tr",[a("td",[t._v("-initialReplication num")]),t._v(" "),a("td",[t._v("This is the replication count that the framework tarball is created with. It is safe to leave this value at the default 3. This is the tested scenario.")])]),t._v(" "),a("tr",[a("td",[t._v("-finalReplication num")]),t._v(" "),a("td",[t._v("The uploader tool sets the replication once all blocks are collected and uploaded. If quick initial startup is required, then it is advised to set this to the commissioned node count divided by two but not more than 512.")])]),t._v(" "),a("tr",[a("td",[t._v("-acceptableReplication num")]),t._v(" "),a("td",[t._v("The tool will wait until the tarball has been replicated this number of times before exiting. This should be a replication count less than or equal to the value in finalReplication. This is typically a 90% of the value in finalReplication to accomodate failing nodes.")])]),t._v(" "),a("tr",[a("td",[t._v("-timeout seconds")]),t._v(" "),a("td",[t._v("A timeout in seconds to wait to reach acceptableReplication before the tool exits. The tool logs an error otherwise and returns.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);