import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db=[
    {sid:100,sname:'akhil',scourse:'bca'},
    {sid:101,sname:'ashik',scourse:'bca'},
    {sid:102,sname:'ashika',scourse:'bsc'},
  ]

  constructor() { }

  

}
