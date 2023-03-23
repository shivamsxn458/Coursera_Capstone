import express, { response } from "express";
import usermodel from "./Database/Schema.js";
import bodyParser from "body-parser";

const app=express();
app.use(express.json());

import '../Server/db/connection.js';
// import req from "express/lib/request";

// Below is for Get request and Post request

app.get("/",async(request,response) =>{
try{    
    
         const data=await usermodel.find()
         response.send(data);
}
catch(e){console.log(e)}
})

app.post("/post", async(req, res) =>{

try{    const {id,name,email,contact}= req.body;
        // console.log(data)
        const dA=new usermodel({name,email,contact})
        await dA.save()
        // res.send(data)
}
catch(e){console.log(e)}
    }
)

app.patch("/update/:id", async(req, res) =>{

    try{  const id=req.params.id;
        console.log(id);
        const updateData=await usermodel.findByIdAndUpdate(id, req.body, {new: true});
        res.send(updateData);
           }

           catch(e) {console.log(e)
        
        }
}
)

const listenfirst = () => {
    console.log("called listen first function")

}

app.listen(3000,listenfirst() );  



// Above code is for Get request and Post request

