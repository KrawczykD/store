import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt , faPrint , faEdit , faPlus, faCheck , faSearch } from '@fortawesome/free-solid-svg-icons'

const list = (props) =>{

    const date = (milisecond) =>{


        if(milisecond == null || undefined){
            return ("No Update")
        } else {
      
        let date = new Date(milisecond);
     
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let finalDate = `${day}/${month}/${year}`;
        return(finalDate)
        }
    }

    const berCheck = (element)=>{
        return  "" + (element.scrapDate < new Date().setMilliseconds(0) && element.status == "BER" ? "ber" : "" )
    }

    let palletList = [...props.palletList];
    // const newPalletList = palletList.filter(item=> item.customer == "")
    let list = [];
    const headings = <ul className="headings"><li><p>Advice Number</p> <p>Customer</p> <p>Meter Type</p> <p>Quantity</p> <p>Pallet Number</p> <p>Trolley Number</p> <p>Job Number</p> <p>Status</p> <p>Create Date</p> <p>Scrap Date BER</p> <p>Update Date</p> <p>Description</p> <p>Location</p></li></ul>
    palletList.forEach(element => {
    list.push(<li className={berCheck(element)}  key= {element._id}> <p>{element.adviceNumber}</p> <p>{element.customer}</p> <p>{element.meterType}</p> <p>{element.qty}</p> <p>{element.palletNumber}</p> <p>{element.trolleyNumber}</p> <p>{element.jobNo}</p> <p>{element.status}</p> <p>{date(element.date)}</p> <p>{date(element.scrapDate)}</p> <p>{date(element.updateDate)}</p> <p>{element.description}</p> <p>{element.location1}/{element.location2}/{element.location3}</p><div className="buttons"><button onClick={(e)=>{props.updateItem(e,element._id.toString())}}><FontAwesomeIcon icon={faEdit} /></button><button onClick={(e)=>{props.delete(e,element._id.toString())}}><FontAwesomeIcon icon={faTrashAlt} /></button><button onClick={(e)=>{props.printButton(e,element._id.toString())}}><FontAwesomeIcon icon={faPrint} /></button></div></li>)
    });



    return(
        <div className="List">
            <>
                {headings}
                <ul className="element">{list}</ul>
            </>
            <button onClick={(e)=>{props.addPalletButton()}}><FontAwesomeIcon icon={faPlus}/></button>
            <button onClick={(e)=>{props.search()}}><FontAwesomeIcon icon={faSearch}/></button>
        </div>
    )
}

export default list;

//customer: 'Macquarie' , meterType: "5299" , qty: 100 , palletNumber: 120 , trolleyNumber : 100 , status : "read to go" , data: new Date().toDateString() , location : "10-10-10"