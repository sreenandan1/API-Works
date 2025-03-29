import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {

  url = 'http://localhost:3000/students';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  saveStudents(data:any){
    console.log('data',data);
    return this.http.post(this.url,data)
    

  }
}
