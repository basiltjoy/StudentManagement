import { splitNsName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  inputID: string = ""
  stud: any = []
  abc: any;
  nameChanged: string = ""

  constructor(private ds: DatabaseService) {
  }

  ngOnInit() {
  }

  fetchStudent() {
    if (this.stud = (this.ds.db.find(item => item.sname == this.inputID))) {
      alert("Student Found, Proceed with modifications, they'll be saved automatically")
    }
    else {
      alert("Student not Found")
      this.inputID = '';
      this.stud = '';
    }
  }

  onChangeEvent(event: any) {
    let nameChanged = event.target.value
    this.stud.sname = nameChanged
    if(event){
      alert('Student Name change saved')
    }
  }

  onChangeEvent2(event: any) {
    let courseChanged = event.target.value
    this.stud.scourse = courseChanged
    if(event){
      alert('Student course change saved')
    }
  }



}
