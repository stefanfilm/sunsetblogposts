console.log("Hello World");
const blogTitleInput = document.querySelector("#BlogTitle");
const blogPostInput = document.querySelector("#BlogPost");
const button = document.querySelector("#blogButton");

const newBlog = async () => {
    const response = await fetch('/api/blogposts', {
        method: 'POST',
        body: JSON.stringify({
            title: blogTitleInput.value,
            body: blogPostInput.value
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

button.addEventListener('click', newBlog)