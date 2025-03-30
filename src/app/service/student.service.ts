import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService  {
  url = 'http://localhost:3000/students';
  constructor(private http:HttpClient){}

 
  
  savedItem(data:any){
    console.log(data)
    return this.http.post(this.url,data)
  }
  allStudent(){
    return this.http.get(this.url)
  }

  deleteUser(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getStudent(id:any){
    return this.http.get(`${this.url}/${id}`)
  }

  updateSTudent(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }

}
