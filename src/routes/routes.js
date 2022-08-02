const express = require("express");
const routes = express.Router();
const db = require("../connection/conn")
const bloggenrator = require("./blogcode")
routes.get("/", (req, res) => {    
  res.render("index")
});
routes.get("/about",(req, res) => res.render("About"));

routes.get("/blog",(req, res) => {

  const wery = "SELECT ALL FROM 'bloginfo' "
  db.query(wery,(err,data)=>{
    if(err){
      res.send(err);
    }else if(data.length>0){
      const obj1 = {
        properties:  "object for blogs",
        data : data
      }
      res.render("blog1",obj);
    }
  })

})
routes.get("/blog/:blog", bloggenrator)
//post reqest routes
routes.post("/message", async (req, res) => {
    try{
  const { name, phnum, email, message, options } = req.body;
  if (!name || !phnum || !email || !options || !message) {
    res.status(400).json({ message: "plz send all details" });
    window.location.replace("/");
    window.alert("Plz send all details");
    res.status(400).json({ message: "plz send all details" });
  }
  const qery ="INSERT INTO `contactinfo`( `Name`, `Phnum`, `emails`, `options`, `message`) VALUES (?,?,?,?,?)";
  const respo =await db.query(qery, [name, phnum, email, message, options]);
  if(respo ){
    res.status(201).json({ message:"message send successfuly"})
    Window.location.replace("/");
  }else{
    res.status(500).json({ message: "error sending message" });

  }
    }catch(e){
        console.log(e);
    }
});
routes.get("*", (req, res) => {
  res.render("404")
})
module.exports = routes;
