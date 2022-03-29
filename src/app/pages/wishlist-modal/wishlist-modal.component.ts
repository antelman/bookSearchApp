import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppService } from 'src/app/core/services/app-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist-modal.component.html',
  styleUrls: ['./wishlist-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WishlistModalComponent implements OnInit {

  booksList;
  showAlert = false;

  alert = {
    type: 'success',
    title: 'alert',
    content: 'message'
  }

  constructor(private appService: AppService, public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.booksList = this.appService.getWishlist().subscribe((res) => this.booksList = res);
  }

  removeFromWishlist(book, index) {
    this.appService.removeFromWishlist(book).subscribe((res)=>{
      this.showAlert = true;
      this.alert = {
        type: 'success',
        title: 'success',
        content: 'Removed from wishlist'
      }
      this.booksList.splice(index, 1)
    });
  }

}
