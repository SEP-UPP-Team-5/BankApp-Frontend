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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToBankAccounts() {
    this.router.navigateByUrl('/bankAcc');
    this.btnBanks = false;
    this.btnHome = true;
  }

  goToHome() {
    this.router.navigateByUrl('');
    this.btnBanks = true;
    this.btnHome = false;
  }
}
