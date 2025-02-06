declare global {
    type Project = {
        title: string;
        description: string;
        technologies: string[];
        dateStarted: Date;
        dateEnded: Date | string;
        image_src: string;
    };

    type Tags = {
        name: string;
        icon_src: string;
        iconFirst: boolean;
        url: string;
    };
}

export {};
