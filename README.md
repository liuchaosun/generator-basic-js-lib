# generator-basic-js-lib

生成基础 js 工具库的初始化工具依赖

## 使用

使用 npm 进行安装

```bash
npm install -g generator-basic-js-lib
```

请在使用前先全局安装好 yo，如果你没有安装你可以执行

```bash
npm install -g yo
```

generator-basic-js-lib 将作为 yo 的一个生成器模块进行使用

```bash
yo basic-js-lib xxxx --folder
```

xxxx 是你将要创建的项目的名称。

--folder 是可选的参数项，如果添加了该配置则将会以项目名称 xxxx 生成一个目录，然后在这个目录中生成项目，这个场景十分有用，除非你已经事先创建好了一个目录。
