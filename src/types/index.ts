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
    features?: string[] | [];
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