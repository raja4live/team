var Product= require('../models/product');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url='enter data base url';
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
var Myob=
   new Product({
     imagePath:'<a target="_blank"  href="https://www.amazon.in/gp/product/B008QTK47Q/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B008QTK47Q&linkCode=as2&tag=lootscart84-21&linkId=64df49c2c9b2c74f3a325b3f1acddb7b"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B008QTK47Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=lootscart84-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=lootscart84-21&l=am2&o=31&a=B008QTK47Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
    title:'Steam Iron',
     description:'Philips GC1905 1440-Watt Steam Iron with Spray',
     price:1845,
     sale:1399,
     discount:'24%',
     company: 'amazon',
     link:'https://www.amazon.in/gp/product/B008QTK47Q/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B008QTK47Q&linkCode=as2&tag=lootscart84-21&linkId=64df49c2c9b2c74f3a325b3f1acddb7b'

   })
;
db.collection("products").insertOne(Myob, function(err, res) {
   if (err) throw err;
   console.log("Number of records inserted: " + res.insertedCount);
   db.close();
});
});
