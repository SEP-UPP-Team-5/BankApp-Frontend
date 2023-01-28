import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MerchantDto } from 'src/model/merchant-dto';
import { MerchantService } from 'src/services/merchant.service';

@Component({
  selector: 'app-merchants-page',
  templateUrl: './merchants-page.component.html',
  styleUrls: ['./merchants-page.component.css']
})
export class MerchantsPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'balance', 'funds', 'action'];
  dataSource: any;

  constructor(private router: Router,
    private merchantService: MerchantService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getMerchants();
  }

  getMerchants(): void {
    this.merchantService.getMerchants().subscribe({
      next: (accounts: MerchantDto[]) => { 
        this.dataSource =  accounts; 
        console.log(accounts)
      },
      error: (err) => { console.log(err) }
    })
  }

  createMerchant(): void {
    this.merchantService.addMerchant({}).subscribe((res: any) => {
      console.log(res);
    },
    error => {
      this.snackbar.open("Successfully added Merchant", 'OK', {"duration": 5000});
      window.location.reload()
    },
    () => {
      this.snackbar.open("Successfully added Merchant.", 'OK', {"duration": 5000});
      window.location.reload()
    }
  )}

  deleteMerchant(id: any): void {
    this.merchantService.deleteMerchant(id).subscribe((res: any) => {
      console.log(res);
    },
    error => {
      this.snackbar.open("Successfully deleted Merchant", 'OK', {"duration": 5000});
      window.location.reload()
    },
    () => {
      this.snackbar.open("Successfully deleted Merchant.", 'OK', {"duration": 5000});
      window.location.reload()
    }
  )}
}
