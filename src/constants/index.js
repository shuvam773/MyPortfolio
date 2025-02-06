import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong focus on building robust and scalable web applications. With hands-on experience in front-end technologies like React.JS and back-end tools such as MongoDB, Express.JS, Node.JS and MySql. I thrive on turning ideas into functional, user-friendly digital solutions. My approach combines clean code practices and a deep understanding of modern frameworks to deliver impactful results. I enjoy tackling complex problems, optimizing performance, and enhancing user experiences. Constantly learning and evolving, I’m driven to develop innovative applications that empower businesses and provide seamless experiences for their users.`;

export const ABOUT_TEXT = `I am a passionate and versatile full-stack developer dedicated to building scalable and efficient web applications. My journey in development stems from a curiosity to solve complex problems and craft seamless user experiences. I have honed my skills working with technologies like React, Node.js, MySQL, Express.js, and MongoDB. I thrive in dynamic, collaborative environments where I can continuously learn and contribute meaningfully. Beyond coding, I enjoy swimming in the ocean and exploring innovative tech solutions. My goal is to create impactful digital solutions that improve user experiences and drive business growth.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Automate and Compute the Detection of Possible Vulnerability to Heart Before Cardiac Arrest",
    image: project1,
    description:
      "Collaborated with Prof. Arijit Sil to develop a machine learning-based system for predicting heart attack risks. Implemented advanced data analytics techniques to identify key risk factors and patterns. Designed algorithms for early detection and proactive intervention strategies",
    technologies: ["HTML", "CSS", "JavaScript", "Python","Jupitor Notebook"],
  },
  {
    title: "Auction Software",
    image: project2,
    description:
      "This auction software is a full-stack web application designed to facilitate seamless online auctions. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), it offers a robust and scalable solution for managing auction events efficiently.",
    technologies: ["HTML", "CSS", "React", "Express", "Node", "MongoDB"],
  },
  {
    title: "Current weather and forecast",
    image: project3,
    description:
      "Access current weather data for any location using openweathermap API Key.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Typing Speed Checker",
    image: project4,
    description:
      "A web application that measures your typing speed by calculating words per minute (WPM). The user types a given text within a time frame, and the app displays speed, accuracy, and errors. This application helps users improve their typing skills through interactive and engaging exercises.",
    technologies: ["HTML", "CSS", "JavaScript", ],
  },
];

export const CONTACT = {
  address: "New Delhi",
  phoneNo: "+91 62941-91303 ",
  email: "shuvam.sk25@gmail.com",
};
