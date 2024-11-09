import { Routes } from '@angular/router';  // Import RouterModule and Routes
import { HomeComponent } from './home/home.component';  // Import the HomeComponent
import { LoginComponent } from './login/login.component';  // Import the LoginComponent

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route (Home)
    { path: 'login', component: LoginComponent }  // Route for login page
];

