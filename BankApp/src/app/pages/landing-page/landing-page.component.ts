import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BankAccountDto } from 'src/model/bank-account-dto';
import { BankAccountService } from 'src/services/bank-account.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public account: BankAccountDto = new BankAccountDto();

  constructor(private router: Router,
    private bankService: BankAccountService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {}


  createBankAcc(): void {
    this.bankService.addBankAccount(this.account).subscribe((res: any) => {
      console.log(res);
    },
    error => {
      this.snackbar.open("Successfully added Bank Acc.", 'OK');
    },
    () => {
      this.snackbar.open("Successfully added Bank Acc.", 'OK');
    }
  )}

}
