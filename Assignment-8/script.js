document.getElementById('newPassword').addEventListener('blur', validateNewPassword);
document.getElementById('confirmPassword').addEventListener('blur', validateConfirmPassword);
document.getElementById('updatePasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateNewPassword();
    validateConfirmPassword();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');

    confirmPasswordErrMsg.textContent = '';

    if (newPassword !== '' && confirmPassword !== '' && newPassword === confirmPassword) {
        confirmPasswordErrMsg.textContent = 'Password updated successfully!';
        confirmPasswordErrMsg.style.color = 'green';
        this.reset();
    } else if (newPassword !== confirmPassword) {
        confirmPasswordErrMsg.textContent = 'Password must be same';
        confirmPasswordErrMsg.style.color = 'red';
    }  
});

function validateNewPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const newPasswordErrMsg = document.getElementById('newPasswordErrMsg');

    if (newPassword === '') {
        newPasswordErrMsg.textContent = 'Required*';
    } else {
        newPasswordErrMsg.textContent = '';
    }
}

function validateConfirmPassword() {
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');

    if (confirmPassword === '') {
        confirmPasswordErrMsg.textContent = 'Confirm password is required.';
    } else {
        confirmPasswordErrMsg.textContent = '';
    }
}

