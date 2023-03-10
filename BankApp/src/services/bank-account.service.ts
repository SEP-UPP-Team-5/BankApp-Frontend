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

  getById(id: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.BANK_ACC.GET;
    return this.http.get(apiUrl + "/" + id);
  }

  addBankAccount(input: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.BANK_ACC.ADD;
    return this.http.post(apiUrl, input).pipe(map((item: any) => {
       return item;
      }))
  }

  deleteAccount(id: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.BANK_ACC.GET;
    return this.http.delete(apiUrl + "/" + id);
  }

  editAccount(id: any, input: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.BANK_ACC.GET;
    return this.http.put(apiUrl + "/" + id, input);
  }
}
