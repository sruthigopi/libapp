const express = require("express");
const libModel = require("./models/booksDb");
const cors =require("cors")
const app = new express;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/viewbook',async(req,res)=>{
var data=await libModel.find();
res.json(data)
})
app.use(cors());
// search
app.get('/search',(req,res)=>{
   
    const BookName = req.query.BookName;
    console.log("book name",BookName)
    const searchCriteria = {
        BookName:  BookName
      };

      libModel.find(searchCriteria)
    .then((documents) => {
        console.log(documents)
      res.json(documents);
    })
    .catch((err) => {
      console.error('Error occurred while searching:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});


app.post('/addbooks',async (req,res)=>{
    console.log(req.body);
var data =await new libModel(req.body);
data.save();
res.send({status:"data saved"})
})

app.delete("/deletebook/:id",async(req,res)=>{
console.log(req.params.id);
let id= req.params.id
await libModel.findByIdAndDelete(id)
res.json({status:"deleted"})
})

app.put('/edit/:id', async(req,res)=>{
    let id =req.params.id;
    try{
        await libModel.findByIdAndUpdate(id, req.body);
        res.send("Data updated successfully");
    }
    catch(err){
        res.status(500).send(err)
    }
})

app.listen(3008,()=>{
    console.log("server is listen to 3008");

})