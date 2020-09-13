# generator-basic-js-lib

生成基础 js 工具库的初始化工具依赖

## 安装

使用 npm 进行安装

```bash
npm install -g generator-basic-js-lib
```

请在使用前先全局安装好 yo，如果你没有安装你可以执行

```bash
npm install -g yo
```

## 使用

generator-basic-js-lib 将作为 yo 的一个生成器模块进行使用

```bash
yo basic-js-lib xxxx --folder
```

xxxx 是你将要创建的项目的名称。

--folder 是可选的参数项，如果添加了该配置则将会以项目名称 xxxx 生成一个目录，然后在这个目录中生成项目，这个场景十分有用，除非你已经事先创建好了一个目录。

## 测试

你可以通过以下部分的测试手段，经常初始化是否成功

### npm run test

执行这个命令会检查项目下的默认demo代码，进行单元测试和覆盖率检查，你会在控制台看到效果，没有报错即为成功。

### npm run build

执行这个命令会先调用上面的测试命令进行代码检查，通过检查后会执行构建编译，将最后的编译结果输出到 dist 目录下。
