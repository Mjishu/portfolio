import './style.css';
import { querySelectorNotNull } from './display';

//* REMEMBER TO ADD NOISE TO BACKGROUND

export class CreateTemplate {
    _projects: Project[];
    content: HTMLElement;
    languages: string[];
    tags: Tags[];
    introSelector: HTMLElement;
    projectsSelector: HTMLElement;
    aboutMeSelector: HTMLElement;
    languageCarouselSelector: HTMLElement;
    contactSelector: HTMLElement;
    tabSelector: HTMLElement;

    constructor(document: HTMLElement, projects: Project[], languages: string[], tags: Tags[]) {
        this._projects = projects;
        this.content = document;
        this.languages = languages;
        this.tags = tags;
        this.introSelector = querySelectorNotNull(this.content, '#intro') as HTMLElement;
        this.projectsSelector = querySelectorNotNull(this.content, '#projects') as HTMLElement;
        this.aboutMeSelector = querySelectorNotNull(this.content, '#about-me') as HTMLElement;
        this.languageCarouselSelector = querySelectorNotNull(this.content, '#language-carousel') as HTMLElement;
        this.contactSelector = querySelectorNotNull(this.content, '#contact') as HTMLElement;
        this.tabSelector = querySelectorNotNull(this.content, '#tab') as HTMLElement;
    }
    createMain() {
        this._createIntro();
        this._createTab();
        for (let item = 0; item < this._projects.length; item++) {
            this._createProjects(this._projects[item], item % 2 === 0 ? true : false);
        }
        this._createLanguageCarousel(false);
        this._createLanguageCarousel(true);
        this._createAboutMe(
            'Joshua',
            'Lorem ipsum dolor sit amet consectetur. Arcu euismod enim dolor convallis proin pulvinar. Nullam maecenas egestas tellus nunc viverra morbi. Erat iaculis metus lorem dictum. Neque feugiat egestas interdum euismod aenean.',
        );
        this._linkTags();
    }

    _createIntro() {
        this.introSelector.innerHTML = `
          <h2 class="intro-body">Hey! I'm Josh <br/> A <span id="intro-span">Developer</span></h2>
        `;
    }

    _createProjects(project: Project, image_left: boolean) {
        const createdProject = document.createElement('div');
        createdProject.className = 'project';
        createdProject.innerHTML = `
          ${
              image_left == true
                  ? `<div>
            <h4 class="project-name">${project.title}</h4>
            <img class="project-image" src=${'/public/images/' + project.image_src} alt="project-image"/>
          </div>`
                  : ''
          }
          <div class="project-text-div">
            <p class="project-description">${project.description}</p>
            <p class="project-stack">${this._technologiesToString(project.technologies)}</p>
            <p class="project-dates">From | ${this._updateDateStyle(project.dateStarted)} To ${this._updateDateStyle(project.dateEnded)}</p>
          </div>
          ${
              image_left == false
                  ? `<div>
            <h4 class="project-name name-right">${project.title}</h4>
            <img class="project-image" src=${'/public/images/' + project.image_src} alt="project-image"/>
          </div>`
                  : ''
          }
        `;
        this.projectsSelector.appendChild(createdProject);
    }

    _createTab() {
        this.tabSelector.innerHTML = `
        <a href="#intro" class="current-tab tabs">HOME<a/>
        <a href="#projects" class="tabs" >PROJECTS<a/>
        <a href="#about-me" class="tabs" >WHO AM I?<a/>
        <a href="#contact" class="tabs" >CONTACT<a/>
      `;
    }

    _createAboutMe(name: string, description: string) {
        this.aboutMeSelector.innerHTML = `
        <div class="about-globe">
        </div>
        <div class="about-text">  
          <h2 class="about-name">${name}</h2>
          <p class="about-description">${description}</p>
          </div>
          `;
        //   <p class="about-email">${email}</p>
    }

    _linkTags() {
        const tagParent = document.createElement('div');
        tagParent.className = 'tag-parent';
        for (const item of this.tags) {
            const tag = document.createElement('button');
            const pathToIcon = `/public/icons/${item.icon_src}`;
            tag.className = 'tag';
            tag.innerHTML = `
              ${item.iconFirst ? `<img class="tag-icon" src=${pathToIcon} alt="tag"/>` : ''}
              <p class="tag-name">${item.name}</p>
              ${!item.iconFirst ? `<img class="tag-icon" src=${pathToIcon} alt="tag"/>` : ''}
          `;
            tagParent.appendChild(tag);
        }
        this.contactSelector.appendChild(tagParent);
    }

    _updateDateStyle(date: Date | string): Date | string {
        if (typeof date === 'string') return 'Now';

        const split = date.toString().split(' ').slice(1, 4);

        return split.join(' ');
    }

    _createLanguageCarousel(reverse: boolean) {
        const carousel = document.createElement('div');
        carousel.className = 'carousel';
        if (!reverse) {
            carousel.innerHTML = this.languages
                .map((element, index) => {
                    return `<p class="carousel-lang lang-${index} ${reverse ? 'carousel-lang-lr' : 'carousel-lang-rl'}">${element}</p>`;
                })
                .join(' ');
        } else if (reverse) {
            carousel.innerHTML = this.languages
                .reverse()
                .map((element, index) => {
                    return `<p class="carousel-lang lang-${index} ${reverse ? 'carousel-lang-lr' : 'carousel-lang-rl'}">${element}</p>`;
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

//   public/icons/email-light.svg

const projects: Project[] = [
    {
        title: "Poke' Find",
        description: 'an app that finds you your forever animal',
        image_src: 'poke-find/poke-find-user.webp',
        technologies: ['Go', 'TypeScript', 'AWS', 'Svelte', 'Postgres'],
        dateStarted: new Date('2024/10/14'),
        dateEnded: 'Now',
    },
    {
        title: 'Mjishu Book',
        description: "We use social media everyday but do we know how the app's work? this is a custom version of the many large social media platforms!",
        image_src: 'mjishu-book/mjishu-book.webp',
        technologies: ['Node', 'React', 'MongoDB'],
        dateStarted: new Date('2024/05/20'),
        dateEnded: new Date('2024/08/04'),
    },
];
const tags: Tags[] = [
    {
        icon_src: 'github-light.svg',
        name: 'Github',
        iconFirst: true,
    },
    {
        icon_src: 'linkedin-light.svg',
        name: 'Linked',
        iconFirst: false,
    },
    {
        icon_src: 'email-light.svg',
        name: 'Email',
        iconFirst: true,
    },
];

const languages = ['こんにちは', 'Hola', '你好', 'Hallo', 'नमस्ते', 'Bonjour', 'مرحبا', 'Привет', '안녕하세요'];

const documentSelector: HTMLElement = querySelectorNotNull(document, '#app') as HTMLElement;
const app = new CreateTemplate(documentSelector, projects, languages, tags);
app.createMain();
