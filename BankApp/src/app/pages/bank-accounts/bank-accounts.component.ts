import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccountDto } from 'src/model/bank-account-dto';
import { BankAccountService } from 'src/services/bank-account.service';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'valid', 'pan', 'balance', 'action'];
  dataSource: any;
  public accounts: any;

  constructor(private router: Router,
    private bankService: BankAccountService) { }

  ngOnInit(): void {
    this.getBankAccounts();
  }

  getBankAccounts(): void {
    this.bankService.getBankAccounts().subscribe({
      next: (accounts: BankAccountDto[]) => { 
        this.dataSource =  accounts; 
        console.log(accounts)
      },
      error: (err) => { console.log(err) }
    })
  }

}
