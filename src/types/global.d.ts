declare global {
    type Project = {
        title: string;
        description: string;
        technologies: string[];
        dateStarted: Date;
        dateEnded: Date | string;
        image_src: string;
    };
}

export {};
