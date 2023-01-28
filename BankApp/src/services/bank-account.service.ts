import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BankAccountDto } from 'src/model/bank-account-dto';
import { AppConstants } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }
  
  getBankAccounts(): Observable<BankAccountDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.BANK_ACC.GET;
    return this.http.get<BankAccountDto[]>(apiUrl).pipe(map((data: BankAccountDto[]) => {
      return data && data.map((elem: BankAccountDto) => new BankAccountDto(elem)) || [];
    }))
  }
}
