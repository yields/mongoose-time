
# mongoose-time

timestamps for mongoose, populates `created_at` and `updated_at`.

## Installation

    $ npm install mongoose-time

## Usage

```javascript

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , model = mongoose.model.bind(mongoose)
  , timestamps = require('mongoose-time');

var schema = new Schema({}).plugin(timestamps());
var Artist = model('Artist', schema);

```

## Running tests

make sure you edit [db.json](/yields/mongoose-time/blob/master/test/db.json) to set the database the test
should run on.

    $ make test

## License

MIT
