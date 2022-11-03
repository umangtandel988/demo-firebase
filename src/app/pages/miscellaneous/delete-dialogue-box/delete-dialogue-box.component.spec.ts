import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogueBoxComponent } from './delete-dialogue-box.component';

describe('DeleteDialogueBoxComponent', () => {
  let component: DeleteDialogueBoxComponent;
  let fixture: ComponentFixture<DeleteDialogueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogueBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
