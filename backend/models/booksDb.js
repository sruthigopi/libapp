const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sruthigkani:sruthi@cluster0.v3fy1hn.mongodb.net/libdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>{console.log(err)});
let Schema =mongoose.Schema;

const libSche = new Schema({
    BookName:String,
    AutherName:String,
    language:String,
    genree:String,
    BookNumber:Number
});
var libModel =mongoose.model("book",libSche);
module.exports =libModel