import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {environment} from '../environments';
import { FlagsListingComponent } from '../flags-listing/flags-listing.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2'


@NgModule({
  imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
  declarations: [ AppComponent, HelloComponent, FlagsListingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
