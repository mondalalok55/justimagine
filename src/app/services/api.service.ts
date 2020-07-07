
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
providedIn: 'root'
})
export class ApiService {


    //--------------------------------------------------------
  //------ header setup with token
  //--------------------------------------------------------
  httpOptionsForToken: any = {
    headers: new HttpHeaders({
      'Accept': 'aplication/json',
      Authorization: '',
    })
  }



  //--------------------------------------------------------
  //------ header setup without token
  //--------------------------------------------------------
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      
    })
  }


  //--------------------------------------------------------
  //------ all api lists
  //--------------------------------------------------------
  allApiEndPoints: Array<string> = [
    `${environment.apiUrl}/user/login/`,                        // 0
  ];




constructor(private http: HttpClient) {}

// post(serviceName: string, data: any) {
// const headers = new HttpHeaders();
// const options = { headers: headers, withCredintials: false };
// const url = environment.apiUrl + serviceName;

// return this.http.post(url, JSON.stringify(data), options);
// }

  //--------------------------------------------------------
  //------ HTTP call with token setup 
  //--------------------------------------------------------
  sendHttpCallWithToken(url: any, data: any = '', method: any = 'get') {
    if (navigator.onLine === false) {
      console.log('No internet Connection');
      // this.showToast('Opps, unable to connect internet');
    } else {
      // console.log(httpOptions);
      switch (method) {
        case 'post':
          console.log(data);
          return this.http.post<any>(url, data, this.httpOptionsForToken);

        case 'get':
          console.log(data);
          return this.http.get<any>(url, this.httpOptionsForToken);

        case 'put':
          console.log(data);
          return this.http.put<any>(url, data, this.httpOptionsForToken);

        case 'delete':
          console.log(data);
          return this.http.delete<any>(url, this.httpOptionsForToken);

        default:
          console.log('Add method');
      }
    }
  }





  //--------------------------------------------------------
  //------ HTTP call without token setup 
  //--------------------------------------------------------
  sendHttpCall(url: any, data: any = '', method: any = 'get') {
    if (navigator.onLine === false) {
      console.log('No internet Connection');      
      // this.showToast('Opps, unable to connect internet');
    } else {

      switch (method) {
        case 'post':
          console.log(data);
          return this.http.post<any>(url, data, this.httpOptions);
  
        case 'get':
          console.log(data);
          return this.http.get<any>(url, this.httpOptions);
  
        case 'put':
          console.log(data);
          return this.http.put<any>(url, data, this.httpOptions);
  
        case 'delete':
          console.log(data);
          return this.http.delete<any>(url, this.httpOptions);
  
        default:
          confirm('Add Method');
      }

    }
    
  }










}



