import { LoadingSpinnerComponent } from './../loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { BookSearchbarComponent } from '../book-searchbar/book-searchbar.component';
import { BookCardComponent } from '../book-card/book-card.component';
import { WishlistModalComponent } from '../wishlist-modal/wishlist-modal.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BookDetailsModalComponent } from '../book-details-modal/book-details-modal.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    BookSearchbarComponent,
    BookCardComponent,
    BookDetailsModalComponent,
    WishlistModalComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchPageRoutingModule,
    TooltipModule,
    AlertModule,
    PaginationModule
  ]
})
export class SearchPageModule { }
