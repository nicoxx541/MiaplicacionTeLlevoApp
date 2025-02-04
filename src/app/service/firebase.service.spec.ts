import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  // Asegúrate de importar AngularFireAuthModule
import { AngularFireModule } from '@angular/fire/compat';  // Asegúrate de importar AngularFireModule
import { environment } from 'src/environments/environment';  // Importa la configuración de Firebase

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),  // Configura Firebase con la configuración de tu entorno
        AngularFireAuthModule  // Asegúrate de que este módulo esté importado para que FirebaseAuth funcione
      ],
      providers: [FirebaseService],  // Asegúrate de que el servicio esté disponible
    });
    service = TestBed.inject(FirebaseService);  // Inyecta FirebaseService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica que FirebaseService se haya creado correctamente
  });
});