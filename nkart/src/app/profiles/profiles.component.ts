import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  urlToGetAllProfiles: string;
  profiles:any
  selectedItem:any;

  totalItems = 64;
  currentPage = 4;

  constructor(private dataSvc: DataService) {
    this.urlToGetAllProfiles = "http://localhost:4000/nkart/api/getprofiles";
    this.profiles = [];
    this.getAllProfiles();
  }

  getAllProfiles() {
    this.dataSvc.getData(this.urlToGetAllProfiles)
      .subscribe(result => {
        console.log(result);
        this.profiles = result;
      },
        err => {
          console.log(err)
        });
  }

  getProfileById(userInfo) {
    this.dataSvc.getData(this.urlToGetAllProfiles+`/${userInfo.userName}`)
    .subscribe(result => {
      console.log(result);
      this.selectedItem= result;
      
    },
      err => {
        console.log(err)
      });
  }

pagination={
  startIndex:0,
  endIndex:4
}
pageChanged(evt){
  console.log(evt);
  this.pagination.startIndex = (evt.page-1)*5;
  this.pagination.endIndex= (evt.page-1)*5+5;

  console.log(this.pagination);
}
}
