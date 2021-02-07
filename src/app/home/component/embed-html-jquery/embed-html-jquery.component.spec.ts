import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedHtmlJqueryComponent } from './embed-html-jquery.component';

describe('EmbedHtmlJqueryComponent', () => {
  let component: EmbedHtmlJqueryComponent;
  let fixture: ComponentFixture<EmbedHtmlJqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedHtmlJqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedHtmlJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
