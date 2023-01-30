import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CardInfoDto } from 'src/model/card-info-dto';
import { PaymentService } from 'src/services/payment.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  public id: any;
  public cardInfo: CardInfoDto = new CardInfoDto();

  constructor(private router: Router,
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap?.get('id')
  }

  execute(): void {
    //this.cardInfo.validUntil = "2024-01-01T00:00:00.000000000"
    this.cardInfo.paymentId = this.id;
    this.paymentService.execute(this.cardInfo).subscribe((res: any) => {
      console.log(res);
    }
  )}
}
