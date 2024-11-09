import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CreateuserComponent } from './createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MyprofileComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
