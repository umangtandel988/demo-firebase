import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { StudentService } from 'src/app/services/student.service';
import { ListStudentComponent } from '../../student/list-student/list-student.component';

@Component({
  selector: 'app-delete-dialogue-box',
  templateUrl: './delete-dialogue-box.component.html',
  styleUrls: ['./delete-dialogue-box.component.css']
})
export class DeleteDialogueBoxComponent implements OnInit {

  @Input() id : string;

  constructor(public ref: NbDialogRef<ListStudentComponent>, private studentService : StudentService, private toaster : NbToastrService) { }

  ngOnInit(): void {
    console.log(this.id)
  }

  confirmDelete(){
    this.studentService.deleteStudent(this.id).then( res => {
      this.toaster.success("Record Deleted Successfully");
      this.ref.close();
    })
  }

  closeRef(){
    this.ref.close();
  }

}
