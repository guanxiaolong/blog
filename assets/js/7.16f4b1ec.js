(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ast"}},[a._v("#")]),a._v(" AST")]),a._v(" "),s("p",[a._v("字符串转换成 抽象对象语法树AST。")]),a._v(" "),s("h1",{attrs:{id:"如何做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何做"}},[a._v("#")]),a._v(" 如何做")]),a._v(" "),s("p",[a._v("我们知道 html 源码只是一个文本数据，尽管它里面包含复杂的含义和嵌套节点逻辑，但是对于浏览器，babel 或者 vue 来说，输入的就是一个长字符串，显然，纯粹的一个字符串是表示不出来啥含义，那么就需要转换成结构化的数据，能够清晰的表达每一节点是干嘛的。字符串的处理，自然而然就是强大的正则表达式了")]),a._v(" "),s("h1",{attrs:{id:"step1-回顾正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step1-回顾正则表达式"}},[a._v("#")]),a._v(" Step1 回顾正则表达式")]),a._v(" "),s("ul",[s("li",[a._v('^ 匹配一个输入或一行的开头，/^a/匹配"ab"，而不匹配"ba"')]),a._v(" "),s("li",[a._v('/匹配"ba"，而不匹配"ab"')]),a._v(" "),s("li",[s("code",[a._v("*")]),a._v("匹配前面元字符0次或多次，/ab*/将匹配a,ab,abb,abbb")]),a._v(" "),s("li",[s("code",[a._v("+")]),a._v("匹配前面元字符1次或多次，/ab+/将匹配ab,abb,但是不匹配a")]),a._v(" "),s("li",[a._v("[ab] 字符集匹配，匹配这个集合中的任一一个字符(或元字符)，/[ab]/将匹配a,b,ab")]),a._v(" "),s("li",[a._v("\\w 组成单词匹配，匹配字母，数字，下划线，等于[a-zA-Z0-9]")])]),a._v(" "),s("h1",{attrs:{id:"step2-匹配标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step2-匹配标签"}},[a._v("#")]),a._v(" Step2 匹配标签")]),a._v(" "),s("h2",{attrs:{id:"标签元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签元素"}},[a._v("#")]),a._v(" 标签元素")]),a._v(" "),s("p",[s("code",[a._v("<div>德玛西亚！！！</div>")]),s("br"),a._v("\n这个字符串用正则描述大致如下：")]),a._v(" "),s("p",[a._v("以 < 开头 跟着 div 字符，然后接着 > ，然后是中文 “德玛西亚！！”，再跟着 </ ，然后继续是元素 div 最后已 > 结尾。")]),a._v(" "),s("p",[s("code",[a._v("const ncname = '[a-zA-Z_][\\w-.]*'")])]),a._v(" "),s("p",[a._v("组合起来：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("`<${ncname}></${ncname}>`  \n\n标签内可以是任意字符，那么任意字符如何描述呢？  \n\\s 匹配一个空白字符 \\S 匹配一个非空白字符 \\w 是字母数字数字下划线  \n\\W 是非\\w的 \n同理还有\\d和\\D等。  \n我们通常采用\\s和\\S来描述任何字符（1、通用，2、规则简单，利于正则匹配  \n\n`<${ncname}>[\\s\\S]*</${ncname}>`\n")])])]),s("h2",{attrs:{id:"标签属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签属性"}},[a._v("#")]),a._v(" 标签属性")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("html标签上的属性名称有哪些呢，常见的有class,id,style,data-属性，当然也可以用户随便定义。但是属性名称我们也需要遵循原则，通常是用字母、下划线、冒号开头(vue的绑定属性用:开头)的，然后包含字母数字下划线中划线冒号和点的  \n `const attrKey = /[a-zA-Z_:][-a-zA-Z0-9_:.]*/`  \n html的属性的写法目前有以下几种：  \n - `class=\"title\"`  \n - `class='title'`  \n - `class=title`  \n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" attr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/([a-zA-Z_:][-a-zA-Z0-9_:.]*)=(\"([^\"]*)\"|'([^']*)'|([^\\s\"'=<>`]+))/")]),a._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(" -  ” 开头 跟着多个不是 \" 的字符，然后跟着 ” 结尾\n - ' 开头 跟着多个不是 ‘ 的字符，然后跟着 ' 结尾\n -    不是（空格，”，’,=,<,>）的多个字符  \n")])])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/<[a-zA-Z_][\\w\\-\\.]*(?:\\s+([a-zA-Z_:][-a-zA-Z0-9_:.]*)\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s\"'=<>`]+)))*>[\\s\\S]*<\\/[a-zA-Z_][\\w\\-\\.]*>/")]),a._v("\n")])])]),s("h1",{attrs:{id:"step3-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step3-code"}},[a._v("#")]),a._v(" Step3 Code")]),a._v(" "),s("ul",[s("li",[a._v("标签的起始")]),a._v(" "),s("li",[a._v("标签内的内容")]),a._v(" "),s("li",[a._v("标签的结束")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DOM")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/<[a-zA-Z_][\\w\\-\\.]*(?:\\s+([a-zA-Z_:][-a-zA-Z0-9_:.]*)\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s\"'=<>`]+)))*>[\\s\\S]*<\\/[a-zA-Z_][\\w\\-\\.]*>/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 增加()分组输出")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" startTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/<([a-zA-Z_][\\w\\-\\.]*)((?:\\s+([a-zA-Z_:][-a-zA-Z0-9_:.]*)\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s\"'=<>`]+)))*)\\s*(\\/?)>/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" endTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/<\\/([a-zA-Z_][\\w\\-\\.]*)>/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" attr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/([a-zA-Z_:][-a-zA-Z0-9_:.]*)\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s\"'=<>`]+))/g")]),a._v("\n")])])]),s("h1",{attrs:{id:"分解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分解"}},[a._v("#")]),a._v(" 分解")]),a._v(" "),s("p",[a._v("我们尝试分解一段html ：")]),a._v(" "),s("p",[s("code",[a._v('\'<div class="classAttr" data-type="dataType" data-id="dataId" style="color:red">我是外层div<span>我是内层span</span></div>\';')])]),a._v(" "),s("p",[a._v("先声明一个根节点 用来存储解析完成的html"),s("br"),a._v(" "),s("code",[a._v('const results = { node: "root", child: [] };')])]),a._v(" "),s("p",[a._v("一个用来存储未完成匹配的数组"),s("br"),a._v(" "),s("code",[a._v("const bufArray = [];")])]),a._v(" "),s("p",[a._v("判断html是否是起始标签，先用indexOf判断"),s("br"),a._v(" "),s("code",[a._v('html.indexOf("<") == 0')])]),a._v(" "),s("p",[a._v("然后用我们前面的正则匹配"),s("br"),a._v(" "),s("code",[a._v("match = html.match(startTag);")])]),a._v(" "),s("p",[a._v("startTag分组输出，数组第一个为标签的起始到结束,结果如下：\n"),s("code",[a._v('<div class="classAttr" data-type="dataType" data-id="dataId" style="color:red">')])]),a._v(" "),s("p",[a._v("删除处理过后的html"),s("br"),a._v(" "),s("code",[a._v("html.substring(match[0].length);")])]),a._v(" "),s("p",[a._v("格式化起始标签"),s("br"),a._v(" "),s("code",[a._v("match[0].replace(startTag, parseStartTag);")])]),a._v(" "),s("p",[a._v("解析起始标签parseStartTag,parseStartTag的核心内容是通过正则attr，分组解析标签的attr"),s("br"),a._v(" "),s("code",[a._v("rest.replace(attr, function(match, name) { todo }")])]),a._v(" "),s("p",[a._v("判断结束标签跟开始标签流程差不多，结束以后要判断倒序查找匹配到的第一个标签\n"),s("code",[a._v("for (pos = bufArray.length - 1; pos >= 0; pos--) { if (bufArray[pos].tag == tagName) { break; } }")])]),a._v(" "),s("p",[a._v("完整代码："),s("a",{attrs:{href:"https://github.com/guanxiaolong/codesource/blob/master/ast/ast.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("github"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);