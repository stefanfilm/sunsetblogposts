console.log("Hello World");
const textInput = document.querySelector("#textInput");
const passwordInput = document.querySelector("#passwordInput");
const button = document.querySelector("#buttonId");

const register = async () => {
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email: textInput.value,
            password: passwordInput.value
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/dashboard')
        
    }
    else {
        alert(response.status)
    }
}

button.addEventListener('click', register)