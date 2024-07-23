console.log("Hello World");
const blogComment = document.querySelector("#comment");
const button = document.querySelector("#commentButton");
const blogPostId = document.querySelector(".blogPostCommentSection");
console.log(blogPostId.id);
const newBlogPostComment = async () => {
    const response = await fetch(`/api/commments/comments/${blogPostId.id}`, {
        method: 'POST',
        body: JSON.stringify({
            text: blogComment.value,
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard')
        
    }
    else {
        alert(response.status)
    }
}

button.addEventListener('click', newBlogPostComment)