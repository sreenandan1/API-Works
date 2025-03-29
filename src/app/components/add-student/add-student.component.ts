import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private studentSerivce:StudentService){}

  addStudents = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })

  saveStudent(){
    this.studentSerivce.saveStudents(this.addStudents.value).subscribe((result)=>{
      console.log(result); 
      
      
    })
    
  }


}
