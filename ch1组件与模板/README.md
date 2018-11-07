##  1.组件

组件支持 内联模板、模板文件 2种

生成内联模板的组件：ng generate component hero -it
生成模板文件的组件：ng generate component hero

### 插值表达式
{{ productTitle}}

括号间的素材是一个模板表达式，Angular 先对它求值，再把它转换成字符串；
表达式可以调用宿主组件的方法，就像下面用的 getVal()；

```
<!-- "The sum of 1 + 1 is not 4" -->
<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}</p>
```
### 模板表达式

{{1 + 1}} 中所包含的模板表达式是 1 + 1;属性绑定,它出现在 = 右侧的引号中

很多 JavaScript 表达式也是合法的模板表达式，但不是全部。

JavaScript 中那些具有或可能引发副作用的表达式是被  **禁止** 的，包括：
 - 赋值 (=, +=, -=, ...)
 - new 运算符
 - 使用 ; 或 , 的链式表达式
 - 自增和自减运算符：++ 和 --
 **和 JavaScript 语 法的其它显著不同包括**：
 - 不支持位运算 | 和 &
 - 具有新的模板表达式运算符，比如 |、?. 和 !。

### 表达式上下文

表达式中的上下文变量是由模板变量、指令的上下文变量（如果有）和组件的成员叠加而成的。
如果你要引用的变量名存在于一个以上的命名空间中，那么，模板变量是最优先的，其次是指令的上下文变量，最后是组件的成员

```
<div *ngFor="let hero of heroes">{{hero.name}}</div>
<input #heroInput> {{heroInput.value}}
```


### 属性绑定

```
//---------bind1.component.html ,以下2种方式均可

<img [src]="imgUrl"  alt="">
<br>
<br>
<img src="{{imgUrl}}"  alt="">


//----------bind1.component.ts

imgUrl:string = "http://placehold.it/400x220";
```

```
<!--
Parser Error: Got interpolation ({{}}) where expression was expected at column 0
in [{{imgUrl}}] in ng:///AppModule/Bind1Component.html@7:19 (

** 错误的绑定方式 **
<input type="text" [value]="{{imgUrl}}">
-->
```

### 事件绑定
语法如下：
<button (click) = "toProductDetail()" >商品详情
<input (input) ="onInputEvent($event)">
<button (click) = "saved =true" >商品详情

```
//----------------bind1.component.html
<input value="HTML-value" (input)="doOnInput($event)">doOnInput事件绑定(比较html-value和 dom-value)


//-------------bind1.component.ts
// dom属性 随输入变化而变化
// html属性 始终为最初的 HTML-value
doOnInput(event){
    console.log("dom属性: ",event.target.value);
    console.log("html属性: ",event.target.getAttribute("value"));
}
```

#### HTML 属性和DOM属性的关系

- 少量HTML属性和DOM属性之间有着1：1的映射，如id。
- 有些HTML属性没有对应的DOM属性，如colspan。
- 有些DOM属性没有对应的HTML属性，如textContent。
- 名字相同，HTML属性和DOM属性也不是同一样东西。
- HTML 属性的值指定了初始值；DOM属性的值表示当前值。 DOM属性的值可以改变；HTML属性的值不能改变。
- 模板绑定是DOM属性和事件来工作的，而不是HTML属性
#### HTML属性绑定
1. 基本HTML属性绑定 <td [attr.colspan] ="tableColspan"> SOmething

2. CSS 类绑定
---全有/全无替换类样式

```
---------------  html  文件
<!--Can't bind to 'colspan' since it isn't a known property of 'td'. ("-->
<!--<table> <tr><td colspan="{{1+1}}">慕课网</td></tr></table>-->

<table> <tr><td [attr.colspan]="size">慕课网</td></tr></table>

<div class ="a" [class]="divClass">
  [class]="divClass"
</div>
<hr>
<div class ="a b" [class.c]="isBig">
  class.c
</div>
<hr>
<div [ngClass] ="divNgClass">
  ngClass
</div>
<hr>
<div [style.color] ="fontColor">
  style.color
</div>
<hr>
<div [style.font-size.em] ="fontSize">
  style.font-size.em
</div>
<hr>
<div [ngStyle] ="ngStyle">


---------------  ts 文件
export class Bind2Component implements OnInit {
  private size:number = 2;
  divClass:string = 'a b c';
  isBig:boolean = false;
  divNgClass:any ={};

  fontColor:string= "blue";
  fontSize:number = 2;
  ngStyle:any = {
    fontSize:"14px",
    textDecoration:"underline"

  }
  constructor() {
    setTimeout(()=>{
      this.isBig = true;
    },2000)
    setTimeout(()=>{
      this.divNgClass = {a:true,b:true};
    },4000)
  }
```

### 双向绑定 [(ngModel)]

```
------------------ html 文件
<input [(ngModel)] = "ngModelName">{{ngModelName}}

------------------------------ ts 文件
//需在module（app.module.ts）中引入FormsModule

import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    FormsModule
 ],

```


### 模板引用变量 #

```
---------------------- html 文件
<input #myInput type="text" (keyup)="onKey(myInput.value)">

---------------------- ts文件
onKey(value){
	console.log(value);
}

```

注意： **可以在模板中的任何地方引用模板引用变量，比如声明在 上的 phone 变量就是在模板另一侧的 上使用的**

```
<input #phone placeholder="phone number">

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button (click)="callPhone(phone.value)">Call</button>

```



