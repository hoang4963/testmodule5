import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SmartphoneService} from "../services/smartphone.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail-smartphone',
  templateUrl: './detail-smartphone.component.html',
  styleUrls: ['./detail-smartphone.component.css']
})
export class DetailSmartphoneComponent {
  smartphoneForm: FormGroup | undefined | any;
  id: number | undefined | any;

  constructor(private smartphoneService: SmartphoneService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getSmartphone(this.id);
    });
  }

  ngOnInit() {
  }

  getSmartphone(id: number) {
    return this.smartphoneService.findById(id).subscribe(smartphone => {
      this.smartphoneForm = new FormGroup({
        title: new FormControl(smartphone.title),
        price: new FormControl(smartphone.price),
        description: new FormControl(smartphone.description),
      });
    });
  }
}
