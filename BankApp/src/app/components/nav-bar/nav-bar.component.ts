import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  btnBanks: boolean = true;
  btnHome: boolean = false;
  btnMerchant: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToBankAccounts() {
    this.router.navigateByUrl('/bankAcc');
    this.btnBanks = false;
    this.btnHome = true;
    this.btnMerchant = true;
  }

  goToHome() {
    this.router.navigateByUrl('');
    this.btnBanks = true;
    this.btnHome = false;
    this.btnMerchant = true;
  }

  goToMerchants() {
    this.router.navigateByUrl('/merchant');
    this.btnBanks = true;
    this.btnHome = false;
    this.btnMerchant = true;
  }
}
