import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallnewsComponent } from './viewallnews/viewallnews.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[
  {path:"",component:AddnewsComponent},
  {path:"view",component:ViewallnewsComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddnewsComponent,
    NavbarComponent,
    ViewallnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
