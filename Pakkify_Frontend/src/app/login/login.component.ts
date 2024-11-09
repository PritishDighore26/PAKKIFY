




import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // TypeScript function to navigate to the login page
  goToLoginPage(): void {
    window.location.href = 'login.html';  // Replace 'login.html' with your login page URL

  }

}







