import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public studentForm : FormGroup;
  public editId : string;
  public isEditable : boolean = false;
  public studentData : Student;

  constructor(private studentService : StudentService, private activatedRoute : ActivatedRoute, private toastrService: NbToastrService,
    private router : Router) {
    this.studentForm = new FormGroup({
      name : new FormControl(''),
      std : new FormControl(''),
      age : new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.editId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.editId){
      this.getStudentDetails(this.editId);
      this.isEditable = true;
    }
  }

  getStudentDetails(id : string){
    this.studentService.getStudentById(id).then( res => {
      console.log(res.data())
      this.studentData = res.data() as Student;
      this.studentForm.reset(this.studentData)
    })
  }

  onSubmit(){

    let value = this.studentForm.value;
    console.log(value)

    if(this.isEditable){
      this.studentService.updateStudent(this.editId, value).then((res) => {
        console.log(res);
        this.toastrService.show("Student Updated Successfully");
        
      })
    }
    else{
      this.studentService.addStudent(value).then((res) => {
        console.log(res)
        this.toastrService.show("Student Added Successfully")
      })
    }
    this.router.navigate(['../pages/student-list'])
  }
}
