const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.get("/", (req, res) => {
  res.render("pages/login");
});

router.get("/result", (req, res) => {
    res.render("pages/result", {
        title:"The Palindrome Results!"
    });
});

router.get("/private",async function(request,response){

});

router.get("/logout",async function(request,response){
    if(request.cookies.use){
        response.clearCookie("AuthCookie");
        next();
    }
});

router.post("/login",async function(request,response){
    var username = req.body.username,
    password = req.body.password;

    userData.findOne({ username: username }).then((user) => {
        if (!user) throw "User not found.";
        else{
        //   if(bcrypt.compareSync(password,user.password)){
        //     response.cookie("AuthCookie",user._id);
        //    //return user;
        //   }
            response.cookie("AuthCookie",user._id);
        }
    });
    response.render('pages/private',{user:user});
});

router.post("/private",(req,res)=>{
    let errors="";
    let result=req.body;
    if(!result["text-to-test"] || result["text-to-test"] === ""){
        errors="Must enter a string.";
    }
    if(errors.length > 0){
        res.render("palindrome/index", {
            errors: errors,
            hasErrors: true
        });
        return;
    }else{
        const chkResult=palindrome.isPalindrom(result["text-to-test"]);
        res.render("palindrome/result",{
            isPalindrome: chkResult,
            textPalindrome: result["text-to-test"],
            title: "The Palindrome Results!"
        });
    }
});


module.exports=router;