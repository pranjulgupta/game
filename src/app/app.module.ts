import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { FlagComponent } from './flag/flag.component';

import { componentFactoryName } from '@angular/compiler';

const approutes: Routes=[

 {path:'showgame',component: FlagComponent}];
@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
