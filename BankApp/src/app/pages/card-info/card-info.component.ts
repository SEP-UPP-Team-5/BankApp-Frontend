import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
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
  myForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap?.get('id')
    this.myForm = this.fb.group({
      pan: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      securityCode: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      cardHolderName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      validUntil: ['', [Validators.required]]
   });
  }

  execute(): void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      this.snackbar.open('Please check the fields and try again', 'OK');
      return;
    }

    const cardInfo = new CardInfoDto();
    cardInfo.pan =  this.myForm.get('pan')?.value;
    cardInfo.securityCode =  this.myForm.get('securityCode')?.value;
    cardInfo.cardHolderName =  this.myForm.get('cardHolderName')?.value;
    cardInfo.validUntil =  this.myForm.get('validUntil')?.value;
    cardInfo.paymentId = this.id;

    this.paymentService.execute(cardInfo).subscribe((res: any) => {
      window.location.href = res.url + res.merchantOrderId;
    }
  )}
}
