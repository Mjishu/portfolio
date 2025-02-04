import './style.css';

export class CreateTemplate {
    numberOfProjects: number;
    constructor(numberOfProjects: number) {
        this.numberOfProjects = numberOfProjects;
    }

    createMain() {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <div id="intro"></div>
      <div id="projects"></div>
      <div id="language-carousel"></div>
      <div id="about-me"></div>
    </div>
    `;
    }

    createProjects() {}
}
