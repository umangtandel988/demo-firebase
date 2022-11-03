import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbTooltipModule } from '@nebular/theme';
import { DeleteDialogueBoxComponent } from './miscellaneous/delete-dialogue-box/delete-dialogue-box.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ListStudentComponent,
    AddStudentComponent,
    DeleteDialogueBoxComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbTooltipModule,
    NbDialogModule.forChild()
  ]
})
export class PagesModule { }
