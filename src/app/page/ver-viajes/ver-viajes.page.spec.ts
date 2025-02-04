import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerViajesPage } from './ver-viajes.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Usa HttpClientTestingModule para pruebas
import { ApiService } from 'src/app/service/api.service'; // Importa ApiService

describe('VerViajesPage', () => {
  let component: VerViajesPage;
  let fixture: ComponentFixture<VerViajesPage>;

  // Mock para ActivatedRoute
  const activatedRouteMock = {
    paramMap: of({
      get: (key: string) => {
        if (key === 'id') return 'mock-id'; // Simula el parámetro dinámico 'id'
        return null;
      }
    }),
    queryParams: of({ search: 'mock-query' }) // Simula parámetros de consulta
  };

  // Mock para ApiService
  const apiServiceMock = {
    getViajes: jasmine.createSpy('getViajes').and.returnValue(of([{ id: 1, name: 'Viaje de prueba' }])), // Simula un observable con datos
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),         // Inicializa componentes de Ionic
        HttpClientTestingModule,       // Simula HttpClient para pruebas
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Mock de ActivatedRoute
        { provide: ApiService, useValue: apiServiceMock },         // Mock de ApiService
      ],
      declarations: [VerViajesPage],   // Declara el componente
    }).compileComponents();

    fixture = TestBed.createComponent(VerViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();           // Detecta cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy();    // Verifica que el componente se haya creado correctamente
  });
});