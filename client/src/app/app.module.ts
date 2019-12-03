import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerDetailsComponent } from './components/server-details/server-details.component';
import { SearchComponent } from './components/search/search.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    MainPanelComponent,
    CartComponent,
    DashboardComponent,
    RegisterComponent,
    HomepageComponent,
    ServerDetailsComponent,
    SearchComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
