const form=document.getElementById('form')
const username=document.getElementById('username')
// console.log(username);
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('cpassword')

// console.log(form);


form.addEventListener('submit', e => {
    e.preventDefault(); // reload avunnath prevent avvan 1st step

    validateInputs(); // function calling 2step
});

const setError = (element, message) => { //5th stp
    const inputControl = element.parentElement;
    // console.log(element.parentElement);
    // console.log("hai");
    // console.log(element);
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => { // 6th
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

    const validateInputs = () => { // 3rd stp
    const usernameValue = username.value.trim(); // spaces kalayan ..addition space
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    

    if(usernameValue === '') { // empty ano check akki  4th step
        setError(username, 'Username is required');
    } else {
        setSuccess(username); // 5th
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};