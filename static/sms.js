const fast2sms = require('fast-two-sms')

export  function sms(){
    var options = {authorization : "3WlYvwUEyxdMG5KPAki7NX6RuQVtaZzgLnDsFqO0CpefSIc9hrUPk1oI5sSxKXDAtz9jJL3ilHQGFOZc" , message : 'Hey this is Rakshit here, first otp api test ,your otp is 4459 ' ,  numbers : ["9999731319"]} 
fast2sms.sendMessage(options).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})
}
