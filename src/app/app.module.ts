import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { DashboardPageComponent } from './home-page/dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './home-page/create-page/create-page.component';
import { EditPageComponent } from './home-page/edit-page/edit-page.component';
import { ContactPageComponent } from './home-page/contact-page/contact-page.component';
import { ContactsPageComponent } from './home-page/contacts-page/contacts-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    LoginPageComponent,
    ContactPageComponent,
    ContactsPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
