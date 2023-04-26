import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { MaterialModule } from './material/material/material.module';
import { MyDetailsComponent } from './component/dashboard/my-details/my-details.component';
import { CurrentVirusUpdateComponent } from './component/dashboard/current-virus-update/current-virus-update.component';
import { BookOpdNumberComponent } from './component/dashboard/book-opd-number/book-opd-number.component';
import { DoctorPrescriptionComponent } from './component/dashboard/doctor-prescription/doctor-prescription.component';
import { ShowNearestHospitalComponent } from './component/dashboard/show-nearest-hospital/show-nearest-hospital.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { AddPatientComponent } from './component/dashboard/my-details/add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    CurrentVirusUpdateComponent,
    BookOpdNumberComponent,
    DoctorPrescriptionComponent,
    ShowNearestHospitalComponent,
    SidebarComponent,
    AddPatientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddPatientComponent]
})
export class AppModule { }
