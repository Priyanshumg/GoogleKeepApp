import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AddNotesComponent } from '../add-notes/add-notes.component';

@Component({
  selector: 'app-google-app-component',
  standalone: true,
  imports: [DashboardComponent, SidenavComponent, AddNotesComponent],
  templateUrl: './google-app-component.component.html',
  styleUrl: './google-app-component.component.scss'
})
export class GoogleAppComponentComponent {

}
