export class BankAccountDto {
    id: number;
    panNumber: any;
    securityCode: any;
    cardHolderName: string;
    validUntil: any;
    balance: any;
    reservedFunds: any;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.panNumber = obj && obj.panNumber || 0;
        this.securityCode = obj && obj.securityCode || 0;
        this.cardHolderName = obj && obj.cardHolderName || "";
        this.validUntil = obj && obj.validUntil || "";
        this.balance = obj && obj.balance || 0;
        this.reservedFunds = obj && obj.reservedFunds || 0;
    }
}
