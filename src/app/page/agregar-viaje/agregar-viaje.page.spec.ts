import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarViajePage } from './agregar-viaje.page';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Usa HttpClientTestingModule
import { ApiService } from 'src/app/service/api.service';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AgregarViajePage', () => {
  let component: AgregarViajePage;
  let fixture: ComponentFixture<AgregarViajePage>;

  // Mock para ActivatedRoute
  const activatedRouteMock = {
    paramMap: of({
      get: (key: string) => {
        if (key === 'id') return 'mock-id'; // Simula el parámetro 'id'
        return null;
      }
    }),
    queryParams: of({ filter: 'mock-filter' }) // Simula parámetros de consulta si son usados
  };

  // Mock para ApiService
  const apiServiceMock = {
    getViajes: jasmine.createSpy('getViajes').and.returnValue(of([])), // Simula un observable vacío
    createViaje: jasmine.createSpy('createViaje').and.returnValue(of({ success: true })) // Simula creación exitosa
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(), // Inicializa componentes de Ionic
        HttpClientTestingModule, // Simula HttpClient
        AngularFireModule.initializeApp(environment.firebaseConfig), // Configuración de Firebase
        AngularFireAuthModule // Módulo de autenticación de Firebase
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock }, // Mock de ApiService
        { provide: ActivatedRoute, useValue: activatedRouteMock } // Mock de ActivatedRoute
      ],
      declarations: [AgregarViajePage] // Declara el componente
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});