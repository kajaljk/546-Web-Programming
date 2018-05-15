let exportedMethods = {
    isPalindrom(text){
        text = text.toLocaleLowerCase();

        //Remove all non-alphanumeric characters (?.!'," and so on)
        text = text.replace(/[^0-9a-z]/gi, "");

        //Convert all white space to simple spaces (new lines become spaces; tabs become spaces, etc)
        text = text.replace(/\s+/g, "");

        if (text == text.split("").reverse().join("")) {
            return true;
        } 
        else {
            return false;
        }
    }
}

module.exports = exportedMethods;