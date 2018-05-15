const fileData=require("./fileData");
const textMatrics=require("./textMetrics");

async function resultMatics(path){
    try{
        if(typeof path === undefined || typeof path !== "string"){
            throw `${path} is not valid file name.`;
        }
      
        let fileName=path.split(".")[0];

        fileData.getFileAsJSON(fileName.concat(".result.json"))
            .then((data)=>{
                console.log(data);
            })
            .catch((error)=>{
                 fileData.getFileAsString(path)
                    .then((data)=>{
                        let simplifyText=textMatrics.simplify(data);
                         fileData.saveStringToFile(fileName.concat(".debug.txt"),simplifyText)
                            .catch((error)=>{
                               throw error;
                            });
                        let resultMatics=textMatrics.createMetrics(data);
                         fileData.saveJSONToFile(fileName.concat(".result.json"),resultMatics)
                            .catch((error)=>{
                                throw error;
                            });
                    })
                    .catch((error)=>{
                        console.error(error);
                    });
            });
    }
    catch(error){
        console.error(error);
    }
}


try{
   
    resultMatics("chapter1.txt");
    resultMatics("chapter2.txt");
    resultMatics("chapter3.txt");

    // resultMatics(undefined);
    // resultMatics();
}
catch(error){
    console.error(error);
}
