import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOpdNumberComponent } from './component/dashboard/book-opd-number/book-opd-number.component';
import { CurrentVirusUpdateComponent } from './component/dashboard/current-virus-update/current-virus-update.component';
import { DoctorPrescriptionComponent } from './component/dashboard/doctor-prescription/doctor-prescription.component';
import { MyDetailsComponent } from './component/dashboard/my-details/my-details.component';
import { ShowNearestHospitalComponent } from './component/dashboard/show-nearest-hospital/show-nearest-hospital.component';

const routes: Routes = [
  {path : 'dashboard', children : [
    {path : '', redirectTo: 'my-details', pathMatch: 'full'},
    {path : 'my-details', component: MyDetailsComponent},
    {path : 'book-opd-number', component: BookOpdNumberComponent},
    {path : 'current-virus-update', component: CurrentVirusUpdateComponent},
    {path : 'doctor-prescription', component: DoctorPrescriptionComponent},
    {path : 'show-nearest-hospital', component: ShowNearestHospitalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
