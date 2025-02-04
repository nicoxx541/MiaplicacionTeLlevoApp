import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestapiPage } from './testapi.page';
import { TestapiPageRoutingModule } from './testapi-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { IonicModule } from '@ionic/angular';

describe('TestapiPage', () => {
  let component: TestapiPage;
  let fixture: ComponentFixture<TestapiPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        TestapiPageRoutingModule  // Agregado si usa rutas
      ],
      providers: [ApiService],
      declarations: [TestapiPage]
    }).compileComponents();

    fixture = TestBed.createComponent(TestapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
