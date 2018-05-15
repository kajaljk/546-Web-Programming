const express = require("express");
const router = express.Router();
const data = require("../data");
const palindrome = data.palindrome;

router.get("/", (req, res) => {
  res.render("pages/index", {title:"The Best Palindrome Checker in the World!"});
});

router.get("/result", (req, res) => {
  res.render("pages/result", {title:"The Palindrome Results!"});
});

router.post("/result",(req,res)=>{
    let errors="";
    let result=req.body;
    if(!result["text-to-test"] || result["text-to-test"] === ""){
        errors="Must enter a string.";
    }
    if(errors.length > 0){
        //res.statusCode = 400;
        res.status(400).render("pages/index", {
            errors: errors,
            hasErrors: true
        });
        return;
    }else{
        const chkResult=palindrome.isPalindrom(result["text-to-test"]);
        res.render("pages/result",{
            isPalindrome:chkResult,
            textPalindrome:result["text-to-test"],
            title:"The Palindrome Results!"
        });
    }
});


module.exports=router;