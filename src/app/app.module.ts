import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AppRoutingModule } from './app-routing.module';
import { MembersModule } from './members/members.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MembersModule,
    AppRoutingModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {}
}
