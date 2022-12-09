import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSmartphoneComponent} from "./list-smartphone/list-smartphone.component";
import {CreateSmartphoneComponent} from "./create-smartphone/create-smartphone.component";
import {DeleteSmartphoneComponent} from "./delete-smartphone/delete-smartphone.component";
import {EditSmartphoneComponent} from "./edit-smartphone/edit-smartphone.component";
import {DetailSmartphoneComponent} from "./detail-smartphone/detail-smartphone.component";



const routes: Routes = [
  {
    path: 'list',
    component: ListSmartphoneComponent
  },
  {
    path:'save',
    component: CreateSmartphoneComponent
  },
  {
    path:'delete/:id',
    component: DeleteSmartphoneComponent
  },
  {
    path:'edit/:id',
    component: EditSmartphoneComponent
  },
  {
    path:'detail/:id',
    component: DetailSmartphoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
