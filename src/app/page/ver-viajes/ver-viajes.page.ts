import { UserModel } from 'src/app/home/models/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

import { ApiService } from 'src/app/service/api.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-ver-viajes',
  templateUrl: './ver-viajes.page.html',
  styleUrls: ['./ver-viajes.page.scss'],
})
export class VerViajesPage implements OnInit {

  email: string = '';
  usuario: UserModel[] = []; 
  viajes: any[] = [];

  constructor (
  private activate: ActivatedRoute,
  private storage: StorageService,
  private apiservice: ApiService,
) 
  { this.activate.queryParams.subscribe((params) => {
    this.email = params['email'];
    console.log('Email recibido:', this.email);
    });
  }

  ngOnInit() {
    this.cargarUsuario();
  }
  async cargarUsuario() {
    try {
      const dataStorage = await this.storage.obtenerStorage(); // Obtenemos el token desde el storage
      const req = await this.apiservice.obtenerUsuario({
        p_correo: this.email, // Correo del usuario
        token: dataStorage[0].token, // Token de autenticación
      });

      if (req && req.data) {
        this.usuario = req.data;
        console.log('Usuario cargado:', this.usuario);
        this.cargarViajes();

        // Ahora cargamos los viajes del usuario
      } else {
        console.error('No se encontraron datos del usuario.');
      }
    } catch (error) {
      console.error('Error al cargar usuario:', error);
    }
  }
  async cargarViajes() {
    try {
      const dataStorage = await this.storage.obtenerStorage();
      const req = await this.apiservice.obtenerViaje({
        p_id_usuario: this.usuario[0]?.id_usuario,
        token: dataStorage[0]?.token,
      });
  
      if (req && req.data) {
        this.viajes = req.data;
        console.log('Viajes cargados:', this.viajes);
      } else {
        console.error('No hay viajes disponibles.');
      }
    } catch (error) {
      console.error('Error al cargar viajes:', error);
    }
  }
  
}