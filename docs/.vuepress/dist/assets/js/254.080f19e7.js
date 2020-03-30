(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{457:function(e,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"using-fpga-on-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-fpga-on-yarn"}},[e._v("#")]),e._v(" Using FPGA On YARN")]),e._v(" "),t("h1",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[e._v("The FPGA resource is supported by YARN but only shipped with “IntelFpgaOpenclPlugin” for now")]),e._v(" "),t("li",[e._v("YARN node managers have to be pre-installed with vendor drivers and configured with needed environment variables")]),e._v(" "),t("li",[e._v("Docker support is not supported yet")])]),e._v(" "),t("h1",{attrs:{id:"configs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configs"}},[e._v("#")]),e._v(" Configs")]),e._v(" "),t("h2",{attrs:{id:"fpga-scheduling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fpga-scheduling"}},[e._v("#")]),e._v(" FPGA scheduling")]),e._v(" "),t("p",[e._v("In resource-types.xml")]),e._v(" "),t("p",[e._v("Add following properties")]),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n  <property>\n     <name>yarn.resource-types</name>\n     <value>yarn.io/fpga</value>\n  </property>\n</configuration>\n")])]),e._v(" "),t("p",[e._v("For Capacity Scheduler, DominantResourceCalculator MUST be configured to enable FPGA scheduling/isolation. Use following property to configure DominantResourceCalculator (In capacity-scheduler.xml):")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Default value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.scheduler.capacity.resource-calculator")]),e._v(" "),t("td",[e._v("org.apache.hadoop.yarn.util.resource.DominantResourceCalculator")])])])]),e._v(" "),t("h2",{attrs:{id:"fpga-isolation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fpga-isolation"}},[e._v("#")]),e._v(" FPGA Isolation")]),e._v(" "),t("h3",{attrs:{id:"in-yarn-site-xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-yarn-site-xml"}},[e._v("#")]),e._v(" In yarn-site.xml")]),e._v(" "),t("pre",[t("code",[e._v("  <property>\n    <name>yarn.nodemanager.resource-plugins</name>\n    <value>yarn.io/fpga</value>\n  </property>\n")])]),e._v(" "),t("p",[e._v("This is to enable FPGA isolation module on NodeManager side.")]),e._v(" "),t("p",[e._v("By default, YARN will automatically detect and config FPGAs when above config is set. Following configs need to be set in yarn-site.xml only if admin has specialized requirements.")]),e._v(" "),t("ol",[t("li",[e._v("Allowed FPGA Devices")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Default value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.nodemanager.resource-plugins.fpga.allowed-fpga-devices")]),e._v(" "),t("td",[e._v("auto")])])])]),e._v(" "),t("p",[e._v("Specify FPGA devices which can be managed by YARN NodeManager, split by comma Number of FPGA devices will be reported to RM to make scheduling decisions. Set to auto (default) let YARN automatically discover FPGA resource from system.")]),e._v(" "),t("p",[e._v("Manually specify FPGA devices if admin only want subset of FPGA devices managed by YARN. At present, since we can only configure one major number in c-e.cfg, FPGA device is identified by their minor device number. For Intel devices, a common approach to get minor device number of FPGA is using “aocl diagnose” and check uevent with device name.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Executable to discover FPGAs")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Default value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.nodemanager.resource-plugins.fpga.path-to-discovery-executables")]),e._v(" "),t("td")])])]),e._v(" "),t("p",[e._v("When yarn.nodemanager.resource.fpga.allowed-fpga-devices=auto specified, YARN NodeManager needs to run FPGA discovery binary (now only support IntelFpgaOpenclPlugin) to get FPGA information. When value is empty (default), YARN NodeManager will try to locate discovery executable from vendor plugin’s preference. For instance, the “IntelFpgaOpenclPlugin” will try to find “aocl” in directory got from environment “ALTERAOCLSDKROOT”")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("FPGA plugin to use")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Default value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.nodemanager.resource-plugins.fpga.vendor-plugin.class")]),e._v(" "),t("td",[e._v("org.apache.hadoop.yarn.server.nodemanager.containermanager.resourceplugin.fpga.IntelFpgaOpenclPlugin")])])])]),e._v(" "),t("p",[e._v("For now, only Intel OpenCL SDK for FPGA is supported. The IP program(.aocx file) running on FPGA should be written with OpenCL based on Intel platform.")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("CGroups mount FPGA isolation uses CGroup "),t("a",{attrs:{href:"https://www.kernel.org/doc/Documentation/cgroup-v1/devices.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("devices controller"),t("OutboundLink")],1),e._v(" to do per-FPGA device isolation. Following configs should be added to yarn-site.xml to automatically mount CGroup sub devices, otherwise admin has to manually create devices subfolder in order to use this feature.")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Default value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.nodemanager.linux-container-executor.cgroups.mount")]),e._v(" "),t("td",[e._v("true")])])])]),e._v(" "),t("p",[e._v("For more details of YARN CGroups configurations, please refer to "),t("a",{attrs:{href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/NodeManagerCgroups.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using CGroups with YARN"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"in-container-executor-cfg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-container-executor-cfg"}},[e._v("#")]),e._v(" In container-executor.cfg")]),e._v(" "),t("p",[e._v("In general, following config needs to be added to container-executor.cfg. The fpag.major-device-number and allowed-device-minor-numbers are optional allowed devices.")]),e._v(" "),t("pre",[t("code",[e._v("[fpga]\nmodule.enabled=true\nfpga.major-device-number=## Major device number of FPGA, by default is 246. Strongly recommend setting this\nfpga.allowed-device-minor-numbers=## Comma separated allowed minor device numbers, empty means all FPGA devices managed by YARN.\n")])]),e._v(" "),t("p",[e._v("When user needs to run FPGA applications under non-Docker environment:")]),e._v(" "),t("pre",[t("code",[e._v('[cgroups]\n# Root of system cgroups (Cannot be empty or "/")\nroot=/cgroup\n# Parent folder of YARN\'s CGroups\nyarn-hierarchy=yarn\n')])]),e._v(" "),t("h1",{attrs:{id:"use-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-it"}},[e._v("#")]),e._v(" Use it")]),e._v(" "),t("h2",{attrs:{id:"distributed-shell-fpga"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distributed-shell-fpga"}},[e._v("#")]),e._v(" Distributed-shell + FPGA")]),e._v(" "),t("p",[e._v("Distributed shell currently support specify additional resource types other than memory and vcores")]),e._v(" "),t("p",[e._v("Run distributed shell without using docker container (the .bashrc contains some SDK related environment variables):")]),e._v(" "),t("pre",[t("code",[e._v('yarn jar <path/to/hadoop-yarn-applications-distributedshell.jar> \\\n  -jar <path/to/hadoop-yarn-applications-distributedshell.jar> \\\n  -shell_command "source /home/yarn/.bashrc && aocl diagnose" \\\n  -container_resources memory-mb=2048,vcores=2,yarn.io/fpga=1 \\\n  -num_containers 1\n')])]),e._v(" "),t("p",[e._v("You should be able to see output like")]),e._v(" "),t("pre",[t("code",[e._v("aocl diagnose: Running diagnose from /home/fpga/intelFPGA_pro/17.0/hld/board/nalla_pcie/linux64/libexec\n\n------------------------- acl0 -------------------------\nVendor: Nallatech ltd\n\nPhys Dev Name  Status   Information\n\naclnalla_pcie0Passed   nalla_pcie (aclnalla_pcie0)\n                       PCIe dev_id = 2494, bus:slot.func = 02:00.00, Gen3 x8\n                       FPGA temperature = 54.4 degrees C.\n                       Total Card Power Usage = 32.4 Watts.\n                       Device Power Usage = 0.0 Watts.\n\nDIAGNOSTIC_PASSED\n---------------------------------------------------------\n")])]),e._v(" "),t("p",[e._v("Specify IP that YARN should configure before launch container")]),e._v(" "),t("p",[e._v("For FPGA resource, the container can have an environment variable “REQUESTED_FPGA_IP_ID” to make YARN download and flash an IP for it before launch. For instance, REQUESTED_FPGA_IP_ID=“matrix_mul” will lead to a searching in container’s local directory for IP file(“.aocx” file) whose name contains “matirx_mul” (the application should distribute it first). We only support flashing one IP for all devices for now. If user don’t set this environment variable, we assume that user’s application can find the IP file by itself. Note that the IP downloading and reprogramming in advance in YARN is not necessary because the OpenCL application may find the IP file and reprogram device on the fly. But YARN do this for the containers will achieve the quickest re-programming path.")])])}),[],!1,null,null,null);a.default=r.exports}}]);