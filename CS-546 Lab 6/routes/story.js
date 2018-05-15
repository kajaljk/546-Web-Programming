
const express = require("express");
const router=express.Router();
const data = require("../data");
const userData = data.userdata;

router.get("/",(req,res)=>{
    let story = userData.getStory();
    if(data !== null){
        res.json(story);
    }
    else{
        res.status(500).send();
    }
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports = router;