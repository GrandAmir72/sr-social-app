import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostListComponent } from './all-post-list.component';

describe('AllPostListComponent', () => {
  let component: AllPostListComponent;
  let fixture: ComponentFixture<AllPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
