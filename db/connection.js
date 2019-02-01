const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bookapp");
mongoose.Promise = Promise;
module.exports = mongoose;
