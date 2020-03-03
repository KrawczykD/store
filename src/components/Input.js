import React from 'react';
import './Input.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft , faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

class Input extends React.Component {

    render(){
        return(
            
            <div className="Input">  
                <label>
                <p className="inputLabel">Customer:</p>
                    <select name="customer" value={this.props.state.customer} onChange={this.props.handleChange}>
                        <option value=""></option>
                        <option value="Macquarie BG">Macquarie BG</option>
                        <option value="Meterfit BG">Meterfit BG</option>
                    </select>
                </label>
                <label>
                <p className="inputLabel">Meter Type:</p>
                    <select name="meterType" value={this.props.state.meterType} onChange={this.props.handleChange}>
                        <option value=""></option>
                        <option value="5299">5299 ( 140mm )</option>
                        <option value="5394">5394 ( 120mm )</option>
                    </select>
                </label>
                <label>
                <p className="inputLabel">Quantity:</p>
                    <input name="qty" type="number" value={this.props.state.qty} onChange={this.props.handleChange} placeholder="Quantity">
                        
                    </input>
                </label>
                <label>
                <p className="inputLabel">Pallet Number:</p>
                    <input name="palletNumber" type="number" value={this.props.state.palletNumber} onChange={this.props.handleChange} placeholder="Pallet Number">
                        
                    </input>
                </label>
                <label>
                <p className="inputLabel">Trolley Number:</p>
                    <input name="trolleyNumber" type="number" value={this.props.state.trolleyNumber} onChange={this.props.handleChange} placeholder="Trolley Number"></input>
                </label>
                <label>
                <p className="inputLabel">Job Number:</p>
                    <input name="jobNo" type="number" value={this.props.state.jobNo} onChange={this.props.handleChange} placeholder="Job Number"></input>
                </label>
                <label>
                <p className="inputLabel">Status:</p>
                    <select name="status" value={this.props.state.status} onChange={this.props.handleChange}>
                        <option value=""></option>
                        <option value="Compleated">Compleated</option>
                        <option value="Awaiting">Awaiting</option>
                        <option value="BER">BER</option>
                    </select>
                </label>
                <label>
                <p className="inputLabel">Description:</p>
                    <input name="description" value={this.props.state.description} onChange={this.props.handleChange} placeholder="Description">
                        
                    </input>
                </label>
                <label>
                    <form>
                    <p className="inputLabel">Location:</p>
                        <input className="inputLoc" type="number" name="location1" value={this.props.state.location1} onChange={this.props.handleChange} min="1" max="20"></input>
                        <input className="inputLoc" type="number" name="location2" value={this.props.state.location2} onChange={this.props.handleChange} min="1" max="20"></input>
                        <input className="inputLoc" type="number" name="location3" value={this.props.state.location3} onChange={this.props.handleChange} min="1" max="20"></input>
                    </form>
                </label>
                <button onClick={(e)=>{this.props.backButton(this.props.backButton)}}><FontAwesomeIcon icon={faArrowLeft}/></button>
                {this.props.updateButtonVisible ? <button onClick={(e)=>{this.props.updateConfirme(this.props.updateConfirm)}}><FontAwesomeIcon icon={faCheck}/></button> : <button onClick={(e)=>{this.props.addPallet()}}><FontAwesomeIcon icon={faPlus}/></button>}
            </div>
        )
    }
};


export default Input;