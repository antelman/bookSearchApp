import { AppService } from 'src/app/core/services/app-service.service';
import { BookDetailsModalComponent } from './../book-details-modal/book-details-modal.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, Subject, tap } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchPageComponent implements OnInit {

  userName;
  searchResults = new Subject();
  booksList;
  loading = false;
  modalRef?: BsModalRef;
  page: number = 1;
  totalBooks: number;

  constructor(private modalService: BsModalService, private appService: AppService) { }

  ngOnInit() {
    this.booksList = this.searchResults.pipe(tap(()=> this.loading = false));
  }

  ngOnDestroy() {
    this.booksList.unsubscribe();
  }

  updateResults(e) {
    this.page = 1;
    this.totalBooks = e.totalItems;
    this.searchResults.next(e.items);
    this.loading = false;
  }

  showLoader(e) {
    this.loading = e;
  }

  openModal(book:any) {
    this.modalRef = this.modalService.show(BookDetailsModalComponent, {
      class: 'modal-dialog-centered', initialState: {book}
    });
  }

  show(e) {
    this.loading = true;
    this.appService.getNextPageResults(e.page - 1).pipe(map((res: any)=> res.items)).subscribe((res) => this.searchResults.next(res))
  }
}
