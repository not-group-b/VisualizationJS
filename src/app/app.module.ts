import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EmitterService } from './emitter.service';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    EmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }