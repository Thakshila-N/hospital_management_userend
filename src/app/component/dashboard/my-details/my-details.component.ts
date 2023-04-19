import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.scss']
})
export class MyDetailsComponent implements OnInit{

constructor(
  public dialog : MatDialog
  ){}

ngOnInit(): void {
  
}

//add patient detils
addPatient(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    title : 'Register patient'
  }

  const dialogRef = this.dialog.open(AddPatientComponent, dialogConfig);
}


}
