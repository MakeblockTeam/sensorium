var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var marked = require('marked');

var filelist = [
  {
    filename: 'index.html',
    entry: path.resolve(__dirname, '../', 'README.md'),
    output: path.resolve(__dirname, '../', 'docs'),
    title: 'Get Started'
  },
  {
    filename: 'changelog.html',
    entry: path.resolve(__dirname, '../', 'CHANGELOG.md'),
    output: path.resolve(__dirname, '../', 'docs'),
    title: 'Changelog'
  }
]

// 总模板
var template = fs.readFileSync(path.resolve(__dirname, './template/index.ejs'), 'utf8');

// 读入所有 md 文件
for(var file of filelist) {
  var mdContent = fs.readFileSync(file.entry, 'utf8');
  var content = marked(mdContent);
  var finalContent = ejs.render(template, {'content': content, title: file.title});
  fs.writeFileSync(path.resolve(file.output, file.filename), finalContent);
}