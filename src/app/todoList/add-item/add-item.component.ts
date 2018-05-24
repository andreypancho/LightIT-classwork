import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private dataServise: DataService) { }

  public item: string = '';

  public addItem(){
    this.dataServise.addData(this.item);
  }


  ngOnInit() {
  }

}
