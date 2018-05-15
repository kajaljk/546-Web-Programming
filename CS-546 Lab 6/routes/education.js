
const express = require("express");
const router=express.Router();
const data = require("../data");
const userData = data.userdata;

router.get("/",(req,res)=>{
    let education = userData.getEducation();
    if(data !== null){
        res.json(education);
    }
    else{
        res.status(500).send();
    }
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports = router;