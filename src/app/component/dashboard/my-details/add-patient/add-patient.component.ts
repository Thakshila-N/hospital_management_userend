import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit{

  form !: FormGroup;
  title !: string;


  constructor(
    private fb : FormBuilder
  ){}

  ngOnInit(): void {
    
  }
}
