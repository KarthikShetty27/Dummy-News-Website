const email = document.getElementById('email');
const Submit = document.getElementById('Submit');
const output = document.getElementById('output');

function display(){
    alert(email.value+'\n'+' Thanks for Subscribing to The Daily Bugle !! ');
}
Submit.addEventListener('click',display);
