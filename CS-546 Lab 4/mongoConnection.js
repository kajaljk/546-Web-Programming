
const MongoClient = require("mongodb").MongoClient;

const setting={
    "mongoConfig":{
        "serverUrl":"mongodb://localhost:27017/",
        "database" :"Kajal_Khunt_lab4"
    }
};

let fullMongoUrl = setting.mongoConfig.serverUrl + setting.mongoConfig.database;
let _connection = undefined;
let _db = undefined;

module.exports = async () => {
    if (!_connection) {
      _connection = await MongoClient.connect(fullMongoUrl);
      _db = await _connection.db(setting.mongoConfig.database);
    }
  
    return _db;
  };