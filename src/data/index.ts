import ReactIcon from '@/components/icons/ReactIcon.astro';
import ReactRouterIcon from '@/components/icons/ReactRouterIcon.astro';
import HtmlIcon from '@/components/icons/HtmlIcon.astro';
import CssIcon from '@/components/icons/CssIcon.astro';
import JavaScriptIcon from '@/components/icons/JavaScriptIcon.astro';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon.astro';
import NextIcon from '@/components/icons/NextIcon.astro';
import ReduxIcon from '@/components/icons/ReduxIcon.astro';
import MaterialUiIcon from '@/components/icons/MaterialUiIcon.astro';
import BootstrapIcon from '@/components/icons/BootstrapIcon.astro';
import TailwindCssIcon from '@/components/icons/TailwindCssIcon.astro';
import SassIcon from '@/components/icons/SassIcon.astro';
import GraphQLIcon from '@/components/icons/GraphQLIcon.astro';
import AngularIcon from '@/components/icons/AngularIcon.astro';
import VueIcon from '@/components/icons/VueIcon.astro';
import AstroIcon from '@/components/icons/AstroIcon.astro';
import GitIcon from '@/components/icons/GitIcon.astro';
import RestApiIcon from '@/components/icons/RestApiIcon.astro';
import TestingLibraryIcon from '@/components/icons/TestingLibraryIcon.astro';
import HookFormIcon from '@/components/icons/HookFormIcon.astro';
import ScrumIcon from '@/components/icons/ScrumIcon.astro';
import ResponsiveIcon from "@/components/icons/ResponsiveIcon.astro";
import WebsiteIcon from "@/components/icons/WebsiteIcon.astro";
import CodeIcon from '@/components/icons/CodeIcon.astro';
import ApiIcon from "@/components/icons/ApiIcon.astro";
import type { Section, Experience, Education, MainSkill, Technology, Project, Certificate } from '@/types';

export const sections: Section[] = [
  {
    id: "home",
    title: "Home",
    href: "#home"
  },
  {
    id: "about",
    title: "About me",
    href: "#about"
  },
  {
    id: "experience",
    title: "Experience",
    href: "#experience"
  },
  {
    id: "education",
    title: "Education",
    href: "#education"
  },
  {
    id: "mainSkills",
    title: "Skills",
    href: "#mainSkills"
  },
  {
    id: "projects",
    title: "Projects",
    href: "#projects"
  }
]

export const experience: Experience[] = [
  {
    id: 0,
    time: "07/2025 - 10/2025",
    role: "Frontend Developer",
    company: "Freelance",
    type: "Remote",
    description: `Migrated a legacy Angular app with technical debt for a food store and order management system. Involves team development of new app in Angular 20 with Clean Architecture, including: 
      UI redesign and UX improvements. 
      Modular interface development. 
      Integration with existing REST API.`
  },
  {
    id: 1,
    time: "04/2025 - 05/2025",
    role: "Frontend Mobile Developer",
    company: "Freelance",
    type: "Remote",
    description: `I developed interfaces for a mobile application using React Native, meticulously following the UX/UI design in Figma and consuming a REST API to ensure the proper rendering of data in the application.`
  },
  {
    id: 1,
    time: "12/2023 – 12/2024",
    role: "Frontend Developer",
    company: "Nolatech",
    type: "Remote",
    description: "I participated in the development of an ongoing web chat platform made in React.js adding new features. I led the frontend development of an administrative and tracking web application using Next.js and connecting a GraphQL API. I collaborated in the design and development of a bug tracking application (Next.js)."
  },
  {
    id: 2,
    time: "12/2022 – 03/2023",
    role: "Frontend Developer",
    company: "Portl",
    type: "Remote",
    description: "Implemented UI/UX improvements in a web platform for content creators in production, developed with Next.js. I increased the scope of the application by developing new features and interfaces. I optimized the project's code by fixing bugs and performing refactoring."
  },
  {
    id: 3,
    time: "02/2021 – 01/2022",
    role: "Frontend Developer",
    company: "Smartbunny",
    type: "Remote",
    description: "I participated in the expansion of an ongoing web project creating new interfaces with React.js. I contributed in the development of the web version of a social network with Next.js, making the UI and integrating serverless connections. I collaborated in the construction of an administrative system in Angular developing the UI and integrating a REST API. I developed landing pages and websites using HTML, CSS and Bootstrap."
  },
  {
    id: 4,
    time: "01/2019 – 01/2021",
    role: "Junior Developer",
    company: "LCC Opentech",
    type: "Hybrid",
    description: `I cooperated in the development of a web application with React.js for industrial process control performing the following tasks: 
      I built the UI following designs. 
      I integrated a REST API to consume and manage data. 
      I connected data in real time.`
  }
]

export const education: Education[] = [
  {
    id: 'computer-engineering',
    time: '2015 - 2023',
    degree: 'Computer Engineering',
    institute: 'Universidad Nacional Experimental de Guayana',
    city: 'Puerto Ordaz',
    country: 'Venezuela',
  }
];

export const mainSkills: MainSkill[] = [
  {
    id: "webApps",
    icon: CodeIcon,
    title: "Web Application Development",
    description:
      "Design and development of dynamic, scalable interfaces using modern frameworks such as React and Next.js, with a focus on performance, accessibility, and user experience."
  },
  {
    id: "staticSites",
    icon: WebsiteIcon,
    title: "Static Website Development",
    description:
      "Building fast, SEO-optimized websites with technologies like Astro and HTML/CSS, prioritizing low load times and a maintainable structure."
  },
  {
    id: "responsiveDesign",
    icon: ResponsiveIcon,
    title: "Responsive Design",
    description:
      "Implementation of adaptable layouts that ensure a seamless experience on mobile devices, tablets, and desktops using Tailwind CSS and modern layout techniques."
  },
  {
    id: "apiConsumption",
    icon: ApiIcon,
    title: "API Integration",
    description:
      "Efficient integration of REST and GraphQL APIs to connect interfaces with real-time data, applying best practices for state management and asynchronous operations."
  }
];

export const technologies: Technology[] = [
  { id: "html", name: "HTML", icon: HtmlIcon },
  { id: "css", name: "CSS", icon: CssIcon },
  { id: "javaScript", name: "JavaScript", icon: JavaScriptIcon },
  { id: "typeScript", name: "TypeScript", icon: TypeScriptIcon },
  { id: "reactJs", name: "React.js", icon: ReactIcon },
  { id: "reactNative", name: "React Native", icon: ReactIcon },
  { id: "nextJs", name: "Next.js", icon: NextIcon },
  { id: "redux", name: "Redux", icon: ReduxIcon },
  { id: "reactRouter", name: "React Router", icon: ReactRouterIcon },
  { id: "materialUi", name: "Material UI", icon: MaterialUiIcon },
  { id: "reactHookForm", name: "React Hook Form", icon: HookFormIcon },
  { id: "reactTestingLibrary", name: "React Testing Library", icon: TestingLibraryIcon },
  { id: "angular", name: "Angular", icon: AngularIcon },
  { id: "vueJs", name: "Vue.js", icon: VueIcon },
  { id: "astro", name: "Astro", icon: AstroIcon },
  { id: "bootstrap", name: "Bootstrap", icon: BootstrapIcon },
  { id: "tailwindCss", name: "Tailwind CSS", icon: TailwindCssIcon },
  { id: "sass", name: "SASS", icon: SassIcon },
  { id: "restApi", name: "REST API", icon: RestApiIcon },
  { id: "graphQl", name: "GraphQL", icon: GraphQLIcon },
  { id: "git", name: "Git", icon: GitIcon },
  { id: "scrum", name: "Scrum", icon: ScrumIcon }
]

export const certificates: Certificate[] = [
  {
    id: "javascript-frameworks-libraries",
    title: "JavaScript Frameworks and Libraries Course",
    imageUrl: "/certificate_1.png",
    link: "https://platzi.com/p/rosirisvrm/curso/2239-frameworks-javascript/diploma/detalle/",
    institute: "Platzi",
    year: "2023"
  },
  {
    id: "react-introduction",
    title: "Introduction to React.js Course",
    imageUrl: "/certificate_2.png",
    link: "https://platzi.com/p/rosirisvrm/curso/2444-react-17/diploma/detalle/",
    institute: "Platzi",
    year: "2023"
  },
  {
    id: "react-render-patterns",
    title: "React.js: Render and Compositing Patterns Course",
    imageUrl: "/certificate_3.png",
    link: "https://platzi.com/p/rosirisvrm/curso/2457-react-patrones-render/diploma/detalle/",
    institute: "Platzi",
    year: "2023"
  },
  {
    id: "react-state-management",
    title: "React.js: Professional State Management Course",
    imageUrl: "/certificate_4.png",
    link: "https://platzi.com/p/rosirisvrm/curso/2597-react-estado/diploma/detalle/",
    institute: "Platzi",
    year: "2023"
  },
  {
    id: "react-redux",
    title: "React.js and Redux Professional Course",
    imageUrl: "/certificate_5.png",
    link: "https://platzi.com/p/rosirisvrm/curso/3219-react-redux-profesional/diploma/detalle/",
    institute: "Platzi",
    year: "2023"
  },
  {
    id: "efset-b1",
    title: "EF SET English Certificate 45/100 (B1 Intermediate)",
    imageUrl: "/certificate_6.png",
    link: "https://cert.efset.org/JvnVPJ",
    institute: "EF SET",
    year: "2023"
  },
  {
    id: "vit-explorer",
    title: "Venezuelans in Tech English Conversational Club (Explorer Level)",
    imageUrl: "/certificate_7.png",
    link: "https://venezuelansintech.org/club",
    institute: "Venezolanas in Tech",
    year: "2025"
  }
];

export const projects: Project[] = [
    {
        id: 'condominium-administrator-web-app',
        title: 'Condominium Administrator Web App',
        resume: `Web application for condominium management implemented with React.js.`,
        description: `This is a modular web application designed to manage various tasks and roles within a condominium. 
          It was part of the system I developed for my undergraduate thesis to earn my degree in Computer Engineering. 
          The application was built using React.js, incorporating Material UI as the component library, 
          React Router for navigation and routing, React Hook Form for form handling, and Redux for managing global state. 
          Faker.js was used to generate mock data during development.`,
        imgUrl: 'project_0',
        repoUrl: 'https://github.com/rosirisvrm/condominium-administrator',
        demoUrl: 'https://rosirisvrm.github.io/condominium-administrator/#/dashboard/home',
        technologies: ['reactJs', 'redux', 'materialUi', 'reactHookForm', 'reactRouter'],
        status: 'regular',
    },
    {
        id: 'todo-machine',
        title: 'TODO Machine',
        resume: `TODO management application developed with React.js, focused on its core functionality without the use of external libraries`,
        description: `TODO management application developed with React.js, focused on its core functionality without the use of external libraries. 
          The goal of this project was to utilize the native React API to implement the desired features 
          and behaviors—such as viewing, creating, editing, completing, and deleting TODO items—without third-party dependencies. 
          It’s a simple, single-route application. Styles were applied using CSS, and data persistence was handled through local storage. 
          This project demonstrates key React concepts including state, hooks, component composition, stateful and stateless components, 
          custom hooks, React Context, and reducers.`,
        imgUrl: 'project_1',
        repoUrl: 'https://github.com/rosirisvrm/todo-machine',
        demoUrl: 'https://rosirisvrm.github.io/todo-machine/',
        technologies: ['reactJs', 'css', 'contextApi', 'reactHooks', 'reactRouter', 'customHooks', 'localStorage'],
        status: 'regular',
    },
    {
        id: 'uw-landing-page',
        title: 'UW Landing Page',
        resume: `This is a landing page for a social network focused on the fitness lifestyle. It was developed using React.js with the Material UI library.`,
        description: `This is a landing page for a social network focused on the fitness lifestyle. It was developed using React.js with the Material UI library.`,
        imgUrl: 'project_2',
        repoUrl: 'https://github.com/rosirisvrm/unitewellness-landing',
        demoUrl: 'https://rosirisvrm.github.io/unitewellness-landing/',
        technologies: ['reactJs', 'materialUi'],
        status: 'regular',
    },
    {
        id: 'company-landing-page',
        title: 'Company Landing Page',
        resume: `This is a landing page for a fictional company. It was developed using Next.js version 14, with Material UI as the UI library.`,
        description: `This is a landing page for a fictional company. It was developed using Next.js version 14, with Material UI as the UI library.`,
        imgUrl: 'project_3',
        repoUrl: 'https://github.com/rosirisvrm/company-landing-page',
        demoUrl: 'https://rosirisvrm-company-landing-page.netlify.app/',
        technologies: ['reactJs', 'nextJs', 'materialUi'],
        status: 'regular',
    },
    {
        id: 'condominium-administrator-landing-Page',
        title: 'Condominium Administrator Landing Page',
        resume: `Landing page for Condominium Administrator, a web application for condominium management. Built with semantic HTML, 
          handcrafted CSS, and vanilla JavaScript to ensure lean performance and full control over the UI.`,
        description: `This is a landing page for Condominium Administrator, a web application for condominium management. Built with semantic HTML, 
          handcrafted CSS, and vanilla JavaScript to ensure lean performance and full control over the UI. Additionally, Bootstrap was used to style the site. In one of the sections, 
          a REST API is consumed and the data is presented in a visually appealing and interactive way.`,
        imgUrl: 'project_4',
        repoUrl: 'https://github.com/rosirisvrm/ca-landing-page',
        demoUrl: 'https://ca-lading-page.netlify.app/',
        technologies: ['html', 'css', 'javaScript', 'bootstrap'],
        status: 'regular',
    },
    {
        id: 'english-academy-landing-page',
        title: 'English Academy Landing Page',
        resume: `Landing page for a fictional English academy, developed with Gulp and Twig. Styled using Bootstrap and Sass to ensure a clean, 
          responsive design aligned with educational branding.`,
        description: `This is a landing page for a fictional English academy. It was developed using Gulp and Twig. The application includes multiple pages, 
          and a JavaScript script was added to handle navigation between them. Additionally, another script consumes a public API that provides mock data. 
          The website was styled using Bootstrap and Sass to ensure a clean, responsive design aligned with educational branding.`,
        imgUrl: 'project_5',
        repoUrl: 'https://github.com/rosirisvrm/english-academy-landing-page',
        demoUrl: 'https://english-academy-landing-page.netlify.app/',
        technologies: ['html', 'css', 'javaScript', 'sass', 'bootstrap', 'twig', 'gulp'],
        status: 'regular',
    },
    {
      id: 'digital-herbarium',
      title: 'Digital herbarium',
      resume: `Interactive academic digital herbarium developed using Astro, TypeScript, and Tailwind CSS.`,
      description: `Interactive academic digital herbarium designed for the exploration and study of plant species, developed using Astro, TypeScript, and Tailwind CSS, aimed at delivering a fast, accessible, and visually engaging web experience to support botanical learning.`,
      imgUrl: 'project_6',
      repoUrl: 'https://github.com/rosirisvrm/plants-catalog',
      demoUrl: 'https://plants-catalog.vercel.app/',
      technologies: ['html', 'typeScript', 'astro', 'tailwindCss'],
      status: 'new',
  },
  {
    id: 'venerica',
    title: 'Venerica',
    resume: `Development of a modern web solution in Angular 20 to optimize the operational management of a food store.`,
    description: `Complete restructuring and replacement of a previous application with high levels of technical debt, implementing Clean Architecture patterns to improve the quality and evolution of the code. Collaborative development to create:`,
    features: [
      'Adaptive, modular and reusable component-oriented interface.',
      'Improved user experience with refreshed UI design and intuitive functionality.',
      'Robust connectivity with existing REST APIs, ensuring integrity and fluidity in data handling.',
    ],
    imgUrl: 'project_7',
    repoUrl: '',
    demoUrl: '',
    technologies: ['angular', 'typeScript', 'cleanArchitecture', 'restApi', 'angularMaterial', 'tailwindCss'],
    status: 'new',
  },
  {
    id: 'comedy-club-ticket-generator',
    title: 'Comedy Club Ticket Generator',
    resume: ``,
    description: ``,
    imgUrl: '',
    repoUrl: 'https://github.com/rosirisvrm/comedy-club-ticket-generator',
    demoUrl: 'https://tickets-sales-site.vercel.app/',
    technologies: ['reactJs', 'typeScript', 'localStorage', 'tailwindCss', 'reactHookForm', 'reactContextApi', 'reactTestingLibrary'],
    status: 'coming soon',
  },
];
