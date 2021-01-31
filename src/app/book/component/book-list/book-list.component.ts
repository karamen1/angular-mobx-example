import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BookStore } from '../../book.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['siid', 'name', 'author'];

  constructor(public store: BookStore) {}

  ngOnInit(): void {
    // Load add book
    this.store.getAllBooks();
  }
}
