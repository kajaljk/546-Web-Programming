const geometry = require("./geometry");
const utility = require("./utilities");

const volOfPrism = geometry.volumeOfRectangularPrism(10,2,3);
const areaOfPrism = geometry.surfaceAreaOfRectangularPrism(10,2,3);
const volOfSphere=geometry.volumeOfSphere(4);
const areaOfSphere=geometry.surfaceAreaOfSphere(5);

const first = {a: 2, b:{c:3}};
const second = {a: 2, b: 3};
const third = {a: 2, b: 3};
const four=first;
const no1={
    t1:{a:1,b:2},
    t2:{c:3,d:4}
    ,t3:{e:5,f:6}
};
const no2={
    t1:{a:1,b:2},
    t2:{c:3,d:4}
    ,t3:{e:5,f:16}
};

const testArr = ["a", "a", "b", "a", "b", "c"];
const  aArr = ['a', 1, 'a', 2, '1'];
const bArr = [4,5,4,6,3,4,5,2,23,1,4,4,4];
const test = "Hello, the pie is in the oven";
try {
    console.log(`Volume Of Rectangular Prism : ${volOfPrism}`); // outputs 60
    console.log(geometry.volumeOfRectangularPrism(1,2,3)); // outputs 6
    console.log(geometry.volumeOfRectangularPrism(10,20,3)); // outputs 600
    //console.log(geometry.volumeOfRectangularPrism(1,2,-3)); // throw an error
    //console.log(geometry.volumeOfRectangularPrism()); // throw an error

    console.log(`Surface Area Of Rectangular Prism : ${areaOfPrism}`); // outputs 112
    console.log(geometry.surfaceAreaOfRectangularPrism(1,2,3)); // outputs 22
    console.log(geometry.surfaceAreaOfRectangularPrism(10,20,3)); // outputs 580
    //console.log(geometry.surfaceAreaOfRectangularPrism(1,2,-3)); // throw an error
    //console.log(geometry.surfaceAreaOfRectangularPrism()); // throw an error

    console.log(`Volume Of Sphere : ${volOfSphere}`); // outputs 268.082573106329
    console.log(geometry.volumeOfSphere(1)); // outputs 4.1887902047863905
    console.log(geometry.volumeOfSphere(5)); // outputs 523.5987755982987
    //console.log(geometry.volumeOfSphere(-3)); // throw an error
    //console.log(geometry.volumeOfSphere()); // throw an error

    console.log(`Surface Area Of Sphere : ${areaOfSphere}`);  //outputs 314.1592653589793
    console.log(geometry.surfaceAreaOfSphere(1)); // outputs 12.566370614359172
    console.log(geometry.surfaceAreaOfSphere(3)); // outputs 113.09733552923255
    //console.log(geometry.surfaceAreaOfSphere(-3)); // throw an error
    //console.log(geometry.surfaceAreaOfSphere()); // throw an error

    console.log(utility.deepEquality(first,second)); // false
    console.log(utility.deepEquality(first,four)); // true
    console.log(utility.deepEquality(second,third)); // true
    console.log(utility.deepEquality(no1, no2)); // false
    //console.log(utility.deepEquality(undefined, undefined)); //throw an error
    // console.log(utility.deepEquality(true,'str')); //throw an error
    //console.log(utility.deepEquality(no1, 'no2')); // throw an error

    console.log(utility.uniqueElements(testArr)); // outputs 3
    console.log(utility.uniqueElements(aArr)); // outputs 4
    console.log(utility.uniqueElements(bArr)); // outputs 7
    //console.log(utility.uniqueElements(123));  //throw an error
    //console.log(utility.uniqueElements());  //throw an error

    console.log(utility.countOfEachCharacterInString(test)); 
    console.log(utility.countOfEachCharacterInString("test throw an error")); 
    console.log(utility.countOfEachCharacterInString("a1b1c1d1e1f1a2b2c2d2e2f2a3b3c3d3e3f3")); 
    //console.log(utility.countOfEachCharacterInString(bArr));  //throw an error
    //console.log(utility.countOfEachCharacterInString());  //throw an error
} catch (error) {
    console.log(error);
}
