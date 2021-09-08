import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // makes Angular recognize and apply the opt-in ngModel directive (= two-way data binding syntax)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Then add FormsModule to the @NgModule metadata's imports array, which contains a list of external modules that the application needs.

