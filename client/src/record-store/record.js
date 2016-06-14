function Record(params){
  this.artist = params.artist;
  this.title  = params.title;
  this.price  = params.price;
}

Record.prototype = {
  getArtist: function(){
    return this.artist;
  },

  getTitle: function(){
    return this.title;
  },

  getPrice: function(){
    return this.price;
  }

}

module.exports = Record;
