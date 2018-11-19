# 表单

类名    |   指令
FormGroup    | formGroup   | formGroupName
FormControl  |formControl  | formControlName
FormArray    |             | formArrayName

formGroup,formControl采用 [] 属性绑定    
如：    
<form [formGroup]="formModel" (submit)="onSubmit()">     
formGroup 中不能包含 FormControl

formGroupName/formControlName/formArrayName 只指定名称即可，只能用在FormGroup范围内    
如：   
<input formControlName="username">