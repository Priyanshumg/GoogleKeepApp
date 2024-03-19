import { Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { GoogleAppComponentComponent } from './component/google-app-component/google-app-component.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
      path: 'login',
      component:LoginPageComponent
    },
    {
      // Parent Component
      path: '',
      component:GoogleAppComponentComponent,
      children:[{
        // Child Components
      path:'dashboard',
      component:DashboardComponent,
      }]
    }
];
