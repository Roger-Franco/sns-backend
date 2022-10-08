const mongoose = require('mongoose')

module.exports = {
  connectToDatabae(mongo_rul) {
    mongoose.connect(mongo_rul, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }, () => console.log('Connected to Database'))
  }
}