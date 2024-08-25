const $inputs = document.querySelectorAll("[data-input]")
const $form = document.querySelector("form")

function validateInput(e) {
    // Get whether the input value is valid (boolean)
    const isValid = e.target.validity.valid
    // Get the default browser error message
    const message = e.target.validationMessage
    // Get the value of aria-describedby assigned in the HTML
    const connectedValidationId = e.target.getAttribute("aria-describedby")
    // Validate if that value exists to get the element that will store it
    const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false

    // Validate if there is an element to show our error message and if the input value is invalid
    if (connectedValidation && !isValid) {
        e.target.classList.add("input-error")
        connectedValidation.innerText = message
    }
    else {
        connectedValidation.innerText = ""
        e.target.classList.remove("input-error")
    }
}


function showToast() {
    const $toast = document.querySelector(".toast")
    $toast.classList.add("active")

    setTimeout(() => { location.reload() }, 3000);
}

$inputs.forEach(input => {
    input.addEventListener("invalid", validateInput)

    input.addEventListener("blur", validateInput)

    input.addEventListener("input", (e) => {
        e.target.value = e.target.value.trimStart()
    });
})

$form.addEventListener("submit", (e) => {
    e.preventDefault()
    showToast()
})
