import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SuggestionBoxComponent } from './suggestion-box/suggestion-box.component';
import { ShowResultComponent } from './show-result/show-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SuggestionBoxComponent,
    ShowResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
