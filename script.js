const password = document.getElementById('password');
const icon = document.getElementById('icon');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        icon.classList.remove('ic-eye-off');
        icon.classList.add('ic-eye-on');
    }
    else{
        password.setAttribute('type', 'password');
        icon.classList.remove('ic-eye-on');
        icon.classList.add('ic-eye-off');
    }
}