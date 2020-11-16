# AST  
字符串转换成 抽象对象语法树AST。  

# 如何做  
我们知道 html 源码只是一个文本数据，尽管它里面包含复杂的含义和嵌套节点逻辑，但是对于浏览器，babel 或者 vue 来说，输入的就是一个长字符串，显然，纯粹的一个字符串是表示不出来啥含义，那么就需要转换成结构化的数据，能够清晰的表达每一节点是干嘛的。字符串的处理，自然而然就是强大的正则表达式了  
# Step1 回顾正则表达式
- ^ 匹配一个输入或一行的开头，/^a/匹配"ab"，而不匹配"ba"
- /匹配"ba"，而不匹配"ab"
- `*`匹配前面元字符0次或多次，/ab*/将匹配a,ab,abb,abbb
- `+`匹配前面元字符1次或多次，/ab+/将匹配ab,abb,但是不匹配a
- [ab] 字符集匹配，匹配这个集合中的任一一个字符(或元字符)，/[ab]/将匹配a,b,ab
- \w 组成单词匹配，匹配字母，数字，下划线，等于[a-zA-Z0-9]
# Step2 匹配标签
## 标签元素  
`<div>德玛西亚！！！</div>`    
这个字符串用正则描述大致如下：  
  
  以 < 开头 跟着 div 字符，然后接着 > ，然后是中文 “德玛西亚！！”，再跟着 </ ，然后继续是元素 div 最后已 > 结尾。  
  
  `const ncname = '[a-zA-Z_][\w-.]*'`  
  
  组合起来：  
   
    `<${ncname}></${ncname}>`  

    标签内可以是任意字符，那么任意字符如何描述呢？  
    \s 匹配一个空白字符 \S 匹配一个非空白字符 \w 是字母数字数字下划线  
    \W 是非\w的 
    同理还有\d和\D等。  
    我们通常采用\s和\S来描述任何字符（1、通用，2、规则简单，利于正则匹配  
    
    `<${ncname}>[\s\S]*</${ncname}>`
## 标签属性  
    html标签上的属性名称有哪些呢，常见的有class,id,style,data-属性，当然也可以用户随便定义。但是属性名称我们也需要遵循原则，通常是用字母、下划线、冒号开头(vue的绑定属性用:开头)的，然后包含字母数字下划线中划线冒号和点的  
     `const attrKey = /[a-zA-Z_:][-a-zA-Z0-9_:.]*/`  
     html的属性的写法目前有以下几种：  
     - `class="title"`  
     - `class='title'`  
     - `class=title`  
    
```javascript
const attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)=("([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/
```   
     -  ” 开头 跟着多个不是 " 的字符，然后跟着 ” 结尾
     - ' 开头 跟着多个不是 ‘ 的字符，然后跟着 ' 结尾
     -    不是（空格，”，’,=,<,>）的多个字符  
## 总结  
 ```javascript
  /<[a-zA-Z_][\w\-\.]*(?:\s+([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))*>[\s\S]*<\/[a-zA-Z_][\w\-\.]*>/
```
# Step3 Code
      
  - 标签的起始
  - 标签内的内容
  - 标签的结束
```javascript
const DOM = /<[a-zA-Z_][\w\-\.]*(?:\s+([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))*>[\s\S]*<\/[a-zA-Z_][\w\-\.]*>/;
// 增加()分组输出
const startTag = /<([a-zA-Z_][\w\-\.]*)((?:\s+([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))*)\s*(\/?)>/;

const endTag = /<\/([a-zA-Z_][\w\-\.]*)>/;

const attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g
```  

# 分解  
我们尝试分解一段html ：   

``'<div class="classAttr" data-type="dataType" data-id="dataId" style="color:red">我是外层div<span>我是内层span</span></div>';
``  
  
  先声明一个根节点 用来存储解析完成的html  
  `const results = {
           node: "root",
           child: []
       };`    
         
 一个用来存储未完成匹配的数组  
       `    const bufArray = [];
`  

  判断html是否是起始标签，先用indexOf判断  
  `html.indexOf("<") == 0`  
  
  然后用我们前面的正则匹配  
  `            match = html.match(startTag);
`      

startTag分组输出，数组第一个为标签的起始到结束,结果如下：
`<div class="classAttr" data-type="dataType" data-id="dataId" style="color:red">`    

删除处理过后的html  
`html.substring(match[0].length);`    

格式化起始标签  
`                match[0].replace(startTag, parseStartTag);
`    

解析起始标签parseStartTag,parseStartTag的核心内容是通过正则attr，分组解析标签的attr  
`        rest.replace(attr, function(match, name) {
todo 
}`    

判断结束标签跟开始标签流程差不多，结束以后要判断倒序查找匹配到的第一个标签
``for (pos = bufArray.length - 1; pos >= 0; pos--) {
         if (bufArray[pos].tag == tagName) {
             break;
         }
 }``  
         
完整代码：[github](https://github.com/guanxiaolong/codesource/blob/master/ast/ast.js)

