const bill1 = {
  bank: {
    name: 'my bank',
    amount: {
      value: 1000,
      currency: 'RUB'
    }
  }
};

const bill2 = {
  bank: {}
};

// Old
function getBillValueFrom(bill) {
  return bill && bill.bank && bill.bank.amount && bill.bank.amount.value
    ? bill.bank.amount.value
    : undefined;
}

console.log(getBillValueFrom(bill1));
console.log(getBillValueFrom(bill2));

// new
function getBillValueFrom(bill) {
  return bill?.bank?.amount?.value;
}
console.log(getBillValueFrom(bill1));
console.log(getBillValueFrom(bill2));
