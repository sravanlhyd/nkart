import { Component, Input,Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input()
  dataList:Array<any>;
  @Output()
  onSelection:EventEmitter;

  selectedValue;
  constructor() { 
    this.dataList=[{text:"",value:""}];
    this.onSelection = new EventEmitter();
  }

   dropDownSelectionChange(){
       console.log(this.selectedValue);
   }
}
