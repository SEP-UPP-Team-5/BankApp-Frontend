import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AppConstants } from 'src/utils/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  execute(input: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.PAYMENT.EXECUTE;
    return this.http.post(apiUrl, input).pipe(map((item: any) => {
       return item;
      }))
  }

  executeQr(img: File) : Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('image', img);

    const apiUrl = AppConstants.API_HOST + AppConstants.PAYMENT.QR;
    return this.http.post(apiUrl, data).pipe(map((item: any) => {
       return item;
      }))
  }

  getQr(id: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.PAYMENT.GET_QR;
    return this.http.get(apiUrl + "/" + id, {responseType: 'blob'});
  }
  
}
