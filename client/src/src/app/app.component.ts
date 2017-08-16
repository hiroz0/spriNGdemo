import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {MdSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private bigScreen: boolean;
  private openedSidenav: boolean;

  @Output() toggleSidenav = new EventEmitter();
  @ViewChild('sidenav') sidenav: MdSidenav;
  @HostListener('window:resize', ['$event'])
    onResize(event) {
       this.configureSideNav()
  }

  ngOnInit() {
    this.configureSideNav();
  }

  configureSideNav() {
    this.bigScreen = window.innerWidth > 800;
    this.openedSidenav = this.bigScreen;
  }
}
