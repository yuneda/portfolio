import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Achmad Yuneda Alfajr",
  initials: "AYA",
  location: "Surabaya, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/eJxokw6xx67XpdXy6",
  about:
    "AI-driven Software and Data Engineer focused on building efficient, intelligent, and user-centric solutions.",
  summary: (
    <>
      <p>
      Software Engineer with 3 years of experience with varying degrees between front end, back end and automation. Capable of working with a variety of technology and software solutions and managing databases. Beyond traditional development, I have also worked on AI-driven solutions, particularly in Generative AI.
      </p>
    </>
  ),
  avatarUrl: "yuneda.jpeg",
  personalWebsiteUrl: "https://yuneda.vercel.app/",
  contact: {
    email: "yunedaalfajr@gmail.com",
    tel: "+628980023612",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yuneda",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/achmad-yuneda-alfajr/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Yunedae",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
      degree: "Bachelor's Degree in Informatics Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Tomie Technology",
      link: "https://www.tomietech.com/",
      badges: ["React", "TypeScript", "Node.js", "Kafka", "PostgreSQL"],
      title: "Software Engineer",
      logo: ConsultlyLogo,
      start: "Jan 2025",
      end: "Present",
      description: (
        <>
          As a Software Engineer, I&#39;m responsible for collaborating with designers, product managers, and stakeholders to
          align technical execution with business objectives
          <ul className="list-inside list-disc">
            <li>
            Lead the architecture, design, and development of scalable, robust, software solutions.
            </li>
            <li>
            Spearheaded the setup of A WS infrastructure and DevOps pipelines, creating RFCs and deployment documentation adopted company-wide.
            </li>
            <li>
            Acted as the primary point of contact for all DevOps-related initiatives, supporting developers and maintaining deployment reliability.
            </li>
            <li>
            Convert UI/UX designs from Figma into fully responsive and interactive React applications, ensuring a seamless user experience across devices.
            </li>
            <li>
            Develop and optimize application logic, maintaining clean, efficient, and scalable code for long-term maintainability.
            </li>
            <li>
            Manage end-to-end application deployments, including CI/CD pipeline configuration and release management.
            </li>
            <li>
            Delivered internal tech talks to share technical improvements and promote engineering excellence within the development team.
            </li>
            <li>
            Mentored developers by enforcing coding standards, clean architecture principles, and promoting continuous learning culture.
            </li>
            <li>
            Implement Kafka for real-time data streaming and inter-service communication between microservices, enabling seamless data flow and synchronization across multiple databases.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Gocement",
      link: "https://gocement.com/",
      badges: ["Python", "Big Query", "Google Cloud Platform", "Looker Studio"],
      title: "Data Engineer",
      logo: ConsultlyLogo,
      start: "Mar 2024",
      end: "Dec 2024",
      description: (
        <>
          As a Data Engineer, I&#39;m responsible for building and maintaining data pipelines, and creating dashboards for data analysis.
          <ul className="list-inside list-disc">
            <li>
              Developing Python scripts to automate the proccess using GCP Cloud Function and Big Query
            </li>
            <li>
            Creating and managing table data in BigQuery through join operations, leveraging automation and scheduled queries in GCP.
            </li>
            <li>
            Design and implement dashboards using Looker to enable company analysis for monitoring business processes and evaluating sales data, utilizing BigQuery as the data source.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "SFS Group",
      link: "https://www.sfsgroupid.com/",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "Firebase",
      ],
      title: "Web Developer",
      logo: ParabolLogo,
      start: "Mar 2023",
      end: "Mar 2024",
      description: (
        <>
          Built web apps with React, Firebase, and Redis, integrated payments with Xendit, and collaborated with product and QA teams.
          <ul className="list-inside list-disc">
            <li>
            Contribute to the development of broadcast message system with pubsub
            </li>
            <li>
            Integrate a payment gateway for both frontend and backend systems to support subscription management and cancellation using Xendit, including handling detailed invoice information for each billing cycle.
            </li>
            <li>
            Responsible for both the cloud function and frontend project using react, typescript, firebase, redis.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Aksamedia",
      link: "https://aksamedia.co.id/",
      badges: ["Remote", "React", "TypeScript", "Nest.js", "PostgreSQL", "GraphQL"],
      title: "Full Stack Engineer",
      logo: ClevertechLogo,
      start: "Nov 2022",
      end: "Mar 2023",
      description: (
        <>
          Built interfaces with React, developed full-stack apps with NestJS, documented APIs, implemented authentication, added push notifications, and integrated WhatsApp OTP.
          <ul className="list-inside list-disc">
            <li>
            Developed intuitive and visually appealing user interfaces that enhance user experience using React, TypeScript, and Chakra UI
            </li>
            <li>
            Developed high-performance, scalable, and maintainable full-stack applications using NestJS, GraphQL, Apollo Server, and TypeORM
            </li>
            <li>
            Employed Swagger for seamless API documentation, enabling clear and comprehensive documentation for developers, stakeholders, and end-users alike
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Javascript",
    "Kafka",
    "GraphQL",
    "Google Cloud Platform",
    "BigQuery",
    "AWS",
    "Python",
    "Tailwind CSS",
    "Node.js",
    "Nest.js",
    "Amazon Web Services",
  ],
  projects: [
    {
      title: "Memory Game",
      techStack: ["TypeScript", "React", "Framer Motion"],
      description:
        "A fun and interactive memory card game built with React, TypeScript, and Tailwind CSS. Challenge your memory by finding matching pairs of cards while tracking your time and moves!",
      logo: MonitoLogo,
      link: {
        label: "Memory Game",
        href: "https://memory-game-yuneda.vercel.app/",
      },
      githubUrl: "https://github.com/yuneda/memory-game",
      imageUrl: "/memory-game.png",
    },
    {
      title: "My Notes App",
      techStack: ["Javascript", "React", "Redux", "Styled Component"],
      description:
        "My Notes App is a simple, intuitive tool for capturing ideas, tasks, and plans, from quick notes to project to-do lists.",
      logo: MonitoLogo,
      link: {
        label: "My Notes App",
        href: "https://yuneda.github.io/React-JS-Notes-Website/",
      },
      githubUrl: "https://github.com/yuneda/React-JS-Notes-Website",
      imageUrl: "/note-preview.jpg",
    },
    {
      title: "Secondhand",
      techStack: ["Javascript", "React"],
      description:
        "Secondhand is an online platform for buying and selling used items, connecting users to negotiate and transact directly.",
      logo: MonitoLogo,
      link: {
        label: "https://secondhand-lilac.vercel.app/",
        href: "https://secondhand-lilac.vercel.app/",
      },
      githubUrl: "https://github.com/yuneda/secondhand",
      imageUrl: "/secondhand.png",
    },
  ],
} as const;
