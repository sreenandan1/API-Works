import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent
  },{
    path:'edit/:id',
    component:EditComponent
  },{
    path:'add',
    component:AddStudentComponent
  },{
    path:'list',
    component:ListStudentsComponent
  },{
    path:'edit',
    component:ListStudentsComponent
  },{
    path:'login',
    component:ListStudentsComponent
  },{
    path:'register',
    component:ListStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
