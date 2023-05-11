import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'sr-social-app';
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {}
  ngOnDestroy() {
    this.interValsubscrbtions?.unsubscribe();
  }
}
