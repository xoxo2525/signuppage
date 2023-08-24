function goToDupCheck() {
    window.location.href = "idcheck.html"
}

function validateUsername() {
    const input = document.getElementById("username");
    const value = input.value;

    const pattern = /^[a-zA-Z0-9]{8,12}$/;
    const warning = document.getElementById("warning");

    if (!pattern.test(value)) {
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }
}

document.getElementById("nameValue").innerText = localStorage.getItem("name");
document.getElementById("birthdayValue").innerText = localStorage.getItem("birthday");
document.getElementById("phoneValue").innerText = localStorage.getItem("phone");


const phoneValue = localStorage.getItem("phone");
const formattedPhone = formatPhoneNumber(phoneValue);
document.getElementById("phoneValue").innerText = formattedPhone

function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

const birthValue = localStorage.getItem("birthday");
const formattedBirthday = formatBirthdayValue(birthValue);
document.getElementById("birthdayValue").innerText = formattedBirthday

function formatBirthdayValue(birthday) {
    const cleaned = ('' + birthday).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{2})(\d{2})$/);
    if (match) {
        return match[1] + '년 ' + match[2] + '월 ' + match[3] + '일';
    }
    return birthday;
}

function goToMainPage() {
    window.location.href = "main.html"
}