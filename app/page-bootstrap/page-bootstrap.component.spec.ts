import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBootstrapComponent } from './page-bootstrap.component';

describe('PageBootstrapComponent', () => {
  let component: PageBootstrapComponent;
  let fixture: ComponentFixture<PageBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
