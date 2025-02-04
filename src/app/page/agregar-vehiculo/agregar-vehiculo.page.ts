import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/home/models/usuario';
import { ApiService } from 'src/app/service/api.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.page.html',
  styleUrls: ['./agregar-vehiculo.page.scss'],
})
export class AgregarVehiculoPage implements OnInit {
  
  email: string = "";
  usuario: UserModel[] = [];
  patente: string = "";
  marca: string = "";
  modelo: string = "";
  anio: number = 0;
  color: string = "";
  tipo_combustible: string = "";
  archivoImagen: File | null = null;
  token: string = '';

  constructor(private apiservice:ApiService, private storage:StorageService,private activate:ActivatedRoute,private router:Router) {

    this.activate.queryParams.subscribe(params => {
      this.email = params['email'];
      console.log(this.email)
    })
}

ngOnInit() {
  this.cargarUsuario();
  }

  async registrarVehiculo() {
    try {
      if (!this.patente || !this.marca || !this.modelo || !this.anio || !this.color || !this.tipo_combustible || !this.archivoImagen) {
        alert('Por favor, completa todos los campos y selecciona una imagen.');
        return;
      } 
      let dataStorage = await this.storage.obtenerStorage();
      const request = await this.apiservice.agregarVehiculo(
        {
          p_id_usuario: this.usuario[0].id_usuario,
          p_patente: this.patente,
          p_marca: this.marca,
          p_modelo: this.modelo,
          p_anio: this.anio,
          p_color: this.color,
          p_tipo_combustible: this.tipo_combustible,
          token: dataStorage[0].token,
        },
        this.archivoImagen
      );

      if (request.success) {
        alert('Vehículo registrado correctamente');
        this.router.navigateByUrl('principal');
      } else {
        alert('Hubo un problema al registrar el vehículo');
      }
    } catch (error) {
      console.log(error);
      alert('Ocurrió un error. Por favor, intenta nuevamente.');
    }
  }


  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivoImagen = event.target.files[0];
    }
  }

  async cargarUsuario(){
    let dataStorage = await this.storage.obtenerStorage();    
    const req = await this.apiservice.obtenerUsuario(
      {
        p_correo: this.email,
        token:dataStorage[0].token
      }
    );
    this.usuario = req.data;
  }

}


