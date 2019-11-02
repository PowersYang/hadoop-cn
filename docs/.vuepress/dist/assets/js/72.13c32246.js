(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{272:function(e,t,i){"use strict";i.r(t);var s=i(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"offline-image-viewer-guide"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#offline-image-viewer-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Offline Image Viewer Guide")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("The Offline Image Viewer is a tool to dump the contents of hdfs fsimage files to a human-readable format and provide read-only WebHDFS API in order to allow offline analysis and examination of an Hadoop cluster’s namespace. The tool is able to process very large image files relatively quickly. The tool handles the layout formats that were included with Hadoop versions 2.4 and up. If you want to handle older layout formats, you can use the Offline Image Viewer of Hadoop 2.3 or oiv_legacy Command. If the tool is not able to process an image file, it will exit cleanly. The Offline Image Viewer does not require a Hadoop cluster to be running; it is entirely offline in its operation.")]),e._v(" "),i("p",[e._v("The Offline Image Viewer provides several output processors:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Web is the default output processor. It launches a HTTP server that exposes read-only WebHDFS API. Users can investigate the namespace interactively by using HTTP REST API. It does not support secure mode, nor HTTPS.")])]),e._v(" "),i("li",[i("p",[e._v("XML creates an XML document of the fsimage and includes all of the information within the fsimage. The output of this processor is amenable to automated processing and analysis with XML tools. Due to the verbosity of the XML syntax, this processor will also generate the largest amount of output.")])]),e._v(" "),i("li",[i("p",[e._v("FileDistribution is the tool for analyzing file sizes in the namespace image. In order to run the tool one should define a range of integers [0, maxSize] by specifying maxSize and a step. The range of integers is divided into segments of size step: [0, s[1], …, s[n-1], maxSize], and the processor calculates how many files in the system fall into each segment [s[i-1], s[i]). Note that files larger than maxSize always fall into the very last segment. By default, the output file is formatted as a tab separated two column table: Size and NumFiles. Where Size represents the start of the segment, and numFiles is the number of files form the image which size falls in this segment. By specifying the option -format, the output file will be formatted in a human-readable fashion rather than a number of bytes that showed in Size column. In addition, the Size column will be changed to the Size Range column.")])]),e._v(" "),i("li",[i("p",[e._v("Delimited (experimental): Generate a text file with all of the elements common to both inodes and inodes-under-construction, separated by a delimiter. The default delimiter is \\t, though this may be changed via the -delimiter argument.")])]),e._v(" "),i("li",[i("p",[e._v("ReverseXML (experimental): This is the opposite of the XML processor; it reconstructs an fsimage from an XML file. This processor makes it easy to create fsimages for testing, and manually edit fsimages when there is corruption.")])])]),e._v(" "),i("h2",{attrs:{id:"usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),i("h3",{attrs:{id:"web-processor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#web-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" Web Processor")]),e._v(" "),i("p",[e._v("Web processor launches a HTTP server which exposes read-only WebHDFS API. Users can specify the address to listen by -addr option (default by localhost:5978).")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs oiv -i fsimage\n   14/04/07 13:25:14 INFO offlineImageViewer.WebImageViewer: WebImageViewer\n   started. Listening on /127.0.0.1:5978. Press Ctrl+C to stop the viewer.\n")])]),e._v(" "),i("p",[e._v("Users can access the viewer and get the information of the fsimage by the following shell command:")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs dfs -ls webhdfs://127.0.0.1:5978/\n   Found 2 items\n   drwxrwx--* - root supergroup          0 2014-03-26 20:16 webhdfs://127.0.0.1:5978/tmp\n   drwxr-xr-x   - root supergroup          0 2014-03-31 14:08 webhdfs://127.0.0.1:5978/user\n")])]),e._v(" "),i("p",[e._v("To get the information of all the files and directories, you can simply use the following command:")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs dfs -ls -R webhdfs://127.0.0.1:5978/\n")])]),e._v(" "),i("p",[e._v("Users can also get JSON formatted FileStatuses via HTTP REST API.")]),e._v(" "),i("pre",[i("code",[e._v('   bash$ curl -i http://127.0.0.1:5978/webhdfs/v1/?op=liststatus\n   HTTP/1.1 200 OK\n   Content-Type: application/json\n   Content-Length: 252\n\n   {"FileStatuses":{"FileStatus":[\n   {"fileId":16386,"accessTime":0,"replication":0,"owner":"theuser","length":0,"permission":"755","blockSize":0,"modificationTime":1392772497282,"type":"DIRECTORY","group":"supergroup","childrenNum":1,"pathSuffix":"user"}\n   ]}}\n')])]),e._v(" "),i("p",[e._v("The Web processor now supports the following operations:")]),e._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#List_a_Directory"}},[e._v("LISTSTATUS")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#Status_of_a_FileDirectory"}},[e._v("GETFILESTATUS")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#Get_ACL_Status"}},[e._v("GETACLSTATUS")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#Get_an_XAttr"}},[e._v("GETXATTRS")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#List_all_XAttrs"}},[e._v("LISTXATTRS")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#Get_Content_Summary_of_a_Directory"}},[e._v("CONTENTSUMMARY")])],1)]),e._v(" "),i("h3",{attrs:{id:"xml-processor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#xml-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" XML Processor")]),e._v(" "),i("p",[e._v("XML Processor is used to dump all the contents in the fsimage. Users can specify input and output file via -i and -o command-line.")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs oiv -p XML -i fsimage -o fsimage.xml\n")])]),e._v(" "),i("p",[e._v("This will create a file named fsimage.xml contains all the information in the fsimage. For very large image files, this process may take several minutes.")]),e._v(" "),i("p",[e._v("Applying the Offline Image Viewer with XML processor would result in the following output:")]),e._v(" "),i("pre",[i("code",[e._v('   <?xml version="1.0"?>\n   <fsimage>\n   <NameSection>\n     <genstampV1>1000</genstampV1>\n     <genstampV2>1002</genstampV2>\n     <genstampV1Limit>0</genstampV1Limit>\n     <lastAllocatedBlockId>1073741826</lastAllocatedBlockId>\n     <txid>37</txid>\n   </NameSection>\n   <INodeSection>\n     <lastInodeId>16400</lastInodeId>\n     <inode>\n       <id>16385</id>\n       <type>DIRECTORY</type>\n       <name></name>\n       <mtime>1392772497282</mtime>\n       <permission>theuser:supergroup:rwxr-xr-x</permission>\n       <nsquota>9223372036854775807</nsquota>\n       <dsquota>-1</dsquota>\n     </inode>\n   ...remaining output omitted...\n')])]),e._v(" "),i("h3",{attrs:{id:"reversexml-processor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reversexml-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" ReverseXML Processor")]),e._v(" "),i("p",[e._v("ReverseXML processor is the opposite of the XML processor. Users can specify input XML file and output fsimage file via -i and -o command-line.")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs oiv -p ReverseXML -i fsimage.xml -o fsimage\n")])]),e._v(" "),i("p",[e._v("This will reconstruct an fsimage from an XML file.")]),e._v(" "),i("h3",{attrs:{id:"filedistribution-processor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#filedistribution-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" FileDistribution Processor")]),e._v(" "),i("p",[e._v("FileDistribution processor can analyze file sizes in the namespace image. Users can specify maxSize (128GB by default) and step (2MB by default) in bytes via -maxSize and -step command-line.")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs oiv -p FileDistribution -maxSize maxSize -step size -i fsimage -o output\n")])]),e._v(" "),i("p",[e._v("The processor will calculate how many files in the system fall into each segment. The output file is formatted as a tab separated two column table showed as the following output:")]),e._v(" "),i("pre",[i("code",[e._v("   Size\tNumFiles\n   4\t1\n   12\t1\n   16\t1\n   20\t1\n   totalFiles = 4\n   totalDirectories = 2\n   totalBlocks = 4\n   totalSpace = 48\n   maxFileSize = 21\n")])]),e._v(" "),i("p",[e._v("To make the output result look more readable, users can specify -format option in addition.")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs oiv -p FileDistribution -maxSize maxSize -step size -format -i fsimage -o output\n")])]),e._v(" "),i("p",[e._v("This would result in the following output:")]),e._v(" "),i("pre",[i("code",[e._v("   Size Range\tNumFiles\n   (0 B, 4 B]\t1\n   (8 B, 12 B]\t1\n   (12 B, 16 B]\t1\n   (16 B, 21 B]\t1\n   totalFiles = 4\n   totalDirectories = 2\n   totalBlocks = 4\n   totalSpace = 48\n   maxFileSize = 21\n")])]),e._v(" "),i("h3",{attrs:{id:"delimited-processor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#delimited-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" Delimited Processor")]),e._v(" "),i("p",[e._v("Delimited processor generates a text representation of the fsimage, with each element separated by a delimiter string (\\t by default). Users can specify a new delimiter string by -delimiter option.")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs oiv -p Delimited -delimiter delimiterString -i fsimage -o output\n")])]),e._v(" "),i("p",[e._v("In addition, users can specify a temporary dir to cache intermediate result by the following command:")]),e._v(" "),i("pre",[i("code",[e._v("   bash$ bin/hdfs oiv -p Delimited -delimiter delimiterString -t temporaryDir -i fsimage -o output\n")])]),e._v(" "),i("p",[e._v("If not set, Delimited processor will construct the namespace in memory before outputting text. The output result of this processor should be like the following output:")]),e._v(" "),i("pre",[i("code",[e._v("   Path\tReplication\tModificationTime\tAccessTime\tPreferredBlockSize\tBlocksCount\tFileSize\tNSQUOTA\tDSQUOTA\tPermission\tUserName\tGroupName\n   /\t0\t2017-02-13 10:39\t1970-01-01 08:00\t0\t0\t0\t9223372036854775807\t-1\tdrwxr-xr-x\troot\tsupergroup\n   /dir0\t0\t2017-02-13 10:39\t1970-01-01 08:00\t0\t0\t0\t-1\t-1\tdrwxr-xr-x\troot\tsupergroup\n   /dir0/file0\t1\t2017-02-13 10:39\t2017-02-13 10:39\t134217728\t1\t1\t0\t0\t-rw-r--r--\troot\tsupergroup\n   /dir0/file1\t1\t2017-02-13 10:39\t2017-02-13 10:39\t134217728\t1\t1\t0\t0\t-rw-r--r--\troot\tsupergroup\n   /dir0/file2\t1\t2017-02-13 10:39\t2017-02-13 10:39\t134217728\t1\t1\t0\t0\t-rw-r--r--\troot\tsupergroup\n")])]),e._v(" "),i("h2",{attrs:{id:"options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Flag")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("-i")]),e._v(" "),i("td",[e._v("--inputFile input file")])]),e._v(" "),i("tr",[i("td",[e._v("-o")]),e._v(" "),i("td",[e._v("--outputFile output file")])]),e._v(" "),i("tr",[i("td",[e._v("-p")]),e._v(" "),i("td",[e._v("--processor processor")])]),e._v(" "),i("tr",[i("td",[e._v("-addr address")]),e._v(" "),i("td",[e._v("Specify the address(host:port) to listen. (localhost:5978 by default). This option is used with Web processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-maxSize size")]),e._v(" "),i("td",[e._v("Specify the range [0, maxSize] of file sizes to be analyzed in bytes (128GB by default). This option is used with FileDistribution processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-step size")]),e._v(" "),i("td",[e._v("Specify the granularity of the distribution in bytes (2MB by default). This option is used with FileDistribution processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-format")]),e._v(" "),i("td",[e._v("Format the output result in a human-readable fashion rather than a number of bytes. (false by default). This option is used with FileDistribution processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-delimiter arg")]),e._v(" "),i("td",[e._v("Delimiting string to use with Delimited processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-t")]),e._v(" "),i("td",[e._v("--temp temporary dir")])]),e._v(" "),i("tr",[i("td",[e._v("-h")]),e._v(" "),i("td",[e._v("--help")])])])]),e._v(" "),i("h2",{attrs:{id:"analyzing-results"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#analyzing-results","aria-hidden":"true"}},[e._v("#")]),e._v(" Analyzing Results")]),e._v(" "),i("p",[e._v("The Offline Image Viewer makes it easy to gather large amounts of data about the hdfs namespace. This information can then be used to explore file system usage patterns or find specific files that match arbitrary criteria, along with other types of namespace analysis.")]),e._v(" "),i("h2",{attrs:{id:"oiv-legacy-command"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#oiv-legacy-command","aria-hidden":"true"}},[e._v("#")]),e._v(" oiv_legacy Command")]),e._v(" "),i("p",[e._v("Due to the internal layout changes introduced by the ProtocolBuffer-based fsimage ("),i("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-5698",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS-5698"),i("OutboundLink")],1),e._v("), OfflineImageViewer consumes excessive amount of memory and loses some functions such as Indented processor. If you want to process without large amount of memory or use these processors, you can use oiv_legacy command (same as oiv in Hadoop 2.3).")]),e._v(" "),i("h3",{attrs:{id:"usage-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#usage-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Set dfs.namenode.legacy-oiv-image.dir to an appropriate directory to make standby NameNode or SecondaryNameNode save its namespace in the old fsimage format during checkpointing.")])]),e._v(" "),i("li",[i("p",[e._v("Use oiv_legacy command to the old format fsimage.")]),e._v(" "),i("p",[e._v("bash$ bin/hdfs oiv_legacy -i fsimage_old -o output")])])]),e._v(" "),i("h3",{attrs:{id:"options-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#options-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Flag")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("-i")]),e._v(" "),i("td",[e._v("--inputFile input file")])]),e._v(" "),i("tr",[i("td",[e._v("-o")]),e._v(" "),i("td",[e._v("--outputFile output file")])]),e._v(" "),i("tr",[i("td",[e._v("-p")]),e._v(" "),i("td",[e._v("--processor processor")])]),e._v(" "),i("tr",[i("td",[e._v("-maxSize size")]),e._v(" "),i("td",[e._v("Specify the range [0, maxSize] of file sizes to be analyzed in bytes (128GB by default). This option is used with FileDistribution processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-step size")]),e._v(" "),i("td",[e._v("Specify the granularity of the distribution in bytes (2MB by default). This option is used with FileDistribution processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-format")]),e._v(" "),i("td",[e._v("Format the output result in a human-readable fashion rather than a number of bytes. (false by default). This option is used with FileDistribution processor.")])]),e._v(" "),i("tr",[i("td",[e._v("-skipBlocks")]),e._v(" "),i("td",[e._v("Do not enumerate individual blocks within files. This may save processing time and outfile file space on namespaces with very large files. The Ls processor reads the blocks to correctly determine file sizes and ignores this option.")])]),e._v(" "),i("tr",[i("td",[e._v("-printToScreen")]),e._v(" "),i("td",[e._v("Pipe output of processor to console as well as specified file. On extremely large namespaces, this may increase processing time by an order of magnitude.")])]),e._v(" "),i("tr",[i("td",[e._v("-delimiter arg")]),e._v(" "),i("td",[e._v("When used in conjunction with the Delimited processor, replaces the default tab delimiter with the string specified by arg.")])]),e._v(" "),i("tr",[i("td",[e._v("-h")]),e._v(" "),i("td",[e._v("--help")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);