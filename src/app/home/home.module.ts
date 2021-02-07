import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/index';
import { MatButtonModule } from '@angular/material/button';
import { EmbedHtmlComponent } from './component/embed-html/embed-html.component';
import { EmbedHtmlJqueryComponent } from './component/embed-html-jquery/embed-html-jquery.component';

@NgModule({
  declarations: [HomeComponent, EmbedHtmlComponent, EmbedHtmlJqueryComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
