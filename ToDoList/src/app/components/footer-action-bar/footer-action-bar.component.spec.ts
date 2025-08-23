import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterActionBarComponent } from './footer-action-bar.component';

describe('FooterActionBarComponent', () => {
  let component: FooterActionBarComponent;
  let fixture: ComponentFixture<FooterActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterActionBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
