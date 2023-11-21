import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisGamePage } from './regis-game.page';

describe('RegisGamePage', () => {
  let component: RegisGamePage;
  let fixture: ComponentFixture<RegisGamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
