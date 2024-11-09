import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected to 'styleUrls'
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToLoginPage(): void {
    this.router.navigate(['/login']);  // Navigate to login page
  }
}
