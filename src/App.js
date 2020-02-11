import React from 'react';
import List from './components/List';
import Input from './components/Input';
import Label from './components/Label';
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
      customer: "",
      meterType: "",
      qty: "",
      palletNumber: "",
      trolleyNumber: "",
      status: "",
      description: "",
      location1: "",
      location2: "",
      location3: "",
      date: null,
      scrapDate : null,

      listVisible: true,
      updateButtonVisible: false,
      printVisible : false,
      updateItemNo: "",
    }

    componentDidMount(){
      this.pullList();
    }

    componentDidUpdate(){
    }

    clearInput = () =>{
      this.setState({
      customer: "",
      meterType: "",
      qty: "",
      palletNumber: "",
      trolleyNumber: "",
      status: "",
      description: "",
      location1: "",
      location2: "",
      location3: "",
      date: null,
      scrapDate : null,
      updateItemNo: "",
      printVisible: false,
      });
    }

    listVisible = ()=>{
      this.setState({
        listVisible: !this.state.listVisible
      })
    }

    updateButtonVisible = (state)=>{
      this.setState({
        updateButtonVisible: state
      })
    }

    addPalletButton = () =>{
      this.listVisible();
      this.setState({
        date: this.date(0),
        scrapDate: this.date(3)
      })
    }

    date = (addMonth)=>{
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth()+1+addMonth;
      let year = date.getFullYear();

      let newDate = `${day} / ${month} / ${year} `

      return newDate;
    }


  addPallet = () =>{
      db.collection("electric")
      .insertOne({ owner_id : client.auth.user.id, customer: this.state.customer , meterType: this.state.meterType , qty: this.state.qty , palletNumber: this.state.palletNumber , trolleyNumber : this.state.trolleyNumber , status : this.state.status , date: this.state.date , scrapDate: this.state.scrapDate , description : this.state.description , location1 : this.state.location1 , location2: this.state.location2, location3 :this.state.location3})
      this.listVisible();
      this.pullList();
      this.clearInput();
    };

    pullList = () =>{
    db.collection("electric")
    .find({}, {limit: 1000})   /*{"customer" : { "$exists": true }}*/
    .toArray()
    .then(item => {
      setTimeout(()=>{
        this.setState({palletList:item})
      },0)
      })
    }

    deleteItem = async (e,id)=>{
      await db.collection("electric").deleteOne({"_id": { "$oid" : id }});
      await this.pullList();
    }

  

    updateItem = async (e,id)=>{
      db.collection("electric").find({"_id": { "$oid" : id }}).toArray().then(item=>{
        this.setState({
          customer : item[0].customer,
          meterType: item[0].meterType,
          qty: item[0].qty,
          palletNumber: item[0].palletNumber,
          trolleyNumber: item[0].trolleyNumber,
          status: item[0].status,
          description: item[0].description,
          location1: item[0].location1,
          location2: item[0].location2,
          location3: item[0].location3,
          updateItemNo: id
        })
        this.listVisible();
        this.updateButtonVisible(true);

        
      })
      // await db.collection("electric").updateOne({"_id": { "$oid" : id }}, {"$set": {"customer":this.state.customer , "meterType": this.state.meterType , "qty": this.state.qty , "palletNumber": this.state.palletNumber , "trolleyNumber" : this.state.trolleyNumber , "status" : this.state.status , "description" : this.state.description , "location" : `${this.state.location1} - ${this.state.location2} - ${this.state.location3}` }} , { "upsert": false });
      // // await this.clearInput();
      // await this.pullList();
    }

    updateConfirme = async () =>{
      await db.collection("electric").updateOne({"_id": { "$oid" : this.state.updateItemNo }}, {"$set": {"customer":this.state.customer , "meterType": this.state.meterType , "qty": this.state.qty , "palletNumber": this.state.palletNumber , "trolleyNumber" : this.state.trolleyNumber , "status" : this.state.status , "description" : this.state.description , "location1" : this.state.location1 , "location2": this.state.location2 , "location3" : this.state.location3 }} , { "upsert": false });
      // await this.clearInput();
      await this.listVisible();
      await this.updateButtonVisible(false);
      await this.clearInput()
      await this.pullList();
    }

    backButton = ()=>{
      this.listVisible();
      this.updateButtonVisible(false);
      this.clearInput()
      // console.log('back')
    }

    print = async () =>{
      await window.print()
      await this.clearInput();
    }

    printButton = async (e ,id) =>{
      // this.setState({
      //   printVisible: false,
      // })

      await db.collection("electric").find({"_id": { "$oid" : id }}).toArray().then(item=>{
        this.setState({
          customer : item[0].customer,
          meterType: item[0].meterType,
          qty: item[0].qty,
          palletNumber: item[0].palletNumber,
          trolleyNumber: item[0].trolleyNumber,
          status: item[0].status,
          description: item[0].description,
          location1: item[0].location1,
          location2: item[0].location2,
          location3: item[0].location3,
          date: item[0].date,
          scrapDate: item[0].scrapDate,
          updateItemNo: id,
          printVisible:true
        })
      })
      this.print();
    }

    // update = (e, id)=>{
    //   this.updateItem(e,id);
    // }

    // delete = (e,id)=>{
    //   this.deleteItem(id);
    // }


    // handleChangeSelect = (e)=>{
    //   this.setState({[e.target.name]: e.target.value})
    // }

    handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
      // console.log(e.target)
      // console.log(this.state.qty)
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
        {this.state.printVisible ? <Label state={this.state}></Label> : this.state.listVisible ? <List palletList = {this.state.palletList} updateItem={this.updateItem} delete={this.deleteItem} addPallet={this.addPallet} addPalletButton={this.addPalletButton} printButton={this.printButton}></List> : <Input backButton={this.backButton} updateButtonVisible={this.state.updateButtonVisible} updateConfirme={this.updateConfirme} addPalletButton={this.addPalletButton} addPallet={this.addPallet} handleChange={this.handleChange} state={this.state}></Input>}
      </div>
    );
  }
}

export default App;