import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializa Firebase con la configuración
        AngularFireAuthModule,  // Importa AngularFireAuthModule para autenticación
      ],
      providers: [StorageService]  // Asegura que el servicio de Storage se incluya
    });
    service = TestBed.inject(StorageService);  // Inyecta el servicio
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica que el servicio sea creado correctamente
  });
});
