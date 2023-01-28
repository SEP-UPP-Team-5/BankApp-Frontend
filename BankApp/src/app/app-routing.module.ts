import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountsComponent } from './pages/bank-accounts/bank-accounts.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MerchantsPageComponent } from './pages/merchants-page/merchants-page.component';

const routes: Routes = [
  { path: "landing", component:  LandingPageComponent},
  { path: "bankAcc", component:  BankAccountsComponent},
  { path: "merchant", component:  MerchantsPageComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
