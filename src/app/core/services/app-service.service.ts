import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  userName: string;
  startIndex = 0;
  searchQuery: string;

  private _booksList;
  searchResults = new Subject();

  constructor(private http: HttpClient) {}

  searchForBook(query: string) {
    this.startIndex = 0;
    this.searchQuery = query;
    return this.http.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q: query, maxResults: 20, startIndex: 0 },
    });
  }

  getNextPageResults(page) {
    let index = page * 19;
    return this.http.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q: this.searchQuery, maxResults: 20, startIndex: index },
    });
  }

  getWishlist() {
    return this.http.get('http://localhost:3000/wishlist');
  }

  addToWishlist(book) {
    return this.http.post('http://localhost:3000/wishlist', book);
  }

  removeFromWishlist(id) {
    return this.http.delete('http://localhost:3000/wishlist/' + id);
  }
}
