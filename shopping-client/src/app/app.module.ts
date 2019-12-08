import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeLoginComponent } from './components/home-login/home-login.component';
import { HomeServerDetailsComponent } from './components/home-server-details/home-server-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    SideCartComponent,
    AdminComponent,
    HomeInfoComponent,
    HomeLoginComponent,
    HomeServerDetailsComponent,
    HomeComponent,
    NotfoundComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
