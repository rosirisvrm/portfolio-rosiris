import ReactIcon from './components/icons/ReactIcon.astro';
import ReactRouterIcon from './components/icons/ReactRouterIcon.astro';
import HtmlIcon from './components/icons/HtmlIcon.astro';
import CssIcon from './components/icons/CssIcon.astro';
import JavaScriptIcon from './components/icons/JavaScriptIcon.astro';
import TypeScriptIcon from './components/icons/TypeScriptIcon.astro';
import NextIcon from './components/icons/NextIcon.astro';
import ReduxIcon from './components/icons/ReduxIcon.astro';
import MaterialUiIcon from './components/icons/MaterialUiIcon.astro';
import BootstrapIcon from './components/icons/BootstrapIcon.astro';
import TailwindCssIcon from './components/icons/TailwindCssIcon.astro';
import SassIcon from './components/icons/SassIcon.astro';
import GraphQLIcon from './components/icons/GraphQLIcon.astro';
import AngularIcon from './components/icons/AngularIcon.astro';
import VueIcon from './components/icons/VueIcon.astro';
import AstroIcon from './components/icons/AstroIcon.astro';
import GitIcon from './components/icons/GitIcon.astro';
import RestApiIcon from './components/icons/RestApiIcon.astro';
import TestingLibraryIcon from './components/icons/TestingLibraryIcon.astro';
import HookFormIcon from './components/icons/HookFormIcon.astro';
import ScrumIcon from './components/icons/ScrumIcon.astro';
import ResponsiveIcon from "./components/icons/ResponsiveIcon.astro";
import WebsiteIcon from "./components/icons/WebsiteIcon.astro";
import CodeIcon from './components/icons/CodeIcon.astro';
import ApiIcon from "./components/icons/ApiIcon.astro";

export type Section = {
  id: string;
  title: string;
  href: string;
}

export type Experience = {
    id: number,
    time: string,
    role: string,
    company: string,
    type: string,
    description: string,
}

export type MainSkill = {
  id: string,
  icon: any,
  title: string,
  description: string,
}

export type Project = {
    id: string;
    title: string;
    resume: string;
    description: string;
    imgUrl?: string;
    repoUrl: string;
    demoUrl: string;
    technologies: string[] | [];
};

export type Education = {
    id: string;
    time: string;
    degree: string;
    institute: string,
    city: string,
    country: string,
}

export type Technology = {
    id: string;
    name: string;
    icon: any;
}

export const sections: Section[] = [
  {
    id: "home",
    title: "Home",
    href: "#home"
  },
  {
    id: "about",
    title: "Sobre mí",
    href: "#about"
  },
  {
    id: "experience",
    title: "Experiencia",
    href: "#experience"
  },
  {
    id: "education",
    title: "Educación",
    href: "#education"
  },
  {
    id: "mainSkills",
    title: "Habilidades",
    href: "#mainSkills"
  },
  {
    id: "projects",
    title: "Proyectos",
    href: "#projects"
  }
]

export const experience: Experience[] = [
  {
    id: 0,
    time: "04/2025 - 05/2025",
    role: "Frontend Mobile Developer",
    company: "Freelance",
    type: "Remoto",
    description: "I developed interfaces for a mobile application using React Native, meticulously following the UX/UI design in Figma and consuming a REST API to ensure the proper rendering of data in the application."
  },
  {
    id: 1,
    time: "12/2023 – 12/2024",
    role: "Frontend Developer",
    company: "Nolatech",
    type: "Remoto",
    description: "I participated in the development of an ongoing web chat platform made in React.js adding new features. I led the frontend development of an administrative and tracking web application using Next.js and connecting a GraphQL API. I collaborated in the design and development of a bug tracking application (Next.js)."
  },
  {
    id: 2,
    time: "12/2022 – 03/2023",
    role: "Frontend Developer",
    company: "Portl",
    type: "Remoto",
    description: "Implemented UI/UX improvements in a web platform for content creators in production, developed with Next.js. I increased the scope of the application by developing new features and interfaces. I optimized the project's code by fixing bugs and performing refactoring."
  },
  {
    id: 3,
    time: "02/2021 – 01/2022",
    role: "Frontend Developer",
    company: "Smartbunny",
    type: "Remoto",
    description: "I participated in the expansion of an ongoing web project creating new interfaces with React.js. I contributed in the development of the web version of a social network with Next.js, making the UI and integrating serverless connections. I collaborated in the construction of an administrative system in Angular developing the UI and integrating a REST API. I developed landing pages and websites using HTML, CSS and Bootstrap."
  },
  {
    id: 4,
    time: "01/2019 – 01/2021",
    role: "Junior Developer",
    company: "LCC Opentech",
    type: "Hybrid",
    description: "I cooperated in the development of a web application with React.js for industrial process control performing the following tasks: I built the UI following designs. I integrated a REST API to consume and manage data. I connected data in real time."
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
    title: "Desarrollo de aplicaciones web",
    description: "Diseño y desarrollo de interfaces dinámicas y escalables utilizando frameworks modernos como React y Next.js, con enfoque en rendimiento, accesibilidad y experiencia de usuario."
  },
  {
    id: "staticSites",
    icon: WebsiteIcon,
    title: "Desarrollo de sitios web estáticos",
    description: "Construcción de sitios rápidos y optimizados para SEO con tecnologías como Astro y HTML/CSS, priorizando tiempos de carga bajos y una estructura fácilmente mantenible."
  },
  {
    id: "responsiveDesign",
    icon: ResponsiveIcon,
    title: "Desarrollo responsive",
    description: "Implementación de diseños adaptables que aseguran una experiencia fluida en dispositivos móviles, tablets y escritorios usando Tailwind CSS y técnicas modernas de layout."
  },
  {
    id: "apiConsumption",
    icon: ApiIcon,
    title: "Consumo de APIs",
    description: "Integración eficiente de APIs REST y GraphQL para conectar interfaces con datos en tiempo real, aplicando buenas prácticas de manejo de estado y asincronía."
  }
]

export const technologies = [
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

export const projects: Project[] = [
    {
        id: 'condominium-administrator-web-app',
        title: 'Condominium Administrator Web App',
        resume: 'Aplicación web para la gestión de condominios implementada con React.js.',
        description: 'Aplicación web para la gestión de condominios implementada con React.js. Se trata de una aplicación con módulos para gestionar las diferentes tareas y roles involucrados en un condominio. La aplicación fue desarrollada con React, se utilizó Material UI como librería de UI, React Router para la navegación y manejo de rutas, React Hook Form para el manejo de formularios y Redux para el manejo del estado global de la aplicación. La aplicación aún no cuenta con integraciones con backend, por ello se utilizó fake data solo para efectos de visualización del producto, esta fue generada con Faker.js.',
        imgUrl: 'project_0',
        repoUrl: 'https://github.com/rosirisvrm/condominium-administrator',
        demoUrl: 'https://rosirisvrm.github.io/condominium-administrator/#/dashboard/home',
        technologies: ['reactJs', 'redux', 'materialUi', 'reactHookForm', 'reactRouter'],
    },
    {
        id: 'todo-machine',
        title: 'TODO Machine',
        resume: 'Aplicación para manejo de TODOs desarrollada con React.js enfocada en su core sin el uso de librerías externas.',
        description: 'Aplicación para manejo de TODOs desarrollada con React.js enfocada en su core sin el uso de librerías externas. En este aplicación el objetivo fue utilizar la API de React, sin ayuda de más herramientas para lograr las funcionalidades y comportamiento deseado para visualizar una lista de TODOs así como crear, editar, completar y eliminar TODOs. Se trata de una aplicación simple, de una sola ruta, en donde los estilos fueron aplicados con css y el manejo de datos se hizo utilizando local storage En esta aplicación se implementan conceptos de React como estados, composición de componentes, statefull y staless components, custom hooks, React Context y reducers.',
        imgUrl: 'project_1',
        repoUrl: 'https://github.com/rosirisvrm/todo-machine',
        demoUrl: 'https://rosirisvrm.github.io/todo-machine/',
        technologies: ['reactJs', 'css', 'contextApi', 'reactHooks', 'reactRouter', 'customHooks', 'localStorage']
    },
    {
        id: 'uw-landing-page',
        title: 'UW Landing Page',
        resume: 'Se trata de una landing page de una red social dirigida a al estilo de vida fitness. Fue desarrollado en React.js con uso de la librería Material UI.',
        description: 'Se trata de una landing page de una red social dirigida a al estilo de vida fitness. Fue desarrollado en React.js con uso de la librería Material UI.',
        imgUrl: 'project_2',
        repoUrl: 'https://github.com/rosirisvrm/unitewellness-landing',
        demoUrl: 'https://rosirisvrm.github.io/unitewellness-landing/',
        technologies: ['reactJs', 'materialUi']
    },
    {
        id: 'company-landing-page',
        title: 'Company Landing Page',
        resume: 'Es una landing page de una compañía fake. Fue desarrollada usando Next.js en su versión 14. Para los estilos y como librería de UI se utilizó Material UI.',
        description: 'Es una landing page de una compañía fake. Fue desarrollada usando Next.js en su versión 14. Para los estilos y como librería de UI se utilizó Material UI.',
        imgUrl: 'project_3',
        repoUrl: 'https://github.com/rosirisvrm/company-landing-page',
        demoUrl: 'https://rosirisvrm-company-landing-page.netlify.app/',
        technologies: ['reactJs', 'nextJs', 'materialUi']
    },
    {
        id: 'condominium-administrator-landing-Page',
        title: 'Condominium Administrator Landing Page',
        resume: 'Es una landing page de una aplicación web para gestión de condominios. Fue desarrollada utilizando HTML, CSS nativos y JS vanilla.',
        description: 'Es una landing page de una aplicación web para gestión de condominios. Fue desarrollada utilizando HTML, CSS nativos y JS vanilla. Adicionalmente para estilizar el sitio y para dar forma a los layouts de las distintas secciones se adicionó Bootstrap. En una de las secciones del sitio se está consumiendo una REST API de ejemplo (en este caso la de Rick And Morty https://rickandmortyapi.com/) y se están mostrando los datos de una manera bonita e interactiva, esto con la finalidad de mostrar como se puede recuperar y mostrar datos provenientes de una API en este tipo de sitios estáticos.',
        imgUrl: 'project_4',
        repoUrl: 'https://github.com/rosirisvrm/ca-landing-page',
        demoUrl: 'https://ca-lading-page.netlify.app/',
        technologies: ['html', 'css', 'javaScript', 'bootstrap']
    },
    {
        id: 'english-academy-landing-page',
        title: 'English Academy Landing Page',
        resume: 'Se trata de una landing page de una academia de inglés fake. Está desarrollada usando Gulp y Twig. Esta landing fue estilizada usando Bootstrap y Sass.',
        description: 'Se trata de una landing page de una academia de inglés fake. Está desarrollada usando Gulp y Twig, herramientas útiles para el desarrollo de sitios web estáticos, que facilitan el manejo y generación de HTML. Está aplicación cuenta con varias páginas y para manejar la navegación entre ellas se agregó un script sencillo de JavaScript en donde se manipula el DOM una vez el contenido es cargado para cambiar estilos puntuales en el header.  A la vez se agregó otro script en donde se consume una API pública que provee data fake, de la cual se están consumiendo los usuarios que se muestran en la página Nosotros. Esta landing fue estilizada usando Bootstrap y Sass.',
        imgUrl: 'project_5',
        repoUrl: 'https://github.com/rosirisvrm/english-academy-landing-page',
        demoUrl: 'https://english-academy-landing-page.netlify.app/',
        technologies: ['html', 'css', 'javaScript', 'sass', 'bootstrap', 'twig', 'gulp']
    },
];