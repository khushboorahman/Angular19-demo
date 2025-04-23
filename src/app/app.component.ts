import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeesComponent } from './components/employees/employees.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UserComponent, 
    AdminComponent,
    EmployeesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19tut';
}
