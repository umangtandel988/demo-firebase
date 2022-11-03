import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';

const routes: Routes = [{ path: '', component: PagesComponent, children : [
  { path : '', redirectTo : 'dashboard', pathMatch : 'full'},
  { path : 'dashboard', component : DashboardComponent },
  { path : 'student-list', component : ListStudentComponent},
  { path : 'student-add', component : AddStudentComponent},
  { path : 'student-edit/:id', component : AddStudentComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
