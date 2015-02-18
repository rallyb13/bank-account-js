var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  }
};


$(document).ready(function() {
  $("form#signUpForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseFloat($("input#initialDeposit").val());

    var newBankAccount = Object.create(BankAccount);
    newBankAccount.name = name;
    newBankAccount.deposit(initialDeposit);

    $(".accountHolder").text(newBankAccount.name);
    $(".currentBalance").text(newBankAccount.balance);
    $("#balance").show();

    name = $("input#name").val("");
    initialDeposit = $("input#initialDeposit").val("");

    $("form#transferForm").submit(function(event) {
      event.preventDefault();
      var inputtedDeposit = parseFloat($("input#deposit").val());
      var inputtedWithdraw = parseFloat($("input#withdraw").val());

      if (isNaN(inputtedWithdraw)) {
        newBankAccount.deposit(inputtedDeposit);
      } else if (isNaN(inputtedDeposit)) {
        newBankAccount.withdraw(inputtedWithdraw);
      } else {
        newBankAccount.deposit(inputtedDeposit);
        newBankAccount.withdraw(inputtedWithdraw);
      }

      $(".currentBalance").text(newBankAccount.balance);

      inputtedDeposit = $("input#deposit").val("");
      inputtedWithdraw = $("input#withdraw").val("");

    });
  });
});
