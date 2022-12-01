import {Component, OnInit} from '@angular/core';
import {Smartphone} from "../models/smartphone";
import {SmartphoneService} from "../services/smartphone.service";


@Component({
  selector: 'app-list-smartphone',
  templateUrl: './list-smartphone.component.html',
  styleUrls: ['./list-smartphone.component.css']
})
export class ListSmartphoneComponent implements OnInit{
  smartphones: Smartphone[] = [];
  constructor(private smartphoneService: SmartphoneService) {
  }



  ngOnInit() {
    this.smartphoneService.getAll().subscribe(result => {
        this.smartphones = result;
        console.log(this.smartphones)
      }, error => {
        console.log(error);
      }
    )
  }


}
