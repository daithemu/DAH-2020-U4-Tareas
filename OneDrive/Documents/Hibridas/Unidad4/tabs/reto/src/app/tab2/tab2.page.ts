import { Component } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public student:Estudiante;
  public students: Estudiante[];

  constructor(public service: EstudianteService, private router: Router) {
    this.service.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        } as Estudiante;
      });
    });
  }

  update(student:Estudiante, active:boolean){
    student.active =  active;
    this.service.updateStudent(student, student.name);
  }

  detail(student: Estudiante){
    let navext: NavigationExtras={
      queryParams:{
        special: JSON.stringify(student)
      }
    };
    this.router.navigate(['/detail'], navext);
  }
  
}
