# 表单

类名    |   指令
FormGroup    | formGroup   | formGroupName
FormControl  |formControl  | formControlName
FormArray    |             | formArrayName

- FormControl：表单基本单位

```
username:FormControl = new FormControl("qq");// username 初始值为qq，也可以不传递初始值    
```

formGroup,formControl采用 [] 属性绑定    
如：    
<form [formGroup]="formModel" (submit)="onSubmit()">     
formGroup 中不能包含 FormControl   


- FormGroup：表单一部分或全部表单

```
<form [formGroup]="formModel" (submit)="onSubmit()">  
  ....
</form>
```


- FormArray
类似FormGroup，但多一个length属性；一般用于表示可以增长的字段集合，而FormGroup表示固定的字段集合(from ,to)

```
 formModel:FormGroup = new FormGroup({
    username: new FormControl("aaa"),
    dateRange:new FormGroup({
      from:new FormControl(),
      to:new FormControl()
    }),
    emails:new FormArray([
      new FormControl("ee11@a.com"),
      new FormControl("ee22@b.com")
    ])
  })
```

 
formGroupName/formControlName/formArrayName 只指定名称即可，只能用在FormGroup范围内    
如：   

```
<form [formGroup]="formModel" (submit)="onSubmit()">
    <input formControlName="username">
     ...
</form>
```


- FormBuilder

```
 formModel:FormGroup;
  /*constructor() {
    this.formModel = new FormGroup({
      username:new FormControl(),
      mobile:new FormControl(),
      pwdGroup:new FormGroup({
        password:new FormControl(),
        passwordConfirm:new FormControl()
      })
    })
  }*/
  constructor(fb:FormBuilder){
    this.formModel =fb.group({
      username:[''],
      mobile:[''],
      pwdGroup:fb.group({
        password:[''],
        passwordConfirm:['']
      })
    })
  }
```
 