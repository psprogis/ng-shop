import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';

import { ProductService } from './shared/services';
import { HomeComponent, ProductTileComponent } from './home';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { ProductComponent, ProductDetailsComponent } from './product';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
