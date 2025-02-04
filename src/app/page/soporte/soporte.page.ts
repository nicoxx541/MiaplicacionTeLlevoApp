import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'email' de la URL de manera segura
    this.route.queryParams.subscribe(params => {
      if (params && params['email']) {
        this.email = params['email']; // Usar la notación de índice para acceder al parámetro
      }
    });
  }

  // Método para redirigir al soporte
  contactarSoporte() {
    // Aquí se abre el correo predeterminado para enviar un email
    window.location.href = `mailto:soporte@tellevoapp.com`;
  }
}
