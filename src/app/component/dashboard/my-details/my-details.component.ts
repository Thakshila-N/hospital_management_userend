import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DataService } from 'src/app/shared/service/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.scss']
})
export class MyDetailsComponent implements OnInit{

constructor(
  public dialog : MatDialog,
  private dataApi : DataService ,
  private _snackBar : MatSnackBar
  ){}

ngOnInit(): void {
  
}

//add patient detils
addPatient(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    title : 'Register'
  }

  const dialogRef = this.dialog.open(AddPatientComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(data=>{
    if(data){
      this.dataApi.addUser(data);
      this.openSnackBar("Registration of user is sucess !", "OK");
    }
  })


}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}

}
