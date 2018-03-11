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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into users collection
  // name, age and location
  // collection method and print ops

  // db.collection('Users').insertOne({
  //   name: 'Sergio',
  //   age: 29,
  //   location: 'Avila'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0].id.getTimestamp(), undefined, 2));
  // });

  client.close();
});
