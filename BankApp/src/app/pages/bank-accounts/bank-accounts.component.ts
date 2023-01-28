import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private bankService: BankAccountService,
    private snackbar: MatSnackBar) { }

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

  deleteBankAcc(id: any): void {
    this.bankService.deleteAccount(id).subscribe((res: any) => {
      console.log(res);
    },
    error => {
      this.snackbar.open("Successfully deleted Bank Account", 'OK', {"duration": 5000});
      window.location.reload()
    },
    () => {
      this.snackbar.open("Successfully deleted Account.", 'OK', {"duration": 5000});
      window.location.reload()
    }
  )}

}
