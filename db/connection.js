import mongoose from "mongoose";

//const dblink= "mongodb+srv://shivam:shivam420@cluster0.wukke.mongodb.net/testMern?retryWrites=true&w=majority" ;
const dblink= "mongodb+srv://shivamsxn:Mongodb12345@cluster0.rs30p.mongodb.net/sample?retryWrites=true&w=majority";
mongoose.connect(dblink, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

)

.then(() => {
    console.log("connection succesfull")
})
.catch((err) =>{
    console.log("Connection failed",err)
})