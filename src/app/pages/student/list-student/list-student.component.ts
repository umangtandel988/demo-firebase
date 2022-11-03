import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { DeleteDialogueBoxComponent } from '../../miscellaneous/delete-dialogue-box/delete-dialogue-box.component';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  public studentList : Student[];

  constructor(private studentService : StudentService, private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe( res => {
      console.log(res)
      this.studentList = res;
    })
  }

  onDelete(id : string){
    this.dialogService.open(DeleteDialogueBoxComponent, {
      context : {
        id : id
      }
    })
    // this.studentService.deleteStudent(id).then( res => {

    // })
  }

}
