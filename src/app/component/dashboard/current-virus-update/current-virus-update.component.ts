// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-current-virus-update',
  templateUrl: './current-virus-update.component.html',
  styleUrls: ['./current-virus-update.component.scss']
})
export class CurrentVirusUpdateComponent implements OnInit {

  covidData: any = {};
  totalConfirmed: number = 0;
  totalDeaths: number = 0;
  totalRecovered: number = 0;

  countries: any[] = [];
  srilankaData: any;


  constructor(private dataService: DataService, dataService1 : DataService) {}

  ngOnInit(): void {
    this.dataService.getSummaryData()
      .subscribe(
        (data: any) => {
          this.covidData = data.Global;
          this.totalConfirmed = data.Global.TotalConfirmed;
          this.totalDeaths = data.Global.TotalDeaths;
          this.totalRecovered = data.Global.TotalRecovered;
          console.log('summary data', data);
        },
        error => {
          console.error('Failed to fetch COVID-19 data', error);
        }
      );

    
      this.dataService.getSrilankaData().subscribe(data => {
        this.srilankaData = data;
      });

      





          
  //     this.dataService.getCountryData('LK')
  // .subscribe(
  //   (data: any) => {
  //     this.sriLankaData = data;
  //     console.log('Sri Lanka data', data);
  //   },
  //   error => {
  //     console.error('Failed to fetch Sri Lanka data', error);
  //   }
  // );
      
            


  }

}
