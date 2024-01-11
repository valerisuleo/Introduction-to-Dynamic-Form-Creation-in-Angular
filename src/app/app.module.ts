import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContainerComponent } from './common/form-container/form-container.component';
import { FormGroupCheckboxComponent } from './common/form-group-checkbox/form-group-checkbox.component';
import { FormGroupInputComponent } from './common/form-group-input/form-group-input.component';
import { FormGroupSelectComponent } from './common/form-group-select/form-group-select.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormGroupCheckboxComponent,
    FormGroupInputComponent,
    FormGroupSelectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
