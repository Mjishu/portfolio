import './style.css';
import { querySelectorNotNull } from './display';

export class CreateTemplate {
    _projects: Project[];
    document: HTMLElement;
    languages: string[];
    introSelector: HTMLElement;
    projectsSelector: HTMLElement;
    aboutMeSelector: HTMLElement;
    languageCarouselSelector: HTMLElement;

    constructor(document: HTMLElement, projects: Project[], languages: string[]) {
        this._projects = projects;
        this.document = document;
        this.languages = languages;
        this.introSelector = querySelectorNotNull(document, '#intro') as HTMLElement;
        this.projectsSelector = querySelectorNotNull(document, '#projects') as HTMLElement;
        this.aboutMeSelector = querySelectorNotNull(document, '#about-me') as HTMLElement;
        this.languageCarouselSelector = querySelectorNotNull(document, '#language-carousel') as HTMLElement;
    }
    createMain() {
        for (let item = 0; item < this._projects.length; item++) {
            this._createProjects(this._projects[item]);
        }
        this._createLanguageCarousel(false);
        this._createLanguageCarousel(true);
    }

    _createProjects(project: Project) {
        const createdProject = document.createElement('div');
        createdProject.innerHTML = `
          <h4 class="project-name">${project.title}</h4>
          <p class="project-description>${project.description}</p>
          <p class="project-stack">${this._technologiesToString(project.technologies)}</p>
          <p class="project-dates">From | ${project.dateStarted} to ${project.dateEnded}</p>
        `;
        this.projectsSelector.appendChild(createdProject);
    }

    _createLanguageCarousel(reverse: boolean) {
        const carousel = document.createElement('div');
        carousel.className = 'carousel';
        if (!reverse) {
            carousel.innerHTML = this.languages
                .map((element) => {
                    return `<p>${element}</p>`;
                })
                .join(' ');
        } else if (reverse) {
            carousel.innerHTML = this.languages
                .reverse()
                .map((element) => {
                    return `<p>${element}</p`;
                })
                .join(' ');
        }
        this.languageCarouselSelector.appendChild(carousel);
    }

    _technologiesToString(stack: string[]): string {
        let stackString: string = '';
        for (let item = 0; item < stack.length; item++) {
            stackString += ' ' + stack[item] + ' ';
        }
        return stackString;
    }
}

const projects = [
    {
        title: "Poke' Find",
        description: 'an app that finds you your forever animal',
        image_src: '',
        technologies: ['Go', 'TypeScript', 'AWS'],
        dateStarted: new Date('2024/10/14'),
        dateEnded: 'Now',
    },
];

const languages = ['こんにちは', 'Hola', '你好', 'Hallo', 'नमस्ते', 'Bonjour', 'مرحبا', 'Привет', '안녕하세요'];

const documentSelector: HTMLElement = querySelectorNotNull(document, '#app') as HTMLElement;
const app = new CreateTemplate(documentSelector, projects, languages);
app.createMain();
