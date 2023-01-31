import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  myForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
    private bankService: BankAccountService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      cardHolderName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')] ]
   });
  }


  createBankAcc(): void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      this.snackbar.open('Please check the fields and try again', 'OK');
      return;
    }
    const account = new BankAccountDto();
    account.cardHolderName = this.myForm.get('cardHolderName')?.value;
    this.bankService.addBankAccount(account).subscribe((res: any) => {
      console.log(res);
    },
    error => {
      this.snackbar.open("Successfully added Bank Acc.", 'OK');
      window.location.reload();
    },
    () => {
      this.snackbar.open("Successfully added Bank Acc.", 'OK');
    }
  )}

}
