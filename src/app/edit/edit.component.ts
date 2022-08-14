import { splitNsName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  inputName: string = ""
  stud:any = []
  abc:any;
  nameChanged: string = ""

  constructor(private ds: DatabaseService) {  
  }

  ngOnInit() {
  }

  fetchStudent() {
   if(this.stud = (this.ds.db.find(item => item.sname == this.inputName)) ){
      alert("Student Found")
    }
    else{
      alert("Student not Found")
      this.inputName=''
    }
  }

  onChangeEvent(event: any) {
    let nameChanged = event.target.value
    this.stud.sname=nameChanged  
  } 
  
  onChangeEvent2(event:any){
    let courseChanged = event.target.value
    this.stud.scourse=courseChanged
  }
  

  
}
