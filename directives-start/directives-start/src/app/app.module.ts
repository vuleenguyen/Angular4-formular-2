import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from "app/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { ConditionDirective } from './condition.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    ConditionDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
