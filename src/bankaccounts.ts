class BankAccount {
    applyFee() {
        throw new Error("Method not implemented.");
    }
    balance: number = 0;
    interestRates: number = 0;
    constructor (balance: number, interestRates: number) {
        this.balance = balance;
        this.interestRates = interestRates;
    }

    addInterest(): void {
       this.balance = this.balance * (1 + this.interestRates);
    }
}
export default BankAccount