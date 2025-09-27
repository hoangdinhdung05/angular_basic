import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h2>🏡 Welcome to Home Page</h2>`
})
export class HomeComponent {}

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>🔐 Login Page</h2>
    <form>
      <label>Email: <input type="email"></label><br>
      <label>Password: <input type="password"></label><br>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {}

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
