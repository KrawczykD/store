import React from 'react';


const list = (props) =>{


    let palletList = [...props.palletList];
    let list = [];
    const headings = <li className="headings"><p>Customer</p> <p>Meter Type</p> <p>Quantity</p> <p>Pallet Number</p> <p>Trolley Number</p> <p>Status</p> <p>Date</p> <p>Description</p> <p>Location</p></li>
    palletList.forEach(element => {
    list.push(<li key= {element._id}> <p>{element.customer}</p> <p>{element.meterType}</p> <p>{element.qty}</p> <p>{element.palletNumber}</p> <p>{element.trolleyNumber}</p> <p>{element.status}</p> <p>{element.date}</p> <p>{element.description}</p> <p>{element.location}</p><button onClick={(e)=>{props.update(e,element._id.toString())}}>Update</button><button onClick={(e)=>{props.delete(e,element._id.toString())}}>Delete</button></li>)
    });
    return(
        <div>
            <button onClick={(e)=>{props.addPallet()}}>AddPallet</button>
            <ul>
                {headings}
                {list}
            </ul>
        </div>
    )
}

export default list;

//customer: 'Macquarie' , meterType: "5299" , qty: 100 , palletNumber: 120 , trolleyNumber : 100 , status : "read to go" , data: new Date().toDateString() , location : "10-10-10"