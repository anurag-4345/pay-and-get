import React, { Component } from 'react';
import "../css/style.css"
class Bank extends Component {
    render() {
        return (
            <div>
            <h2 className="heading"> Enter Bank Details</h2>
            <form action="/create/banksData" className="back-gd" method="post">
                <div className="box-1">
            <label htmlFor="bank">Bank Name</label>
            <input type="text" placeholder="Bank" required name="bank" id="bank" />
        </div>
        <div className="box-1">
            <label htmlFor="branch">Branch Name</label>
            <input type="text" placeholder="Branch" required name="branch" id="branch" />
        </div>
        <div className="box-1">
            <label htmlFor="ifsc">IFSC Code</label>
            <input type="text" placeholder="IFSC Code" required name="IFSC" id="ifsc" />
        </div>
        <div className="box-1">
            <label htmlFor="account">Account No</label>
            <input type="number" placeholder="Account" required name="Account" id="acc" />
        </div>
        <div className="box-1">
            <label htmlFor="re-account">Re-Account No</label>
            <input type="password" placeholder="Re-Account" required name="Account" id="re-acc" />
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

{/* <script>
// <link rel="stylesheet" href="/css/style.css" />
    let addValue = ()=>{
        document.getElementById("addMob").value = localStorage.getItem("mob")
    }
    addValue()
    console.log(local)

// <script src="/javascripts/bank.js">
</script> 
</script> */}


