import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {SmartphoneService} from "../services/smartphone.service";


@Component({
  selector: 'app-delete-smartphone',
  templateUrl: './delete-smartphone.component.html',
  styleUrls: ['./delete-smartphone.component.css']
})
export class DeleteSmartphoneComponent implements OnInit{

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

  deleteSmartphone(id: number) {
    this.smartphoneService.deleteSmartphone(id).subscribe(() => {
      this.router.navigate(['']);
    }, e => {
      console.log(e);
    });
  }
}
