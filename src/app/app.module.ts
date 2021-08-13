import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BTbuoi1Module } from './Component/BaiTapBuoi1/BTbuoi1.module';

@NgModule({
  declarations: [
    AppComponent     //Các component trong module 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BTbuoi1Module          //Nơi import các module khác
  ],
  providers: [],
  bootstrap: [AppComponent]           //Component được gọi ra ở index.html
})
export class AppModule { }
