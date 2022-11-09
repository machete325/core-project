# [1.2.0](https://github.com/Coreai-org/corecontrol-web/compare/v1.1.0...v1.2.0) (2022-11-09)


### Features

* **dataset.tsx:** complete dataset tab related to API modifications ([21ad7e8](https://github.com/Coreai-org/corecontrol-web/commit/21ad7e809b788fc221e6a49bcdd0fe9b8c621e9e))
* **experiment.container.tsx:** refactored logic for table data ([4ae18d5](https://github.com/Coreai-org/corecontrol-web/commit/4ae18d52f7a8e92c80832e5f9d18d3e2e3dc1e29))
* **experiment.module.scss:** changed table styles ([852f276](https://github.com/Coreai-org/corecontrol-web/commit/852f276f6f68dc6483afa9b80ab0be6a6329e714))
* **experiment.styles:** changed table styles ([493226c](https://github.com/Coreai-org/corecontrol-web/commit/493226cd5511c275057a59e2f9d8608467746eac))
* **experiments.types:** changed IExperiment and IMetric types ([7abb488](https://github.com/Coreai-org/corecontrol-web/commit/7abb48861e6fd756c8b987c686884aede92c10c7))
* **experimentscontainer.tsx:** implement pagination for experiments page ([aa084cd](https://github.com/Coreai-org/corecontrol-web/commit/aa084cde9839064d38a7b49f881cb01f8d5ee5d9))
* **experiments:** implement pagination logic and UI ([e3eb26c](https://github.com/Coreai-org/corecontrol-web/commit/e3eb26cedf50e2baf7d3ddc1977dbe176996b640))
* **experimenttabs:** added marginBottom and modalKey ([f300c0b](https://github.com/Coreai-org/corecontrol-web/commit/f300c0b72dc029633b440528e7c8445657d2e864))
* **graph.tsx:** added logic for responsive design ([b9b1fb4](https://github.com/Coreai-org/corecontrol-web/commit/b9b1fb42d9292a1638ed4aa88677c1c09c2a1989))
* **graphnavigation.module.scss:** improve media logic ([035dc3c](https://github.com/Coreai-org/corecontrol-web/commit/035dc3c679d4e9b62ec5ed0e07dc6cd7bc74d068))
* **graphnavigation.tsx:** added styles for responsive design ([8c7d5b8](https://github.com/Coreai-org/corecontrol-web/commit/8c7d5b8c43a6aecd7bd3a78a28be5fcfa9c97f55))
* **loader:** added new styles for Loader ([433c29b](https://github.com/Coreai-org/corecontrol-web/commit/433c29bc7b5c9b4b3db1ca23004d8434d79d901a))
* **navigation.tsx:** added clearOverview ([65fd5a5](https://github.com/Coreai-org/corecontrol-web/commit/65fd5a53beb90ddd6bf178bd1a70f36080e2b855))
* **overview.actions:** added clearOverview action ([0cdea74](https://github.com/Coreai-org/corecontrol-web/commit/0cdea740bfadffa3606c87f65bab281b253c666e))
* **overview:** implement new logic related to new API ([d9291c9](https://github.com/Coreai-org/corecontrol-web/commit/d9291c93430d09310b6255a1272617d97a2d7f9e))
* **project pages:** improve pagination logic ([ff542df](https://github.com/Coreai-org/corecontrol-web/commit/ff542df23c81a82edd8a593ffc5f0a56f655e7be))
* **satustag.tsx:** added textColor ([96299a9](https://github.com/Coreai-org/corecontrol-web/commit/96299a9eb8028634fbe26ba2629e97b39009dce6))

# [1.1.0](https://github.com/Coreai-org/corecontrol-web/compare/v1.0.0...v1.1.0) (2022-11-03)


### Bug Fixes

* **experiment.service.tsx:** fixed page param to page_size param ([5b9fcbf](https://github.com/Coreai-org/corecontrol-web/commit/5b9fcbfa973ae12a1e503142b84f0de8500cbb2f))
* **overviewstatustag:** fixed bar width ([537cdb9](https://github.com/Coreai-org/corecontrol-web/commit/537cdb9d261200080f5606a689f6484fc2d921b0))
* **statustag:** fixed color display ([8fccff4](https://github.com/Coreai-org/corecontrol-web/commit/8fccff44a9018480d92677401a742d763de3cde7))
* **updaterecentlyopened.ts:** fixed amount recently opened objects ([c2b0234](https://github.com/Coreai-org/corecontrol-web/commit/c2b02345e42794c71fdac7f80cfe07b9cb76e20f))


### Features

* **alert:** added Alert component ([c329d7e](https://github.com/Coreai-org/corecontrol-web/commit/c329d7e42ba96a1fe7f680d6f05d2df506eda3de))
* **api.ts:** added signal for requests ([5702846](https://github.com/Coreai-org/corecontrol-web/commit/57028460550d1dae8c70efec663b9bde79da43f2))
* **api:** added loginHanle ([d5d98a7](https://github.com/Coreai-org/corecontrol-web/commit/d5d98a7025138c6c1db0d31bab0865ff065c8028))
* **chart:** added pie chart logic and UI ([ed714fb](https://github.com/Coreai-org/corecontrol-web/commit/ed714fbdc74a9a490726d53671ea022d5b8840ef))
* **commitdescription.tsx:** replace null to Not available ([83ce57d](https://github.com/Coreai-org/corecontrol-web/commit/83ce57d0de4ca424b722987e88a0633343fab2f3))
* **components:** renamed components and added new deps ([59d051e](https://github.com/Coreai-org/corecontrol-web/commit/59d051e330967bb7631f4731dc9c111895bcfbb1))
* **dataset:** added logic and styles for Dataset ([b88f989](https://github.com/Coreai-org/corecontrol-web/commit/b88f989dd5778f3eb60b2bacf735baa0f99e7df6))
* **dataset:** added types and conditions ([95b8c91](https://github.com/Coreai-org/corecontrol-web/commit/95b8c912d20d3c709ec6c14bef11b6b302b791f1))
* **datemethods.ts:** added getFormattedDateFromSeconds ([ae2b0ad](https://github.com/Coreai-org/corecontrol-web/commit/ae2b0adb6dab97c4ca8b75b15fe4ee8764565160))
* **dropdown:** added Overview dropdown ([12790e7](https://github.com/Coreai-org/corecontrol-web/commit/12790e7cab98c724a8a25d8e1f2c0a90e1fcba94))
* **experiment tabs:** added loading logic ([6b3359d](https://github.com/Coreai-org/corecontrol-web/commit/6b3359db4e8b2a3bd65dafab99b6a78905ffc725))
* **experiment.config.tsx:** added formattingFunction for metrics ([48eb0b1](https://github.com/Coreai-org/corecontrol-web/commit/48eb0b1fbfb627a8d04bd4837f5370de80fe92a1))
* **experiment.config:** added formatting function ([bd3d22f](https://github.com/Coreai-org/corecontrol-web/commit/bd3d22f715fadc76c7a922b945fccf8d887bd476))
* **experiment.service.tsx:** added display for  getExperimentDatasets ([cb8fc28](https://github.com/Coreai-org/corecontrol-web/commit/cb8fc28622594adf15a3867227ac8fb89c7ebaaa))
* **experiment:** remove className ([0658a7a](https://github.com/Coreai-org/corecontrol-web/commit/0658a7aa37a16f470b57b7af37c7295ff454d98e))
* **experimentscontainer:** added loader ([9ab2ef6](https://github.com/Coreai-org/corecontrol-web/commit/9ab2ef64fa69480932ab644025c50c1c044681b2))
* **experiments:** fixed styles and markup ([bb42c58](https://github.com/Coreai-org/corecontrol-web/commit/bb42c583a9c72102bc2f21cd7db11ea2cdf5baf1))
* **generalinfo:** added GeneralInfo ([ae242bb](https://github.com/Coreai-org/corecontrol-web/commit/ae242bb0cb57b6f63047bf0e1b572974df9d9bab))
* **generalinfo:** added types and mixins ([ce834fd](https://github.com/Coreai-org/corecontrol-web/commit/ce834fda335b054b5c2651016141a1e694c58dfb))
* **graph.ts:** added types for Graph.tsx ([b30a762](https://github.com/Coreai-org/corecontrol-web/commit/b30a762bf75e87c28ce782541d9c950e2bcdb85f))
* **infrastructureinfo.tsx:** added InfrastructureInfo component ([2e009ca](https://github.com/Coreai-org/corecontrol-web/commit/2e009ca9215c4a1e76a333437a095832bfe2d94e))
* **inputfield:** added min-width for input ([7126ff5](https://github.com/Coreai-org/corecontrol-web/commit/7126ff5125e1ff2f1570efbdf41af16bcb391aa1))
* **loader:** added Loader component ([ce70a2f](https://github.com/Coreai-org/corecontrol-web/commit/ce70a2fedcb3a50c1be69aebf2e277d4e733240f))
* **metricsinfo.tsx:** added MetrcisInfo component ([6a34c6c](https://github.com/Coreai-org/corecontrol-web/commit/6a34c6cf01ded2bb34dde16f06649615555debba))
* **modelconfiguration.tsx:** added ModelConfiguration component ([061d0a5](https://github.com/Coreai-org/corecontrol-web/commit/061d0a5f3869d1d8b2b7295aceeb696a2b0e95c2))
* **overview.service:** added Overview service ([fc0b3fb](https://github.com/Coreai-org/corecontrol-web/commit/fc0b3fbbda59e3f1acadd0186d621cb881c073ff))
* **overview:** added markup and OverviewStatusTag ([7f08723](https://github.com/Coreai-org/corecontrol-web/commit/7f087237857dee15c196d77116554f3ebaf0505e))
* **overview:** added overview logic for redux ([5c427e9](https://github.com/Coreai-org/corecontrol-web/commit/5c427e98d584089907441698b0a2f45215f05bb2))
* **overviewcontainer:** added logic and UI for Overview page ([a0f6e90](https://github.com/Coreai-org/corecontrol-web/commit/a0f6e90b32cd160ac09ceb10471386c4bfbcaf94))
* **overviewstatustag:** added OverviewStatusTag ([8dadb3e](https://github.com/Coreai-org/corecontrol-web/commit/8dadb3e1eaaa23512a2b1bfc639be16babfcc4de))
* **project.module.scss:** added scrollbar styles ([3416172](https://github.com/Coreai-org/corecontrol-web/commit/3416172d3998cc47fc431ba6199fbf7628099ca5))
* **project.service.ts:** added signal for request ([479eff3](https://github.com/Coreai-org/corecontrol-web/commit/479eff3af7b205822bfe68a66bf2186e94e1865f))
* **project.service.tsx:** added getProjectOverview ([2857b5b](https://github.com/Coreai-org/corecontrol-web/commit/2857b5bd4b0192a5ee772b097bc02ab260679ddf))
* **project:** added Skeleton loader and resposive UI ([24741fe](https://github.com/Coreai-org/corecontrol-web/commit/24741fe00fa3b48210d78508438d3f6e3108dc0a))
* **projects:** added logic and metrics for project cards ([4d4c670](https://github.com/Coreai-org/corecontrol-web/commit/4d4c6706e3e9dd2413f804b848986408771ce4c1))
* **projectscontainer:** added loading logic and signal trigger ([8e38943](https://github.com/Coreai-org/corecontrol-web/commit/8e38943b81ca8450cd121df545bf3f89adc15e1f))
* **projectstatus.tsx:** added new cases for checkStatus ([1723237](https://github.com/Coreai-org/corecontrol-web/commit/172323740cc2d4cf832fdd6db8ed445b05944554))
* **projecttitle.tsx:** added getFormattedDateFromTimeStamp ([eb7f9ef](https://github.com/Coreai-org/corecontrol-web/commit/eb7f9ef45a3cca62223efec0fc8b2ca324a14858))
* **redux:** added loader and errors logic ([f9729e6](https://github.com/Coreai-org/corecontrol-web/commit/f9729e663a68aeaf73e5a28fd2ede432de3e0652))
* **statisticproperties:** added StatisticProperties ([d9d3fb7](https://github.com/Coreai-org/corecontrol-web/commit/d9d3fb7a2c505953847ffe1aa099a2a76ada81e9))
* **statustag:** added currency to status tag ([3a8306f](https://github.com/Coreai-org/corecontrol-web/commit/3a8306f231c2695342243bd6b96a5ac35c4e0fe2))
* **textmethods.ts:** added formDatasetText ([40d3eff](https://github.com/Coreai-org/corecontrol-web/commit/40d3effc95900d8c67e3460fb6a0f46074c5a3a0))

# 1.0.0 (2022-10-17)


### Features

* **app.tsx:** added new components for routes ([273e830](https://github.com/Coreai-org/corecontrol-web/commit/273e8302426f75481fa1b654b29b450fa1abc530))
* **breadcrumbscontainer.tsx:** added condition for overview page ([bdf1d8e](https://github.com/Coreai-org/corecontrol-web/commit/bdf1d8eabb1fac9cf12438146fc2a52a53bc2f47))
* **colors.ts:** added helper for transformation colors ([864bb00](https://github.com/Coreai-org/corecontrol-web/commit/864bb00fe752280a5db6d81d9e186d49af6a557d))
* **commit:** added new logic for Commit.tsx and UI ([dbe3e57](https://github.com/Coreai-org/corecontrol-web/commit/dbe3e570e784797b6dd2ad0a6d64a6c3b2058b3c))
* **component:** added new class ([64a97b1](https://github.com/Coreai-org/corecontrol-web/commit/64a97b1bb8ca65cd3b6e36bead17160d9e56da8b))
* **configuration:** changed value for params function handleGetConfiguration ([85dd9a4](https://github.com/Coreai-org/corecontrol-web/commit/85dd9a4882059fda0f162eead86abd7f389406d5))
* **convertpath:** added new condition ([ce202c2](https://github.com/Coreai-org/corecontrol-web/commit/ce202c200d90863e8f2737c557e0f160721f99da))
* **dataset.tsx:** change data on dataset ([414319b](https://github.com/Coreai-org/corecontrol-web/commit/414319b0253f7afc4a32a6ce1ff943eedac060c7))
* **experiment types:** changed fields in IExperiment ([1ad2389](https://github.com/Coreai-org/corecontrol-web/commit/1ad23894d6b0a08860f7ea6ce8a447955f60ea3f))
* **experiment.service:** formatted functions and modify getExperimentCode ([416eefd](https://github.com/Coreai-org/corecontrol-web/commit/416eefd53a668c29079c8320f8320c3f2fa8cb8c))
* **experiments:** added logic for contol checkboxes ([264b2c7](https://github.com/Coreai-org/corecontrol-web/commit/264b2c793f332e71f86f6ac10126be59c330e636))
* **experiments:** modify experiments config and added loader ([941406a](https://github.com/Coreai-org/corecontrol-web/commit/941406ab940bec9c6c40a50ac679d5a47a76fe2e))
* **formatdate.ts:** added function for formatting date ([fea2c24](https://github.com/Coreai-org/corecontrol-web/commit/fea2c246569025293f0120085edbff8b004ce4cb))
* **gettabcontent:** modify getTabContent and added new helper for text ([11484fd](https://github.com/Coreai-org/corecontrol-web/commit/11484fd6e77b6adbcb246e2746169de122cc6750))
* **graph.tsx:** installed react-xarrow and done first steps for setup config ([cae1c0b](https://github.com/Coreai-org/corecontrol-web/commit/cae1c0b293d450745b9b4fcec4b6936d9c717b30))
* **graph.tsx:** modify configuration ([5baa2ca](https://github.com/Coreai-org/corecontrol-web/commit/5baa2ca030ff27488b3fa682cce845e2ec64209b))
* **graph:** added new configurations, logic, styles ([6babb7b](https://github.com/Coreai-org/corecontrol-web/commit/6babb7b1f94dc3de58e3f8bc764d72cbe5097fd7))
* **graph:** added new logic, configuration and UI for GraphNavigation ([d3df9b5](https://github.com/Coreai-org/corecontrol-web/commit/d3df9b5362c65fee2eeb1eff815accbb28f97d71))
* **graphmodal.tsx:** added minimal width for root MuiTypography ([85f0572](https://github.com/Coreai-org/corecontrol-web/commit/85f0572fec158644876d52a0e486978ab9bd3a76))
* **graphnavigation:** added some logic for graph navigation ([8c71f8f](https://github.com/Coreai-org/corecontrol-web/commit/8c71f8f5c55d5009e3bb3b9de3f00f8fe6fbff02))
* **images:** added new images for project container ([37760bf](https://github.com/Coreai-org/corecontrol-web/commit/37760bfbdacd1635302fa115b3474b4c4be6d9d1))
* **navigation:** added clear data functions ([6a21402](https://github.com/Coreai-org/corecontrol-web/commit/6a2140263298df6aad3be8c3e8ba3daf3c0f9b5a))
* **navigation:** added GraphNavigation component ([4f1c468](https://github.com/Coreai-org/corecontrol-web/commit/4f1c46803ce1ee9df74fc3b4a5f8afff8966a665))
* **package.json:** added new library react-copy-to-clipboard ([075b25a](https://github.com/Coreai-org/corecontrol-web/commit/075b25a6df8dbb8723bdb46be85c783d6168165b))
* **package.json:** installed comitizen ([2e9f59b](https://github.com/Coreai-org/corecontrol-web/commit/2e9f59bb140ff27b39078cbddcc2e4d6915f9083))
* **project/actions:** remove mock data ([00654fe](https://github.com/Coreai-org/corecontrol-web/commit/00654fe86c235db93877dd252d750b0f728956ff))
* **project:** create new components for project ([3eb704e](https://github.com/Coreai-org/corecontrol-web/commit/3eb704eec14ad76baa21de1a69652716cce8ac92))
* **projects:** added new UI for projects ([5ed1a03](https://github.com/Coreai-org/corecontrol-web/commit/5ed1a035d426441372e95b29c1f2a188e4f8258f))
* **projectscontainer.tsx:** added height and width for images ([eec8adf](https://github.com/Coreai-org/corecontrol-web/commit/eec8adff184527285b049749efcd098a8da90c29))
* **projecttitle.tsx:** added condition for overview page ([7ac2d53](https://github.com/Coreai-org/corecontrol-web/commit/7ac2d53f035cf144574a30ac597d34d6fa96aa90))
* **projecttitle:** added logic for display date ([c7cd453](https://github.com/Coreai-org/corecontrol-web/commit/c7cd453f6a28737b2bb3a1fafff0edd9957476b5))
* **statusindicator:** added StatusIndicator component ([11c26e5](https://github.com/Coreai-org/corecontrol-web/commit/11c26e56bec862eec05678ca71d6f861c367e3a7))


### Reverts

* **breadcrumbs:** revert logic for breadcrumbs ([792798f](https://github.com/Coreai-org/corecontrol-web/commit/792798f4fd2a2056d7bc4f3b53bebeb651738974))


### BREAKING CHANGES

* **graphnavigation:** n
