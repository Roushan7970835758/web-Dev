// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/harryKart');


var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

// db.once('open',function(){
//     //we're connected!
//     console.log("file connected to mongoDb")

// });

var kittySchema = new mongoose.Schema({
    name:String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'My name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  }
  
  const Kitten = mongoose.model('Kitten', kittySchema);

  var harryKitty = new Kitten({name:'harryKitty'});
  var harryKitty = new Kitten({name:'harryKitty2'});
//   console.log(harryKitty.name);
//   harryKitty.speak();

harryKitty.save(function(err,harryKitty){
    if(err)return console.error(err);
    //harryKitty.speak();
});
harryKitty2.save(function(err,k){
    if(err)return console.error(err);
    //k.speak();
});

Kitten.find({name:"harryKitty2"},function(err,kittens){
    if(err) return console.error(err);
    console.log(kittens);
})
