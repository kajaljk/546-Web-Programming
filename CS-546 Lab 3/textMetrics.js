const hashMap = require("hashmap");

const textMatrics = module.exports = {
    simplify : function(text){
        let simplifyText=text;
        //Convert the text to lowercase
        simplifyText = simplifyText.toLowerCase();

        //Remove all characters except for letters and whitespace characters
        simplifyText = simplifyText.replace(/[^0-9a-z]/gi,' ');

        //Convert all white space to simple spaces (new lines become spaces; tabs become spaces, spaces stay the same, etc)
        simplifyText = simplifyText.replace(/\s+/g,' ');
        
        //Convert all duplicate spaces to be single spaces
        simplifyText = simplifyText.replace(/  +/g,' ');
        
        //Trim the whitespace off the start and end of the text
        simplifyText = simplifyText.trim();

        return simplifyText;
        
    },
    createMetrics : function(text){
        let matricsObject= new Object();
        let hmap=new hashMap.HashMap();
        let simplifyText = textMatrics.simplify(text);

        matricsObject.totalLetters=simplifyText.replace(/[^0-9a-z]/gi,'').length;

        matricsObject.totalWords=simplifyText.split(' ').length;

        simplifyText.split(' ').forEach((element)=>{
            if(hmap.get(element)){
                hmap.set(element,hmap.get(element)+1);
            }
            else{
                hmap.set(element,1);
            }
        });
        matricsObject.uniqueWords=hmap.count();

        let longWordCnt=0;
        simplifyText.split(' ').forEach((element)=>{
            if(element.length > 5 ){
                longWordCnt++;
            }
        });
        matricsObject.longWords=longWordCnt;

        matricsObject.averageWordLength=matricsObject.totalLetters / matricsObject.totalWords;
        
        let wordOccurrences={};
        hmap.forEach((value, key) => {
            wordOccurrences[key] = value;
        });
        matricsObject.wordOccurrences=wordOccurrences;

        return matricsObject;
    }
}
