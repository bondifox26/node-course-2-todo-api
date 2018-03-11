// cd Program Files/MongoDB/Server/3.6/bin
// mongod.exe --dbpath /Users/lbrav/mongo-data

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB server');
  const db = client.db("TodoApp");
  //findOneAndUpdate

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID ('5aa033e2dd34c539740feaab')
  }, {
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // client.close();
});
