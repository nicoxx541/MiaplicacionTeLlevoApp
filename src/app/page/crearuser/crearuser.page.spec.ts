import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearuserPage } from './crearuser.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment'; // Asegúrate de tener esta importación para usar la configuración de Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ApiService } from 'src/app/service/api.service';  // Importa ApiService
import { IonicModule } from '@ionic/angular';  // Importa IonicModule si usas Ionic

describe('CrearuserPage', () => {
  let component: CrearuserPage;
  let fixture: ComponentFixture<CrearuserPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializa Firebase con la configuración
        AngularFireAuthModule,  // Importa AngularFireAuthModule para la autenticación
        HttpClientModule,  // Importa HttpClientModule para la funcionalidad de HTTP
        IonicModule.forRoot()  // Si tu componente depende de Ionic, asegúrate de importarlo
      ],
      declarations: [CrearuserPage],  // Declara el componente que estás probando
      providers: [ApiService]  // Asegúrate de proporcionar ApiService en el entorno de pruebas
    }).compileComponents();

    fixture = TestBed.createComponent(CrearuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente se haya creado correctamente
  });
});