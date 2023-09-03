const invalidName = document.getElementById("emptyName")
const invalidEmail = document.getElementById("emptyEmail")
const invalidMessage = document.getElementById("emptyMessage")
const submitButton = document.getElementById("submit")
const contactSuccess = document.getElementById("contactSuccess")
const contactForm = document.getElementById("contactForm")

submitButton.onclick = (e) =>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    const resName = checkData(name, invalidName)
    const resMail = checkData(email, invalidEmail)
    const resMessage = checkData(message, invalidMessage)
    if ((resMail) && (resName) && (resMessage)){
        contactSuccess.classList.add("visible")
        contactForm.style.display = "none"
    }else{
        contactSuccess.classList.remove("visible")
        contactForm.style.display = "block"
    }
}

const checkData = (data, element) => {
    let result = false
    if (data == ""){
        element.classList.add("visible");
    }else{
        // submitButton.classList.add("boton-disabled");
        // submitButton.setAttribute("disabled", true);
        result = true
        element.classList.remove("visible");
    }
    return result
}