import { Component,  OnInit,HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuopen: boolean = false;
  scrolled: boolean = false;

  constructor() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 0;
  }

  ngOnInit(): void {
  }

  menuToggle() {
    this.menuopen = !this.menuopen;
  }

}
