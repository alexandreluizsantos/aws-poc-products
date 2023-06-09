var port = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send("Hello GitHub Actions")
});

app.listen( port, function (){
    console.log(`Listening on port ${port}!`);
    console.log(`DB host: ${process.env.DB_HOSTNAME}`)
});


/*
var MongoClient = require('mongodb').MongoClient;
                  
//Create a MongoDB client, open a connection to Amazon DocumentDB as a replica set,
//  and specify the read preference as secondary preferred
var client = MongoClient.connect(
`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:27017/?ssl=true&ssl_ca_certs=us-east-1-bundle.pem&retryWrites=false`
{ 
  useNewUrlParser: true
},


function(err, client) {
    if(err)
        throw err;
    //Specify the database to be used
    db = client.db('sample-database');
    
    //Specify the collection to be used
    col = db.collection('sample-collection');

    //Insert a single document
    col.insertOne({'hello':'Amazon DocumentDB'}, function(err, result){
      //Find the document that was previously written
      col.findOne({'hello':'Amazon DocumentDB'}, function(err, result){
        //Print the result to the screen
        console.log(result);
        
        //Close the connection
        client.close()
      });
   });
});
*/                    