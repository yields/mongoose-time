
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model.bind(mongoose)
  , timestamps = require('..')
  , schema = Schema({}).plugin(timestamps())
  , Artist = model('Artist', schema)
  , to = require('./db').database;

describe('timestamps', function () {

  before(function () {
    mongoose.connect(to);
  })

  it('should create populate `created_at` n `updated_at`', function (done) {
    var now = Date.now();
    new Artist().save(function (err, doc) {
      if (err) done(err);
      doc.created_at.should.be.within(now, Date.now());
      doc.created_at.should.be.within(now, Date.now());
      done();
    })
  })

  it('should only set `updated_at` when a doc is updated', function (done) {
    var artist = new Artist();
    artist.save(function (err, old) {
      if (err) done(err);
      var prior = Date.now();
      var c = old.created_at;
      var u = old.updated_at;
      setTimeout(function () {
        artist.save(function (err, doc) {
          if (err) done(err);
          doc.updated_at.should.be.above(+doc.created_at);
          doc.updated_at.should.be.above(+u);
          doc.created_at.should.eql(+c);
          done();
        })
      }, 1000);
    })
  })

})
