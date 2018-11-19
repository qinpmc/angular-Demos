import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormArray} from '@angular/forms';
@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.css']
})
export class ReactiveForm1Component implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel.value);
  }
  addEmail(){
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }
}
