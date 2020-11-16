# 多异步回调等待结果

## 嵌套回调
假设我们有两个接口  

`const api1 = 'www.baidu.com/api1'

 const api2 = 'www.baidu.com/api2'`
 
 使用JQ嵌套回调：  
 ```
 $.ajax({  
         url:api1,
         success:(res)=>{
             $.ajax({
                 url: api2,
                 success:(res1)=>{
                     console.log(res);
                     console.log(res1);
                 }
             })
         }
     })
 ```
 优点是简单，缺点是容易引发回调地狱。  
 ## 回调集合
 假设我们有两个请求，命名为getAjax1，getAjax2  
 ```javascript 1.6
let getAjax1 = (param,callback)=>{
    $.ajax({
        url: param.url,
        success:(res1)=>{
            callback && callback(res1)
        }
    })
}

let getAjax2 = (param,callback)=>{
    $.ajax({
        url: param.url,
        success:(res2)=>{
            callback && callback(res2)
        }
    })
}
```
然后写一个入口方法getAjaxData  
```javascript 1.6
function getAjaxData() {
    let res1,res2;
    function end() {
        if(res1 && res2){ //res1和res2都被赋值了
            //所有结果都返回
        }
    }
    let param1 = { //getAjax1所需要的参数
        url: api1,
        data: {}
    }
    getAjax1(param1,res=>{
        res1 = res //将异步请求的结果赋值给res1 
        end()   //执行end
    })

    let param2 = {//getAjax2所需要的参数
        url: api2,
        data: {}
    }
    getAjax2(param1,res=>{
        res2 = res //将异步请求的结果赋值给res2
        end()  //执行end
    })
}
```  
当两个请求都返回了结果，赋值给res1和res2，异步全部执行完成  
## promise
使用promise.all 或者 promise.race
定义一个wake方法，接收一个延时参数  
```javascript 1.6
let wake = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${time / 1000}秒后醒来`)
        }, time)
    })
}
```  
使用promise.all  
```javascript 1.6
let p1 = wake(3000)
let p2 = wake(2000)

Promise.all([p1, p2]).then((result) => {
    console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
}).catch((error) => {
    console.log(error)
})

```  
注意有失败的情况，会直接catch，终止请求
