import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalPage } from './principal.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Módulo de autenticación de Firebase
import { AngularFireModule } from '@angular/fire/compat'; // Inicialización de Firebase
import { environment } from 'src/environments/environment'; // Configuración de Firebase
import { IonicModule } from '@ionic/angular'; // Inicialización de Ionic
import { ActivatedRoute } from '@angular/router'; // Mock de ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Simulación de HttpClient para pruebas
import { ApiService } from 'src/app/service/api.service'; // Servicio a mockear
import { of } from 'rxjs'; // Observable simulado

describe('PrincipalPage', () => {
  let component: PrincipalPage;
  let fixture: ComponentFixture<PrincipalPage>;

  // Mock para ActivatedRoute
  const activatedRouteMock = {
    queryParams: of({ email: 'test@example.com' }) // Simula un query param
  };

  // Mock para ApiService
  const apiServiceMock = {
    getData: jasmine.createSpy('getData').and.returnValue(of([])), // Simula un observable vacío
    postData: jasmine.createSpy('postData').and.returnValue(of({ success: true })) // Simula una respuesta de éxito
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(), // Inicialización de componentes de Ionic
        AngularFireModule.initializeApp(environment.firebaseConfig), // Configuración de Firebase
        AngularFireAuthModule, // Módulo de autenticación de Firebase
        HttpClientTestingModule, // Simulación de HttpClient
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Mock de ActivatedRoute
        { provide: ApiService, useValue: apiServiceMock }, // Mock de ApiService
      ],
      declarations: [PrincipalPage], // Declara el componente
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});