export type ExperienceModel = {
    id: number,
    role: string;
    company: string;
    companyWebsite: string;
    description: string;
    additionalLinks: [];
    additionalLinksTitle: [];
    techStack?: [];
}

export type ProjectModel = {
    id: number,
    title: string,
    description: string,
    image: string
    link: string
}