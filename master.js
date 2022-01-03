let firstName =''
let lastName =''
let email =''
let password =''

function error(){
    firstName = document.getElementById('firstname').value
    lastName = document.getElementById('lastName').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if(firstName='null'){
        document.getElementById('error').style.visibility='visible'
        
    }

}
