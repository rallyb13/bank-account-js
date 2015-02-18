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
      newBankAccount.deposit(100);
      newBankAccount.withdraw(90);
      expect(newBankAccount.balance).to.equal(10);
    });
    it("limits the withdrawl amount to available balance", function() {
      var newBankAccount = Object.create(BankAccount);
      newBankAccount.deposit(100);
      newBankAccount.withdraw(150);
      expect(newBankAccount.balance).to.equal(100);
    });
    it("limits the withdrawl amount to $500", function() {
      var newBankAccount = Object.create(BankAccount);
      newBankAccount.deposit(1000);
      newBankAccount.withdraw(600)
      expect(newBankAccount.balance).to.equal(1000);
    });
  });

});
