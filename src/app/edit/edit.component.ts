import { splitNsName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  inputID: string = ""
  stud: any = []
  searchValue: any;


  constructor(private ds: DatabaseService) {
    this.searchValue = null;
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
    this.searchValue = event.target.value
    console.log(this.searchValue);

    this.stud.sname = this.searchValue
    if (event) {
      alert('Student Name change saved')
    }
  }

  onChangeEvent2(event: any) {
    let courseChanged = event.target.value
    this.stud.scourse = courseChanged
    if (event) {
      alert('Student course change saved')
    }
  }

  EntryNull(event){
    if(this.inputID==''){
      alert('ss')
      this.stud=''
    }
  }

  clear(){
    this.stud=''
    this.inputID = '';
  }







}
