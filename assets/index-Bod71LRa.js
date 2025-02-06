var l=Object.defineProperty;var u=(r,e,t)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>u(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function i(r,e){const t=r.querySelector(e);if(t===null)throw g(e);return t}function g(r){return new Error(`Performing querySelectorNotNull(element, ${JSON.stringify(r)}) returned null`)}class d{constructor(e,t,a,s){n(this,"_projects");n(this,"content");n(this,"languages");n(this,"tags");n(this,"introSelector");n(this,"projectsSelector");n(this,"aboutMeSelector");n(this,"languageCarouselSelector");n(this,"contactSelector");n(this,"tabSelector");this._projects=t,this.content=e,this.languages=a,this.tags=s,this.introSelector=i(this.content,"#intro"),this.projectsSelector=i(this.content,"#projects"),this.aboutMeSelector=i(this.content,"#about-me"),this.languageCarouselSelector=i(this.content,"#language-carousel"),this.contactSelector=i(this.content,"#contact"),this.tabSelector=i(this.content,"#tab")}createMain(){this._createIntro(),this._createTab();for(let e=0;e<this._projects.length;e++)this._createProjects(this._projects[e],e%2===0);this._createLanguageCarousel(!1),this._createLanguageCarousel(!0),this._createAboutMe("Joshua","Lorem ipsum dolor sit amet consectetur. Arcu euismod enim dolor convallis proin pulvinar. Nullam maecenas egestas tellus nunc viverra morbi. Erat iaculis metus lorem dictum. Neque feugiat egestas interdum euismod aenean."),this._linkTags()}_createIntro(){this.introSelector.innerHTML=`
          <h2 class="intro-body">Hey! I'm Josh <br/> A <span id="intro-span">Developer</span></h2>
        `}_createProjects(e,t){const a=document.createElement("div");a.className="project",a.innerHTML=`
          ${t==!0?`<div>
            <h4 class="project-name">${e.title}</h4>
            <img class="project-image" src=${"/images/"+e.image_src} alt="project-image"/>
          </div>`:""}
          <div class="project-text-div">
            <p class="project-description">${e.description}</p>
            <p class="project-stack">${this._technologiesToString(e.technologies)}</p>
            <p class="project-dates">From | ${this._updateDateStyle(e.dateStarted)} To ${this._updateDateStyle(e.dateEnded)}</p>
          </div>
          ${t==!1?`<div>
            <h4 class="project-name name-right">${e.title}</h4>
            <img class="project-image" src=${"/images/"+e.image_src} alt="project-image"/>
          </div>`:""}
        `,this.projectsSelector.appendChild(a)}_createTab(){this.tabSelector.innerHTML=`
        <a href="#intro" class="current-tab tabs">HOME<a/>
        <a href="#projects" class="tabs" >PROJECTS<a/>
        <a href="#about-me" class="tabs" >WHO AM I?<a/>
        <a href="#contact" class="tabs" >CONTACT<a/>
      `}_createAboutMe(e,t){this.aboutMeSelector.innerHTML=`
        <div class="about-globe">
        </div>
        <div class="about-text">  
          <h2 class="about-name">${e}</h2>
          <p class="about-description">${t}</p>
          </div>
          `}_linkTags(){const e=document.createElement("div");e.className="tag-parent";for(const t of this.tags){const a=document.createElement("button"),s=`/icons/${t.icon_src}`;a.className="tag",a.innerHTML=`
              ${t.iconFirst?`<img class="tag-icon" src=${s} alt="tag"/>`:""}
              <p class="tag-name">${t.name}</p>
              ${t.iconFirst?"":`<img class="tag-icon" src=${s} alt="tag"/>`}
          `,e.appendChild(a)}this.contactSelector.appendChild(e)}_updateDateStyle(e){return typeof e=="string"?"Now":e.toString().split(" ").slice(1,4).join(" ")}_createLanguageCarousel(e){const t=document.createElement("div");t.className="carousel",e?e&&(t.innerHTML=this.languages.reverse().map((a,s)=>`<p class="carousel-lang lang-${s} ${e?"carousel-lang-lr":"carousel-lang-rl"}">${a}</p>`).join(" ")):t.innerHTML=this.languages.map((a,s)=>`<p class="carousel-lang lang-${s} ${e?"carousel-lang-lr":"carousel-lang-rl"}">${a}</p>`).join(" "),this.languageCarouselSelector.appendChild(t)}_technologiesToString(e){let t="";for(let a=0;a<e.length;a++)t+=" "+e[a]+" ";return t}}const p=[{title:"Poke' Find",description:"an app that finds you your forever animal",image_src:"poke-find/poke-find-user.webp",technologies:["Go","TypeScript","AWS","Svelte","Postgres"],dateStarted:new Date("2024/10/14"),dateEnded:"Now"},{title:"Mjishu Book",description:"We use social media everyday but do we know how the app's work? this is a custom version of the many large social media platforms!",image_src:"mjishu-book/mjishu-book.webp",technologies:["Node","React","MongoDB"],dateStarted:new Date("2024/05/20"),dateEnded:new Date("2024/08/04")}],h=[{icon_src:"github-light.svg",name:"Github",iconFirst:!0},{icon_src:"linkedin-light.svg",name:"Linked",iconFirst:!1},{icon_src:"email-light.svg",name:"Email",iconFirst:!0}],m=["こんにちは","Hola","你好","Hallo","नमस्ते","Bonjour","مرحبا","Привет","안녕하세요"],f=i(document,"#app"),S=new d(f,p,m,h);S.createMain();
