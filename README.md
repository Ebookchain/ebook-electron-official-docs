# Electron official document multi-languages ebook

[Back Home](http://ebookchain.org)

## Changelog

- [x] Update to Electron-v1.2.1 2016-06-06
- [x] Update to Electron-v0.37.8 2016-05-03
- [x] Update to Electron-v0.37.6 2016-04-17
- [x] Update to Electron-v0.37.2 2016-03-26
- [x] Update to Electron-v0.37.2 2016-03-16
- [x] Initial commit Electron-v0.36.10 2016-03-07

[中文说明](./README_zh-CN.md)

## About Electron

Electron enables you to create desktop applications with pure JavaScript by providing a runtime with rich native (operating system) APIs. You could see it as a variant of the Node.js runtime that is focused on desktop applications instead of web servers.

## About

This is an ebook published with `GitBook`, used and read easily. Its every language documents are cloned from `Electron` official documents， and updated regularly (**Tracking electron`s releases**).

## Build

Free writing, publishing, and build a self publishing platform, [click here][self-publishing].

Brief introduction：

(1) Clone the project

```
$ git clone　https://github.com/imfly/electron-docs-gitbook.git
```

(2) Install dependences

```
$ npm install -g gitbook-cli

$ cd electron-docs-gitbook
$ npm install
$ gitbook install
```

(3) Get Electron

```
$ git submodule init
$ git submodule update --remote
```

(4) Copy Documents

```
$ npm run copy
```

(5) Build ebook

```
$ gitbook build
```

or

```
$ gitbook serve
```

Then you can read it from `http://localhost:4000`

(6) Deploy to gh-pages

```
$ npm run deploy
```

Then, get it on http://doc-ebooks.github.io/electron-docs-gitbook

## Links

* [gitbook]

Download： https://imfly.gitbooks.io/electron-docs-gitbook/

English： https://imfly.gitbooks.io/electron-docs-gitbook/content/en/index.html

简体中文： https://imfly.gitbooks.io/electron-docs-gitbook/content/zh-CN/index.html

* [github]

Code： https://github.com/doc-ebooks/electron-docs-gitbook

Read： http://doc-ebooks.github.io/electron-docs-gitbook

* [others]

Other books: [Bitcoin on Nodejs](http://bitcoin-on-nodejs.ebookchain.org)

## License

Copyright (c) 2016 imfly.

Copyright (c) 2014 GitHub Inc.

MIT LICENSE

## Author

WeChat：kubying

QQGroup：185046161

[self-publishing]: https://github.com/imfly/how-to-create-self-publishing-platform
