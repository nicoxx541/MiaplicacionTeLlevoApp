import { NavigationExtras, Router } from '@angular/router';
import { FirebaseService } from './../../service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email = "ad.najera@duocuc.cl"
  password = "MeSa0799ASD"
  tokenID:any= "";

  constructor(private firebase:FirebaseService, private router:Router, private alertcontroller:AlertController, private storage:StorageService) { }

  ngOnInit() {
  }

  async login(){
    try {
        let usuario= await this.firebase.auth(this.email, this.password);
        this.tokenID=await usuario.user?.getIdToken();
        console.log(usuario);
        console.log("tokenID", await usuario.user?.getIdToken());
        const NavigationExtras:NavigationExtras = {
          queryParams:{email: this.email}
        };
        this.pruebaStorage();
        this.router.navigate(['/principal'], NavigationExtras);
        }catch (error) {
          console.log(error);
          this.popAlert();
        }
          
  }

  async popAlert(){
    const alert=await this.alertcontroller.create({
      header: 'Error',
      message: "Usuario o contraseña incorrecta",
      buttons: ['OK']
    })
    await alert.present();
  }

  async pruebaStorage(){
    const jsonToken:any={
      token:this.tokenID
    }
    this.storage.agregarStorage(jsonToken);
    console.log(await this.storage.obtenerStorage());
  }
  backgroundImage = 'assets/img/uber1.png';


}
