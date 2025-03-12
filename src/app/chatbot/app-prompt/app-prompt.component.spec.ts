import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPromptComponent } from './app-prompt.component';

describe('AppPromptComponent', () => {
  let component: AppPromptComponent;
  let fixture: ComponentFixture<AppPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
