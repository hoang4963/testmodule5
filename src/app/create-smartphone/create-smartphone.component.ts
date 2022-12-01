import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SmartphoneService} from "../services/smartphone.service";



@Component({
  selector: 'app-create-smartphone',
  templateUrl: './create-smartphone.component.html',
  styleUrls: ['./create-smartphone.component.css']
})
export class CreateSmartphoneComponent implements OnInit{
  smartphoneForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private smartphoneService: SmartphoneService) {
  }

  ngOnInit() {
  }

  submit() {
    const smartphone = this.smartphoneForm.value;
    this.smartphoneService.saveSmartphone(smartphone).subscribe(() => {
      this.smartphoneForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }
}
