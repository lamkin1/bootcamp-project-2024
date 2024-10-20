type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

function appendBlogs(blogs: Blog[]) {
  const blogContainer = document.getElementById("blog-container");
  console.log(blogContainer);
  blogs.forEach((blog) => {
    const blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    const title = document.createElement("h1");
    title.textContent = blog.title;
    const blogBody = document.createElement("div");
    blogBody.className = "blog-body";
    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    const description = document.createElement("p");
    description.textContent = blog.description;
    blogPost.appendChild(title);
    blogBody.appendChild(blogImage);
    blogBody.appendChild(description);
    blogPost.appendChild(blogBody);
    blogContainer?.appendChild(blogPost);
  });
}

const myBlogs: Blog[] = [
  {
    title: "Roundnet is Life!",
    date: "October 20th, 2024",
    description:
      "I've been enjoying my roundnet journey and I am excited for sectionals\
        which are coming up very soon!",
    image: "../assets/images/spikeball.jpg",
    imageAlt: "Picture of a Spikeball Pro ball",
    slug: "roundnet-is-life",
  },
];

appendBlogs(myBlogs);
console.log("Hey People!");
