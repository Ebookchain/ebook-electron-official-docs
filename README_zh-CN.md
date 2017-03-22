# Electron 官方文档多语言电子书

初始提交：Electron-v0.36.10

时间： 2016-03-07

（更新情况请看[英文版说明](./README.md)）

## 关于Electron

Electron 可以让你使用纯 JavaScript 调用丰富的原生 APIs 来创造桌面应用。你可以把它看作是专注于桌面应用而不是 web 服务器的，io.js 的一个变体。

## 关于本电子书

本书使用`gitbook`整理发布成电子书形式，方便使用和阅读。其中各语言版本，是`Electron`官方文档的拷贝，将跟踪更新。

## 构建

自由写作、发布，搭建自出版平台的方法，请[点击这里][self-publishing]

简要介绍如下：

(1)安装gitbook

```
$ npm install -g gitbook-cli
```

(2)克隆源文

```
$ git clone　https://github.com/imfly/electron-docs-gitbook.git
```

(3)安装依赖包

```
$ cd electron-docs-gitbook
$ npm install
$ gitbook install
```

(4)克隆electron源码

```
$ git submodule init
$ git submodule update
```

(5)拷贝文档

```
$ npm run copy
```

(6)修改构建

修改、构建（开启服务）

```
$ gitbook serve
```

通过`http://localhost:4000`实时浏览

(7)一键发布

```
$ npm run deploy
```

**以后，只要重复4-7的过程就是了。**

## 链接

下载页： https://imfly.gitbooks.io/electron-docs-gitbook/ 各版本请自行选择

中文版： https://imfly.gitbooks.io/electron-docs-gitbook/content/cn/index.html

英文版： https://imfly.gitbooks.io/electron-docs-gitbook/content/en/index.html

原码库： https://github.com/imfly/electron-docs-gitbook

预览页： http://imfly.github.io/electron-docs-gitbook

## 贡献

欢迎将您感兴趣应用，按照这个方法，简单的托管`doc-ebooks`名下。

## 协议

Copyright (c) 2016 imfly.
Copyright (c) 2014 GitHub Inc.

MIT LICENSE

## 作者

我们始终关注C/C++、Nodejs等编程语言，在`区块链、电子商务、即时通信、电子书、自媒体、物联网`等领域的创新应用，已经汇聚了大批在该领域的`开发、设计、运营和管理`人才，如果您也有志于此，请联系

微信：kubying

Ebookcoin官方开发交流QQ群：185046161

[self-publishing]: https://github.com/imfly/how-to-create-self-publishing-platform
