import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent implements OnInit{
studenttt:any = [{}]


  constructor(private studentService:StudentService){}
ngOnInit(): void {
  this.fetchData();
}
  fetchData(){
    this.studentService.allStudent().subscribe((result)=>{
      console.log('machaneeee vannu',result);
     this.studenttt = result

      
    })
  }


}
