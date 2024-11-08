type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };

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