import { Component, Inject, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BankAccountDto } from 'src/model/bank-account-dto';
import { BankAccountService } from 'src/services/bank-account.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {

  public account: BankAccountDto = new BankAccountDto();
  constructor(
    public injector: Injector,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bankService: BankAccountService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount() {
    this.bankService.getById(this.data.id).subscribe((res:any) => {
      this.account = res;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  edit(): void {
    this.bankService.editAccount(this.data.id, this.account).subscribe((res: any) => {
      console.log(res);
    },
    error => {
      this.snackbar.open("Successfully edited Bank Acc.", 'OK', {"duration": 5000});
      window.location.reload();
    },
    () => {
      this.snackbar.open("Successfully edited Bank Acc.", 'OK', {"duration": 5000});
      window.location.reload();
    }
  )}
}
