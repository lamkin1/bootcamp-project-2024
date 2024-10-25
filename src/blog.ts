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
  blogs.forEach((blog) => {
    const blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    const title = document.createElement("h1");
    title.textContent = blog.title;
    const blogBody = document.createElement("div");
    blogBody.className = "blog-body";
    const blogLink = document.createElement("a");
    blogLink.href = "blogs/"+blog.slug+".html";
    console.log(blogLink.href);
    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    const description = document.createElement("p");
    description.textContent = blog.description;
    blogPost.appendChild(title);
    blogLink.append(blogImage)
    blogBody.appendChild(blogLink);
    blogBody.appendChild(description);
    blogPost.appendChild(blogBody);
    blogContainer?.appendChild(blogPost);
  });
}

const myBlogs: Blog[] = [
  {
    title: "Roundnet is Life!",
    date: "October 20, 2024",
    description:
      "I've been enjoying my roundnet journey and I am excited for sectionals\
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
