import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;
  public student:Estudiante;

  constructor(
    private fb:FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private LoadingController: LoadingController) {
    
   }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['dani@hotmail.com', [Validators.required, Validators.email]],
      password: ['123456dani',[ Validators.required, Validators.minLength(6)]]
      });
  }
 
  async login(){
    const loading = await this.LoadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) =>{
        await loading.dismiss();
        this.router.navigateByUrl('/tabs', { replaceUrl: true } );
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.error,
          buttons: ['ok'],
        });
        await alert.present();

      }
    );
  }
  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  
}
