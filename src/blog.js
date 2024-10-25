function appendBlogs(blogs) {
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        var title = document.createElement("h1");
        title.textContent = blog.title;
        var blogBody = document.createElement("div");
        blogBody.className = "blog-body";
        var blogLink = document.createElement("a");
        blogLink.href = "blogs/" + blog.slug + ".html";
        console.log(blogLink.href);
        var blogImage = document.createElement("img");
        blogImage.src = blog.image;
        var description = document.createElement("p");
        description.textContent = blog.description;
        blogPost.appendChild(title);
        blogLink.append(blogImage);
        blogBody.appendChild(blogLink);
        blogBody.appendChild(description);
        blogPost.appendChild(blogBody);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogPost);
    });
}
var myBlogs = [
    {
        title: "Roundnet is Life!",
        date: "October 20, 2024",
        description: "I've been enjoying my roundnet journey and I am excited for sectionals\
        which are coming up very soon!",
        image: "../assets/images/spikeball.jpg",
        imageAlt: "Picture of a Spikeball Pro ball",
        slug: "roundnet-is-life",
    },
    {
        title: "Excited for Hack 4 Impact",
        date: "October 22, 2024",
        description: "I'm excited for all that I've learned and continue to learn through H4I's bootcamp and I'm looking forward to contributing to a project team later this year.",
        image: "../assets/images/hack_4_impact_logo.png",
        imageAlt: "Picture of Hack 4 Impact's Logo",
        slug: "excited-for-h4i"
    }
];
appendBlogs(myBlogs);
