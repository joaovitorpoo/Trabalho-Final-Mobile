import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastresePage } from './cadastrese.page';

describe('CadastresePage', () => {
  let component: CadastresePage;
  let fixture: ComponentFixture<CadastresePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastresePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastresePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
