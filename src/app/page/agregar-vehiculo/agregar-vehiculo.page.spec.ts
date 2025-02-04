import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarVehiculoPage } from './agregar-vehiculo.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { RouterTestingModule } from '@angular/router/testing';  // Si usas routing en el componente

describe('AgregarVehiculoPage', () => {
  let component: AgregarVehiculoPage;
  let fixture: ComponentFixture<AgregarVehiculoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,  // Importa el módulo HttpClientModule
        RouterTestingModule  // Importa si estás usando enrutamiento en el componente
      ],
      declarations: [ AgregarVehiculoPage ],
      providers: [ ApiService ]  // Proveedor del ApiService si es necesario
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
