var BankView = function(bank) {
  this.total = function() {
    var total = document.getElementById('total')
    total.innerText = "Total: £" + bank.totalCash();
  },
  this.totalBusiness = function() {
    var totalBusiness = document.getElementById('business-total');
    totalBusiness.innerText = "Total in business: £" + bank.totalCash('business');
  },
  this.totalPersonal = function() {
    var totalPersonal = document.getElementById('personal-total');
    totalPersonal.innerText = "Total in personal: £" + bank.totalCash('personal');
  },
  this.accountList = function() {
    var accountList = document.getElementById('accounts');
    for(account of bank.accounts){
      var accountListItem = document.createElement('li');
      accountListItem.innerText = account.owner + ": £" + account.amount;
      accountList.appendChild(accountListItem);
    }
  },
  this.businessList = function() {
    var businessList = document.getElementById('business-accounts');
    for(account of bank.filteredAccounts('business')){
      var accountListItem = document.createElement('li');
      accountListItem.innerText = account.owner + ": £" + account.amount;
      businessList.appendChild(accountListItem);
    }
  },
  this.personalList = function() {
    var personalList = document.getElementById('personal-accounts');
    for(account of bank.filteredAccounts('personal')){
      var accountListItem = document.createElement('li');
      accountListItem.innerText = account.owner + ": £" + account.amount;
      personalList.appendChild(accountListItem);
    }
  },
  this.interestButton = function() {
    var totalBusiness = document.getElementById('business-total');
    var totalPersonal = document.getElementById('personal-total');
    var interestButton = document.getElementById('button');
    var businessList = document.getElementById('business-accounts');
    var accountList = document.getElementById('accounts');
    var personalList = document.getElementById('personal-accounts');
    interestButton.onclick = function() {
      businessList.innerText = null
      personalList.innerText = null
      accountList.innerText = null
      bank.accountInterest();
      // total.innerText = "Total: £" + bank.totalCash();
      // totalBusiness.innerText = "Total in business: £" + bank.totalCash('business');
      // totalPersonal.innerText = "Total in personal: £" + bank.totalCash('personal');
      this.total();
      this.totalBusiness();
      this.totalPersonal();
      this.personalList();
      this.businessList();
      this.accountList();

    }.bind(this);
  },
  this.render = function() {
    this.total();
    this.totalBusiness();
    this.totalPersonal();
    this.accountList();
    this.businessList();
    this.personalList();
    this.interestButton();
  },
  this.clearElement = function(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}

module.exports = BankView;
