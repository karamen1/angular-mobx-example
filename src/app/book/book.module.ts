import { MobxAngularModule } from 'mobx-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookDetailComponent, BookListComponent, BookRegisterComponent } from './component/index';
import { BookService } from './service';
import { BookStore } from './book.store';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [BookListComponent, BookRegisterComponent, BookDetailComponent],
  imports: [CommonModule, MatListModule, BookRoutingModule, MobxAngularModule, MatTableModule],
  exports: [BookListComponent, BookRegisterComponent, BookDetailComponent],
  providers: [{ provide: BookStore }, BookService],
})
export class BookModule {}
