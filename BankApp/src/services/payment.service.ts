import { HttpClient } from '@angular/common/http';
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
  
}
