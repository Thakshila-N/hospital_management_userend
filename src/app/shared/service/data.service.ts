import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private http : HttpClient) { }

  // Add user
  addUser(user : any){
    user.id = this.afs.createId();
    return this.afs.collection("UserRegister/").add(user);
  }

  private apiUrl = 'https://api.covid19api.com/summary';

// get covid 19 summary data from api
getSummaryData(){
  return this.http.get('https://api.covid19api.com/summary');
}

getSrilankaData(): Observable<any> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(data => {
      const srilanka = data.Countries.find((c: { CountryCode: string; }) => c.CountryCode === 'LK');
      return srilanka;
    })
  );
}


}
