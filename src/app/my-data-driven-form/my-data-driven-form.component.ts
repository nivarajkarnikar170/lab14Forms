import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormControlName, FormArray, Validators} from '@angular/forms';
import { Observable } from "rxjs/Rx";
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-my-data-driven-form',
  templateUrl: './my-data-driven-form.component.html',
  styleUrls: ['./my-data-driven-form.component.css']
})
export class MyDataDrivenFormComponent implements OnInit {

  myForm : FormGroup;
  constructor(private fb: FormBuilder, private myService: MyServiceService) { 
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required]],
      'post': ['', Validators.compose([Validators.required,Validators.minLength(10)])]
    })
  }

  postValidator(control: FormControl){
    //if(control.value)
    console.log(control.value);
    return null;
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

  onGetData(){
    this.myService.getUser().subscribe(data =>{ 
      console.log(data.json());
      this.myForm.controls['name'].setValue(data.json().name);
      this.myForm.controls['email'].setValue(data.json().email);
    });

    this.myService.getPost().subscribe(data=>{
        
        let user = data.json();
        this.myForm.controls['post'].setValue(user[0].body);

      });
  }

  ngOnInit() {
  }

}
