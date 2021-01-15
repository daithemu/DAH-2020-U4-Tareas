import { Component } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public myForm:FormGroup;
  public student:Estudiante;
  
  constructor(private studentService:EstudianteService, private fb:FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group( {
        name:["",[Validators.required,Validators.minLength(3),Validators.maxLength(150)]],
        controlnumber:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        curp:["",Validators.required],
          //Validators.pattern(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$ /)]],
        age:[0,[Validators.min(4),Validators.required]],
        active:[false]//,Validators.requiredTrue
  });
 }

 create(){
  this.student = {
    name:this.myForm.controls.name.value,
    controlnumber:this.myForm.controls.controlnumber.value,
    age: this.myForm.controls.age.value,
    curp: this.myForm.controls.curp.value,
    active: this.myForm.controls.active.value,
  }

  this.studentService.createStudent(this.student);
}

}
