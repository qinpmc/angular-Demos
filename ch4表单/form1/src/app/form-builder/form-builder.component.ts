import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormArray,FormBuilder,AbstractControl,Validators} from '@angular/forms';
import {Validator} from "codelyzer/walkerFactory/walkerFn";
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
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
      username:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',this.mobileValidate],
      pwdGroup:fb.group({
        password:[''],
        passwordConfirm:['']
      },{validator:this.equalValidate})
    })
  }


  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel.value)
    let isUsernameValid :boolean = this.formModel.get("username").valid;
    console.log(isUsernameValid);
    let errors:any = this.formModel.get("username").errors;
    console.log(errors);

  }
/*  validMyform(control:AbstractControl):{[key:string]:any}{
    return null;
  }*/
  mobileValidate(control:FormControl):any{
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))\d{8})$/;
    let valid = myreg.test(control.value);
    console.log("mobile 校验结果："+valid);
    return valid? null:{mobile:true};
  }

  equalValidate(group:FormGroup):any{
    let pwd:FormControl = group.get("password") as FormControl;
    let passwordConfirm:FormControl = group.get("passwordConfirm") as FormControl;
    let valid:boolean = (pwd.value ===passwordConfirm.value);
    console.log("密码相同验证结果："+valid);
    return valid? null:{equal:true};
  }
}
