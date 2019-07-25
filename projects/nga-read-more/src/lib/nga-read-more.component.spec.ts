import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaReadMoreComponent } from './nga-read-more.component';

describe('NgaReadMoreComponent', () => {
  let component: NgaReadMoreComponent;
  let fixture: ComponentFixture<NgaReadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgaReadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgaReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
