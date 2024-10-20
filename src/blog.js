function appendBlogs(blogs) {
    var blogContainer = document.getElementById("blog-container");
    console.log(blogContainer);
    blogs.forEach(function (blog) {
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        var title = document.createElement("h1");
        title.textContent = blog.title;
        var blogBody = document.createElement("div");
        blogBody.className = "blog-body";
        var blogImage = document.createElement("img");
        blogImage.src = blog.image;
        var description = document.createElement("p");
        description.textContent = blog.description;
        blogPost.appendChild(title);
        blogBody.appendChild(blogImage);
        blogBody.appendChild(description);
        blogPost.appendChild(blogBody);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogPost);
    });
}
var myBlogs = [
    {
        title: "Roundnet is Life!",
        date: "October 20th, 2024",
        description: "I've been enjoying my roundnet journey and I am excited for sectionals\
        which are coming up very soon!",
        image: "../assets/images/spikeball.jpg",
        imageAlt: "Picture of a Spikeball Pro ball",
        slug: "roundnet-is-life",
    },
];
appendBlogs(myBlogs);
console.log("Hey People!");
