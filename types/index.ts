export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    sourceUrl: string;
    technologies: string[];
}

export interface PersonalInfo {
    name: string;
    title: string;
    description: string;
    aboutText: string;
    additionalInfo?: string;
    resumeUrl: string;
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    facebook?: string;
}
