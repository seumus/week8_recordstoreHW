var RecordStore = require('./record-store/record_store.js');
var sampleAccounts = require('./sample.json');
var Record = require('./record-store/record.js');
// var BankView = require('./bankview.js');

window.onload = function() {
  console.log("Sample accounts ", sampleAccounts);

  var store = new RecordStore("Apple","Glasgow");
  for(recordData of sampleAccounts) {
    store.addRecord(new Record(recordData));
  }

  // var bankview = new BankView(bank)

  console.log("We created a bank in the browser!", store);
  // bankview.render()
  console.log(store.listInventory())
  store.listInventory();

  var storetitle = document.getElementById('store');
  storetitle.innerText = store.name + " in " + store.city

 // recordList = function() {
    var recordList = document.getElementById('records');

    for(record of store.records){
      var recordListItem = document.createElement('li');
      var button = document.createElement('button');
      recordListItem.innerText = record.artist + ": £" + record.price;
      recordList.appendChild(recordListItem);
    }

}
