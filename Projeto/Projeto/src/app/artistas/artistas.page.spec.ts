import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistasPage } from './artistas.page';

describe('ArtistasPage', () => {
  let component: ArtistasPage;
  let fixture: ComponentFixture<ArtistasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
