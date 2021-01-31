import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  public getBooks(): Promise<Array<Book>> {
    const bookListURL = 'assets/mock/books.json';
    return this.getJSON<Array<Book>>(bookListURL);
  }

  private getJSON<T>(jsonFileUrl: string): Promise<T> {
    return this.httpClient.get<T>(jsonFileUrl).toPromise();
  }
}
