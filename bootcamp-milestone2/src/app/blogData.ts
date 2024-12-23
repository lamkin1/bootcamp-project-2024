type IComment = {
  user: string;
  comment: string;
  date: Date;
}

export type Blog = {
  name: string;
  slug: string; 
  date: Date;
  description: string; // for preview
  content: string; // text content for individual blog page
  image: string; // url for string in public
  imageAlt: string; // alt for image
  comments: IComment[]
};

// const myBlogs: Blog[] = [
//     {
//       name: "Roundnet is Life",
//       date: new Date("October 20, 2024"),
//       description:
//         "",
//       content: "I've been enjoying my roundnet journey and I am excited for sectionals\
//           which are coming up very soon!"
//       image: "/assets/images/spikeball.jpg",
//       imageAlt: "Picture of a Spikeball Pro ball",
//       slug: "roundnet-is-life",
//     },
//     {
//       name: "Excited for Hack 4 Impact",
//       date: "October 22, 2024",
//       description: "I'm excited for all that I've learned and continue to learn through H4I's bootcamp and I'm looking forward to contributing to a project team later this year.",
//       image: "/assets/images/hack_4_impact_logo.png",
//       imageAlt: "Picture of Hack 4 Impact's Logo",
//       slug: "excited-for-h4i"
//     }
//   ];

export default Blog;