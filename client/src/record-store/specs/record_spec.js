var assert = require('assert');
var Record = require('../record.js');

describe('Record', function() {
  it('should be Nirvana, Nevermind, 9.99', function () {
    var nevermind = new Record({artist:"Nirvana", title:"Nevermind", price:9.99});
    assert.equal("Nirvana", nevermind.artist);
    assert.equal("Nevermind", nevermind.title);
    assert.equal(nevermind.price, 9.99);
  });
  it('should be Johnny Cash, All My Friends Are Cowboys, 12.99', function () {
    // var cowboys = new Record("Johnny Cash", "All My Friends Are Cowboys", 12.99);
    var cowboys = new Record({artist:"Johnny Cash", title:"All My Friends Are Cowboys", price:12.99});
    assert.equal("Johnny Cash", cowboys.getArtist());
    assert.equal("All My Friends Are Cowboys", cowboys.getTitle());
    assert.equal(cowboys.getPrice(), 12.99);
  });
});
