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
        technologies: ['react', 'redux', 'materialUi', 'reactHookForm', 'reactRouter'],
    },
    {
        id: 'todo-machine',
        title: 'TODO Machine',
        resume: 'Aplicación para manejo de TODOs desarrollada con React.js enfocada en su core sin el uso de librerías externas.',
        description: 'Aplicación para manejo de TODOs desarrollada con React.js enfocada en su core sin el uso de librerías externas. En este aplicación el objetivo fue utilizar la API de React, sin ayuda de más herramientas para lograr las funcionalidades y comportamiento deseado para visualizar una lista de TODOs así como crear, editar, completar y eliminar TODOs. Se trata de una aplicación simple, de una sola ruta, en donde los estilos fueron aplicados con css y el manejo de datos se hizo utilizando local storage En esta aplicación se implementan conceptos de React como estados, composición de componentes, statefull y staless components, custom hooks, React Context y reducers.',
        imgUrl: 'project_1',
        repoUrl: 'https://github.com/rosirisvrm/todo-machine',
        demoUrl: 'https://rosirisvrm.github.io/todo-machine/',
        technologies: ['react', 'css', 'contextApi', 'reactHooks', 'reactRouter', 'customHooks', 'localStorage']
    },
    {
        id: 'uw-landing-page',
        title: 'UW Landing Page',
        resume: 'Se trata de una landing page de una red social dirigida a al estilo de vida fitness. Fue desarrollado en React.js con uso de la librería Material UI.',
        description: 'Se trata de una landing page de una red social dirigida a al estilo de vida fitness. Fue desarrollado en React.js con uso de la librería Material UI.',
        imgUrl: 'project_2',
        repoUrl: 'https://github.com/rosirisvrm/unitewellness-landing',
        demoUrl: 'https://rosirisvrm.github.io/unitewellness-landing/',
        technologies: ['react', 'materialUi']
    },
    {
        id: 'company-landing-page',
        title: 'Company Landing Page',
        resume: 'Es una landing page de una compañía fake. Fue desarrollada usando Next.js en su versión 14. Para los estilos y como librería de UI se utilizó Material UI.',
        description: 'Es una landing page de una compañía fake. Fue desarrollada usando Next.js en su versión 14. Para los estilos y como librería de UI se utilizó Material UI.',
        imgUrl: 'project_3',
        repoUrl: 'https://github.com/rosirisvrm/company-landing-page',
        demoUrl: 'https://rosirisvrm-company-landing-page.netlify.app/',
        technologies: ['react', 'next', 'materialUi']
    },
    {
        id: 'condominium-administrator-landing-Page',
        title: 'Condominium Administrator Landing Page',
        resume: 'Es una landing page de una aplicación web para gestión de condominios. Fue desarrollada utilizando HTML, CSS nativos y JS vanilla.',
        description: 'Es una landing page de una aplicación web para gestión de condominios. Fue desarrollada utilizando HTML, CSS nativos y JS vanilla. Adicionalmente para estilizar el sitio y para dar forma a los layouts de las distintas secciones se adicionó Bootstrap. En una de las secciones del sitio se está consumiendo una REST API de ejemplo (en este caso la de Rick And Morty https://rickandmortyapi.com/) y se están mostrando los datos de una manera bonita e interactiva, esto con la finalidad de mostrar como se puede recuperar y mostrar datos provenientes de una API en este tipo de sitios estáticos.',
        imgUrl: 'project_4',
        repoUrl: 'https://github.com/rosirisvrm/ca-landing-page',
        demoUrl: 'https://ca-lading-page.netlify.app/',
        technologies: ['html', 'css', 'js', 'bootstrap']
    },
    {
        id: 'english-academy-landing-page',
        title: 'English Academy Landing Page',
        resume: 'Se trata de una landing page de una academia de inglés fake. Está desarrollada usando Gulp y Twig. Esta landing fue estilizada usando Bootstrap y Sass.',
        description: 'Se trata de una landing page de una academia de inglés fake. Está desarrollada usando Gulp y Twig, herramientas útiles para el desarrollo de sitios web estáticos, que facilitan el manejo y generación de HTML. Está aplicación cuenta con varias páginas y para manejar la navegación entre ellas se agregó un script sencillo de JavaScript en donde se manipula el DOM una vez el contenido es cargado para cambiar estilos puntuales en el header.  A la vez se agregó otro script en donde se consume una API pública que provee data fake, de la cual se están consumiendo los usuarios que se muestran en la página Nosotros. Esta landing fue estilizada usando Bootstrap y Sass.',
        imgUrl: 'project_5',
        repoUrl: 'https://github.com/rosirisvrm/english-academy-landing-page',
        demoUrl: 'https://english-academy-landing-page.netlify.app/',
        technologies: ['html', 'css', 'js', 'sass', 'bootstrap', 'twig', 'gulp']
    },
];