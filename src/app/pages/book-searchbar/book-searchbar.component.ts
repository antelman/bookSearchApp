import { AppService } from './../../core/services/app-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, tap, map, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { WishlistModalComponent } from '../wishlist-modal/wishlist-modal.component';

@Component({
  selector: 'app-book-searchbar',
  templateUrl: './book-searchbar.component.html',
  styleUrls: ['./book-searchbar.component.scss']
})
export class BookSearchbarComponent implements OnInit {

  keyUp = new Subject();

  @Output() searchResult = this.keyUp.pipe(
    filter((res: any) => res.target?.value?.length),
    tap(()=> this.showLoader.emit(true)),
    map((event: any) => event?.target?.value),
    debounceTime(600),
    distinctUntilChanged(),
    switchMap((term: string) => this.appService.searchForBook(term))
  );

  @Output() showLoader = new EventEmitter();

  userName: string;
  booksList: any = [];
  modalRef;
  constructor(private appService: AppService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.userName = this.appService.userName;
  }

  searchBook(e) {
    this.keyUp.next(e);
  }

  openModal() {
    this.modalRef = this.modalService.show(WishlistModalComponent, {
      class: 'modal-dialog-centered modal-lg'
    });
  }

}
