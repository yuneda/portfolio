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
    "Software and Engineer focused on building efficient, user-centric solutions.",
  summary: (
    <>
      <p>
        I'm a software engineer with 1+ years of experience building web applications. I specialize in React, TypeScript, and Node.js,
        with a passion for performance and accessibility.
      </p>
      <p>
        I've worked with startups and enterprises, leading teams and projects
        from ideation to launch. I'm a strong advocate for remote work and
        open-source software.
      </p>
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQGA9ivMbzF3Gg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718247958156?e=1742428800&v=beta&t=nMsVd4pAti7s0r8-V9-0j-G8t02L6jraGoEAo_KtVfs",
  // avatarUrl: "https://pbs.twimg.com/profile_images/1533117965570170880/peE0bJNV_400x400.jpg",
  personalWebsiteUrl: "https://yuneda.github.io/portfolio/",
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
      company: "gocement",
      link: "https://gocement.com/",
      badges: ["Python", "Big Query", "Google Cloud Platform", "Looker Studio"],
      title: "Data Engineer",
      logo: ConsultlyLogo,
      start: "2024",
      end: "2024",
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
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
      start: "2023",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
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
      start: "2022",
      end: "2023",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
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
        "My Notes App is a simple and intuitive note-taking app designed to keep your ideas, and tasks. Whether you’re jotting down quick thoughts, creating to-do lists, or planning projects.",
      logo: MonitoLogo,
      link: {
        label: "My Notes App",
        href: "https://yuneda.github.io/React-JS-Notes-Website/",
      },
    },
    {
      title: "Secondhand",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Secondhand is an online platform for buying and selling secondhand items. It offers various categories to meet user needs. Registered users can act as both sellers and buyers using a single account. The platform connects sellers and buyers, allowing them to negotiate and complete transactions outside the platform.",
      logo: MonitoLogo,
      link: {
        label: "https://secondhand-lilac.vercel.app/",
        href: "https://secondhand-lilac.vercel.app/",
      },
    },
  ],
} as const;
