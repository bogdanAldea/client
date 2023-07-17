import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithNavigationComponent } from './layouts/layout-with-navigation/layout-with-navigation.component';
import { LayoutWithoutNavigationComponent } from './layouts/layout-without-navigation/layout-without-navigation.component';
import { StackedNavigationComponent } from './navigations/stacked-navigation/stacked-navigation.component';
import { RouterModule } from '@angular/router';
import { InternshipsTableComponent } from './tables/internships-table/internships-table.component';
import { ButtonRectSmallComponent } from './buttons/button-rect-small/button-rect-small.component';
import { InternshipOptionCardComponent } from './cards/internship-option-card/internship-option-card.component';
import { BreadcrumbComponent } from './navigations/breadcrumb/breadcrumb.component';
import { TitleComponent } from './typography/title/title.component';
import { DescriptionComponent } from './typography/description/description.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateMemberDialogComponent } from './dialogs/create-member-dialog/create-member-dialog.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutWithNavigationComponent,
    LayoutWithoutNavigationComponent,
    StackedNavigationComponent,
    InternshipsTableComponent,
    ButtonRectSmallComponent,
    InternshipOptionCardComponent,
    BreadcrumbComponent,
    TitleComponent,
    DescriptionComponent,
    CreateMemberDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    InternshipsTableComponent,
    ButtonRectSmallComponent,
    InternshipOptionCardComponent,
    BreadcrumbComponent,
    TitleComponent,
    DescriptionComponent,
  ]
})
export class SharedModule { }
