import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-html',
  templateUrl: './embed-html.component.html',
  styleUrls: ['./embed-html.component.css'],
})
export class EmbedHtmlComponent implements OnInit {
  innerHtml: SafeHtml;
  private htmlPath = '/assets/embed/embed.html';

  constructor(private domSanitizer: DomSanitizer, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadHtml();

    // this.loadScript();

    // this.loadStyle();
  }

  private loadHtml() {
    this.httpClient.get(this.htmlPath, { responseType: 'text' }).subscribe((data) => {
      this.innerHtml = this.domSanitizer.bypassSecurityTrustHtml(data);
    });
  }

  private loadStyle() {
    return new Promise((resolve) => {
      const styleElement = document.createElement('link');
      styleElement.href = '/assets/embed/embed.css';
      styleElement.onload = resolve;
      document.head.appendChild(styleElement);
    });
  }

  private loadScript() {
    return new Promise((resolve) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = '/assets/embed/embed.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
