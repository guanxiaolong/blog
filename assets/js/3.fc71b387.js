(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{318:function(t,a,s){},352:function(t,a,s){t.exports=s.p+"assets/img/canvap_fp.9d086aeb.png"},353:function(t,a,s){"use strict";var n=s(318);s.n(n).a},365:function(t,a,s){"use strict";s.r(a);s(353);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"浏览器指纹识别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器指纹识别"}},[t._v("#")]),t._v(" "),n("center",[t._v("浏览器指纹识别")])],1),t._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("p",[t._v("通过浏览器的各种信息，如系统字体、屏幕分辨率、浏览器插件，无需 cookie 等技术，就能近乎绝对定位一个用户，就算使用浏览器的隐私窗口模式，也无法匿名。这是一个被动的识别方式。也就是说，理论上你访问了某一个网站，那么这个网站就能识别到你，虽然不知道你是谁，但你有一个唯一的指纹，将来无论是广告投放、精准推送，还是其他一些关于隐私的事情，都非常方便")]),t._v(" "),n("h2",{attrs:{id:"三个阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三个阶段"}},[t._v("#")]),t._v(" 三个阶段")]),t._v(" "),n("p",[t._v("理海大学曾发表论文（"),n("a",{attrs:{href:"http://yinzhicao.org/TrackingFree/crossbrowsertracking_NDSS17.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v(" (Cross-)Browser Fingerprinting via OS and Hardware Level Features "),n("OutboundLink")],1),t._v("），将浏览器指纹识别分为三个阶段")]),t._v(" "),n("p",[t._v("1.cookie在客户端设置标志的追踪技术"),n("br"),t._v("\n2.通过设备信息（操作系统、分辨率、像素比），综合起来生成ID"),n("br"),t._v("\n3.人的习惯、人的行为等等来对人进行归并")]),t._v(" "),n("p",[t._v("目前大多数应用使用的是通过设备信息来实现指纹，如12306使用Canvas技术")]),t._v(" "),n("h2",{attrs:{id:"canvas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas"}},[t._v("#")]),t._v(" Canvas")]),t._v(" "),n("p",[t._v("相同的HTML5 Canvas元素绘制操作，在不同操作系统、不同浏览器上，产生的图片内容不完全相同。在图片格式上，不同浏览器使用了不同的图形处理引擎、不同的图片导出选项、不同的默认压缩级别等。在像素级别来看，操作系统各自使用了不同的设置和算法来进行抗锯齿和子像素渲染操作。即使相同的绘图操作，产生的图片数据的CRC(循环冗余效验)检验也不相同。\n基于Canvas标签绘制特定内容的图片，使用canvas.toDataURL()方法获得图片内容的base64编码（对于PNG格式的图片，以块(chunk)划分，最后一块是32位CRC校验）作为唯一性标识。")]),t._v(" "),n("p",[t._v("首先我们需要一个ASCII 字符的字符串转换为十六进制值的方案")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function bin2hex(s) {\n    var i, l, o = '',\n        n;  \n        \n    s += '';\n\n    for (i = 0, l = s.length; i < l; i++) {\n        n = s.charCodeAt(i)\n            .toString(16);\n        o += n.length < 2 ? '0' + n : n;\n    }\n\n    return o;\n}\n")])])]),n("p",[t._v("然后页面上写一个canvas，注意不能没有大小的的canvas，宽度和高度不能为0，可以对canvas进行一些绘制")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" canvas "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myCanvas"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" txt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demaxiya'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textBaseline "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"14px 'Arial'\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#f60"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("125")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("62")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#069"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillText")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rgba(102, 204, 0, 0.7)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillText")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b64 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDataURL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data:image/png;base64,"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("atob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解码使用 base-64 编码的字符串")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" crc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bin2hex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ASCII字符的字符串转换为六进制值的字符串")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" crc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(352),alt:"avatar"}})]),t._v(" "),n("h2",{attrs:{id:"audiocontext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#audiocontext"}},[t._v("#")]),t._v(" Audiocontext")]),t._v(" "),n("p",[t._v("Audio API则让开发者有能力在代码中直接操作原始的音频流数据，对其进行任意生成、加工、再造，诸如提高音色，改变音调，音频分割等多种操作\n主机或浏览器硬件或软件的细微差别，导致音频信号的处理上的差异，相同器上的同款浏览器产生相同的音频输出，不同机器或不同浏览器产生的音频输出会存在差异。\n从上可以看出AudioContext和Canvas指纹原理很类似，都是利用硬件或软件的差异，前者生成音频，后者生成图片，然后计算得到不同哈希值来作为标识"),n("br"),t._v("\n生成音频信息流(三角波)，对其进行FFT变换，计算SHA值作为指纹，音频输出到音频设备之前进行清除，用户毫无察觉。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/guanxiaolong/codesource/blob/master/fp/js/audio.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("指纹识别源码"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);