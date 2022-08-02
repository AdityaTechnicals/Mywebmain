const db =require("../connection/conn")
const file = require('fs');
// const module = require('module');
const bloggenrator = (req,res)=>{
    const id = req.params.blog;
    const query = "SELECT * FROM `bloginfo` WHERE `id` =?" ;
    class Newerror extends Error {
        constructor(){
            super();
            this.name = "Newerror";

            this.message = " no blog info found";
            // this.name = "bloginfo error"

        }
    }
    db.query(query, [id], (err, result) => {
        if (err) {
            throw new Error(err);
        }
        if(result) {
            res.render('404');
            throw new Newerror;
           
        }else if(result.length === 1){
        // console.log(result);
        const blogdata = {
            img : result[0].blogimage,
            title : result[0].blogtitle,
            data : result[0].blog_data,
            heading: result[0].blogHeading
        }
        res.render('blogtemplate',blogdata)
    }

    })

};
module.exports=bloggenrator;