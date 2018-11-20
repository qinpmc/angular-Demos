import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormArray,FormBuilder} from '@angular/forms';
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
      username:[''],
      mobile:[''],
      pwdGroup:fb.group({
        password:[''],
        passwordConfirm:['']
      })
    })
  }


  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel.value)
  }
}
