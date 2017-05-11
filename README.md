# HROS Schema Tester Using Webpack

This project demonstrates the use of Node, Node Package Manager, Webpack, and Webpack loaders to automate schema testing.

## About
JSON schemas that span multiple files need some type of loader to read the files and to resolve the JPointer references. This is typically done via http which requires a server. In order to load JSON schemas locally it is possible to use Webpack to accomplish the same task. Webpack is an NPM library that bundles many source assets into files.

The goal of this project is to enable automated testing of the HROPen Standard schemas. This is a possible approach to continuous integration.

### TLDR;
After installing the libraries and the schemas, run 'webpack'. It will reference the json schemas for each work group and bundle the schemas into individual files. Errors are displayed in the console.

<img src="console_output.png" height="150">


## Prerequisites
```
    // This will probably work with Node 5 or 6.
    node --version && npm -v && bower --version && git --version
    v7.2.1
    3.10.10
    1.8.0
    git version 2.11.0 (Apple Git-81)

    Access to the private [HROPEN Repos](https://github.com/HROpen)
```
## Installation
First clone this repo and then install the libraries using Yarn or NPM.

### Clone this project

```
git clone https://github.com/chrispauley/hros_webpack_schema.git

cd hros_webpack_schema
```

### Install using yarn or npm:
```
yarn add path webpack babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 json-loader json-schema-loader file-loader --dev
```
or
```
npm install
```



## Pull the schemas into the project as submodules into a folder 'schema/'
You may/will need to edit the .gitignore file to remove the 'schema' folder from being ignored by git.
This will install the schemas from the _private_ repos.

```
bower install

```

### Running webpack
Run webpack from the root directory of this project.

```
