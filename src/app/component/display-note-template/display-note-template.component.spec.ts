import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoteTemplateComponent } from './display-note-template.component';

describe('DisplayNoteTemplateComponent', () => {
  let component: DisplayNoteTemplateComponent;
  let fixture: ComponentFixture<DisplayNoteTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayNoteTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayNoteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
