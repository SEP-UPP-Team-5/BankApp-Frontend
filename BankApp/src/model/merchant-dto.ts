export class MerchantDto {
    id: number;
    balance: number;
    reservedFunds: number;
    merchantId: any;
    merchantPassword: any;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.merchantPassword = obj && obj.merchantPassword || "";
        this.merchantId = obj && obj.merchantId || "";
        this.balance = obj && obj.balance || 0;
        this.reservedFunds = obj && obj.reservedFunds || 0;
    }
}