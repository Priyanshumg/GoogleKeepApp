import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-google-app-component',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './google-app-component.component.html',
  styleUrl: './google-app-component.component.scss'
})
export class GoogleAppComponentComponent {

}
