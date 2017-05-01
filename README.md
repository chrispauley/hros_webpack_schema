# HROS Schema Tester Using Webpack

This project demonstrates the use of Node, Node Package Manager, Webpack, and Webpack loaders to automate schema testing.

## Prerequisites
```
    node --version && npm -v && git --version
    v7.2.1
    3.10.10
    git version 2.11.0 (Apple Git-81)
    Access to HROPEN Repos

```
yarn add path webpack babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 json-loader json-schema-loader file-loader --dev
```

touch index.js

echo "node_modules" > .gitignore


git init
git commit -am "Init"


## Pull the schemas into the project as submodules into a folder 'schema/'
```
git submodule add https://github.com/HROpen/Common.git schema/Common
git submodule add https://github.com/HROpen/Assessments.git schema/Assessments
git submodule add https://github.com/HROpen/Benefits.git schema/Benefits
git submodule add https://github.com/HROpen/Compensation.git schema/Compensation
git submodule add https://github.com/HROpen/Recruiting.git schema/Recruiting
git submodule add https://github.com/HROpen/Screening.git schema/Screening
git submodule add https://github.com/HROpen/Interviewing.git schema/Interviewing
git submodule add https://github.com/HROpen/Wellness.git schema/Wellness
git submodule add https://github.com/HROpen/Timecard.git schema/Timecard

```
