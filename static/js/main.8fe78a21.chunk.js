(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=(a(32),a(21)),o=a(2),i=a.n(o),u=a(6),p=a(8),m=a(9),d=a(11),h=a(10),E=a(12),b=a(26),v=a(4),f=a(5),N=function(e){var t,a=function(e){if(null==e)return"";var t=new Date(e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(a,"/").concat(n,"/").concat(r)},n=function(e){return e.scrapDate<(new Date).setMilliseconds(0)&&"BER"===e.status?"ber":""},l=Object(b.a)(e.palletList),c=[],s=[];return!0===e.state.archive?(c=l.filter((function(t){return t["".concat(e.state.searchQuery.itemSearch)]===e.state.searchQuery.valueSearch&&!0===t.deleted})),t=r.a.createElement("ul",{className:"headings"},r.a.createElement("li",null,r.a.createElement("p",null,"Advice Number")," ",r.a.createElement("p",null,"Customer")," ",r.a.createElement("p",null,"Meter Type")," ",r.a.createElement("p",null,"Quantity")," ",r.a.createElement("p",null,"Pallet Number")," ",r.a.createElement("p",null,"Trolley Number")," ",r.a.createElement("p",null,"Job Number")," ",r.a.createElement("p",null,"Status")," ",r.a.createElement("p",null,"Create Date")," ",r.a.createElement("p",null,"Scrap Date BER")," ",r.a.createElement("p",null,"Update Date")," ",r.a.createElement("p",null,"Description")," ",r.a.createElement("p",null,"Location"))),c.forEach((function(t){s.push(r.a.createElement("li",{className:n(t),key:t._id},r.a.createElement("p",null,t.adviceNumber)," ",r.a.createElement("p",null,t.customer)," ",r.a.createElement("p",null,t.meterType)," ",r.a.createElement("p",null,t.qty)," ",r.a.createElement("p",null,t.palletNumber)," ",r.a.createElement("p",null,t.trolleyNumber)," ",r.a.createElement("p",null,t.jobNo)," ",r.a.createElement("p",null,t.status)," ",r.a.createElement("p",null,a(t.date))," ",r.a.createElement("p",null,a(t.scrapDate))," ",r.a.createElement("p",null,a(t.updateDate))," ",r.a.createElement("p",null,t.description)," ",r.a.createElement("p",null,t.location1,"/",t.location2,"/",t.location3),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(a){e.printButton(a,t._id.toString())}},r.a.createElement(v.a,{icon:f.e})))))}))):!1===e.state.archive&&(c=l.filter((function(t){return t["".concat(e.state.searchQuery.itemSearch)]===e.state.searchQuery.valueSearch&&!1===t.deleted})),t=r.a.createElement("ul",{className:"headings"},r.a.createElement("li",null,r.a.createElement("p",null,"Advice Number")," ",r.a.createElement("p",null,"Customer")," ",r.a.createElement("p",null,"Meter Type")," ",r.a.createElement("p",null,"Quantity")," ",r.a.createElement("p",null,"Pallet Number")," ",r.a.createElement("p",null,"Trolley Number")," ",r.a.createElement("p",null,"Job Number")," ",r.a.createElement("p",null,"Status")," ",r.a.createElement("p",null,"Create Date")," ",r.a.createElement("p",null,"Scrap Date BER")," ",r.a.createElement("p",null,"Update Date")," ",r.a.createElement("p",null,"Description")," ",r.a.createElement("p",null,"Location"))),c.forEach((function(t){s.push(r.a.createElement("li",{className:n(t),key:t._id},r.a.createElement("p",null,t.adviceNumber)," ",r.a.createElement("p",null,t.customer)," ",r.a.createElement("p",null,t.meterType)," ",r.a.createElement("p",null,t.qty)," ",r.a.createElement("p",null,t.palletNumber)," ",r.a.createElement("p",null,t.trolleyNumber)," ",r.a.createElement("p",null,t.jobNo)," ",r.a.createElement("p",null,t.status)," ",r.a.createElement("p",null,a(t.date))," ",r.a.createElement("p",null,a(t.scrapDate))," ",r.a.createElement("p",null,a(t.updateDate))," ",r.a.createElement("p",null,t.description)," ",r.a.createElement("p",null,t.location1,"/",t.location2,"/",t.location3),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(a){e.updateItem(a,t._id.toString())}},r.a.createElement(v.a,{icon:f.c})),r.a.createElement("button",{onClick:function(a){e.delete(a,t._id.toString())}},r.a.createElement(v.a,{icon:f.g})),r.a.createElement("button",{onClick:function(a){e.printButton(a,t._id.toString())}},r.a.createElement(v.a,{icon:f.e})))))}))),r.a.createElement("div",{className:"List"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"topBar"},r.a.createElement("div",{className:"searchField"},r.a.createElement("button",{className:"addButton",onClick:function(t){e.addPalletButton()}},r.a.createElement(v.a,{icon:f.d})),r.a.createElement("button",{className:"searchButton",onClick:function(t){e.search()}},r.a.createElement(v.a,{icon:f.f})),r.a.createElement("select",{className:"searchSelect",name:"search",type:"select",value:e.state.search,onChange:e.handleChange},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"Macquarie BG"},"Macquarie BG"),r.a.createElement("option",{value:"Meterfit BG"},"Meterfit BG"),r.a.createElement("option",{value:"SSE"},"SSE"),r.a.createElement("option",{value:"Meterfit Eon"},"Meterfit Eon"),r.a.createElement("option",{value:"Macquarie Eon"},"Macquarie Eon"),r.a.createElement("option",{value:"5299"},"5299 ( 140mm )"),r.a.createElement("option",{value:"5394"},"5394 ( 120mm )"),r.a.createElement("option",{value:"5424"},"5424 ( 100mm )"),r.a.createElement("option",{value:"Compleated"},"Compleated"),r.a.createElement("option",{value:"Awaiting"},"Awaiting"),r.a.createElement("option",{value:"Inprogress"},"Inprogress"),r.a.createElement("option",{value:"BER"},"BER"),r.a.createElement("option",{value:"Ready to be shipped"},"Ready to be shipped"),r.a.createElement("option",{value:"Parts"},"Parts")),r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Archive"),r.a.createElement("input",{className:"checkButton",name:"archive",type:"checkbox",onChange:e.handleArchive,value:e.state.archive}))),t),r.a.createElement("ul",{className:"element"},s)))},y=(a(38),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Input"},r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Customer:"),r.a.createElement("select",{name:"customer",value:this.props.state.customer,onChange:this.props.handleChange},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Macquarie BG"},"Macquarie BG"),r.a.createElement("option",{value:"Meterfit BG"},"Meterfit BG"),r.a.createElement("option",{value:"SSE"},"SSE"),r.a.createElement("option",{value:"Meterfit Eon"},"Meterfit Eon"),r.a.createElement("option",{value:"Macquarie Eon"},"Macquarie Eon"),r.a.createElement("option",{value:"Parts"},"Parts"))),r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Meter Type:"),r.a.createElement("select",{name:"meterType",value:this.props.state.meterType,onChange:this.props.handleChange},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"5299"},"5299 ( 140mm )"),r.a.createElement("option",{value:"5394"},"5394 ( 120mm )"),r.a.createElement("option",{value:"5424"},"5424 ( 100mm )"))),r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Quantity:"),r.a.createElement("input",{name:"qty",type:"number",value:this.props.state.qty,onChange:this.props.handleChange,placeholder:"Quantity"})),r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Pallet Number:"),r.a.createElement("input",{name:"palletNumber",type:"number",value:this.props.state.palletNumber,onChange:this.props.handleChange,placeholder:"Pallet Number"})),r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Trolley Number:"),r.a.createElement("input",{name:"trolleyNumber",type:"number",value:this.props.state.trolleyNumber,onChange:this.props.handleChange,placeholder:"Trolley Number"})),r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Job Number:"),r.a.createElement("input",{name:"jobNo",type:"number",value:this.props.state.jobNo,onChange:this.props.handleChange,placeholder:"Job Number"})),r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Status:"),r.a.createElement("select",{name:"status",value:this.props.state.status,onChange:this.props.handleChange},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Compleated"},"Compleated"),r.a.createElement("option",{value:"Awaiting"},"Awaiting"),r.a.createElement("option",{value:"BER"},"BER"),r.a.createElement("option",{value:"Inprogress"},"Inprogress"),r.a.createElement("option",{value:"Ready to be shipped"},"Ready to be shipped"))),r.a.createElement("label",null,r.a.createElement("p",{className:"inputLabel"},"Description:"),r.a.createElement("input",{name:"description",value:this.props.state.description,onChange:this.props.handleChange,placeholder:"Description",maxLength:"200"})),r.a.createElement("label",null,r.a.createElement("form",null,r.a.createElement("p",{className:"inputLabel"},"Location:"),r.a.createElement("input",{className:"inputLoc",type:"number",name:"location1",value:this.props.state.location1,onChange:this.props.handleChange,min:"1",max:"20"}),r.a.createElement("input",{className:"inputLoc",type:"number",name:"location2",value:this.props.state.location2,onChange:this.props.handleChange,min:"1",max:"20"}),r.a.createElement("input",{className:"inputLoc",type:"number",name:"location3",value:this.props.state.location3,onChange:this.props.handleChange,min:"1",max:"20"}))),r.a.createElement("button",{onClick:function(t){e.props.backButton(e.props.backButton)}},r.a.createElement(v.a,{icon:f.a})),this.props.updateButtonVisible?r.a.createElement("button",{onClick:function(t){e.props.updateConfirme(e.props.updateConfirm)}},r.a.createElement(v.a,{icon:f.b})):r.a.createElement("button",{onClick:function(t){e.props.addPallet()}},r.a.createElement(v.a,{icon:f.d})))}}]),t}(r.a.Component)),g=(a(39),function(e){var t=function(e){var t=new Date(e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(a,"/").concat(n,"/").concat(r)};return r.a.createElement(r.a.Fragment,null,console.log(e.state.scrapDate),r.a.createElement("div",{className:"label"},r.a.createElement("div",{className:"advice"},e.state.adviceNumber),r.a.createElement("div",{className:"eref"},"E-REF"),r.a.createElement("div",{className:"customerLabel"},"CUSTOMER"),r.a.createElement("div",{className:"customer"},e.state.customer),r.a.createElement("div",{className:"meterTypeLabel"},"METER TYPE"),r.a.createElement("div",{className:"meterType"},e.state.meterType+"-"+function(e){var t="";return"Macquarie BG"===e?t="MBL":"Meterfit BG"===e?t="MF4":"SSE"===e?t="SSE":"Macquarie Eon"===e?t="NP":"Meterfit Eon"===e&&(t="NP"),t}(e.state.customer)),r.a.createElement("div",{className:"status"},e.state.status),r.a.createElement("div",{className:"qtyLabel"},"QTY"),r.a.createElement("div",{className:"qty"},e.state.qty),r.a.createElement("div",{className:"trolleyNumberLabel"},"TROL NO"),r.a.createElement("div",{className:"trolleyNumber"},e.state.trolleyNumber),r.a.createElement("div",{className:"palletNumberLabel"},"PALLET NO"),r.a.createElement("div",{className:"palletNumber"},e.state.palletNumber),r.a.createElement("div",{className:"description"},e.state.description),r.a.createElement("div",{className:"dateLabel"},"Create Date"),r.a.createElement("div",{className:"date"},t(e.state.date)),r.a.createElement("div",{className:"scrapDateLabel"},"SCRAP Date"),r.a.createElement("div",{className:"scrapDate"},null===e.state.scrapDate?"":t(e.state.scrapDate)),r.a.createElement("div",{className:"authorLabel"},"Author"),r.a.createElement("div",{className:"author"},"Damian Krawczyk")))}),C=a(22),D=a(16),S=a(24),w=a.n(S);a(44);function B(){var e=Object(C.a)(["\n  display: block;\n  margin: 50vh auto;\n  border-color: red;\n"]);return B=function(){return e},e}var k=Object(D.css)(B()),j=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={loading:!0},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({loading:e.spinnerState})}},{key:"render",value:function(){return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(w.a,{css:k,size:30,color:"#000000",loading:this.state.loading}))}}]),t}(r.a.Component),x=(a(45),a(48)),L=x.Stitch,M=x.RemoteMongoClient,O=x.AnonymousCredential,T=L.initializeDefaultAppClient("werhouse-pnqbo"),q=T.getServiceClient(M.factory,"mongodb-atlas").db("refurb");T.auth.loginWithCredential(new O);var P=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={colection:"test",archive:!1,adviceNumber:null,palletList:[],customer:"",meterType:"",qty:"",palletNumber:"",trolleyNumber:"",jobNo:"",status:"",description:"",location1:"",location2:"",location3:"",date:null,scrapDate:null,updateDate:null,deleted:!1,search:"",searchQuery:{},spinner:!0,listVisible:!0,updateButtonVisible:!1,printVisible:!1,updateItemNo:""},a.clearInput=function(){a.setState({customer:"",meterType:"",qty:"",palletNumber:"",trolleyNumber:"",jobNo:"",status:"",description:"",location1:"",location2:"",location3:"",date:null,scrapDate:null,updateDate:null,updateItemNo:"",printVisible:!1})},a.listVisible=function(){a.setState({listVisible:!a.state.listVisible})},a.updateButtonVisible=function(e){a.setState({updateButtonVisible:e})},a.addPalletButton=function(){a.listVisible(),a.adviceNumber(),a.setState({date:a.date(0),scrapDate:a.date(78624e5),updateDate:null})},a.date=function(e){var t=new Date;return t=t.setMilliseconds(e)},a.adviceNumber=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.collection("counter").find({id:"5e4bce1e1c9d4400005050e7"}).toArray().then((function(e){a.setState({adviceNumber:e[0].adviceNumberCounter})}));case 2:return e.next=4,q.collection("counter").updateOne({id:"5e4bce1e1c9d4400005050e7"},{$set:{adviceNumberCounter:a.state.adviceNumber+1}},{upsert:!1});case 4:case"end":return e.stop()}}),e)}))),a.scrapCheck=function(e){return"BER"===e?a.state.scrapDate:null},a.addPallet=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=prompt("Do you want add this pallet?"),T.callFunction("password",[r,n]).then(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t){e.next=11;break}return e.next=3,q.collection(a.state.colection).insertOne({owner_id:T.auth.user.id,adviceNumber:a.state.adviceNumber,customer:a.state.customer,meterType:a.state.meterType,qty:a.state.qty,palletNumber:a.state.palletNumber,trolleyNumber:a.state.trolleyNumber,jobNo:a.state.jobNo,status:a.state.status,date:a.state.date,scrapDate:a.scrapCheck(a.state.status),updateDate:a.state.updateDate,description:a.state.description,location1:a.state.location1,location2:a.state.location2,location3:a.state.location3,deleted:a.state.deleted});case 3:return e.next=5,a.listVisible();case 5:return e.next=7,a.pullList();case 7:return e.next=9,a.clearInput();case 9:e.next=16;break;case 11:if(!1!==t){e.next=15;break}return e.abrupt("return",window.alert("Wrong Password!"));case 15:return e.abrupt("return",0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.search=function(){""===a.state.search?a.setState({searchQuery:{}}):"Macquarie BG"===a.state.search||"Meterfit BG"===a.state.search||"SSE"===a.state.search||"Meterfit Eon"===a.state.search||"Macquarie Eon"===a.state.search||"Parts"===a.state.search?a.setState({searchQuery:{itemSearch:"customer",valueSearch:a.state.search}}):"5299"===a.state.search||"5394"===a.state.search||"5424"===a.state.search?a.setState({searchQuery:{itemSearch:"meterType",valueSearch:a.state.search}}):"BER"!==a.state.search&&"Awaiting"!==a.state.search&&"Compleated"!==a.state.search&&"Inprogress"!==a.state.search&&"Ready to be shipped"!==a.state.search||a.setState({searchQuery:{itemSearch:"status",valueSearch:a.state.search}})},a.pullList=function(e){q.collection(a.state.colection).find(e,{limit:1e3}).toArray().then((function(e){setTimeout((function(){a.setState({palletList:e,spinner:!1})}),0)}))},a.deleteItem=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=prompt("Do you want delete this pallet?"),T.callFunction("passwordDelete",[r,n]).then(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t){e.next=9;break}return e.next=3,q.collection(a.state.colection).updateOne({_id:{$oid:n}},{$set:{deleted:!0}},{upsert:!1});case 3:return e.next=5,a.search();case 5:return e.next=7,a.pullList();case 7:e.next=14;break;case 9:if(!1!==t){e.next=13;break}return e.abrupt("return",window.alert("Wrong Password!"));case 13:return e.abrupt("return",0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.updateItem=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q.collection(a.state.colection).find({_id:{$oid:n}}).toArray().then((function(e){a.setState({customer:e[0].customer,meterType:e[0].meterType,qty:e[0].qty,palletNumber:e[0].palletNumber,trolleyNumber:e[0].trolleyNumber,jobNo:e[0].jobNo,status:e[0].status,description:e[0].description,location1:e[0].location1,location2:e[0].location2,location3:e[0].location3,updateDate:a.date(0),date:a.date(0),scrapDate:a.date(78624e5),updateItemNo:n}),a.listVisible(),a.updateButtonVisible(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.updateConfirme=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=prompt("Do you want update this pallet?"),T.callFunction("password",[t]).then(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t){e.next=13;break}return e.next=3,q.collection(a.state.colection).updateOne({_id:{$oid:a.state.updateItemNo}},{$set:{customer:a.state.customer,meterType:a.state.meterType,qty:a.state.qty,palletNumber:a.state.palletNumber,trolleyNumber:a.state.trolleyNumber,jobNo:a.state.jobNo,status:a.state.status,scrapDate:a.scrapCheck(a.state.status),updateDate:a.state.updateDate,description:a.state.description,location1:a.state.location1,location2:a.state.location2,location3:a.state.location3}},{upsert:!1});case 3:return e.next=5,a.listVisible();case 5:return e.next=7,a.updateButtonVisible(!1);case 7:return e.next=9,a.clearInput();case 9:return e.next=11,a.pullList();case 11:e.next=18;break;case 13:if(!1!==t){e.next=17;break}return e.abrupt("return",window.alert("Wrong Password!"));case 17:return e.abrupt("return",0);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),a.backButton=function(){a.listVisible(),a.updateButtonVisible(!1),a.clearInput()},a.print=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.print();case 2:return e.next=4,a.clearInput();case 4:case"end":return e.stop()}}),e)}))),a.printButton=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.collection(a.state.colection).find({_id:{$oid:n}}).toArray().then((function(e){a.setState({customer:e[0].customer,meterType:e[0].meterType,qty:e[0].qty,palletNumber:e[0].palletNumber,trolleyNumber:e[0].trolleyNumber,jobNo:e[0].jobNo,status:e[0].status,description:e[0].description,location1:e[0].location1,location2:e[0].location2,location3:e[0].location3,date:e[0].date,scrapDate:e[0].scrapDate,updateDate:e[0].updateDate,updateItemNo:n,adviceNumber:e[0].adviceNumber,printVisible:!0})}));case 2:return e.next=4,a.print();case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.handleArchive=function(e){a.setState({archive:e.target.checked})},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.pullList()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},this.state.printVisible?r.a.createElement(g,{state:this.state}):this.state.listVisible?r.a.createElement(N,{search:this.search,palletList:this.state.palletList,updateItem:this.updateItem,delete:this.deleteItem,addPallet:this.addPallet,addPalletButton:this.addPalletButton,printButton:this.printButton,handleChange:this.handleChange,handleArchive:this.handleArchive,state:this.state}):r.a.createElement(y,{backButton:this.backButton,updateButtonVisible:this.state.updateButtonVisible,updateConfirme:this.updateConfirme,addPalletButton:this.addPalletButton,addPallet:this.addPallet,handleChange:this.handleChange,state:this.state})),r.a.createElement(j,{spinnerState:this.state.spinner}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8fe78a21.chunk.js.map