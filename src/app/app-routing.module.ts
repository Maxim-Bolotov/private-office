import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './home-page/dashboard-page/dashboard-page.component';
import { EditPageComponent } from './home-page/edit-page/edit-page.component';
import { CreatePageComponent } from './home-page/create-page/create-page.component';
import { ContactsPageComponent } from './home-page/contacts-page/contacts-page.component';
import { ContactPageComponent } from './home-page/contact-page/contact-page.component';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'my-contacts', component: ContactsPageComponent, canActivate: [AuthGuard]},
      {path: 'contact/:id', component: ContactPageComponent, canActivate: [AuthGuard]},
      {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
      {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
      {path: 'contact/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
