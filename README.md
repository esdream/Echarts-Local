# ECharts使用范例

## 目录结构

保持该项目目录结构。

## 启动

安装Python和Flask后，在命令行输入，以启动Flask服务。
```python
$ python server.py
```
> 由于要加载外部数据（即`/data`中的数据）必须使用**异步的方式**（这里通过jquery实现），而异步需要在http，https等协议下使用，因此需要启动一个localhost服务器。

## 运行案例

修改`templates/index.html`中对`demo/`目录下js文件的引用为想要打开的图表js文件。
```html
<script type="text/javascript" src="/static/demo/dataset2.js"></script>
```