class Wallet {
    constructor(cash) {
        let _money = cash;
        this.getMoney = () => _money;
        this.updateWallet = value => _money += value;
    }
    checkIfCanPlay(value) {
        if (!(typeof value === `number`) || isNaN(value)) {
            alert(`Nie podales liczby!`);
            return;
        }
        return this.getMoney() >= value ? true : false;
    }
}
// const wallet = new Wallet();