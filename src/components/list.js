import React from 'react';


const list = (props) =>{

    const date = (milisecond) =>{

        if(milisecond == null || undefined){
            return ("No Upodate")
        } else {
      
        let date = new Date(milisecond);
     
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let finalDate = `${day} / ${month} / ${year}`;
        console.log(milisecond)
        return(finalDate)
        }
    }

    let palletList = [...props.palletList];
    let list = [];
    const headings = <li className="headings"><p>Advice Number</p> <p>Customer</p> <p>Meter Type</p> <p>Quantity</p> <p>Pallet Number</p> <p>Trolley Number</p> <p>Job Number</p> <p>Status</p> <p>Create Date</p> <p>Scrap Date BER</p> <p>Update Date</p> <p>Description</p> <p>Location</p></li>
    palletList.forEach(element => {
    list.push(<li key= {element._id}> <p>{element.adviceNumber}</p> <p>{element.customer}</p> <p>{element.meterType}</p> <p>{element.qty}</p> <p>{element.palletNumber}</p> <p>{element.trolleyNumber}</p> <p>{element.jobNo}</p> <p>{element.status}</p> <p>{date(element.date)}</p> <p>{date(element.scrapDate)}</p> <p>{date(element.updateDate)}</p> <p>{element.description}</p> <p>{element.location1} / {element.location2} / {element.location3}</p><button onClick={(e)=>{props.updateItem(e,element._id.toString())}}>Update</button><button onClick={(e)=>{props.delete(e,element._id.toString())}}>Delete</button><button onClick={(e)=>{props.printButton(e,element._id.toString())}}>Print</button></li>)
    });
    return(
        <div>
            <button onClick={(e)=>{props.addPalletButton()}}>AddPallet</button>
            <ul>
                {headings}
                {list}
            </ul>
        </div>
    )
}

export default list;

//customer: 'Macquarie' , meterType: "5299" , qty: 100 , palletNumber: 120 , trolleyNumber : 100 , status : "read to go" , data: new Date().toDateString() , location : "10-10-10"