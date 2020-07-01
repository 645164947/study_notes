# 函数

### 函数声明

必须以“function”开头。函数名在自身作用域和父作用域内是可获取的。

### 函数表达式

函数表达式不能以“function”开头。函数名在作用域外是不可获取的。

### 三元表达式

```javascript
num1  > num2 ? true : false
```

**函数里面return 后面不执行**

### 函数的返回值

break：结束当前的循环

continue：跳出本次循环，继续执行下次循环

return：不仅可以退出循环，还能够返回return语句中的值，同时结束当前的函数体内的代码

## HTML DOM方法

### prompt() 

prompt() 方法用于显示可提示用户进行输入的对话框。

```javascript
prompt(text,defaultText);
```

| text        | 可选。要在对话框中显示的纯文本（而不是 HTML 格式的文本）。 |
| ----------- | ---------------------------------------------------------- |
| defaultText | 可选。默认的输入文本。                                     |

### alert()

alert() 方法用于显示带有一条指定消息和一个 OK 按钮的警告框。

```javascript
alert(message);
```

## 作用域

在函数中没有定义直接赋值的属于**全局变量**

函数的形参可以看作是**局部变量**

### 作用域链

内部函数访问外部函数的变量采用的是链式查早的方式来决定取哪个值，这种结构我们称之为作用域链

```js
var num = 10;
function a () {
     var num = 20;
     function b () {
         consion.log(num); //20
     }
 }
```



### 预解析

js引擎运行js 分为两步： 预解析 和 代码执行。

预解析分为 **变量预解析**（变量提升）和 **函数预解析**（函数提升）

**变量提升**： 就是把所有的变量声明提升到当前**作用域的最前面** 不进行赋值操作

**函数提升**： 就是把所有的函数声明提升到当前**作用域的最前面** 不进行函数的调用

### 利用 new Object 创建对象

```javascript
var obj = new Object();//创建一个空的对象

obj.uname = '张三'；//添加uname为张山的属性

obj.sayHi = function() {
    console.log("");
}
//调用
obj.uname;
obj['uname'];
obj.sayHi();
```



### 构造函数

构造函数: 是一种特殊的函数，主要用来初始化对象，即使对象，成员变量赋初始值，他总与new与运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

```javascript
function Star(uname, age, sex) {
	this.name = uname;
	this.age = age;
	this.sex = sex;
}
new Stat('张三',18, '男');
```

**构造函数首字母要大写、**

**构造函数不需要return 就返回结果**

### 遍历对象

**for in** 遍历对象用法

```javascript
for  （变量 in 对象） {

}
for (var k in obj) {
    console.log(k)// k 变量 输出 得到的是属性名
    console.log(obj[k])//obj[k] 得到是 属性值
}
```

### 两数之间随机数

```javascript
Math.floor(Math.random() * (max - min +1)) + min;
```

### Data()方法的使用

获取当前时间必须实例化

```javascript
var now = new Date();
console.log(now);
```

**年份 **date.getFullYear();

**月份** date.getMouth() + 1；月份 返回的月份小一个月记得加1。

**日期** date.getDate();

**周数** date.getDay(); //周日是0

#### 时间戳

```javascript
//  通过Date总的毫秒数（时间戳） 不是当前时间的毫秒数 而是距离1970年1月1日过了多少毫秒。
var date = new Date();
console.log(date.valueOf());//valueOf()返回值为该对象的原始值。//同时间戳
console.log(date.getTime());//时间戳
//简单写法 最常见的写法
var date1 = +new Date();//+new Date()返回的就是总的毫秒数
console.log(date1);
//H5 新增 获得总毫秒数
console.log(Date.now());

function cd(time) {
        var nowTime = Date.now();
        var getTime = +new Date(time);
        times = (getTime - nowTime)/1000;
        var d = parseInt(times/60/60/24);
        d = d < 10 ? '0' + d : d ;
        var h =  parseInt(times/60/60%24);
        h = h < 10 ? '0' + h : h ;
        var m =  parseInt(times/60%60);
        m = m < 10 ? '0' + m : m ;
        var s =  parseInt(times%60);
        s = s < 10 ? '0' + s : s ;
        return d +'天'+ h +'时'+ m +'分'+ s +'秒';
   }
   console.log(cd('2020-4-6 0:0:0'));
```

### 检测数组

instanceof 运算符 它可以用来检测是否为数组

```javascript
instanceof Array//返回true/false
```

```javascript
Array.isArray(参数);//返回true/false IE9以上才支持
```

### 添加删除数组

添加

```javascript
arr.push(1,2,3);// 返回结果是数组的长度。
```

```javascript
arr.unshift('前面添加')//前面添加，返回结果也是数组的长度。
```

删除

```javascript
arr.pop();//删除最后一个元素，不带参数，返回值是删除的元素
```

```javascript
arr.shift();//删除第一个元素，不带参数，返回值是删除的元素
```

### 数组排序

翻转数组

```javascript
arr.reverse();
```

冒泡排序

```javascript
arr.sort();//个位数排列。

//需要特殊写法（函数）
arr.sort(function(a,b){
    return a-b;//升序排序
    //
    return b-a;//降序排列
});
```

### 获取数组元素索引

```javascript
//返回方法  indexOf(数组元素)
//只返回第一个满足要求的数组
//如果找不到元素返回-1
arr.indexOf('元素',[起始的位置]);//前往后查找
arr.lastIndexOf('元素')//后往前查找
```

### 数组去重

核心算法：遍历旧数组，拿着旧数组元素去查询新数组，如果这个元素没有出现过，我们就添加进去 。

### 数组转换字符串

```javascript
toString();//将我们的数组转换为字符串，1，2，3逗号分隔
join(分隔符);//数组之间分隔符隔开
```

注意：join方法如果不传入参数，则按照 “ , ”拼接元素

### 数组截取

```javascript
arr.slice([begin[, end]])

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```



### 字符串

截取字符串

```javascript
substr('截取的起始位置',' '截取几个字符');
```

替换

```javascript
str.replace('被替换的字符','替换为的字符');//只替换第一个
```

分隔

```javascript
split('分隔符'); //数组的是join
```

## javaScript高级

### 类的创建

```javascript
class Star {
    //默认函数自动创建
	constructor(){
	
	}
}

var a = new Star('');
```

### 类的继承

**extends**

```javascript
class Son extends Father {
    constructor(){

        }
}
var son = new Son();
```

**super 关键字**用于访问和调用对象父类上的函数。**可以调用父类的构造函数**，也可以调用父类的普通函数。

```javascript
class Son extends Father {
	constructor(){
		super();//调用父类中的构造函数
	}
}
var son = new Son();
super.父类方法()//调用父类的普通方法用法
```

### **三个注意点**：

1. 在ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象

2. 类里面的共有属性和方法一定要加this使用。

3. 类里面的this指向问题

4.  **constructor** 里面的this指向实例对象，**方法里面**的this指向这个方法的调用者

### 正则

```javascript
var rg = /123/
text();//检测字符串是否符合规则，该对象返回true false
rg.text('123');//true

var rg1 = /[abc]/  //只要包含a 或者 包含b 或者 包含 c 都返回true

var rg2 = /^[abc]$/  //三选一 只有是a 或者是b 或者是c 这三个字母才返回true

var rg2 = /^[a-z]$/   // - 链接符  英文 26个任何一个字母返回true
```

#### 字符组合

```javascript
var rg3 = /^[a-zA-Z0-9]$/ //26个英文字母（大小写）任何一个字母返回true
```

#### 特殊字符

```javascript
//^ 中括号里面的 ^ 表示取反
var rg3 = /^[^a-zA-Z0-9]$/

//* 相当于 >= 0 可以出现0次或者很多次
var gr3 = /^[a*]$/

//+ 相当于 >= 1 可以出现1次或者很多次
var gr3 = /^[a+]$/

//? 相当于 1||0  
var gr3 = /^[a+]$/
```

#### 量词符

```javascript
//{3, } 大于等于3

//{3, 16} 大于等于3 小于等于16
```

#### 括号总结

```javascript
//大括号 量词符，里面表示重复次数
var reg = /^abc{3}$/; //只是让C重复三次 abccc

//中括号，字符集合。匹配方括号中的任意字符（多选一）

//小括号 表示优先级
var reg = /^(abc){3}$/; //他是让abc重复三次
```

| 预定类 | 说明                                                        |
| ------ | ----------------------------------------------------------- |
| \d     | 匹配0-9之间的任一数字，相当于［0-9]                         |
| \D     | 匹配所有0-9以外的字符，相当于［＾0-9]                       |
| \w     | 匹配任意的字母，数字和下划线，相当于［A-Za-z0-9_]           |
| \W     | 除所有字母、数字和下划线以外的字符，相当于［＾A-Za-z0-9_]   |
| \s     | 匹配空格（包括换行符、制表符、空格符等），相等于［\t\r\n\f] |
| \S     | 匹配非空格的字符，相当于［＾\t\r\n\v\f]                     |

#### 座机号码验证

```javascript
//正则里面 或者 的符号  |
var reg = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
```

## ES6 ：

**let**  块级作用域标准（只在一个区域有效，外部无法访问），没有变量提升。

```javascript
 if (true) { 
     let a = 10;
 }
console.log(a) // a is not defined

console.log(a); // a is not defined 
let a = 20;
```

**const** 也是具有块级作用域，没有变量提升，对于**简单数据类型**，使用const定义的值不能更改，必须赋予初始值。**复杂数据类型**能对里面的值进行更改，不能重新定义（内存地址不能被改变）。

### 解构赋值

ES6 中允许从数组中提取值，按照对应位置，对变量赋值，对象也可以实现解构。

```javascript
let arr= [1, 2, 3];
let [a, b, c] = arr;

let [a, b, c] = [1, 2, 3];
 console.log(a)//1
 console.log(b)//2
 console.log(c)//3
//如果解构不成功，变量的值为undefined
```

#### 对象解构

```javascript
 let person = { name: 'zhangsan', age: 20 }; 
 let { name, age } = person;
 console.log(name); // 'zhangsan' 
 console.log(age); // 20

 let {name: myName, age: myAge} = person; // myName myAge 属于别名
 console.log(myName); // 'zhangsan' 
 console.log(myAge); // 20

```

### 箭头函数

```javascript
//通常采用一个变量进行赋值
const fn () => {
    
}
//箭头函数就是用来简化函数定义的语法。
() => {}
conost fn = () {}
//如果函数体中只有一句代码，且代码的执行结果就是返回值，函数体大括号可以省略
function sum(n1,n2) {
    return n1 + n2
}
var sum = (n1,n2) => n1+n2
//在箭头函数中，如果形参只有一个 形参外侧的小括号可以省略
function fn(v) {
    return v;
}
const fn = v => v; 
//箭头函数不绑定this 箭头函数没有自己的this关键字，如果箭头函数中使用this，this关键之将指向函数定义位置中的this
```

## ES6 的内置对象扩展

### Array.from方法

```javascript
Array.from();
var arrayLike = {
    "0": "张三",
    "1": "李四", 
    "2": "王五",
    "length": 3,
}
//第二个参数是一个函数数组中有多少个元素，这个函数就执行几遍
var arr = Array.from(arrayLike, item => item * 2);
```

### find方法介绍

```javascript
var ary = [
    {
    	id: 1,
        name: '张三'
    },{
        id: 2,
        name: '李四'
 }];
let target = arr.find(item => item.id == 2)//函数执行完传给target值
```

### findindex方法

```javascript
let arr = [10,20,30];
let index = arr.findindex(item => item > 10);//返回的索引值
```

### Array的扩展方法

**includes();**

```javascript
[1,2,3].includes(2)//true
[1,2,3].includes(4)//false
```

### Sreing 的扩展方法

**startsWith()**;表示参数字符串是否在源字符串的头部，返回布尔值

**endsWith()**;表示参数字符串是否在源字符串的尾部，返回布尔值

```javascript
let str = "hello world"
str.startsWith('hello')//true
str.endsWith('l')//true
```

### Set 数据结构

```javascript
const s4 = new Set();
//向set结构中添加值 使用add方法
s4.add('a').add('b');
console.log(s4.size)

//从set结构中删除值 用到delete方法
const r1 = s4.delete('c');//返回布尔值
const.log(s4.size);
const.log(r1);

//判断某一个值是否是set数据中的成员 使用has
const r2 = s4.has('a')//返回布尔值
console.log('r2')

//清空set数据结构中的值 使用clear
s4.clear();
console.log(s4.size);

遍历set数据结构 从中取值
const s5 = new Set(['a','b','c']);
s5.forEach(value => console.log(value));
```

