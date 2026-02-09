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
    profileImage?: string;
    resumeUrl: string;
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    facebook?: string;
}

export interface Skill {
    name: string;
    icon: string;
    color: string;
}

export interface Certification {
    id: string;
    name: string;
    description: string;
    image: string;
    issuer: string;
    validFrom: string;
    validUntil: string;
    credentialUrl: string;
}
