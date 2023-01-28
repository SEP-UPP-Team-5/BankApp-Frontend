import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MerchantDto } from 'src/model/merchant-dto';
import { AppConstants } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }
  
  getMerchants(): Observable<MerchantDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.MERCHANT.GET;
    return this.http.get<MerchantDto[]>(apiUrl).pipe(map((data: MerchantDto[]) => {
      return data && data.map((elem: MerchantDto) => new MerchantDto(elem)) || [];
    }))
  }

  addMerchant(input?: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.MERCHANT.ADD;
    return this.http.post(apiUrl, input).pipe(map((item: any) => {
       return item;
      }))
  }
}
