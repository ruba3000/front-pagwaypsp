/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopoPaginasComponent } from './topo-paginas.component';

describe('TopoPaginasComponent', () => {
  let component: TopoPaginasComponent;
  let fixture: ComponentFixture<TopoPaginasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoPaginasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
