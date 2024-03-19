import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAppComponentComponent } from './google-app-component.component';

describe('GoogleAppComponentComponent', () => {
  let component: GoogleAppComponentComponent;
  let fixture: ComponentFixture<GoogleAppComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAppComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
