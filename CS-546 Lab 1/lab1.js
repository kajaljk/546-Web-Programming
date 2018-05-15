const questionOne = function questionOne(arr) {
    let sumSqrt=0;
    if(arr != undefined && arr.length > 0)
    {
        arr.forEach(element => {
            if(!isNaN(element)){
                sumSqrt+=element*element;
            }
        });
    }
    return sumSqrt;
}

const questionTwo = function questionTwo(num) { 
    if(isNaN(num)){
        return NaN;
    }
    else{
        if(num < 1)
            return 0;
        if(num == 1)
            return 1;
        return questionTwo(num-2)+questionTwo(num-1);
    }
}

const questionThree = function questionThree(text) {
    if(text != undefined && text.length > 0)
        return text.match(/[aeiou]/gi) == null ? 0 :text.match(/[aeiou]/gi).length;
    return 0;
}

const questionFour = function questionFour(num) {
    if(isNaN(num)){
        return NaN;
    }
    else{
        if(num < 0) return NaN;
        if(num == 0) return 1;
        
        let result=1;
        for(let x=num;x>0;x--){
            result=result*x;
        }
        return result;
    }
}

module.exports = {
    firstName: "KAJAL", 
    lastName: "KHUNT", 
    studentId: "10429885",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};