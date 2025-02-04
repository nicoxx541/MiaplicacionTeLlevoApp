import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerVehiculosPage } from './ver-vehiculos.page';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { of } from 'rxjs'; // Usamos 'of' para simular valores
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Usamos HttpClientTestingModule
import { ApiService } from 'src/app/service/api.service'; // Importa ApiService

describe('VerVehiculosPage', () => {
  let component: VerVehiculosPage;
  let fixture: ComponentFixture<VerVehiculosPage>;

  // Mock para ActivatedRoute
  const activatedRouteMock = {
    paramMap: of({
      get: (key: string) => {
        if (key === 'id') return '1'; // Simula el parámetro 'id'
        return null;
      }
    }),
    queryParams: of({ search: 'mock-query' }), // Simula parámetros de consulta
  };

  // Mock para ApiService
  const apiServiceMock = {
    getVehiculos: jasmine.createSpy('getVehiculos').and.returnValue(of([{ id: 1, name: 'Vehículo de prueba' }])), // Simula un observable con datos
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerVehiculosPage], // Declara el componente
      imports: [
        IonicModule.forRoot(), // Inicializa Ionic
        HttpClientTestingModule, // Simula HttpClient
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Mock de ActivatedRoute
        { provide: ApiService, useValue: apiServiceMock }, // Mock de ApiService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VerVehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});