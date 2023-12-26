import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(protected router: Router) { }

  focus = "";

  navTo(route: string) {
    this.router.navigate([route]);
  }

  logout(){
    this.router.navigate(['/']);
  }

  options = [
    {
      name: "Dashboard",
      icon: '../../../assets/dashboard.png',
      route: '/dashboard',
      isFocus: true
    },
    {
      name: "Account",
      icon: '../../../assets/account.png',
      route: '/',
      isFocus: false
    },
  ]

}
