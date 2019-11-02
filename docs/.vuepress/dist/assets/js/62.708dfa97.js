(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{261:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"extended-attributes-in-hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-attributes-in-hdfs","aria-hidden":"true"}},[e._v("#")]),e._v(" Extended Attributes in HDFS")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Extended attributes (abbreviated as xattrs) are a filesystem feature that allow user applications to associate additional metadata with a file or directory. Unlike system-level inode metadata such as file permissions or modification time, extended attributes are not interpreted by the system and are instead used by applications to store additional information about an inode. Extended attributes could be used, for instance, to specify the character encoding of a plain-text document.")]),e._v(" "),a("h3",{attrs:{id:"hdfs-extended-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-extended-attributes","aria-hidden":"true"}},[e._v("#")]),e._v(" HDFS extended attributes")]),e._v(" "),a("p",[e._v("Extended attributes in HDFS are modeled after extended attributes in Linux (see the Linux manpage for "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man5/attr.5.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("attr(5)"),a("OutboundLink")],1),e._v("). An extended attribute is a name-value pair, with a string name and binary value. Xattrs names must also be prefixed with a namespace. For example, an xattr named myXattr in the user namespace would be specified as user.myXattr. Multiple xattrs can be associated with a single inode.")]),e._v(" "),a("h3",{attrs:{id:"namespaces-and-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespaces-and-permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Namespaces and Permissions")]),e._v(" "),a("p",[e._v("In HDFS, there are five valid namespaces: user, trusted, system, security, and raw. Each of these namespaces have different access restrictions.")]),e._v(" "),a("p",[e._v("The user namespace is the namespace that will commonly be used by client applications. Access to extended attributes in the user namespace is controlled by the corresponding file permissions.")]),e._v(" "),a("p",[e._v("The trusted namespace is available only to HDFS superusers.")]),e._v(" "),a("p",[e._v("The system namespace is reserved for internal HDFS use. This namespace is not accessible through userspace methods, and is reserved for implementing internal HDFS features.")]),e._v(" "),a("p",[e._v("The security namespace is reserved for internal HDFS use. This namespace is generally not accessible through userspace methods. One particular use of security is the security.hdfs.unreadable.by.superuser extended attribute. This xattr can only be set on files, and it will prevent the superuser from reading the file’s contents. The superuser can still read and modify file metadata, such as the owner, permissions, etc. This xattr can be set and accessed by any user, assuming normal filesystem permissions. This xattr is also write-once, and cannot be removed once set. This xattr does not allow a value to be set.")]),e._v(" "),a("p",[e._v("The raw namespace is reserved for internal system attributes that sometimes need to be exposed. Like system namespace attributes they are not visible to the user except when getXAttr/getXAttrs is called on a file or directory in the /.reserved/raw HDFS directory hierarchy. These attributes can only be accessed by the superuser. An example of where raw namespace extended attributes are used is the distcp utility. Encryption zone meta data is stored in raw.* extended attributes, so as long as the administrator uses /.reserved/raw pathnames in source and target, the encrypted files in the encryption zones are transparently copied.")]),e._v(" "),a("h2",{attrs:{id:"interacting-with-extended-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-extended-attributes","aria-hidden":"true"}},[e._v("#")]),e._v(" Interacting with extended attributes")]),e._v(" "),a("p",[e._v("The Hadoop shell has support for interacting with extended attributes via hadoop fs -getfattr and hadoop fs -setfattr. These commands are styled after the Linux "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/getfattr.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfattr(1)"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/setfattr.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("setfattr(1)"),a("OutboundLink")],1),e._v(" commands.")]),e._v(" "),a("h3",{attrs:{id:"getfattr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getfattr","aria-hidden":"true"}},[e._v("#")]),e._v(" getfattr")]),e._v(" "),a("p",[e._v("hadoop fs -getfattr [-R] -n name | -d [-e en] "),a("path")]),e._v(" "),a("p",[e._v("Displays the extended attribute names and values (if any) for a file or directory.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-R")])]),e._v(" "),a("tr",[a("td",[e._v("-n name")])]),e._v(" "),a("tr",[a("td",[e._v("-d")])]),e._v(" "),a("tr",[a("td",[e._v("-e "),a("encoding")],1)]),e._v(" "),a("tr",[a("td",[a("path")])])])]),e._v(" "),a("h3",{attrs:{id:"setfattr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setfattr","aria-hidden":"true"}},[e._v("#")]),e._v(" setfattr")]),e._v(" "),a("p",[e._v("hadoop fs -setfattr -n name [-v value] | -x name "),a("path")]),e._v(" "),a("p",[e._v("Sets an extended attribute name and value for a file or directory.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-n name")])]),e._v(" "),a("tr",[a("td",[e._v("-v value")])]),e._v(" "),a("tr",[a("td",[e._v("-x name")])]),e._v(" "),a("tr",[a("td",[a("path")])])])]),e._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration options")]),e._v(" "),a("p",[e._v("HDFS supports extended attributes out of the box, without additional configuration. Administrators could potentially be interested in the options limiting the number of xattrs per inode and the size of xattrs, since xattrs increase the on-disk and in-memory space consumption of an inode.")]),e._v(" "),a("ul",[a("li",[e._v("dfs.namenode.xattrs.enabled")])]),e._v(" "),a("p",[e._v("Whether support for extended attributes is enabled on the NameNode. By default, extended attributes are enabled.")]),e._v(" "),a("ul",[a("li",[e._v("dfs.namenode.fs-limits.max-xattrs-per-inode")])]),e._v(" "),a("p",[e._v("The maximum number of extended attributes per inode. By default, this limit is 32.")]),e._v(" "),a("ul",[a("li",[e._v("dfs.namenode.fs-limits.max-xattr-size")])]),e._v(" "),a("p",[e._v("The maximum combined size of the name and value of an extended attribute in bytes. By default, this limit is 16384 bytes.")])])}),[],!1,null,null,null);t.default=r.exports}}]);