// DOM

const form = document.getElementById("form");

const userData = {
  name: "USer",
  email: "test@gmail.com",
  nikName: "venom_",

  passsword: "123456",
};
// ctrl + Alt + F
form.onsubmit = (e) => {
  e.preventDefault();
  const formData = e.target;
  const formEmail = formData.email.value;
  console.log("formEmail:", formEmail);
  const formPassword = formData.password.value;
  console.log("formPassword:", formPassword);
};
// if (userData.email === formEmail && userData.password === formPassword)
//  alert("Welcome" + userData.name)
//  window.location.href ="https://www.google.com/"
// }else {
//     alert("Wrong email or password")
// }

//DOM ELEMENTY
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const pText = document.getElementById("text-count");
const price = document.getElementById('price')

//onclick
btnPlus.onclick = () => {
  pText.innerText = parseInt(pText.innerText) + 1;
  price.innerText = 500 * parseInt(pText.innerText) + "$"
}

parseInt()

btnMinus.onclick = () => {
    if(parseInt(pText.innerText) > 0) {
        pText.innerText = parseInt(pText.innerText) - 1
        price.innerText = 500 * parseInt(pText.innerText) + "$"
    }
}


