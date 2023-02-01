import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/services/payment.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent  implements OnInit {

  public img: any;
  public id: any;
  public imageToShow: any;

  constructor(private router: Router,
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap?.get('id')
    this.getQR(this.route.snapshot.paramMap?.get('id'));
  }

  getQR(id: any) {
    this.paymentService.getQr(id).subscribe((res:any) => {
      this.img = res;
      this.createImageFromBlob(res);
      console.log(this.img);
    });
  }

  execute(): void {
    console.log(this.img, "IMG")
    this.paymentService.executeQr(this.img).subscribe((res: any) => {
      console.log(res);
      window.location.href = res.url + res.merchantOrderId;
    }
  )}

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
}
