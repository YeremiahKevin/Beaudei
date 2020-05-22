function onRegister() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    let gender = null;
    if (document.getElementById('male').checked) {
        gender = 'Male';
    } else if (document.getElementById('female').checked) {
        gender = 'Female';
    }
    const skinType = document.getElementById('skin-type').value;
    const terms = document.getElementById('terms').checked;

    // Name validation
    if (name === '' || name === null) {
        alert('Name must be filled');
        return;
    }

    // Email validation
    let atFlag = false;
    let dotFlag = false;
    for(const i of email) {
        if (i === '@') {
            atFlag = true;
        }
        if (i === '.') {
            dotFlag = true;
        }
    }
    if (!atFlag || !dotFlag) {
        alert('Email not valid');
        return;
    }

    // Password Validation
    let numberFlag = false;
    let characterFlag = false;
    const numberPattern = /[1-9]/g;
    const characterPattern = /[A-z]/g;
    if (password.match(numberPattern)) {
        numberFlag = true;
    }
    if (password.match(characterPattern)) {
        characterFlag = true;
    }
    if (!numberFlag || !characterFlag) {
        alert('Password must contains at least 1 number and 1 character');
        return;
    }

    // Address Validation
    if (address.length < 10) {
        alert('Address must consist of at least 10 letters');
        return;
    }

    // Gender Validation
    if (gender === null) {
        alert('Gender must be selected');
        return;
    }

    // Skin type validation
    if (skinType === '' || skinType === null) {
        alert('Skin type must be selected');
        return;
    }

    // Terms and condition validation
    if (!terms) {
        alert('Terms and condition must be checked');
        return
    }

    alert('Register Success');
    window.location.href = './home.html';
}
