import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppService } from 'src/app/core/services/app-service.service';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
})
export class BookDetailsModalComponent implements OnInit {
  book;
  showAlert = false;

  alert = {
    type: 'success',
    title: 'alert',
    content: 'message',
  };

  constructor(private appService: AppService, public bsModalRef: BsModalRef) {}

  ngOnInit() {

  }

  addToWishlist(book) {
    this.appService.addToWishlist(book).subscribe(
      (res) => {
        this.showAlert = true;
        this.alert = {
          type: 'success',
          title: 'Success',
          content: 'The book added to wishlist',
        };
      },
      (error) => {
        this.showAlert = true;
        this.alert = {
          type: 'danger',
          title: 'Failed',
          content: 'The book already at wishlist',
        };
      }
    );
  }

  removeFromWishlist(book) {
    this.appService.removeFromWishlist(book).subscribe(
      (res) => {
        this.showAlert = true;
      },
      (error) => {
        this.showAlert = true;
        this.alert = {
          type: 'danger',
          title: 'Failed',
          content: 'The book already at removed',
        };
      }
    );
  }
}
