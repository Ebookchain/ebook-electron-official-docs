# Electron official document multi-language ebook

Electron : v0.36.10

Date： 2016-03-07

[中文说明](./README_zh-CN.md)

## About Electron

Electron enables you to create desktop applications with pure JavaScript by providing a runtime with rich native (operating system) APIs. You could see it as a variant of the Node.js runtime that is focused on desktop applications instead of web servers.

## About

This an ebook published with `GitBook`, used and read easily. Its every language documents are cloned from `Electron` official documents， and updated regularly (**Tracking electron`s releases**).

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

Download： https://imfly.gitbooks.io/electron-docs-gitbook/

English： https://imfly.gitbooks.io/electron-docs-gitbook/content/en/index.html

Chinese： https://imfly.gitbooks.io/electron-docs-gitbook/content/cn/index.html

Code： https://github.com/doc-ebooks/electron-docs-gitbook

Read： http://doc-ebooks.github.io/electron-docs-gitbook

Other books: [Bitcoin on Nodejs](https://github.com/doc-ebooks/bitcoin-on-nodejs)

## License

Copyright (c) 2016 imfly.

Copyright (c) 2014 GitHub Inc.

MIT LICENSE

## Author

WeChat：kubying

QQGroup：185046161

[self-publishing]: https://github.com/imfly/how-to-create-self-publishing-platform
