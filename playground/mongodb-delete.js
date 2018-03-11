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
  db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result)=> {
    console.log(result);
  });

  //deleteMany
  //deleteOne
  //findOneAndDelete

  // db.collection('Todos').count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find({_id: new ObjectID ('5aa2783f41d3e373c036d987')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // client.close();
});
