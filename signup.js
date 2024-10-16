const form = document.getElementById('form')
const Username = document.getElementById('Username')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const Password2 = document.getElementById('Password2')

form.addEventListener('submit',(e) => {
    let messages = []
    e.preventDefault()

    checkInput();
});

function checkInput(){
    const UsernameValue = Username.value.trim();
    const EmailValue =  Email.value.trim();
    const PasswordValue = Password.value.trim();
    const Password2Value = Password2.value.trim();

    if(UsernameValue === ''){
        setErrorFor(Username, 'Username cannot be blank');
    }
    else{
        setSuccessFor(Username);
    }

    if(EmailValue === ''){
        setErrorFor(Email, 'Email cannot be blank');
    }
    else if(!isEmail(EmailValue)){
        setErrorFor(Email, 'Email is not valid');
    }
    else{
        setSuccessFor(Email);
    }

    if(PasswordValue === ''){
        setErrorFor(Password, 'Password cannot be blank');
    }
    else{
        setSuccessFor(Password);
    }

    if(Password2Value === '')
    {
        setErrorFor(Password2, 'Password cannot be blank');
    }
    else if(Password2Value !== PasswordValue){
        setErrorFor(Password2, 'Password does not match');
    }
    else{
        setSuccessFor(Password2);
    }

}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(Email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}