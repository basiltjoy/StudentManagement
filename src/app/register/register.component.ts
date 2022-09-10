import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = "Please register here"
  inputID: any
  inputName: any = ""
  inputCourse: any = ""

  constructor(private ds: DatabaseService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    if (this.ds.db.find(({ sid }) => sid === this.inputID)) {
      alert("Already registered student")
    }
    else {
      let sid = this.inputID;
      let sname = this.inputName;
      let scourse = this.inputCourse;
      this.ds.db.push({ sid, sname, scourse });
      console.log(this.ds.db);
      alert("Student added")
      this.inputID='';
      this.inputName= ''; 
      this.inputCourse ='';
    }
  }

  reset() {
    this.inputID = null;
    this.inputCourse = null;
    this.inputName = null;
  }


}
