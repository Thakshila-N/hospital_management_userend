import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit{

  form !: FormGroup;
  title !: string;
  name !: string;
  mobile !: string;
  gender !: string;
  email !: string;
  birthdate !: Date;


  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AddPatientComponent>

  ){
    this.title = data.title;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id:['', []],
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      
      email: ['', [Validators.required]],
      birthdate: ['', []],
      gender: ['',[]]
    })
  }

  cancelRegistration(){
    this.dialogRef.close();
  }

  register(){
    this.dialogRef.close(this.form.value);
  }



}
