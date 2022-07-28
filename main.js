var check = function() {

    if (document.getElementById('password').value == document.getElementById('confirm').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';

    }
}

let button = document.querySelector(".submit");
button.addEventListener('click',(e) => {
    console.log(e);
    if (true) {
        alert('hi');
    }
});