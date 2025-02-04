import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ApiService } from './api.service';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule si tu servicio depende de Ionic
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  // Si tu servicio usa autenticación de Firebase
import { AngularFireModule } from '@angular/fire/compat';  // Si tu servicio usa Firebase en general
import { environment } from 'src/environments/environment';  // Importa la configuración de Firebase

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,  // Asegúrate de importar HttpClientModule
        IonicModule.forRoot(),  // Si el servicio usa Ionic, asegúrate de importarlo
        AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializa Firebase con la configuración
        AngularFireAuthModule  // Importa AngularFireAuthModule si usas autenticación de Firebase
      ],
      providers: [ApiService],  // Asegúrate de que ApiService esté disponible en las pruebas
    });
    service = TestBed.inject(ApiService);  // Inyecta ApiService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica que ApiService se haya creado correctamente
  });
});