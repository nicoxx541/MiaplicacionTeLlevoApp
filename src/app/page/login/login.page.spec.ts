import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importa el módulo de autenticación de Firebase
import { environment } from 'src/environments/environment'; // Importa la configuración de Firebase

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializa Firebase con la configuración de tu archivo environment.ts
        AngularFireAuthModule, // Importa el módulo para autenticación con Firebase
      ],
      declarations: [ LoginPage ], // Declara el componente
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente se cree correctamente
  });
});