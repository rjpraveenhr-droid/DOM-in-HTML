function validate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msBox = document.getElementById('message').value;//empty div
    var msg = '';
    if (email == '') {
        msg = 'Please enter an email';
        msgBox.style.color = 'red';
    } else if (pass == '') {
        msg = 'Password must be 8 characters.';
        msgBox.style.color = 'red'
    } else if (age == '') {
        msg = 'Age must be between 12 and 50.';
        msgBox.style.color = 'red'
    }
    else {
        msg = 'Login successful';
        msgBox.style.color = 'green';
    }
    msBox.innerHTML = msg;
}