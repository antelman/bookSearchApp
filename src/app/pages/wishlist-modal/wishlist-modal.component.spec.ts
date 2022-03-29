import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistModalComponent } from './wishlist-modal.component';

describe('WishlistComponent', () => {
  let component: WishlistModalComponent;
  let fixture: ComponentFixture<WishlistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
