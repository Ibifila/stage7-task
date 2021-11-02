
function singlePost() {
    let blogLayout = document.getElementById('single-blog')
    let bloghtml = "";
    let blogID = location.search;
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogID}`)
    .then(response => response.json())
    .then(blog => {
        blog.forEach(e => {
            console.log(e)
            bloghtml += `
            <div class="container p-5 text-center">
                <h1>${e.title}</h1>
            </div>
        
            <div class="container pt-3">
                <p>${e.body}</p>
            </div>
            `
            blogLayout.innerHTML = bloghtml
        });
    })
}

singlePost();