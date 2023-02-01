import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AppConstants } from 'src/utils/constants';

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

  executeQr(img: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.PAYMENT.QR;
    const formData = new FormData
    formData.append('file', img)
    return this.http.post(apiUrl, formData).pipe(map((item: any) => {
       return item;
      }))
  }

  getQr(id: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.PAYMENT.GET_QR;
    return this.http.get(apiUrl + "/" + id, {responseType: 'blob'});
  }
  
}
