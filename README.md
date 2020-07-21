# ts project template

## clone

```sh
git clone https://github.com/HcySunYang/template-ts.git
git remote rm origin
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
- `yarn commit` for commit
- `yarn changelog` generate changelog
- pre-commit hook & lint-staged
- format on save when using vscode(`prettier`)
- integrate github action
