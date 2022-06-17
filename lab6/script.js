const form = document.getElementById("form");
const group = document.getElementById("group");
const tel = document.getElementById("tel");
const idcard = document.querySelector("idcard");
const faculty = document.getElementById("faculty");

let isValid = false;
let passwordsMatch = false;

function validateForm() {

  isValid = form.checkValidity();


  if (!isValid) {
    message.textContent = "Заповніть усі поля";
    messageContainer.style.backgroundColor = "#ffd4d4";
    message.style.color = "#ff8979";

    return;

  if (isValid && passwordsMatch) {
    passwordsMatch = true;
    message.textContent = "Вдала реєстрація";
    messageContainer.style.backgroundColor = "#deffe4";
    message.style.color = "#006b12";
    password1El.style.borderColor = "#79ff8f";
    password2El.style.borderColor = "#79ff8f";
    form.style.display = "none";
    h1.textContent = `Ура`;
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    group: form.group.value,
    tel: form.tel.value,
    idcard: form.idcard.value,
    faculty: form.faculty.value
  };

  console.log(user);
}

function proccessFormData(e) {
  e.preventDefault();


  validateForm();


  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

form.addEventListener("submit", proccessFormData);

}
