import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { HomeModule } from './home/home.module';
import { ShareModule } from './shared/share.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShareModule,
    BrowserAnimationsModule,
    HomeModule,
    BookModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
