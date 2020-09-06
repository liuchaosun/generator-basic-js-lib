var path = require('path');
var packageJson = require('./pkgJson.js');
var configArray = require('./config-files.js');
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // 构造函数
  constructor(args, opts) {
    super(args, opts);
    // 添加此配置，调用时必须传入一个目录名
    this.argument("projectName", { type: String, required: true, desc: "请输入你的项目名称" });
    this.option("folder", { type: Boolean, required: false, desc: "开启此配置会以项目名称生成一个目录" });
  }
  initializing() {
    this.log('初始化ing...');
    // 重新设置模板文件路径
    this.sourceRoot(path.resolve(__dirname, "../../template"));
    // 重新设置目标生成路径 this.contextRoot 可以获取命令行执行的位置
    let destination = this.contextRoot;
    if (this.options.folder) {
      destination += '/' + this.options.projectName;
    }
    this.destinationRoot(destination);
  }
  // 用户交互
  async prompting() {
    this.log('请配合提示输入以下信息：');
    // this.prompt 调用提示模块
    this.answers = await this.prompt([
      {// 项目名称
        type: "input",
        name: "name",
        message: "项目名称：",
        default: this.options.projectName, // 设置默认值为文件目录名
      },
      {// 初始化版本
        type: "input",
        name: "version",
        message: "初始化版本：",
        default: "0.1.0",
      },
      {// 依赖管理
        type: "confirm",
        name: "autoInstall",
        message: "是否下载所有依赖",
        default: true
      }
    ]);
  }
  // 写入文件系统
  writing() {
    // 拷贝 vscode 配置
    this.fs.copy(
      this.templatePath('./_vscode'),
      this.destinationPath('.vscode')
    );
    // 拷贝 核心演示代码
    this.fs.copy(
      this.templatePath('./src'),
      this.destinationPath('src')
    );
    // 拷贝 测试入口
    this.fs.copy(
      this.templatePath('./test'),
      this.destinationPath('test')
    );
  }

  configuring() {
    this.log('生成配置文件...');
    // package.json 配置
    const pkgJson = Object.assign(
      packageJson,
      {
        "name": this.answers.name,
        "version": this.answers.version,
      }
    );
    // 在目标路径下，如果没有 package.json 则创建一个，反之修改它
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    // 生成其他配置文件
    configArray.forEach(item => {
      this.fs.copy(
        this.templatePath('./config-files/' + item[0]),
        this.destinationPath(item[1])
      );
    })
  }
  // 安装依赖
  install() {
    // 加载其他默认的插件
    if (this.answers.autoInstall) {
      this.npmInstall();
    }
  }
  end() {
    this.log('初始化完毕，祝您使用愉快！');
  }
}