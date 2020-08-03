let acc= document.getElementById("acc");
let ReAcc= document.getElementById("re-acc");

acc.addEventListeren(("keyPress"),()=>{
    if(acc.value === ReAcc.value){
        return true
    }else{
        return false
    }
})