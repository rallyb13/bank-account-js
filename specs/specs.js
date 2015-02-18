describe("BankAccount", function() {
  describe("balance", function() {
    it("return the current balance which starts at 0", function() {
      var newBankAccount = Object.create(BankAccount);
      expect(newBankAccount.balance).to.equal(0);
    });
  });
  describe("deposit", function() {
    it("add the deposit amount to the current balance", function() {
      var newBankAccount = Object.create(BankAccount);
      newBankAccount.deposit(55);
      expect(newBankAccount.balance).to.equal(55);
    });
  });
  describe("withdraw", function() {
    it("subtracts the withdrawl amount from the current balance", function() {
      var newBankAccount = Object.create(BankAccount);
      newBankAccount.withdraw(90);
      expect(newBankAccount.balance).to.equal(-90);
    });
  });
});
