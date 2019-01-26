import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
//Importing Component
import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  //Declare all componenet & pipe(Below are arrays)
  declarations : [
    AppComponent,
    DetailComponent,
    ProductComponent
  ],

  //All modules
  imports : [
    BrowserModule
  ],

  //Only 1st componenent
  bootstrap : [
    AppComponent
  ],

  //All services
  providers : []

})

export class AppModule{

}