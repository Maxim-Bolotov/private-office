import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/ru';
import { ServiceWorkerModule } from '@angular/service-worker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule, CdkScrollableModule  } from '@angular/cdk/scrolling';


import { AppRoutingModule } from './app-routing.module';
import { SearchPipe } from './shared/search.pipe';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CreatePageComponent } from './home-page/create-page/create-page.component';
import { EditPageComponent } from './home-page/edit-page/edit-page.component';
import { ContactPageComponent } from './home-page/contact-page/contact-page.component';
import { ContactsPageComponent } from './home-page/contacts-page/contacts-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { AlertComponent } from './shared/components/alert/alert.component';
import { environment } from '../environments/environment';

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
    CreatePageComponent,
    EditPageComponent,
    LoginPageComponent,
    ContactPageComponent,
    ContactsPageComponent,
    SearchPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ScrollingModule,
    CdkScrollableModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
