# Changelog

## [0.3.0-alpha](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/compare/v0.2.0-alpha...v0.3.0-alpha) (2023-11-28)


### Features

* **hasura:** added GCP deployment files ([#92](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/92)) ([8a95749](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/8a9574932ee5a62976dec78b3580477e551de135))


### Bug Fixes

* **docs:** updated version.txt file ([#90](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/90)) ([bf7f43b](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/bf7f43b9d0d597250861b01201ec8a07ec891b68))
* **TODO:** added TODO item about api endpoint ([be34214](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/be342146777223e033ed12e5bf088b11af6232a5))

## [0.2.0-alpha](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/compare/v0.1.0-alpha...v0.2.0-alpha) (2023-08-15)


### Features

* **cloud:** added cloudbuild info and files ([#86](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/86)) ([997fa21](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/997fa216f9bd831216fa9a18993bc6d287a40a9d))
* **cloudbuild:** adding updated cloudbuild files ([b688fa8](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/b688fa8f3e755a09d1c5e120f414f8a3d91b538e))
* **frontend:** add refetching to add country button ([#85](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/85)) ([4ce7e4f](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/4ce7e4f784b07759c188cad6d17d898c4672f433))
* **frontend:** create explore countries page. merge hasura and graphene into explore countries page ([#81](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/81)) ([24fc63f](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/24fc63fd59c9483ac932085b0b1cf1a0667972ad))
* **frontend:** create hasura api call ([#79](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/79)) ([94bc888](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/94bc88836b2bf2d0ff754cb0ccc507ad5ae5bd71))
* **githubissues:** added tasklist beta to issue templates ([c42dfed](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/c42dfeda7c867a9921a553b9b8194e458add3535))
* **lint:** added linting stuff and cloud files ([#83](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/83)) ([42a86a6](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/42a86a6c282a0ddcd03270f63bead8e77f261aea))
* **scripts:** created service container selector script ([885183f](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/885183f5751973593b1d158b5e3da4954c9dd4a8))
* **scripts:** updated select start script to include service offerings ([b4314c8](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/b4314c8ebc4d0718fe7d4563c299b0ad4d608f38))


### Bug Fixes

* **dockerfile:** trying another directory syntax for cloudbuild ([ea964ee](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/ea964eeabc6766b0dcec171b3a9a1b1a8c87adbe))
* **dockerfile:** updated to fix directory for cloudbuild ([02cc556](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/02cc556d446f66884f18f4e96bba822ec56080aa))
* **docker:** updated dockerfiles for prod and dev and live-reloading ([5cb3bb6](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/5cb3bb61ae5ffc418151a58eaf986034a4e4d345))
* **gcp-docker:** exposed post 8080 to fix gcp error ([d5534e1](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/d5534e1606c39c36f570de2c594690407d62e2e2))
* **packages:** added vscode setting and updated package JSON ([067ae46](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/067ae4650653e82cb6aeb95764e096be6a8b2b3c))


### Miscellaneous Chores

* release 0.2.0-alpha ([ab35361](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/ab353618c0030831db51bc7bb5110703fa1f341f))

## 0.1.0-alpha (2023-03-23)


### Features

* **API:** added both Postgraphile and Hasura APIs ([1f5d200](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/1f5d200abafef272b3af427c6f96b977efbc3eba))
* **DockerAndEnv:** updated the docker files and env files for microservices ([#10](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/10)) ([86b439c](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/86b439c966e3f8a046b7499ab9d83117f4a41978))
* **frontend:** changed API page icon ([d6e5a77](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/d6e5a77a4c9ba637b738505ea6bfd3e6a29b17f5))
* **frontend:** create graphQL API call page ([#20](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/20)) ([eabd1b7](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/eabd1b76020ae7b643126fecb1fad1fd30fd4bff))
* **GetCountries:** used already created theme card ([9afecb7](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/9afecb7862fe6c9a72e88dfa6998c9047214348e))
* **GitHub:** changed repo name and references ([#21](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/21)) ([f264df5](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/f264df55b8ceaebd3ae2d0cc76f093675adf1491))
* **GitHubPages:** added goc jekyll config ([#18](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/18)) ([f54edec](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/f54edecf9bc2bb6990d103fb3cfc9223bfdd71fd))
* **GitHubPage:** second attempt although tested externally ([#16](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/16)) ([81af351](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/81af351ad80e53a063dce3d0bea81e33bbd637a6))
* **GitHubPage:** updated root index file to test ([#14](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/14)) ([8c0f5ab](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/8c0f5ab59b3d72d30a09405839cc513e07be109d))
* **images:** updated some images and README ([#22](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/22)) ([3e0a198](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/3e0a1987ddce080ec19dab4d52cc4065dff385fb))
* **scripts:** further streamlined the start up process ([#11](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/11)) ([d03ebb9](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/d03ebb90e66c5b69d282c7a36572bc40c51199fe))
* validate dev environment ([#9](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/9)) ([bb3136b](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/bb3136be6392884297641a79feea95ab0757d274))


### Bug Fixes

* **backend:** reconfigured backend connections and added fixture data ([#7](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/7)) ([fdf2ef3](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/fdf2ef3234f4ebb9a88ed600207a533a5086c6a0))
* **docs:** updated the README with codespace material ([#12](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/12)) ([3a8eb8f](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/3a8eb8f0dd1ba3c3355c746e56080cfc094351ef))
* **Fixtures:** added file to git but still ignoring data within ([#8](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/8)) ([9cd7e97](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/9cd7e973adccadd91ed51497f8f01f5893deb848))
* **GitHubPages:** added third scene and small modifications ([#17](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/17)) ([3945692](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/394569269ad8738c3f42835971e2e903d7313afc))
* **GitHubPages:** first attempt at graphic images ([#15](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/15)) ([c3c7108](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/c3c710887003e38c5e7ba780457f9f512be2dd6f))
* **GitHubPages:** should now look at README ([e4d3834](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/e4d38341e713bf98df3eb6d45dd3358a3e497e8b))
* **GitHubPages:** using README instead of index for jekyll ([#19](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/19)) ([dcc005f](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/dcc005fc16205b02b1b4e18990b21ece07d7f76b))
* **gitignore:** trying again to remove env files ([2ff8332](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/2ff8332972eb56fe1daad0c26b64f168844d97d2))
* **gitignore:** will not ignore all env files ([#13](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/13)) ([5318d9a](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/5318d9a1c181a79b7018c27dbe1ab34ed3406a3e))
* initial_data checked in, script language change, README updates ([ccc58e9](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/ccc58e9180a87080656809841c6f11360cd3a0b3))
* **initial:** initial fork commit ([6218df5](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/6218df587a28002f3056b05c2c5635e30534e10a))
* readded geordins work ([#29](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/issues/29)) ([699e852](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/699e852c479b9df7e64e776b7fcc2385d1c96d26))
* **README:** link to french portion ([820f27d](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/820f27dd923f812552cd89342b8888a167c48ccd))
* **README:** removed English link ([aea6017](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/aea6017b6258bab386793ec3a0ae331032083505))
* scripts check for initial_data and README updates ([34c0821](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/34c08216df7f458ed9afac492f6ec614fd2e82d5))


### Miscellaneous Chores

* release 0.1.0-alpha ([01c9c1e](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/commit/01c9c1e606d58c8d3a79eed7cddfe15183111523))
