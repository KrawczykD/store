import React from 'react';

class Input extends React.Component {

    render(){
        return(
            
            <>  
                <button onClick={(e)=>{this.props.backButton(this.props.backButton)}}>Back</button>
                {this.props.updateButtonVisible ? <button onClick={(e)=>{this.props.updateConfirme(this.props.updateConfirm)}}>Update</button> : <button onClick={(e)=>{this.props.addPallet()}}>AddPallet</button>}
                <label>
                    Customer:
                    <select name="customer" value={this.props.state.customer} onChange={this.props.handleChange}>
                        <option value=""></option>
                        <option value="Macquarie BG">Macquarie BG</option>
                        <option value="Meterfit BG">Meterfit BG</option>
                    </select>
                </label>
                <label>
                    Meter Type:
                    <select name="meterType" value={this.props.state.meterType} onChange={this.props.handleChange}>
                        <option value=""></option>
                        <option value="5299">5299 ( 140mm )</option>
                        <option value="5394">5394 ( 120mm )</option>
                    </select>
                </label>
                <label>
                    Quantity:
                    <input name="qty" type="number" value={this.props.state.qty} onChange={this.props.handleChange} placeholder="Quantity">
                        
                    </input>
                </label>
                <label>
                    Pallet Number:
                    <input name="palletNumber" type="number" value={this.props.state.palletNumber} onChange={this.props.handleChange} placeholder="Pallet Number">
                        
                    </input>
                </label>
                <label>
                    Trolley Number:
                    <input name="trolleyNumber" type="number" value={this.props.state.trolleyNumber} onChange={this.props.handleChange} placeholder="Trolley Number">
                        
                    </input>
                </label>
                <label>
                    Status:
                    <select name="status" value={this.props.state.status} onChange={this.props.handleChange}>
                        <option value=""></option>
                        <option value="Compleated">Compleated</option>
                        <option value="Awaiting">Awaiting</option>
                        <option value="BER">BER</option>
                    </select>
                </label>
                <label>
                    Description:
                    <input name="description" value={this.props.state.description} onChange={this.props.handleChange} placeholder="Description">
                        
                    </input>
                </label>
                <label>
                    Location:
                    <form>
                        <input type="number" name="location1" value={this.props.state.location1} onChange={this.props.handleChange} min="1" max="20"></input>
                        <input type="number" name="location2" value={this.props.state.location2} onChange={this.props.handleChange} min="1" max="20"></input>
                        <input type="number" name="location3" value={this.props.state.location3} onChange={this.props.handleChange} min="1" max="20"></input>
                    </form>
                </label>
            </>
        )
    }
};


export default Input;


{/* <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>- 
                    <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>- 
                    <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select> */}