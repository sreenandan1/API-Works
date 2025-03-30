import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  constructor(private studentSevice:StudentService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.editSubmit()
  }


  editForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })

  editSubmit(){

    this.studentSevice.getStudent(this.route.snapshot.params['id']).subscribe((result:any)=>{
      console.log('clicked item get',result);
      
      this.editForm = new FormGroup({
        name:new FormControl( result['name'] ),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
      })
      
    })
    
  }

  updateData(){
    this.studentSevice.updateSTudent(this.route.snapshot.params['id'],this.editForm.value).subscribe((edit)=>{
      console.log(edit);
      this.router.navigate(['/list'])
      
    })
    

    
  }

}
