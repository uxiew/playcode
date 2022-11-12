# playcode

a playground can Run code directly, providing a simple and fast, on-the-go code running environment, like codepen, jsfiddle, Jsfiddle, codepan, etc.

This project was inspired by [vueuse-playground](https://github.com/wheatjs/vueuse-playground)
、[runjs](https://runjs.app/) and [playcode](https://playcode.io/).

The goal of the project: fast,、prototype development。So it has some caveats.

> utools plugin 处于 [utools](https://github.com/ChandlerVer5/playcode/tree/utools) 分支


# notice
1. 每个项目必须要有 `main.ts/js`
2. 需要在 package 字段中写好依赖库的 esm 地址
3. 只能有一个html，为 `index.html`
4. `index.html`中只能接受`body`体内容！
5. 如果未定义`index.html`文件，内部会自动模拟`index.html` 


# target
1. html + scss （类似 jsbin.com）
2. typescript
3. vue
4. react
5. node
6. deno
7. angular
8. rust
9. 与 npm-helper 插件打通， npm 库直接测试运行、node 环境运行
10. typescript 直接运行（运行 ts 体操测试）

# TODO
1. 依赖版本可选
2. 启动窗口，可搜索进行创建快速环境
3. js 直接运行
4. worker 编译
5. 依赖本地化，加快运行速度，（https://www.npmjs.com/package/babel-plugin-transform-commonjs），分析 npm 包，加载 esm 库
6. 预览页面-loading


# reference
* https://segmentfault.com/a/1190000040746839

* https://github.com/egoist/codepan

* https://github.com/chinchang/web-maker/

* https://github.com/fanxq/code-blast-for-vscode

* https://github.com/djyde/plastic-editor

* https://github.com/wecde/wecde

* [Vue SFC Playground](https://sfc.vuejs.org/)

* [monaco-editor playground](https://microsoft.github.io/monaco-editor/playground.html)




