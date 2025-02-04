import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarpassPage } from './recuperarpass.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importa AngularFireAuthModule para autenticación
import { AngularFireModule } from '@angular/fire/compat'; // Importa AngularFireModule para la configuración de Firebase
import { environment } from 'src/environments/environment'; // Importa la configuración de Firebase

describe('RecuperarpassPage', () => {
  let component: RecuperarpassPage;
  let fixture: ComponentFixture<RecuperarpassPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),  // Si el componente usa Ionic, se debe importar IonicModule
        AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializa Firebase con la configuración de tu entorno
        AngularFireAuthModule  // Si tu servicio usa Firebase Auth, asegúrate de importar este módulo
      ],
      declarations: [RecuperarpassPage] // Declara el componente que estás probando
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente se haya creado correctamente
  });
});