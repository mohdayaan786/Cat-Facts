import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",async(req,res)=>{
      try{
        const result = await axios.get("https://cat-fact.herokuapp.com/facts");
        
        res.render("index.ejs", {
               facts0 : result.data[0].text,
               facts1 : result.data[1].text,
               facts2 : result.data[2].text,
               facts3 : result.data[3].text,
               facts4 : result.data[4].text,


        });
      } catch(error){
        console.log(error.data);
        res.status(500);
      }
    
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})