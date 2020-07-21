# ts project template

This project is for own use, changelog is artificial.

## clone

```sh
git clone https://github.com/HcySunYang/template-ts.git
rm -rf .git
git remote add origin {https://github.com/user/repo.git}
```

## Modify metadata

### package.json

- name
- repository
- author
- types

### README.md

Describe your project

### rollup.config.js

Currently it is the basic configuration, you can modify it according to your needs.

## Features

- `yarn dev` for dev
- `yarn build` for build
- `yarn test` for tests
  - write test files in the `tests` folder
  - `((\\.|/)(test|spec))\\.tsx?$`
  - writing dts tests in the `test-dts` folder
- rollup `dts`(thanks to [api-extractor](https://api-extractor.com/))
- `yarn commit` for commit
- pre-commit hook & lint-staged
- format on save when using vscode(`prettier`)
- integrate github action(only work on the `main` branch)
- `yarn release` for releasing your package
  - `--dry` [dry run](https://docs.npmjs.com/cli/publish)
  - `--skipTests` skip tests
  - `--skipBuild` skip build
  - `--preId` specify pre-release preid: `yarn release --preId alpha`
  - changelog will be automatically generated
  - You can specify the version: `yarn release [version]`