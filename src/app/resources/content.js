import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Techtonic",
  lastName: "Class",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Organization",
  avatar: "/images/avatar.png",
   // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Follow to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/setesa.smuhsa/",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://tiktok.com/@setesa.smuhsa/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:akunclasstjkt1@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Websites`,
  description: `Techtonics website showcasing our activity as a ${person.role}`,
  headline: <>Welcome Techtonicals</>,
  subline: (
    <>
      We're Techtonics, a part at <InlineCode>SMK Muhammadiyah 1 Ajibarang</InlineCode>, where we craft intuitive
      <br /> tech experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Class XI TKJ 1 is a group of students in the Computer and Network Engineering (TKJ) major, focusing on computer networks, 
        operating systems, and cybersecurity. They learn about network configuration, computer assembly, server management, 
        and hardware/software maintenance. The class combines theory with hands-on practice to enhance technical skills. 
        XI TKJ 1 is known for being active, creative, and highly motivated in developing expertise in information technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Expertise",
    experiences: [
      {
        company: "Cyber Security",
        timeframe: "2024 - Present",
        role: "Cyber security",
        achievements: [
          <>
            Network security LKS competition, with 3rd place in its first match.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Cyber Security",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Atletik",
        timeframe: "2024 - Present",
        role: "",
        achievements: [
          <>
            We have champions in athletics, winning the championship many times..
          </>,
        ],
        images: [
          {src: "/images/gallery/atletik-1.jpg",
          alt: "Atletik",
          width: 16,
          height: 9,
        }  
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SMK Muhammadiyah 1 Ajibarang",
        description: <>Teknik Komputer dan Jaringan.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Big Moment",
    skills: [
      {
        title: "Juara Atletik",
        description: <>Peraihan juara anak atletik dari Techtonic.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/atletik-1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Ramadhan 2024",
        description: <>Foto bersama pada saat pesantren kilat.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/ramadhan-1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ramadhan-2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ramadhan-3.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about our and activity",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Things",
  title: "Things",
  description: `Builded by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Techtonic Gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/outbound-kelas-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-kelas-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-kelas-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-kelas-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/outbound-7.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/kuntri-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/kuntri-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/boys-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/zyrex-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/zyrex-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/zyrex-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
    {
      src: "/images/gallery/zyrex-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cyber-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cyber-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cyber-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cyber-5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cyber-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
