import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookDetailComponent, BookListComponent, BookRegisterComponent } from './component/index';

@NgModule({
  declarations: [BookListComponent, BookRegisterComponent, BookDetailComponent],
  imports: [CommonModule, BookRoutingModule],
  exports: [BookListComponent, BookRegisterComponent, BookDetailComponent],
})
export class BookModule {}
