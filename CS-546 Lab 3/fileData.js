
const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const file = bluebird.promisifyAll(require("fs"));

const getFileAsString = async function getFileAsString(path){
    return await new Promise((fullfill,reject)=>{
        
        if(typeof path === undefined || typeof path !== "string"){
            throw "File path is invalid.";
        }
        else{
             file.readFile(path,"utf-8",(error,data)=>{
                if(error){
                    reject(error);
                }
                else{
                    fullfill(data);
                }
            
            });
        }
    });
}

const getFileAsJSON = async function getFileAsJSON(path){
    return await new Promise((fullfill,reject)=>{
        if(typeof path === undefined || typeof path !== "string"){
           throw "File path is invalid.";
        }
        else{
             file.readFile(path,"utf-8",(error,data)=>{
                if(error){
                    reject(error);
                }
                else{
                    let parseData=JSON.parse(data);
                    fullfill(parseData);
                }
            });
        }
    });
}

const saveStringToFile = async function saveStringToFile(path,text){
    return await new Promise((fullfill,reject)=>{
        if(typeof path === undefined || typeof path !== "string" || typeof text === undefined || typeof text !== "string"){
            throw "File path or Text is invalid.";
        }
        else{
             file.writeFile(path,text,(error)=>{
                if(error){
                    reject(error);
                }
                else{
                    fullfill(`File created ${path} and text written ${text}`);
                }
            });
        }
   });    
}

const saveJSONToFile = async function saveJSONToFile(path,obj){
    return await new Promise((fullfill,reject)=>{
        let text=JSON.stringify(obj);
        if(typeof path === undefined || typeof path !== "string" || typeof text === undefined || typeof text !== "string"){
            throw "File path or Text is invalid.";
        } 
        else{
             file.writeFile(path,text,(error)=>{
                if(error){
                    reject(error);
                }
                else{
                    fullfill(`File created ${path} and JSON written ${text}`);
                }
            });
        }
   });
}

module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
}