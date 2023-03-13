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

## Regarding Conventional Commits
this project uses the Conventional Commits format for all changes to the source repository. If you submit a PR, the CI build won't pass until all commits satisfy the format. This format embeds semantic information in each commit that's used to automatically generate release notes.

The Conventional Commits format is as follows:

```
<type>([optional scope]): <description>

[optional body]

[optional footer(s)]
```

### Type

Only certain types are permitted, with the most common being:

- `fix:` a commit that fixes a bug in this project.
- `feat:` a commit that adds new functionality to this project.
- `docs:` a commit that adds or improves this project's documentation.
- `test:` a commit that adds unit tests.
- `perf:` a commit that improves performance, without functional changes.
- `chore:` a catch-all type for any other commits. For instance, if you're implementing a single feature and it makes sense to divide the work into multiple commits, you should mark one commit as feat and the rest as chore.

### Scope

The scope optionally provides extra context. If you're fixing a `ListView` bug, for example, you might use `fix(listview)`.

One scope with special meaning is `reg`, short for regression. This is used for fixes for bugs that weren't present in the most recent stable release.

Breaking changes
Breaking changes are indicated by putting `BREAKING CHANGE`: at the start of the message body, for any commit type. Optionally they may be emphasized by appending a `!` after the type and scope. The message body should provide appropriate guidance for developers affected by the breaking change.

# Thanks for your Contribution! 😄

⬅️ [Back to README](./README.md)
