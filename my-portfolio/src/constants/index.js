import project1 from "../assets/projects/moodsync.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/icon1.avif";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const PROJECTS = [
  {
    id:1,
    title: "MoodSync",
    image: project1,
    description:
      "MoodSync is an emotion-based music recommendation system built using React JS, Flask, and Node JS. It analyzes user emotions and provides personalized music suggestions to match their mood.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Flask"],
    link:"https://github.com/Ankur2005/MOODSYNC"
  },
  {
    id:2,
    title: "Employee Management System",
    image: project2,
    description:
      "The Employee Management System (EMS) is a web application designed to manage employee tasks and roles within an organization. It provides functionalities for both administrators and employees, allowing for efficient task assignment and management.",
    technologies: ["HTML", "CSS", "React", "MongoDB"],
    link:"https://github.com/Ankur2005/Employee-Management-System"
  },
  {
    id:3,
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link:"https://github.com/Ankur2005/Portfolio"
  },
];

export const CONTACT = {
  address: "Kangra Himachal Pradesh, India (176038)",
  phoneNo: "+91 70189-95013",
  email: "ankurbhatia938@gmail.com"
};