import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private studentService: StudentService) { }

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })

  saveSubmit() {

    this.studentService.savedItem(this.addStudent.value).subscribe(result => {
      console.log(result);

    })

    this.addStudent.reset();
    window.alert('are you sure to save this student..!!!')



  }


}
