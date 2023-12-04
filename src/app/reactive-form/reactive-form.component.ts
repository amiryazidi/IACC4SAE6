import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  login = new FormControl('',Validators.required);
  password = new FormControl('',[Validators.required, Validators.pattern('[a-z-A-Z]+')])

  registerForm!:FormGroup;
  formBuider:any;
  constructor(private fb :FormBuilder){}
  ngOnInit(){

    this.formBuider=this.fb.group(
      {firstname: ['',[Validators.required,Validators.minLength(3)]],
       lastname: ['',Validators.required],
      adress: new FormGroup({
        street:new FormControl(''),
        city:new FormControl(''),
      })
    })



    this.registerForm=new FormGroup(
      {firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
       lastname: new FormControl('',Validators.required),
      adress: new FormGroup({
        street:new FormControl(''),
        city:new FormControl(''),
      })
    })
  }
  onSubmit(){
    console.log(this.registerForm.value);
  }
  reset(){
    this.registerForm.reset();
  }
}
