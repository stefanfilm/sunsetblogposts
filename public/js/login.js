console.log("Hello World");
const textInput = document.querySelector("#textInput");
const passwordInput = document.querySelector("#passwordInput");
const button = document.querySelector("#buttonId");

const login = async () => {
    const response = await fetch('/api/users/login', {
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

button.addEventListener('click', login)