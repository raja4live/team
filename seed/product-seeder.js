var Product= require('../models/product');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url='mongodb://raja4live:affiliateid84@ds159892.mlab.com:59892/affiliate';
mongoose.Promise = global.Promise;
mongoose.connect(url,{ useMongoClient: true, /* other options */ }, function(err, db){
      if(err){
        return err;
      }
      console.log('connected succesfully');
      console.log('----------------------------------------------');
      db.collection("customers").find({}).toArray(function(err, result) {
       if (err) throw err;
       console.log(result);

     });
var Myob=[
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 2',
     description:'Awesome Game',
     price:10
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 1',
     description:'Awesome Game',
     price:20
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 3',
     description:'Awesome Game',
     price:30
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 4',
     description:'Awesome Game',
     price:40
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 5',
     description:'Awesome Game',
     price:50
   })
];
db.collection("products").insertMany(Myob, function(err, res) {
   if (err) throw err;
   console.log("Number of records inserted: " + res.insertedCount);
   db.close();
});
});
