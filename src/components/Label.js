import React from 'react';
import './Label.css'


const List = (props)=>{

    const date = (milisecond) =>{
      
        let date = new Date(milisecond);
     
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let finalDate = `${day}/${month}/${year}`;
        return(finalDate)
    }

    return(
        <div className="label">
            <div className="advice">{props.state.adviceNumber}</div>
            <div className="eref">E-REF</div>
            {/* <div className="ownerLabel">OWNER:</div>
            <div className="owner">E-Macquarie</div> */}
            <div className="customerLabel">CUSTOMER :</div>
            <div className="customer">{props.state.customer}</div>
            <div className="meterTypeLabel">METER TYPE :</div>
            <dic className="meterType">{props.state.meterType}</dic>
            <div className="status">{props.state.status}</div>
            <div className="qtyLabel">QTY :</div>
            <div className="qty">{props.state.qty}</div>
            <div className="trolleyNumberLabel">TROL NO :</div>
            <div className="trolleyNumber">{props.state.trolleyNumber}</div>
            <div className="palletNumberLabel">PALLET NO :</div>
            <div className="palletNumber">{props.state.palletNumber}</div>
            <div className="description">{props.state.description}</div>
            <div className="dateLabel">Create Date :</div>
            <div className="date">{date(props.state.date)}</div>
            <div className="scrapDateLabel">SCRAP Date :</div>
            <div className="scrapDate">{date(props.state.scrapDate)}</div>
            <div className="authorLabel">Author :</div>
            <div className="author">Damian Krawczyk</div>
        </div>
    )
}





export default List;