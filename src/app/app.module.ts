import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { DashboardPageComponent } from './home-page/dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './home-page/create-page/create-page.component';
import { EditPageComponent } from './home-page/edit-page/edit-page.component';
import { ContactPageComponent } from './home-page/contact-page/contact-page.component';
import { ContactsPageComponent } from './home-page/contacts-page/contacts-page.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthInterceptor } from './shared/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

registerLocaleData(localeFr, 'ru');

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
