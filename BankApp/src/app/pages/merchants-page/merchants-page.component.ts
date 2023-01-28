import { Component, OnInit } from '@angular/core';
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
    private merchantService: MerchantService) { }

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

}
