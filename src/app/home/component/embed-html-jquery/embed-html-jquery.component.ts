import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-embed-html-jquery',
  templateUrl: './embed-html-jquery.component.html',
  styleUrls: ['./embed-html-jquery.component.css'],
})
export class EmbedHtmlJqueryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('#embedHtml').load('/assets/embed/embed.html');

    this.loadScript();

    this.loadStyle();
  }

  private loadScript() {
    return new Promise((resolve) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = '/assets/embed/embed.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  private loadStyle() {
    return new Promise((resolve) => {
      const styleElement = document.createElement('link');
      styleElement.href = '/assets/embed/embed.css';
      styleElement.onload = resolve;
      styleElement.rel = 'stylesheet';
      document.head.appendChild(styleElement);
    });
  }
}
