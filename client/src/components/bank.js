import React, { Component } from 'react';
import "../css/style.css"
class Bank extends Component {
    constructor(props){
        super(props);
        this.state ={
            bank:"",branch:"",IFSC:"",account:""
        }
    }

    createUser() {
        fetch('http://localhost:3001/create/banksData', {
          method: 'post',
          headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          body: `B_name=${this.state.bank}&BranchName=${this.state.branch}&ifscCode=${this.state.IFSC}&account=${this.state.account}`
        });
        console.log(this.state);
      }    
      updateValue(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
      }
    render() {
        return (
            <div>
            <h2 className="heading"> Enter Bank Details</h2>
            <form action="/" onSubmit={()=> this.createUser.bind(this)} className="back-gd" method="post">
                <div className="box-1">
            <label htmlFor="bank">Bank Name</label>
            <input type="text" onClick={()=> this.updateValue.bind(this)} placeholder="Bank" required name="bank" id="bank" />
        </div>
        <div className="box-1">
            <label htmlFor="branch">Branch Name</label>
            <input type="text" onClick={()=> this.updateValue.bind(this)} placeholder="Branch" required name="branch" id="branch" />
        </div>
        <div className="box-1">
            <label htmlFor="ifsc">IFSC Code</label>
            <input type="text" onClick={()=> this.updateValue.bind(this)} placeholder="IFSC Code" required name="IFSC" id="ifsc" />
        </div>
        <div className="box-1">
            <label htmlFor="account">Acc No</label>
            <input type="number" onClick={()=> this.updateValue.bind(this)} placeholder="Account" required name="Account" id="acc" />
        </div>
        <div className="box-1">
            <label htmlFor="re-account">Re-Acc No</label>
            <input type="password" onClick={()=> this.updateValue.bind(this)} placeholder="Re-Account" required name="Account" id="re-acc" />
        </div>
        <div className="box-1">
            <button type="submit" id="btn">Submit</button>
        </div>
    </form>
    </div>
        );
    }
}
export default Bank;




