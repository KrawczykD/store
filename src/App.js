import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      works!
    </div>
  );
}

export default App;



// const {
//   Stitch,
//   RemoteMongoClient,
//   AnonymousCredential
// } = require('mongodb-stitch-browser-sdk');

// const client = Stitch.initializeDefaultAppClient('werhouse-pnqbo');

// const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('refurb');

// client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
// db.collection('electric').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
// ).then(() =>
// db.collection('electric').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
// ).then(docs => {
//   console.log("Found docs", docs)
//   console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//   console.error(err)
// });



// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Document</title>

//   <script src="https://s3.amazonaws.com/stitch-sdks/js/bundles/4.6.0/stitch.js"></script>
// <script>
//   const client = stitch.Stitch.initializeDefaultAppClient('werhouse-pnqbo');

//   const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('refurb');

//   function addComment() {
//     let data = new Date();
//     console.log(data)
  
//   db.collection("electric")
//     .insertOne({ owner_id : client.auth.user.id, customer: 'Macquarie' , data: data , meterType: "5299"})
//     .then(displayComments);
// }

//   function displayComments() {

  
//   db.collection("electric")
//     .find({}, {limit: 1000})
//     .toArray()
//     .then(item => {
//       let list = document.createElement("ul");
//       list.classList.add("list");

//       item.forEach(item => {
//       let li = document.createElement("li");
//       li.innerText = `${item.customer}`;
//       list.appendChild(li);
//       document.body.appendChild(list);
        
//       });
//     })
//     .then(console.log("end"));
// }

// addComment();
// // displayComments();
  
  
// </script>

// </head>
// <body>
// </body>
// </html>