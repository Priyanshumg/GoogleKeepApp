import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { GoogleAppComponentComponent } from './component/google-app-component/google-app-component.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateNewAccountComponent } from './component/create-new-account/create-new-account.component';
import { DisplayNoteTemplateComponent } from './component/display-note-template/display-note-template.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'dashboard',
        component: GoogleAppComponentComponent,
        children: [
            { path: 'top', component: DashboardComponent }
        ]
    },
    { path: 'create', component: CreateNewAccountComponent },
    { path: 'display', component: DisplayNoteTemplateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
