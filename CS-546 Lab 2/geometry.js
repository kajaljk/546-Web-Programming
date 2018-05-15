function checkIsNumber(variableName,variableValue){
    if(variableValue === undefined){
        throw `${variableName || 'Parameter' } is not defined.`;
    }
    else if(typeof variableValue !== "number" || variableValue <= 0){
        throw `${variableName || 'Parameter' } is not a number. It should be positive number.`;
    }
}

module.exports = {
    volumeOfRectangularPrism : function(length, width, height){
        checkIsNumber("Rectangular Prism Length",length);
        checkIsNumber("Rectangular Prism Width",width);
        checkIsNumber("Rectangular Prism Height",height);
        return length*width*height;
   },
   surfaceAreaOfRectangularPrism : function(length, width, height){
        checkIsNumber("Rectangular Prism Length",length);
        checkIsNumber("Rectangular Prism Width",width);
        checkIsNumber("Rectangular Prism Height",height);
        return 2*((length*width)+(width*height)+(height*length));
   },
   volumeOfSphere : function(radius){
        checkIsNumber("Sphere Radious",radius);
        return ((4/3)*(Math.PI*Math.pow(radius,3)));
   },
   surfaceAreaOfSphere : function(radius){
        checkIsNumber("Sphere Radious",radius);
        return (4*(Math.PI*Math.pow(radius,2)));
   }
   
}
