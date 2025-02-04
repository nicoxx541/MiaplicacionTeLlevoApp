import { catchError } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-crearuser',
  templateUrl: './crearuser.page.html',
  styleUrls: ['./crearuser.page.scss'],
})
export class CrearuserPage implements OnInit {

  constructor(
    private firebase:FirebaseService,
    private router:Router,
    private crearuser: ApiService,
    private alertcontroller: AlertController
  ) { }

  nombre: string = '';
  correo_electronico: string = ""; 
  telefono: string = '';
  token: string = '';
  password: string ='';
  
  archivoImagen: File | null = null;

  ngOnInit () {}
  async registrar() {
    if (!this.nombre || !this.correo_electronico || !this.password || !this.telefono) {
      this.popAlert();
      return;
    }

    try{
      let usuario=await this.firebase.registrar(this.correo_electronico,this.password);
      const token = await usuario.user?.getIdToken();
      if (this.archivoImagen) {
        const request = await this.crearuser.agregarUsuario(
        {
          p_correo_electronico: this.correo_electronico,
          p_nombre: this.nombre,
          p_telefono: this.telefono,
          token: token,
        },
        

          this.archivoImagen
        );
        
      }
        console.log(usuario);
        this.router.navigateByUrl("login");
      } catch (error) {
        this.popAlert();
        console.log(error);
      }
  }
  onFileChange(event: any) {
    if(event.target.files.length > 0){
      this.archivoImagen = event.target.files[0];
    }
  }

  async popAlert () {
    const alert = await this.alertcontroller.create({
      header: 'Error',
      message: 'Usuario o Contraseña Incorrecta',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
