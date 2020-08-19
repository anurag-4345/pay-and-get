import React, { Component } from 'react';
import "../css/style.css"
class Bank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bank: "", branch: "", IFSC: "", account: ""
        }
    }

    // componentDidMount() {
    //     let value = localStorage.getItem("email")
    //     fetch(`http://localhost:3001/data/${value}`)
    //         .then(Dat => Dat.json())
    //         .then(requ => {
    //             this.setState({ user: requ })
    //             localStorage.setItem("_id", requ._id)
    //         })
    // }

    createUser(event) {
        event.preventDefault()
        let value = localStorage.getItem("_id")
        fetch(`http://localhost:3001/bankDetails/${value}`, {
            method: 'put',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `bank=${this.state.bank}&branch=${this.state.branch}&ifsc=${this.state.IFSC}&acc=${this.state.account}`
        })
    }

    updateValue(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h2 className="heading"> Enter Bank Details</h2>
                <form onSubmit={this.createUser.bind(this)} className="back-gd">
                    <div className="box-1">
                        <label htmlFor="bank">Bank Name</label>
                        <input type="text" onChange={this.updateValue.bind(this)} placeholder="Bank" required name="bank" id="bank" />
                    </div>
                    <div className="box-1">
                        <label htmlFor="branch">Branch Name</label>
                        <input type="text" onChange={this.updateValue.bind(this)} placeholder="Branch" required name="branch" id="branch" />
                    </div>
                    <div className="box-1">
                        <label htmlFor="ifsc">IFSC Code</label>
                        <input type="text" onChange={this.updateValue.bind(this)} placeholder="IFSC Code" required name="IFSC" id="ifsc" />
                    </div>
                    <div className="box-1">
                        <label htmlFor="account">Acc No</label>
                        <input type="number" onChange={this.updateValue.bind(this)} placeholder="Account" required name="account" id="acc" />
                    </div>
                    <div className="box-1">
                        <label htmlFor="re-account">Re-Acc No</label>
                        <input type="password" placeholder="Re-Account" required id="re-acc" />
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




