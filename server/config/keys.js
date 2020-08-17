if(process.env.NODE_ENV == "prodcution"){
    module.exports.URL = require("./prod")
}else{
    module.exports.URL = require("./dev")
}