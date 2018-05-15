function checkDeepEquality(obj1, obj2) 
{
    if(typeof obj1 !== typeof obj2){
        return false;
    }
    if(obj1 === obj2){
        return true;
    }

    let obj1Keys=Object.keys(obj1);
    let obj2Keys=Object.keys(obj2);
    if (typeof obj1 === "object" && typeof obj2 === "object")
    {
        if (obj1Keys.length !== obj2Keys.length)
        {
            return false;
        }
        let result = true;
        for (obj in obj1)
        {
            result = checkDeepEquality(obj1[obj], obj2[obj]);
            if (result == false) {
                return false;
            }
        }
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = {
    deepEquality:function(obj1,obj2){
        if(obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null){
            throw "Parameter is not passed to function deepEquality.";
        }
        else if(typeof obj1 !== "object" || typeof obj2 !== "object"){
            throw "Object is not passed as parameter to function deepEquality.";
        }
        else
            return checkDeepEquality(obj1,obj2);
    },
    uniqueElements : function(arr){
        if(arr === undefined || arr === null){
            throw "Parameter is not passed to function uniqueElements";
        }
        else if(Array.isArray(arr) === false){
            throw "Array is not passed to function uniqueElements";
        }
        return arr.filter((T,i,a)=> a.indexOf(T)===i).length;
    },
    countOfEachCharacterInString : function(str){
        if(typeof str !== "string" || str === undefined || str === null){
            throw "String is not passed to function countOfEachCharacterInString";
        }

        let charMap={};
        let ch,cnt;
        for(let x=0;x<str.length;x++){
            ch=str.charAt(x);
            cnt=charMap[ch];
            charMap[ch]=cnt?cnt+1:1;
        }
        return charMap;
    }
}