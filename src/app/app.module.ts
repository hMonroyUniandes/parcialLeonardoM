import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafeModule } from './cafe/cafe.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafeModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }