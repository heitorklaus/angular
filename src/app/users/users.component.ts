import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent implements OnInit {
  public address: any[] = [
    {
      id: 1,
      ask: '',
      ans_a: '',
      ans_b: '',
      ans_c: '',
      ans_d: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addAddress() {
    this.address.push({
      id: this.address.length + 1,
      ask: '',
      ans_a: '',
      ans_b: '',
      ans_c: '',
      ans_d: '',
    });
  }

  removeAddress(i: number) {
    this.address.splice(i, 1);
  }
  getData(i: number) {
    for (let key in this.address) {
      console.log(this.address[key].ask);
    }
  }

  logValue() {
    //console.log(this.address);
  }
}
