import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/models/nav-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Array<NavItem>;
  constructor() {}

  ngOnInit() {
    this.links = this.getLinks();
  }

  getLinks(): Array<NavItem> {
    return [
      {
        name: 'Sign Up',
        route: 'sign-up'
      },
      {
        name: 'Sign In',
        route: 'sign-in'
      }
    ];
  }
}
