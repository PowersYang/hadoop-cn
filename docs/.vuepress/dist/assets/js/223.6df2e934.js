(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{422:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rumen"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rumen"}},[e._v("#")]),e._v(" Rumen")]),e._v(" "),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Overview\n"),o("ul",[o("li",[e._v("Motivation")]),e._v(" "),o("li",[e._v("Components")])])]),e._v(" "),o("li",[e._v("How to use Rumen?\n"),o("ul",[o("li",[e._v("Trace Builder")]),e._v(" "),o("li",[e._v("Folder")])])]),e._v(" "),o("li",[e._v("Appendix\n"),o("ul",[o("li",[e._v("Resources")]),e._v(" "),o("li",[e._v("Dependencies")])])])]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Rumen is a data extraction and analysis tool built for Apache Hadoop. Rumen mines JobHistory logs to extract meaningful data and stores it in an easily-parsed, condensed format or digest. The raw trace data from MapReduce logs are often insufficient for simulation, emulation, and benchmarking, as these tools often attempt to measure conditions that did not occur in the source data. For example, if a task ran locally in the raw trace data but a simulation of the scheduler elects to run that task on a remote rack, the simulator requires a runtime its input cannot provide. To fill in these gaps, Rumen performs a statistical analysis of the digest to estimate the variables the trace doesn’t supply. Rumen traces drive both Gridmix (a benchmark of Hadoop MapReduce clusters) and SLS (a simulator for the resource manager scheduler).")]),e._v(" "),o("h3",{attrs:{id:"motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Extracting meaningful data from JobHistory logs is a common task for any tool built to work on MapReduce. It is tedious to write a custom tool which is so tightly coupled with the MapReduce framework. Hence there is a need for a built-in tool for performing framework level task of log parsing and analysis. Such a tool would insulate external systems depending on job history against the changes made to the job history format.")])]),e._v(" "),o("li",[o("p",[e._v("Performing statistical analysis of various attributes of a MapReduce Job such as task runtimes, task failures etc is another common task that the benchmarking and simulation tools might need. Rumen generates")])])]),e._v(" "),o("p",[o("a",{attrs:{href:"http://en.wikipedia.org/wiki/Cumulative_distribution_function",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("Cumulative Distribution Functions (CDF)")]),e._v(" "),o("OutboundLink")],1),e._v(" for the Map/Reduce task runtimes. Runtime CDF can be used for extrapolating the task runtime of incomplete, missing and synthetic tasks. Similarly CDF is also computed for the total number of successful tasks for every attempt.")]),e._v(" "),o("h3",{attrs:{id:"components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),o("p",[e._v("Rumen consists of 2 components")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Trace Builder : Converts JobHistory logs into an easily-parsed format. Currently TraceBuilder outputs the trace in "),o("a",{attrs:{href:"http://www.json.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON"),o("OutboundLink")],1),e._v(" format.")])]),e._v(" "),o("li",[o("p",[e._v("*Folder *: A utility to scale the input trace. A trace obtained from TraceBuilder simply summarizes the jobs in the input folders and files. The time-span within which all the jobs in a given trace finish can be considered as the trace runtime. Folder can be used to scale the runtime of a trace. Decreasing the trace runtime might involve dropping some jobs from the input trace and scaling down the runtime of remaining jobs. Increasing the trace runtime might involve adding some dummy jobs to the resulting trace and scaling up the runtime of individual jobs.")])])]),e._v(" "),o("h2",{attrs:{id:"how-to-use-rumen"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-rumen"}},[e._v("#")]),e._v(" How to use Rumen?")]),e._v(" "),o("p",[e._v("Converting JobHistory logs into a desired job-trace consists of 2 steps")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Extracting information into an intermediate format")])]),e._v(" "),o("li",[o("p",[e._v("Adjusting the job-trace obtained from the intermediate trace to have the desired properties.")])])]),e._v(" "),o("blockquote",[o("p",[e._v("Extracting information from JobHistory logs is a one time operation. This so called Gold Trace can be reused to generate traces with desired values of properties such as output-duration, concentration etc.")])]),e._v(" "),o("p",[e._v("Rumen provides 2 basic commands")]),e._v(" "),o("ul",[o("li",[e._v("TraceBuilder")]),e._v(" "),o("li",[e._v("Folder")])]),e._v(" "),o("p",[e._v("Firstly, we need to generate the Gold Trace. Hence the first step is to run TraceBuilder on a job-history folder. The output of the TraceBuilder is a job-trace file (and an optional cluster-topology file). In case we want to scale the output, we can use the Folder utility to fold the current trace to the desired length. The remaining part of this section explains these utilities in detail.")]),e._v(" "),o("h3",{attrs:{id:"trace-builder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trace-builder"}},[e._v("#")]),e._v(" Trace Builder")]),e._v(" "),o("h4",{attrs:{id:"command"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" Command")]),e._v(" "),o("pre",[o("code",[e._v("hadoop rumentrace [options] <jobtrace-output> <topology-output> <inputs>\n")])]),e._v(" "),o("p",[e._v("This command invokes the TraceBuilder utility of Rumen.")]),e._v(" "),o("p",[e._v("TraceBuilder converts the JobHistory files into a series of JSON objects and writes them into the "),o("jobtrace-output",[e._v(" file. It also extracts the cluster layout (topology) and writes it in the"),o("topology-output",[e._v(" file. "),o("inputs",[e._v(" represents a space-separated list of JobHistory files and folders.")])],1)],1)],1),e._v(" "),o("blockquote",[o("ol",[o("li",[o("p",[e._v("Input and output to TraceBuilder is expected to be a fully qualified FileSystem path. So use file:// to specify files on the local FileSystem and "),o("router-link",{attrs:{to:"hdfs://"}},[e._v("hdfs://")]),e._v(" to specify files on HDFS. Since input files or folder are FileSystem paths, it means that they can be globbed. This can be useful while specifying multiple file paths using regular expressions.")],1)]),e._v(" "),o("li",[o("p",[e._v("By default, TraceBuilder does not recursively scan the input folder for job history files. Only the files that are directly placed under the input folder will be considered for generating the trace. To add all the files under the input directory by recursively scanning the input directory, use ‘-recursive’ option.")])])])]),e._v(" "),o("p",[e._v("Cluster topology is used as follows :")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("To reconstruct the splits and make sure that the distances/latencies seen in the actual run are modeled correctly.")])]),e._v(" "),o("li",[o("p",[e._v("To extrapolate splits information for tasks with missing splits details or synthetically generated tasks.")])])]),e._v(" "),o("h4",{attrs:{id:"options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Notes")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("-demuxer")]),e._v(" "),o("td",[e._v("Used to read the jobhistory files. The default is DefaultInputDemuxer.")]),e._v(" "),o("td",[e._v("Demuxer decides how the input file maps to jobhistory file(s). Job history logs and job configuration files are typically small files, and can be more effectively stored when embedded in some container file format like SequenceFile or TFile. To support such usage cases, one can specify a customized Demuxer class that can extract individual job history logs and job configuration files from the source files.")])]),e._v(" "),o("tr",[o("td",[e._v("-recursive")]),e._v(" "),o("td",[e._v("Recursively traverse input paths for job history logs.")]),e._v(" "),o("td",[e._v("This option should be used to inform the TraceBuilder to recursively scan the input paths and process all the files under it. Note that, by default, only the history logs that are directly under the input folder are considered for generating the trace.")])])])]),e._v(" "),o("h4",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),o("pre",[o("code",[e._v("hadoop rumentrace \\\n  file:///tmp/job-trace.json \\\n  file:///tmp/job-topology.json \\\n  hdfs:///tmp/hadoop-yarn/staging/history/done_intermediate/testuser\n")])]),e._v(" "),o("p",[e._v("This will analyze all the jobs in /tmp/hadoop-yarn/staging/history/done_intermediate/testuser stored on the HDFS FileSystem and output the jobtraces in /tmp/job-trace.json along with topology information in /tmp/job-topology.json stored on the local FileSystem.")]),e._v(" "),o("h3",{attrs:{id:"folder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#folder"}},[e._v("#")]),e._v(" Folder")]),e._v(" "),o("h4",{attrs:{id:"command-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-2"}},[e._v("#")]),e._v(" Command")]),e._v(" "),o("pre",[o("code",[e._v("hadoop rumenfolder [options] [input] [output]\n")])]),e._v(" "),o("p",[e._v("This command invokes the Folder utility of Rumen. Folding essentially means that the output duration of the resulting trace is fixed and job timelines are adjusted to respect the final output duration.")]),e._v(" "),o("blockquote",[o("p",[e._v("Input and output to Folder is expected to be a fully qualified FileSystem path. So use file:// to specify files on the local FileSystem and hdfs:// to specify files on HDFS.")])]),e._v(" "),o("h4",{attrs:{id:"options-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#options-2"}},[e._v("#")]),e._v(" Options")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Notes")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("-input-cycle")]),e._v(" "),o("td",[e._v("Defines the basic unit of time for the folding operation. There is no default value for input-cycle. Input cycle must be provided.")]),e._v(" "),o("td",[e._v("'-input-cycle 10m' implies that the whole trace run will be now sliced at a 10min interval. Basic operations will be done on the 10m chunks. Note that "),o("em",[e._v("Rumen")]),e._v(" understands various time units like m(min), h(hour), d(days) etc.")])]),e._v(" "),o("tr",[o("td",[e._v("-output-duration")]),e._v(" "),o("td",[e._v("This parameter defines the final runtime of the trace. Default value if 1 hour.")]),e._v(" "),o("td",[e._v("'-output-duration 30m' implies that the resulting trace will have a max runtime of 30mins. All the jobs in the input trace file will be folded and scaled to fit this window.")])]),e._v(" "),o("tr",[o("td",[e._v("-concentration")]),e._v(" "),o("td",[e._v("Set the concentration of the resulting trace. Default value is 1.")]),e._v(" "),o("td",[e._v("If the total runtime of the resulting trace is less than the total runtime of the input trace, then the resulting trace would contain lesser number of jobs as compared to the input trace. This essentially means that the output is diluted. To increase the density of jobs, set the concentration to a higher value.")])]),e._v(" "),o("tr",[o("td",[e._v("-debug")]),e._v(" "),o("td",[e._v("Run the Folder in debug mode. By default it is set to false.")]),e._v(" "),o("td",[e._v("In debug mode, the Folder will print additional statements for debugging. Also the intermediate files generated in the scratch directory will not be cleaned up.")])]),e._v(" "),o("tr",[o("td",[e._v("-seed")]),e._v(" "),o("td",[e._v("Initial seed to the Random Number Generator. By default, a Random Number Generator is used to generate a seed and the seed value is reported back to the user for future use.")]),e._v(" "),o("td",[e._v("If an initial seed is passed, then the Random Number Generator will generate the random numbers in the same sequence i.e the sequence of random numbers remains same if the same seed is used. Folder uses Random Number Generator to decide whether or not to emit the job.")])]),e._v(" "),o("tr",[o("td",[e._v("-temp-directory")]),e._v(" "),o("td",[e._v("Temporary directory for the Folder. By default the output folder's parent directory is used as the scratch space.")]),e._v(" "),o("td",[e._v("This is the scratch space used by Folder. All the temporary files are cleaned up in the end unless the Folder is run in debug mode.")])]),e._v(" "),o("tr",[o("td",[e._v("-skew-buffer-length")]),e._v(" "),o("td",[e._v("Enables Folder to tolerate skewed jobs. The default buffer length is 0.")]),e._v(" "),o("td",[e._v("'-skew-buffer-length 100' indicates that if the jobs appear out of order within a window size of 100, then they will be emitted in-order by the folder. If a job appears out-of-order outside this window, then the Folder will bail out provided -allow-missorting is not set. Folder reports the maximum skew size seen in the input trace for future use.")])]),e._v(" "),o("tr",[o("td",[e._v("-allow-missorting")]),e._v(" "),o("td",[e._v("Enables Folder to tolerate out-of-order jobs. By default mis-sorting is not allowed.")]),e._v(" "),o("td",[e._v("If mis-sorting is allowed, then the Folder will ignore out-of-order jobs that cannot be deskewed using a skew buffer of size specified using -skew-buffer-length. If mis-sorting is not allowed, then the Folder will bail out if the skew buffer is incapable of tolerating the skew.")])])])]),e._v(" "),o("h4",{attrs:{id:"examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),o("h5",{attrs:{id:"folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime"}},[e._v("#")]),e._v(" Folding an input trace with 10 hours of total runtime to generate an output trace with 1 hour of total runtime")]),e._v(" "),o("pre",[o("code",[e._v("hadoop rumenfolder \\\n  -output-duration 1h \\\n  -input-cycle 20m \\\n  file:///tmp/job-trace.json \\\n  file:///tmp/job-trace-1hr.json\n")])]),e._v(" "),o("p",[e._v("If the folded jobs are out of order then the command will bail out.")]),e._v(" "),o("h5",{attrs:{id:"folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime-and-tolerate-some-skewness"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime-and-tolerate-some-skewness"}},[e._v("#")]),e._v(" Folding an input trace with 10 hours of total runtime to generate an output trace with 1 hour of total runtime and tolerate some skewness")]),e._v(" "),o("pre",[o("code",[e._v("hadoop rumenfolder \\\n  -output-duration 1h \\\n  -input-cycle 20m \\\n  -allow-missorting \\\n  -skew-buffer-length 100 \\\n  file:///tmp/job-trace.json \\\n  file:///tmp/job-trace-1hr.json\n")])]),e._v(" "),o("p",[e._v("If the folded jobs are out of order, then atmost 100 jobs will be de-skewed. If the 101st job is out-of-order, then the command will bail out.")]),e._v(" "),o("h5",{attrs:{id:"folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime-in-debug-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime-in-debug-mode"}},[e._v("#")]),e._v(" Folding an input trace with 10 hours of total runtime to generate an output trace with 1 hour of total runtime in debug mode")]),e._v(" "),o("pre",[o("code",[e._v("hadoop rumenfolder \\\n  -output-duration 1h \\\n  -input-cycle 20m \\\n  -debug -temp-directory file:///tmp/debug \\\n  file:///tmp/job-trace.json \\\n  file:///tmp/job-trace-1hr.json\n")])]),e._v(" "),o("p",[e._v("This will fold the 10hr job-trace file file:///tmp/job-trace.json to finish within 1hr and use file:///tmp/debug as the temporary directory. The intermediate files in the temporary directory will not be cleaned up.")]),e._v(" "),o("h5",{attrs:{id:"folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime-with-custom-concentration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#folding-an-input-trace-with-10-hours-of-total-runtime-to-generate-an-output-trace-with-1-hour-of-total-runtime-with-custom-concentration"}},[e._v("#")]),e._v(" Folding an input trace with 10 hours of total runtime to generate an output trace with 1 hour of total runtime with custom concentration.")]),e._v(" "),o("pre",[o("code",[e._v("hadoop rumenfolder \\\n  -output-duration 1h \\\n  -input-cycle 20m \\\n  -concentration 2 \\\n  file:///tmp/job-trace.json \\\n  file:///tmp/job-trace-1hr.json\n")])]),e._v(" "),o("p",[e._v("This will fold the 10hr job-trace file file:///tmp/job-trace.json to finish within 1hr with concentration of 2. If the 10h job-trace is folded to 1h, it retains 10% of the jobs by default. With concentration as 2, 20% of the total input jobs will be retained.")]),e._v(" "),o("h2",{attrs:{id:"appendix"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[e._v("#")]),e._v(" Appendix")]),e._v(" "),o("h3",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://issues.apache.org/jira/browse/MAPREDUCE-751",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAPREDUCE-751"),o("OutboundLink")],1),e._v(" is the main JIRA that introduced Rumen to MapReduce. Look at the MapReduce "),o("a",{attrs:{href:"https://issues.apache.org/jira/browse/MAPREDUCE/component/12313617",target:"_blank",rel:"noopener noreferrer"}},[e._v("rumen-component"),o("OutboundLink")],1),e._v(" for further details.")])])}),[],!1,null,null,null);t.default=r.exports}}]);