function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=> {
        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            html += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                    <a class="text-decoration-none" href = "blog-post.html?id=${e.id}"><h5 class="post-title text-danger mb-4">${e.title}</h5></a>
                      <p class="post-body">${e.body}</p>
                      <a class="text-decoration-none link-danger" href = "blog-post.html?id=${e.id}">View More...</a>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML = html
        });
    })
}

getPosts();



