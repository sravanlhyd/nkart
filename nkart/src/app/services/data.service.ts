import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
    private countriesList: Array<any>;
    private statesList: Array<any>;
    constructor(private http: HttpClient) {

    }
    registerUser(payLoad) {
        let url = 'http://localhost:4000/nkart/api/register';
        return this.http.post(url, payLoad);
    }

    loginUser(payLoad) {
        let url = 'http://localhost:4000/nkart/api/login';
        return this.http.post(url,payLoad);
    }

    getData(url){
        return this.http.get(url);
    }

    getCountries() {
        let countries= [{ name: 'India', code: 'IN' },
        { name: 'United States', code: 'USA' },
        { name: 'Australia', code: "AUS" },
        { name: 'Newzeland', code: 'NZ' }];

        this.countriesList = countries.map(x=>{
            return {text:x.name,value:x.code};
        })

        return this.countriesList;
    }
    getStatesList() {
        let states= [{ name: "Telangana", code: 'TS' },
        { name: "Andhra Pradesh", code: "AP" }];
        this.statesList = states.map(x=>{
            return {text:x.name,value:x.code};
        })
        return this.statesList;
    }
}