import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  public address: any[] = [{
    id: 1,
    address: '',
    street: '',
    city: '',
    country: ''
  }];

  constructor() { }

  ngOnInit(): void {
  }


  addAddress() {
    this.address.push({
      id: this.address.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.address.splice(i, 1);
  }
  getData(i: number) {

    for(let key in this.address) {
      console.log(this.address[key].city);
      }

  }

  logValue() {
   // console.log(this.address);
  }
}
