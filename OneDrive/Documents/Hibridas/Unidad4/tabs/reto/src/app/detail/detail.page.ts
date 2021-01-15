import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ToastController} from "@ionic/angular";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  //student: any;

  // constructor( private actroute: ActivatedRoute, private router: Router) {
  //   this.actroute.queryParams.subscribe(
  //   params => {
  //     this.student = JSON.parse(params.special);
  //   }
  //   );
  // }
  
  student: Estudiante;

   constructor(private service: EstudianteService,
               private actroute: ActivatedRoute,
               private router: Router,
               private toast: ToastController) {

                 this.actroute.queryParams.subscribe(
                  params => {
                     if(params && params.special){
                       this.student = JSON.parse(params.special) as Estudiante;
                      console.log(this.student);
                     }
                 }
                );
              }
  ngOnInit() {
  }

}
