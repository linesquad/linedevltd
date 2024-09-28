import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import card1 from "../assets/benefits/card-1.svg";
import card2 from "../assets/benefits/card-2.svg";
import card3 from "../assets/benefits/card-3.svg";
import card4 from "../assets/benefits/card-4.svg";
import card5 from "../assets/benefits/card-5.svg";
import card6 from "../assets/benefits/card-6.svg";

export const navigation = [
  {
    id: "0",
    title: "Courses",
    url: "courses",
  },
  {
    id: "1",
    title: "Pricing",
    url: "pricing",
  },
  {
    id: "2",
    title: "Portfolio",
    url: "portfolio",
  },
  {
    id: "3",
    title: "Blog",
    url: "blog",
  },
  {
    id: "4",
    title: "Get Course",
    url: "getCourse",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Connect",
    url: "connect",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Getting better",
    text: "By doing tasks on platform, you are transforming yourself as a better sowtware developer",
    date: "November 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "With doing tasks, you are playing, compete with other students and show your effort in our ranking system, will give you a job guarantee",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "AI Mentor",
    text: "Our AI mentor will check all the tasks and give points, so you will feel eqial",
    date: "November 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Connections",
    text: "By joining our platform you will have big team and connections trough whole country",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "You can start growing in our academy and after join our team.";

export const collabContent = [
  {
    id: "0",
    title: "Front End",
  },
  {
    id: "1",
    title: "Back End",
  },
  {
    id: "2",
    title: "Line Academy",
    text: collabText,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Static Website, single page website",
    price: "1000",
    features: [
      "An modern landing page",
      "Creating an amazing design",
      "Smooth navigation, with 5+ pages",
      "Responsivness all possible devices, animation effects",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "5000",
    features: [
      "An Advanced our secure auth",
      "Creating an amazing design",
      "Fully functional shopping, booking, shipping system",
      "Admin panel for full control",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Fully cutom idea or startup",
    price: null,
    features: [
      "front, back and mobile support",
      "Creating an amazing design",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const coursePricing = [
  {
    id: "0",
    title: "HTML, CSS, Tailwind",
    description: "Starting front end",
    price: "100",
    features: [
      "3 month based course",
      "Building 5 portfolio projects",
      "Gaining knowladge and never come back",
      "Oportunity to start working only with whis stack",
    ],
  },
  {
    id: "1",
    title: "JavaScript",
    description: "Mastering javascript all concepts ES6 +",
    price: "300",
    features: [
      "4 Month based course",
      "Building portfolio projects",
      "Getting comfrtable and after mastering on another level",
      "Oportunity to start working straght after course",
    ],
  },
  {
    id: "2",
    title: "Node js",
    description: "Getting middle dev of node",
    price: 700,
    features: [
      "Starting from scratch node",
      "Mastering express and mongo db",
      "Working on real world project line media",
      "After course oportunity for 3 top students straight join our team",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "HTML | CSS | TAILWIND",
    text: "3 month solid foundation to making exiting markup, oportunity to start working after course",
    backgroundUrl: card1,
    iconUrl: benefitIcon1,
    imageUrl: roadmap1,
  },
  {
    id: "1",
    title: "JavaScript",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: card2,
    iconUrl: benefitIcon2,
    imageUrl: roadmap1,
    light: true,
  },
  {
    id: "2",
    title: "TypeScript",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: card3,
    iconUrl: benefitIcon3,
    imageUrl: roadmap1,
  },
  {
    id: "3",
    title: "React",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: card4,
    iconUrl: benefitIcon4,
    imageUrl: roadmap1,
    light: true,
  },
  {
    id: "4",
    title: "React Native",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: card5,
    iconUrl: benefitIcon1,
    imageUrl: roadmap1,
  },
  {
    id: "5",
    title: "Node js",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: card6,
    iconUrl: benefitIcon2,
    imageUrl: roadmap1,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];