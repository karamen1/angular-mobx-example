import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { Book } from './model';
import { makeAutoObservable } from 'mobx';
import { BookService } from './service/book.service';

@Injectable()
export class BookStore {
  @observable books: Array<Book> = [];

  constructor(private bookService: BookService) {
    makeAutoObservable(this);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @action getAllBooks() {
    this.bookService.getBooks().then((res) => {
      this.books = res;
    });
  }
}
