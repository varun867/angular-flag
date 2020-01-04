import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlagsListingComponent } from '../flags-listing/flags-listing.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FlagsListingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
