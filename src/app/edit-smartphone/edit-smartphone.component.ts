import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SmartphoneService} from "../services/smartphone.service";


@Component({
  selector: 'app-edit-smartphone',
  templateUrl: './edit-smartphone.component.html',
  styleUrls: ['./edit-smartphone.component.css']
})
export class EditSmartphoneComponent implements OnInit{
  smartphoneForm: FormGroup | undefined | any;
  id: number | any | undefined;

  constructor(private smartphoneService: SmartphoneService,
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

  updateSmartphone(id: number) {
    // @ts-ignore
    const smartphone = this.smartphoneForm.value;
    this.smartphoneService.updateSmartphone(id, smartphone).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }
}
