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
var Myob=[
   new Product({
     imagePath:'<a target="_blank"  href="https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B01N29WP7D&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=lootscart84-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=lootscart84-21&l=am2&o=31&a=B01N29WP7D" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
     title:'1Shoes',
     description:'1Maddy Men`s Combo Pack Of 3 Footwear Outdoor Shoes, Loafers & Sneakers In Various Sizes',
     price:1499,
     sale:625,
     discount:'Flat 58%',
     company: 'amazon',
     link:'https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275'

   }),
   new Product({
     imagePath:'<a target="_blank"  href="https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B01N29WP7D&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=lootscart84-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=lootscart84-21&l=am2&o=31&a=B01N29WP7D" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
     title:'2Shoes',
     description:'1Maddy Men`s Combo Pack Of 3 Footwear Outdoor Shoes, Loafers & Sneakers In Various Sizes',
     price:1499,
     sale:625,
     discount:'Flat 58%',
     company: 'amazon',
     link:'https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275'

   }),
   new Product({
     imagePath:'<a target="_blank"  href="https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B01N29WP7D&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=lootscart84-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=lootscart84-21&l=am2&o=31&a=B01N29WP7D" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
     title:'3Shoes',
     description:'1Maddy Men`s Combo Pack Of 3 Footwear Outdoor Shoes, Loafers & Sneakers In Various Sizes',
     price:1499,
     sale:625,
     discount:'Flat 58%',
     company: 'amazon',
     link:'https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275'

   }),
   new Product({
     imagePath:'<a target="_blank"  href="https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B01N29WP7D&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=lootscart84-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=lootscart84-21&l=am2&o=31&a=B01N29WP7D" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
     title:'4Shoes',
     description:'1Maddy Men`s Combo Pack Of 3 Footwear Outdoor Shoes, Loafers & Sneakers In Various Sizes',
     price:1499,
     sale:625,
     discount:'Flat 58%',
     company: 'amazon',
     link:'https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275'

   }),
   new Product({
     imagePath:'<a target="_blank"  href="https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B01N29WP7D&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=lootscart84-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=lootscart84-21&l=am2&o=31&a=B01N29WP7D" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
     title:'5Shoes',
     description:'1Maddy Men`s Combo Pack Of 3 Footwear Outdoor Shoes, Loafers & Sneakers In Various Sizes',
     price:1499,
     sale:625,
     discount:'Flat 58%',
     company: 'amazon',
     link:'https://www.amazon.in/gp/product/B01N29WP7D/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01N29WP7D&linkCode=as2&tag=lootscart84-21&linkId=d52dbe0f2c3e5a8bc7b269d6e051f275'

   })
];
db.collection("products").insertMany(Myob, function(err, res) {
   if (err) throw err;
   console.log("Number of records inserted: " + res.insertedCount);
   db.close();
});
});
