const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES
app.post("/todos", async (req,res) =>{
    try{
        
            const{ description } = req.body;
            
            console.log(description);
            const newTodo =  pool.query("INSERT INTO todo (description) VALUES ($1)",[description]);     
            res.json(newTodo);


    } catch(err){
        console.error(err.messsge);

    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
