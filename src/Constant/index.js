import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  ceven,
  threejs,
  python,
  django,
  c,
  cplus,
  sql,
  php,
  voice,
  ecommerce,
  DIP,
  youtube,
  drive,
  dd,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "cplus",
    icon: cplus,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "IT Head",
    company_name: "Ceven Charams | Non-Governmental Organization (NGO)",
    icon: ceven,
    iconBg: "#383E56",
    date: "May 2020 - Sept 2020",
    points: [
      "Led a skilled IT team to ensure robust infrastructure.",
      "Maintained data security and operational efficiency.",
      "Designed and executed impactful social media strategies.",
      "Fostered engagement, awareness, and support for the NGO's mission",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am a passionate design enthusiast and the leader of the ACM Student Chapters Design Team at my university. In collaboration with my team, I have designed the chapter's logo and contributed to its visual branding, ensuring cohesive and compelling communication. Committed to merging creativity with technology, I strive to empower students and enhance our chapter's impact through a motivated and collaborative approach.",
    name: "Acm student chapter",
    designation: "Design Head",
    company: "The Team",
    image: dd,
  },
];

const projects = [
  {
    name: "Advancing Safety",
    description:
      "Harnessing Voice Recognition Technology for Enhanced Security. Through speech recognition, keyword activation, real-time tracking, and the ability to send distress signals to emergency services, our app empowers individuals with physical difficulties while improving their security and independence.",
    tags: [
      {
        name: "Voice recognition",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "phython",
        color: "pink-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
    ],
    image: voice,
    source_code_link:
      "https://drive.google.com/file/d/1HCX1d9BvfFSdAa0tj0RcKzryoVCX9YRw/view?usp=drive_link",
    source_icon: drive,
  },
  {
    name: "E-commerce Website with Voice Assistance",
    description:
      "An e-commerce website with voice assistance and voice control technology made it possible for customers, particularly those with physical limitations, to complete operations like account creation, detail addition, and purchase making completely with voice commands, guaranteeing a smooth, hands-free experience.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "paymentgateway",
        color: "pink-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://youtu.be/NtXWKVBxPsw",
    source_icon: youtube,
  },
  {
    name: "Digital Agronomy",
    description:
      "Revolutionizing Plant Nutrition Management with Smart Fertilizer Device. Researched a precision fertilizer calculator that uses NIR spectroscopy, soil moisture sensors, and plant-specific suggestions to enhance plant nutrition in real-time. By reducing soil deterioration and fertilizer runoff, this novel technology increases agricultural production, decreases waste, and promotes sustainability. Its efficacy in enhancing crop health and agricultural profitability was indicated by field trials.",
    tags: [
      {
        name: "IOT",
        color: "blue-text-gradient",
      },
      {
        name: "Sensor",
        color: "green-text-gradient",
      },
      {
        name: "arduino",
        color: "pink-text-gradient",
      },
    ],
    image: DIP,
    source_code_link:
      "https://drive.google.com/file/d/1ZcenGlgQEM9OIm00JVBVbdN6cO_P0Fv-/view?usp=drive_link",
    source_icon: drive,
  },
];

export { services, technologies, experiences, testimonials, projects };
