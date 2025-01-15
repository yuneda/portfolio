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
  location: "Sidoarjo, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/eJxokw6xx67XpdXy6",
  about:
    "Software and Data Engineer focused on building efficient, user-centric solutions.",
  summary: (
    <>
      <p>
        I&#39;m a software engineer with 2 years of experience building web applications. I specialize in React, TypeScript, Python, Node.js, and Nest.js.
        with a passion for performance and accessibility.
      </p>
      <p>
        I&#39;ve worked with startups and enterprise. I&#39;m always looking for new challenges and opportunities to learn and grow.
      </p>
    </>
  ),
  avatarUrl: "yuneda.jpeg",
  personalWebsiteUrl: "https://portfolio-phi-ten-51.vercel.app/",
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
    "Python",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "BigQuery",
    "Google Cloud Platform",
    "Nest.js",
  ],
  projects: [
    {
      title: "My Notes App",
      techStack: ["Javascript", "React.js", "Redux", "Styled Component"],
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
      techStack: ["Javascript", "React.js"],
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
