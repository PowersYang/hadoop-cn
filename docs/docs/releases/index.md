---
sidebar: false
---

#### 下载

---

为了方便起见，Hadoop以源代码tarballs的形式发布，并带有相应的二进制tarballs。下载是通过镜像站点分发的，应该使用GPG或SHA-512检查是否有篡改。

| 版本  |  发布日期   |                           源码下载                           |                          二进制下载                          |                           发行说明                           |
| :---: | :---------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| 3.2.1 | 2019 Sep 22 | [source](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.2.1/hadoop-3.2.1-src.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-3.2.1/hadoop-3.2.1-src.tar.gz.sha512) [signature](https://www.apache.org/dist/hadoop/common/hadoop-3.2.1/hadoop-3.2.1-src.tar.gz.asc)) | [binary](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.2.1/hadoop-3.2.1.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-3.2.1/hadoop-3.2.1.tar.gz.sha512) [signature](https://www.apache.org/dist/hadoop/common/hadoop-3.2.1/hadoop-3.2.1.tar.gz.asc)) | [Announcement](https://hadoop.apache.org/release/3.2.1.html) |
| 3.1.2 | 2019 Feb 6  | [source](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.1.2/hadoop-3.1.2-src.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-3.1.2/hadoop-3.1.2-src.tar.gz.mds) [signature](https://www.apache.org/dist/hadoop/common/hadoop-3.1.2/hadoop-3.1.2-src.tar.gz.asc)) | [binary](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.1.2/hadoop-3.1.2.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-3.1.2/hadoop-3.1.2.tar.gz.mds) [signature](https://www.apache.org/dist/hadoop/common/hadoop-3.1.2/hadoop-3.1.2.tar.gz.asc)) | [Announcement](https://hadoop.apache.org/release/3.1.2.html) |
| 2.9.2 | 2018 Nov 19 | [source](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-2.9.2/hadoop-2.9.2-src.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-2.9.2/hadoop-2.9.2-src.tar.gz.mds) [signature](https://www.apache.org/dist/hadoop/common/hadoop-2.9.2/hadoop-2.9.2-src.tar.gz.asc)) | [binary](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-2.9.2/hadoop-2.9.2.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-2.9.2/hadoop-2.9.2.tar.gz.mds) [signature](https://www.apache.org/dist/hadoop/common/hadoop-2.9.2/hadoop-2.9.2.tar.gz.asc)) | [Announcement](https://hadoop.apache.org/release/2.9.2.html) |
| 2.8.5 | 2018 Sep 15 | [source](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-2.8.5/hadoop-2.8.5-src.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-2.8.5/hadoop-2.8.5-src.tar.gz.mds) [signature](https://www.apache.org/dist/hadoop/common/hadoop-2.8.5/hadoop-2.8.5-src.tar.gz.asc)) | [binary](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-2.8.5/hadoop-2.8.5.tar.gz) ([checksum](https://www.apache.org/dist/hadoop/common/hadoop-2.8.5/hadoop-2.8.5.tar.gz.mds) [signature](https://www.apache.org/dist/hadoop/common/hadoop-2.8.5/hadoop-2.8.5.tar.gz.asc)) | [Announcement](https://hadoop.apache.org/release/2.8.5.html) |

#### 要使用GPA验证Hadoop版本，请执行以下操作：

---

1. 从[镜像](https://www.apache.org/dyn/closer.cgi/hadoop/common)站点下载hadoop-X.Y.Z-src.tar.gz版本。
2. 从[Apache](https://www.apache.org/dist/hadoop/common/)下载签名文件hadoop-X.Y.Z-src.tar.gz.asc。
3. 下载[Hadoop密钥](https://www.apache.org/dist/hadoop/common/KEYS)文件。
4. GPG–导入密钥。
5. gpg–验证hadoop-x.y.z-src.tar.gz.asc。