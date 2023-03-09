# We are currently using the following structure for the repo:

## For branch names
Since we are doing feature branches and want GitHub to help with collapsing branches, we are following the below convention (where XX is the GitHub Issue #)
```
feature/XX-<developerFirstName>-<shortDescription>
```
> NOTE: To ensure short lived feature branches and since we do squash merging, be aware that the branch will be deleted once it has been merged into main

## For Pull Requests (PRs)
We want to try and following conventional commits to maintain code Quality and automated functioning of [Google's release-please-action](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/.github/workflows/release_please.yml).
**Therefore we want the commits in a branch to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)**. There is a [GitHub Action](https://github.com/PHACDataHub/DSCO-experimental-web-app-platform/blob/main/.github/workflows/pr_title_and_body_linter.yml) that will automatically ensure that this is the case.

# Thanks for your Contribution! 😄
