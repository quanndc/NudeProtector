import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public route: Router) { }

  navigateToDashboard(){
    this.route.navigate(['/dashboard']);
  }

}
