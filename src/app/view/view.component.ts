import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';




@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  inputID: any
  mappedID: any=[ ]

  constructor(private ds: DatabaseService) { }

  ngOnInit(): void {
  }

  displayDetails() {
    this.mappedID = this.ds.db.find(id =>id.sname== this.inputID);
    if(this.mappedID){
    }
    else{
      alert("Match not found")
      this.inputID=''
      this.mappedID=''
    }
  }


}
