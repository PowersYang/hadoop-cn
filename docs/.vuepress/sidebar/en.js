module.exports = function () {
    return [{
        title: 'General',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/', 'Overview'],
            ['/docs/hadoop-project-dist/hadoop-common/SingleCluster', 'Single Node Setup'],
            ['/docs/hadoop-project-dist/hadoop-common/ClusterSetup', 'Cluster Setup'],
            ['/docs/hadoop-project-dist/hadoop-common/CommandsManual', 'Commands Reference'],
            ['/docs/hadoop-project-dist/hadoop-common/FileSystemShell', 'FileSystem Shell'],
            ['/docs/hadoop-project-dist/hadoop-common/Compatibility', 'Compatibility Specification'],
            ['/docs/hadoop-project-dist/hadoop-common/DownstreamDev', 'Downstream Developer\'s Guide'],
            ['/docs/hadoop-project-dist/hadoop-common/AdminCompatibilityGuide', 'Admin Compatibility Guide'],
            ['/docs/hadoop-project-dist/hadoop-common/InterfaceClassification', 'Interface Classification'],
            ['/docs/hadoop-project-dist/hadoop-common/filesystem/', 'FileSystem Specification']
        ]
    },
    {
        title: 'Common',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-project-dist/hadoop-common/CLIMiniCluster', 'CLI Mini Cluster'],
            ['/docs/hadoop-project-dist/hadoop-common/NativeLibraries', 'Native Libraries'],
            ['/docs/hadoop-project-dist/hadoop-common/Superusers', 'Proxy User'],
            ['/docs/hadoop-project-dist/hadoop-common/RackAwareness', 'Rack Awareness'],
            ['/docs/hadoop-project-dist/hadoop-common/SecureMode', 'Secure Mode'],
            ['/docs/hadoop-project-dist/hadoop-common/ServiceLevelAuth', 'Service Level Authorization'],
            ['/docs/hadoop-project-dist/hadoop-common/HttpAuthentication', 'HTTP Authentication'],
            ['/docs/hadoop-project-dist/hadoop-common/CredentialProviderAPI', 'Credential Provider API'],
            ['/docs/hadoop-kms/', 'Hadoop KMS'],
            ['/docs/hadoop-project-dist/hadoop-common/Tracing', 'Tracing'],
            ['/docs/hadoop-project-dist/hadoop-common/UnixShellGuide', 'Unix Shell Guide']
        ]
    },
    {
        title: 'HDFS',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsDesign', 'Architecture'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide', 'User Guide'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HDFSCommands', 'Commands Reference'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithQJM', 'NameNode HA With QJM'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithNFS', 'NameNode HA With NFS'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/Federation', 'Federation'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/ViewFs', 'ViewFs'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsSnapshots', 'Snapshots'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsEditsViewer', 'Edits Viewer'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsImageViewer', 'Image Viewer'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide', 'Permissions and HDFS'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsQuotaAdminGuide', 'Quotas and HDFS'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/LibHdfs', 'libhdfs (C API)'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/WebHDFS', 'WebHDFS (REST API)'],
            ['/docs/hadoop-hdfs-httpfs/', 'HttpFS'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/ShortCircuitLocalReads', 'Short Circuit Local Reads'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/CentralizedCacheManagement', 'Centralized Cache Management'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsNfsGateway', 'NFS Gateway'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsRollingUpgrade', 'Rolling Upgrade'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/ExtendedAttributes', 'Extended Attributes'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/TransparentEncryption', 'Transparent Encryption'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsMultihoming', 'Multihoming'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/ArchivalStorage', 'Storage Policies'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/MemoryStorage', 'Memory Storage Support'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/SLGUserGuide', 'Synthetic Load Generator'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HDFSErasureCoding', 'Erasure Coding'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HDFSDiskbalancer', 'Disk Balancer'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsUpgradeDomain', 'Upgrade Domain'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsDataNodeAdminGuide', 'DataNode Admin'],
            ['/docs/hadoop-project-dist/hadoop-hdfs-rbf/HDFSRouterFederation', 'Router Federation'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/HdfsProvidedStorage', 'Provided Storage']
        ]
    },
    {
        title: 'MapReduce',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial', 'Tutorial'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapredCommands', 'Commands Reference'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduce_Compatibility_Hadoop1_Hadoop2', 'Compatibility with 1.x'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/EncryptedShuffle', 'Encrypted Shuffle'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/PluggableShuffleAndPluggableSort', 'Pluggable Shuffle/Sort'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/DistributedCacheDeploy', 'Distributed Cache Deploy'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/SharedCacheSupport', 'Support for YARN Shared Cache']
        ]
    },
    {
        title: 'MapReduce REST APIs',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapredAppMasterRest', 'MR Application Master'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-hs/HistoryServerRest', 'MR History Server']
        ]
    },
    {
        title: 'YARN',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-yarn/hadoop-yarn-site/YARN', 'Architecture'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/YarnCommands', 'Commands Reference'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/CapacityScheduler', 'Capacity Scheduler'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/FairScheduler', 'Fair Scheduler'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/ResourceManagerRestart', 'ResourceManager Restart'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/ResourceManagerHA', 'ResourceManager HA'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/ResourceModel', 'Resource Model'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/NodeLabel', 'Node Labels'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/NodeAttributes', 'Node Attributes'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/WebApplicationProxy', 'Web Application Proxy'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/TimelineServer', 'Timeline Server'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/TimelineServiceV2', 'Timeline Service V.2'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/WritingYarnApplications', 'Writing YARN Applications'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/YarnApplicationSecurity', 'YARN Application Security'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/NodeManager', 'NodeManager'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/DockerContainers', 'Running Applications in Docker Containers'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/NodeManagerCgroups', 'Using CGroups'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/SecureContainer', 'Secure Containers'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/registry/', 'Registry'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/ReservationSystem', 'Reservation System'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/GracefulDecommission', 'Graceful Decommission'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/OpportunisticContainers', 'Opportunistic Containers'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/Federation', 'YARN Federation'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/SharedCache', 'Shared Cache'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/UsingGpus', 'Using GPU'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/UsingFPGA', 'Using FPGA'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/PlacementConstraints', 'Placement Constraints'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/YarnUI2', 'YARN UI2']
        ]
    },
    {
        title: 'YARN REST APIs',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-yarn/hadoop-yarn-site/WebServicesIntro', 'Introduction'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/ResourceManagerRest', 'Resource Manager'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/NodeManagerRest', 'Node Manager'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/TimelineServer#Timeline_Server_REST_API_v1', 'Timeline Server'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/TimelineServiceV2#Timeline_Service_v.2_REST_API', 'Timeline Service V.2']
        ]
    },
    {
        title: 'YARN Service',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/Overview', 'Overview'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/QuickStart', 'QuickStart'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/Concepts', 'Concepts'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/YarnServiceAPI', 'Yarn Service API'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/ServiceDiscovery', 'Service Discovery'],
            ['/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/SystemServices', 'System Services']
        ]
    },
    {
        title: 'Submarine',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-yarn/hadoop-yarn-applications/hadoop-yarn-submarine/', 'Index'],
            ['/docs/hadoop-yarn/hadoop-yarn-applications/hadoop-yarn-submarine/QuickStart', 'QuickStart'],
            ['/docs/hadoop-yarn/hadoop-yarn-applications/hadoop-yarn-submarine/Examples', 'Examples'],
        ]
    },
    {
        title: 'Hadoop Compatible File Systems',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-aliyun/tools/hadoop-aliyun/', 'Aliyun OSS'],
            ['/docs/hadoop-aws/tools/hadoop-aws/', 'Amazon S3'],
            ['/docs/hadoop-azure/', 'Azure Blob Storage'],
            ['/docs/hadoop-azure-datalake/', 'Azure Data Lake Storage'],
            ['/docs/hadoop-openstack/', 'OpenStack Swift']
        ]
    },
    {
        title: 'Auth',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-auth/', 'Overview'],
            ['/docs/hadoop-auth/Examples', 'Examples'],
            ['/docs/hadoop-auth/Configuration', 'Configuration'],
            ['/docs/hadoop-auth/BuildingIt', 'Building']
        ]
    },
    {
        title: 'Tools',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-streaming/HadoopStreaming', 'Hadoop Streaming'],
            ['/docs/hadoop-archives/HadoopArchives', 'Hadoop Archives'],
            ['/docs/hadoop-archive-logs/HadoopArchiveLogs', 'Hadoop Archive Logs'],
            ['/docs/hadoop-distcp/DistCp', 'DistCp'],
            ['/docs/hadoop-gridmix/GridMix', 'GridMix'],
            ['/docs/hadoop-rumen/Rumen', 'Rumen'],
            ['/docs/hadoop-resourceestimator/ResourceEstimator', 'Resource Estimator Service'],
            ['/docs/hadoop-sls/SchedulerLoadSimulator', 'Scheduler Load Simulator'],
            ['/docs/hadoop-project-dist/hadoop-common/Benchmarking', 'Hadoop Benchmarking']
        ]
    },
    {
        title: 'Reference',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-project-dist/hadoop-common/release/', 'Changelog and Release Notes'],
            ['/docs/api/', 'Java API docs'],
            ['/docs/hadoop-project-dist/hadoop-common/UnixShellAPI', 'Unix Shell API'],
            ['/docs/hadoop-project-dist/hadoop-common/Metrics', 'Metrics']
        ]
    },
    {
        title: 'Configuration',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            ['/docs/hadoop-project-dist/hadoop-common/core-default', 'core-default.xml'],
            ['/docs/hadoop-project-dist/hadoop-hdfs/hdfs-default', 'hdfs-default.xml'],
            ['/docs/hadoop-project-dist/hadoop-hdfs-rbf/hdfs-rbf-default', 'hdfs-rbf-default.xml'],
            ['/docs/hadoop-mapreduce-client/hadoop-mapreduce-client-core/mapred-default', 'mapred-default.xml'],
            ['/docs/hadoop-yarn/hadoop-yarn-common/yarn-default', 'yarn-default.xml'],
            ['/docs/hadoop-project-dist/hadoop-common/DeprecatedProperties', 'Deprecated Properties']            
        ]
    }]
}