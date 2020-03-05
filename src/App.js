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
      colection : "electric",
      password: "Erefurb",

      adviceNumber: null,
      palletList: [],
      customer: "",
      meterType: "",
      qty: "",
      palletNumber: "",
      trolleyNumber: "",
      jobNo:"",
      status: "",
      description: "",
      location1: "",
      location2: "",
      location3: "",
      date: null,
      scrapDate : null,
      updateDate : null,
      search: "",
      searchQuery:{},

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
      jobNo:"",
      status: "",
      description: "",
      location1: "",
      location2: "",
      location3: "",
      date: null,
      scrapDate : null,
      updateDate : null,
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
      this.adviceNumber();
      this.setState({
        date: this.date(1000 * 60 * 60 * 24 * 0),
        scrapDate: this.date(1000 * 60 * 60 * 24 * 91), // last digit = days 
        updateDate: null
      })
    }

    date = (addMonth)=>{
      let date = new Date();
      date = date.setMilliseconds(addMonth);
      return date;
    }

    adviceNumber = async ()=>{
      await db.collection("counter").find({"id" : "5e4bce1e1c9d4400005050e7"}).toArray().then(item=>{
        this.setState({adviceNumber : item[0].adviceNumberCounter});
      })

      await db.collection("counter").updateOne(
        { "id" : "5e4bce1e1c9d4400005050e7"},
        { "$set" : { "adviceNumberCounter" : this.state.adviceNumber +1 }},
        { "upsert": false }
     )
    }


    scrapCheck = (status)=>{
      return status === "BER" ? this.state.scrapDate : null
    }


  addPallet = async () =>{
     await db.collection(this.state.colection)
      .insertOne({ owner_id : client.auth.user.id, adviceNumber: this.state.adviceNumber ,customer: this.state.customer , meterType: this.state.meterType , qty: this.state.qty , palletNumber: this.state.palletNumber , trolleyNumber : this.state.trolleyNumber , jobNo : this.state.jobNo , status : this.state.status , date: this.state.date , scrapDate: this.scrapCheck(this.state.status) , updateDate: this.state.updateDate , description : this.state.description , location1 : this.state.location1 , location2: this.state.location2, location3 :this.state.location3})
      await this.listVisible();
      await this.pullList();
      await this.clearInput();

    };

    search = ()=>{
      if(this.state.search === ""){
        this.setState({
          searchQuery: {}
        })
      }
      else if(this.state.search === "Macquarie BG" || this.state.search === "Meterfit BG")
        this.setState({
          searchQuery: {itemSearch: "customer" , valueSearch: this.state.search}
        })
      else if(this.state.search === "5299" || this.state.search === "5394")
        this.setState({
          searchQuery: {itemSearch: "meterType" , valueSearch: this.state.search}
      })
      else if(this.state.search === "BER" || this.state.search === "Awaiting" || this.state.search === "Compleated")
      this.setState({
        searchQuery: {itemSearch: "status" , valueSearch: this.state.search}
      })
    }

    pullList = (search) =>{
    db.collection(this.state.colection)
    .find(search, {limit: 1000})   /*{"customer" : { "$exists": true }}*/
    .toArray()
    .then(item => {
      setTimeout(()=>{
        this.setState({palletList:item})
      },0)
      })
    }

    deleteItem = async (e,id)=>{
      var return_value=prompt("Do you want delete this pallet?");
      if(return_value===this.state.password){
        await db.collection(this.state.colection).deleteOne({"_id": { "$oid" : id }});
        await this.pullList();
      
      }else if(return_value === null){
        return 0
      }
      else{
        console.log(return_value)
          return window.alert("Wrong Password!");
      }
    }
      
      // if (window.confirm("Do you want delete this pallet?")) {
      // await db.collection(this.state.colection).deleteOne({"_id": { "$oid" : id }});
      // await this.pullList();
      // } else {
      //   return 0
      // }

  

    updateItem = async (e,id)=>{
      db.collection(this.state.colection).find({"_id": { "$oid" : id }}).toArray().then(item=>{
        this.setState({
          customer : item[0].customer,
          meterType: item[0].meterType,
          qty: item[0].qty,
          palletNumber: item[0].palletNumber,
          trolleyNumber: item[0].trolleyNumber,
          jobNo: item[0].jobNo,
          status: item[0].status,
          description: item[0].description,
          location1: item[0].location1,
          location2: item[0].location2,
          location3: item[0].location3,
          updateDate: this.date(1000 * 60 * 60 * 24 * 0),
          updateItemNo: id,
        })
        this.listVisible();
        this.updateButtonVisible(true);

        
      })
      // await db.collection(this.state.colection).updateOne({"_id": { "$oid" : id }}, {"$set": {"customer":this.state.customer , "meterType": this.state.meterType , "qty": this.state.qty , "palletNumber": this.state.palletNumber , "trolleyNumber" : this.state.trolleyNumber , "status" : this.state.status , "description" : this.state.description , "location" : `${this.state.location1} - ${this.state.location2} - ${this.state.location3}` }} , { "upsert": false });
      // // await this.clearInput();
      // await this.pullList();
    }

    updateConfirme = async () =>{
      var return_value=prompt("Do you want update this pallet?");
      if(return_value===this.state.password){

          await db.collection(this.state.colection).updateOne({"_id": { "$oid" : this.state.updateItemNo }}, {"$set": {"customer":this.state.customer , "meterType": this.state.meterType , "qty": this.state.qty , "palletNumber": this.state.palletNumber , "trolleyNumber" : this.state.trolleyNumber , "jobNo" : this.state.jobNo , "status" : this.state.status , "updateDate" : this.state.updateDate , "description" : this.state.description , "location1" : this.state.location1 , "location2": this.state.location2 , "location3" : this.state.location3 }} , { "upsert": false });
          // await this.clearInput(); 
          await this.listVisible();
          await this.updateButtonVisible(false);
          await this.clearInput()
          await this.pullList();
        
      }else if(return_value === null){
        return 0
      }
      else{
        console.log(return_value)
          return window.alert("Wrong Password!");
      }
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

      await db.collection(this.state.colection).find({"_id": { "$oid" : id }}).toArray().then(item=>{
        this.setState({
          customer : item[0].customer,
          meterType: item[0].meterType,
          qty: item[0].qty,
          palletNumber: item[0].palletNumber,
          trolleyNumber: item[0].trolleyNumber,
          jobNo: item[0].jobNo,
          status: item[0].status,
          description: item[0].description,
          location1: item[0].location1,
          location2: item[0].location2,
          location3: item[0].location3,
          date: item[0].date,
          scrapDate: item[0].scrapDate,
          updateDate: item[0].updateDate,
          updateItemNo: id,
          adviceNumber: item[0].adviceNumber,
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
        {this.state.printVisible ? <Label state={this.state}></Label> : this.state.listVisible ? <List search = {this.search} palletList = {this.state.palletList} updateItem={this.updateItem} delete={this.deleteItem} addPallet={this.addPallet} addPalletButton={this.addPalletButton} printButton={this.printButton} handleChange={this.handleChange} state={this.state}></List> : <Input backButton={this.backButton} updateButtonVisible={this.state.updateButtonVisible} updateConfirme={this.updateConfirme} addPalletButton={this.addPalletButton} addPallet={this.addPallet} handleChange={this.handleChange} state={this.state}></Input>}
      </div>
    );
  }
}

export default App;