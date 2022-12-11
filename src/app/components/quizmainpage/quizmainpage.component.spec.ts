import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizmainpageComponent } from './quizmainpage.component';

describe('QuizmainpageComponent', () => {
  let component: QuizmainpageComponent;
  let fixture: ComponentFixture<QuizmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizmainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
