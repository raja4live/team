var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
       imagePath: {type:String, required:true},
       title: {type:String, required:true},
       description: {type:String, required:true},
       price: {type:String, required:true},
       link: {type:String, required:true},
       sale: {type:String, required:true},
       discount: {type:String, required:true},
       company: {type:String, required:true},
       link: {type:String, required:true}
       
});
module.exports=mongoose.model('Loot',schema);
