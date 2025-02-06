var l=Object.defineProperty;var u=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var i=(o,e,t)=>u(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function n(o,e){const t=o.querySelector(e);if(t===null)throw g(e);return t}function g(o){return new Error(`Performing querySelectorNotNull(element, ${JSON.stringify(o)}) returned null`)}class d{constructor(e,t,a,s){i(this,"_projects");i(this,"content");i(this,"languages");i(this,"tags");i(this,"introSelector");i(this,"projectsSelector");i(this,"aboutMeSelector");i(this,"languageCarouselSelector");i(this,"contactSelector");i(this,"tabSelector");this._projects=t,this.content=e,this.languages=a,this.tags=s,this.introSelector=n(this.content,"#intro"),this.projectsSelector=n(this.content,"#projects"),this.aboutMeSelector=n(this.content,"#about-me"),this.languageCarouselSelector=n(this.content,"#language-carousel"),this.contactSelector=n(this.content,"#contact"),this.tabSelector=n(this.content,"#tab")}createMain(){this._createIntro(),this._createTab();for(let e=0;e<this._projects.length;e++)this._createProjects(this._projects[e],e%2===0);this._createLanguageCarousel(!1),this._createLanguageCarousel(!0),this._createAboutMe("Joshua","Lorem ipsum dolor sit amet consectetur. Arcu euismod enim dolor convallis proin pulvinar. Nullam maecenas egestas tellus nunc viverra morbi. Erat iaculis metus lorem dictum. Neque feugiat egestas interdum euismod aenean."),this._linkTags()}_createIntro(){this.introSelector.innerHTML=`
          <h2 class="intro-body">Hey! I'm Josh <br/> A <span id="intro-span">Developer</span></h2>
        `}_createProjects(e,t){const a=document.createElement("div");a.className="project",console.log("/images/"+e.image_src),a.innerHTML=`
          ${t==!0?`<div>
            <h4 class="project-name">${e.title}</h4>
            <img class="project-image" src=${"public/images/"+e.image_src} alt="project-image"/>
          </div>`:""}
          <div class="project-text-div">
            <p class="project-description">${e.description}</p>
            <p class="project-stack">${this._technologiesToString(e.technologies)}</p>
            <p class="project-dates">From | ${this._updateDateStyle(e.dateStarted)} To ${this._updateDateStyle(e.dateEnded)}</p>
          </div>
          ${t==!1?`<div>
            <h4 class="project-name name-right">${e.title}</h4>
            <img class="project-image" src=${"public/images/"+e.image_src} alt="project-image"/>
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
          `}_linkTags(){const e=document.createElement("div");e.className="tag-parent";for(const t of this.tags){const a=document.createElement("button"),s=`public/icons/${t.icon_src}`;a.className="tag",a.innerHTML=`
              ${t.iconFirst?`<img class="tag-icon" src=${s} alt="tag"/>`:""}
              <p class="tag-name">${t.name}</p>
              ${t.iconFirst?"":`<img class="tag-icon" src=${s} alt="tag"/>`}
          `,e.appendChild(a)}this.contactSelector.appendChild(e)}_updateDateStyle(e){return typeof e=="string"?"Now":e.toString().split(" ").slice(1,4).join(" ")}_createLanguageCarousel(e){const t=document.createElement("div");t.className="carousel",e?e&&(t.innerHTML=this.languages.reverse().map((a,s)=>`<p class="carousel-lang lang-${s} ${e?"carousel-lang-lr":"carousel-lang-rl"}">${a}</p>`).join(" ")):t.innerHTML=this.languages.map((a,s)=>`<p class="carousel-lang lang-${s} ${e?"carousel-lang-lr":"carousel-lang-rl"}">${a}</p>`).join(" "),this.languageCarouselSelector.appendChild(t)}_technologiesToString(e){let t="";for(let a=0;a<e.length;a++)t+=" "+e[a]+" ";return t}}const p=[{title:"Poke' Find",description:"an app that finds you your forever animal",image_src:"poke-find/poke-find-user.webp",technologies:["Go","TypeScript","AWS","Svelte","Postgres"],dateStarted:new Date("2024/10/14"),dateEnded:"Now"},{title:"Mjishu Book",description:"We use social media everyday but do we know how the app's work? this is a custom version of the many large social media platforms!",image_src:"mjishu-book/mjishu-book.webp",technologies:["Node","React","MongoDB"],dateStarted:new Date("2024/05/20"),dateEnded:new Date("2024/08/04")}],h=[{icon_src:"github-light.svg",name:"Github",iconFirst:!0},{icon_src:"linkedin-light.svg",name:"Linked",iconFirst:!1},{icon_src:"email-light.svg",name:"Email",iconFirst:!0}],m=["こんにちは","Hola","你好","Hallo","नमस्ते","Bonjour","مرحبا","Привет","안녕하세요"],f=n(document,"#app"),b=new d(f,p,m,h);b.createMain();
