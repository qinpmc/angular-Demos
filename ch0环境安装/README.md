###1. 安装node（npm）；

###2. 安装 angular cli：
npm install -g @angular/cli
验证： ng  v

###3. 创建项目
ng new 项目名

（ng new 项目名 --routing 生成带有路由的项目）

###4. 项目文件结构

  e2e :
  
  
###5.引入 jquery/bootstrap
- 安装jquery/bootstrap npm install jquery --save        
 npm install bootstrap --save   
 --save: 将依赖计入到package.json中    
安装指定版本的bootstrap:npm install bootstrap@3.3.7 --save      


- angular.json 文件中（angular4中为angular-cli.json ），加入：

"styles": [
  "src/styles.css",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "./node_modules/jquery/dist/jquery.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
- 安装类型描述文件 npm install @types/jquery npm install @types/bootstrap

###6. 生成组件 ng generate component product 

（ng g component product）