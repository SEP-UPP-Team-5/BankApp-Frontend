export class CardInfoDto {
    pan: any;
    securityCode: any;
    cardHolderName: string;
    validUntil: any;
    paymentId: any;

    constructor(obj?:any) {
        this.pan = obj && obj.pan || 0;
        this.securityCode = obj && obj.securityCode || 0;
        this.cardHolderName = obj && obj.cardHolderName || "";
        this.validUntil = obj && obj.validUntil || "";
        this.paymentId = obj && obj.paymentId || 0;
    }
}
