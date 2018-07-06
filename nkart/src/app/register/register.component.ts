import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any;
  countries: any;
  states:any;
  title: any;
  registerSuccess:boolean;
  registerFailure:boolean
  constructor(private dataSvc: DataService, private commonSvc: CommonService) {
    this.user = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      userName: '',
      Email: '',
      password: '',
      gender: '',
      agree: false,
      country: '',
      phoneNumber: ''
    };
    this.countries = dataSvc.getCountries();
    this.states = dataSvc.getStatesList();
    this.title = commonSvc.getTitle();

  }
  resetMessages(){
    this.registerSuccess=false;
    this.registerFailure=false;
  }
  registerUser() {
    this.resetMessages();
    console.info("USER DETAILS:", this.user);
    this.dataSvc.registerUser(this.user)
      .subscribe(result => {
        console.log(result);
        this.registerSuccess=true;
      },
        err => {
          console.log(err);
          this.registerFailure=true;
        })
  }

}
