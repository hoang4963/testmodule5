import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListSmartphoneComponent } from './list-smartphone/list-smartphone.component';
import { EditSmartphoneComponent } from './edit-smartphone/edit-smartphone.component';
import { DeleteSmartphoneComponent } from './delete-smartphone/delete-smartphone.component';
import { CreateSmartphoneComponent } from './create-smartphone/create-smartphone.component';

import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailSmartphoneComponent } from './detail-smartphone/detail-smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSmartphoneComponent,
    CreateSmartphoneComponent,
    DeleteSmartphoneComponent,
    EditSmartphoneComponent,
    DetailSmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
