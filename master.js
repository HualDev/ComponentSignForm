let firstName=''
let lastName =''
let email =''
let password =''

function error(){
    firstName = document.getElementById('firstName').value
    lastName = document.getElementById('lastName').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    
    if(firstName==''){
        document.getElementById('errorFirstName').style.visibility='visible'
        document.getElementById('firstName').style.backgroundImage="url('./images/icon-error.svg')"    
     }
    else{
        document.getElementById('errorFirstName').style.visibility='hidden'
    } 

    if(lastName==''){
        document.getElementById('errorLastName').style.visibility='visible'
        document.getElementById('lastName').style.backgroundImage="url('./images/icon-error.svg')"
    }
     else{
        document.getElementById('errorLastName').style.visibility='hidden'
    }  

    if(email==''){
        document.getElementById('errorEmail').style.visibility='visible'
        document.getElementById('email').style.backgroundImage="url('./images/icon-error.svg')"
    }
     else{
        document.getElementById('errorEmail').style.visibility='hidden'
    }  

    if(password==''){
        document.getElementById('errorPassword').style.visibility='visible'
        document.getElementById('password').style.backgroundImage="url('./images/icon-error.svg')"
    }
    else{
        document.getElementById('errorPassword').style.visibility='hidden'
    } 
}
