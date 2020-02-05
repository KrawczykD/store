import React from 'react';
import List from './components/list';
import './App.css';

  const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
    } = require('mongodb-stitch-browser-sdk');

    const client = Stitch.initializeDefaultAppClient('werhouse-pnqbo');
    const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('refurb');
    client.auth.loginWithCredential(new AnonymousCredential());

class App extends React.Component {

    state = {
      palletList: [],
    }

    componentDidMount(){
      this.pullList();
    }

    componentDidUpdate(){

    }


  addPallet = () =>{
      db.collection("electric")
      .insertOne({ owner_id : client.auth.user.id, customer: 'Meterfit' , meterType: "5299" , qty: 100 , palletNumber: Math.random(30) , trolleyNumber : 100 , status : "read to go" , date: new Date().toDateString() , description : " Description ..." , location : "10-10-10"})
      this.pullList();
    };

    pullList = () =>{
    db.collection("electric")
    .find({"customer" : { "$exists": true }}, {limit: 1000})
    .toArray()
    .then(item => {
      setTimeout(()=>{
        this.setState({palletList:item})
      },0)
      })
    }

    deleteItem = async (id)=>{
      await db.collection("electric").deleteOne({"_id": { "$oid" : `${id}` }});
      await this.pullList();
    }

    updateItem = async (id)=>{
      await db.collection("electric").updateOne({"_id": { "$oid" : `${id}` }}, {"$set": {"customer":"update"}} , { "upsert": false });
      await this.pullList();
    }

    update = (e, id)=>{
      this.updateItem(id);
    }

    delete = (e,id)=>{
      this.deleteItem(id);
    }

    // confirmAlert = (id) =>{
    //   if (window.confirm("Do you want delete this pallet?")) {
    //     this.deleteItem(id);
    //     this.pullList();  
    //   } else {
    //     return 0;
    //   }
    


  render(){
    return (
      <div className="App">
        <List palletList = {this.state.palletList} update={this.update} delete={this.delete} addPallet={this.addPallet}></List>
      </div>
    );
  }
}

export default App;