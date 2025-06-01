const data = {
  en: {
    change_language: "SWİTCH TO ENGLİSH",
    headerSection:{
      skills:"Skills",
      projects:"Projects",
      hire:"Hire me"
    },
    heroSection: {
      name: "Almila Su",
      intro: "Creative thinker Minimalism lover",
      desc:"Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      profileImage: "./src/pictures/hero.png",
      socials: [
        {
          logo: "logo-github.png",
          alt_text: "Github",
          link: "https://github.com",
          icon:"faGithub",
        },
        {
          logo: "logo-linkedin.png",
          alt_text: "Linkedin",
          link: "https://example.com",
          icon:"faLinkedinIn",
        },        
      ],
      ctaHTML:
        "Currently looking for a job as a <strong>Frontend Developer</strong> in ...",
    },
    skillsSection: {
      title: "Skills", 
      skills: [
        {
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "HTML",
          icon: "icon-html.png",
        },
        {
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "CSS",
          icon: "icon-css.png",
        },
        {desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "JavaScript",
          icon: "icon-js.png",
        },
      ],
    },
    profileSection: {
      title: "Profile",
      profile: {
        birthDateText: "Birthdate",
        cityText: "City",
        universityText: "Education Status",
        degreeText: "Licence",
        preferredRoleText:"Preferred role",
        birthDate: "24.03.1996",
        city: "Ankara",
        education: "Hacettepe Unv.  Bachelor of Biology, 2016",
        preferredRole: "Frontend, UI"
      },
      aboutMe: {
        title:"About Me",
        shortBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        extraText: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      },

    },
    projectSection: {
      title:"Projects",
      projects: [
        {
          title: "Workintech",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "./src/pictures/project1.png"
        },
        {
          title: "Random Jokes",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "./src/pictures/project2.png"
        },
        {
          title: "Journey",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "./src/pictures/project3.png"
        }
      ],
    },
    footerSection: {
      intro:"Let’s work together on your next product.",
      mail:"almilasucode@gmail.com",
      links: {
        blog: "Personal Blog",
        github: "Github",
        linkedin: "Linkedin"
      },

    },

  },
  
  tr: {
    change_language: "İNGİLİZCEYE GEÇ",
    headerSection: {
      skills: "Yetenekler",
      projects: "Projeler",
      hire: "Beni işe al"
    },
    heroSection: {
      name: "Almila Su",
      intro: "Yaratıcı düşünür Minimalizm tutkunu",
      desc: "Merhaba, ben Almila. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir, harika kullanıcı deneyimleri sunan frontend ürünleri geliştirecek bir geliştirici arıyorsanız, tanışalım.",
      profileImage: "./src/pictures/hero.png",
      socials: [
        {
          logo: "logo-github.png",
          alt_text: "Github",
          link: "https://github.com",
          icon: "faGithub",
        },
        {
          logo: "logo-linkedin.png",
          alt_text: "Linkedin",
          link: "https://example.com",
          icon: "faLinkedinIn",
        },
      ],
      ctaHTML:
        "Şu anda <strong>Frontend Geliştirici</strong> pozisyonu için iş arıyorum...",
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        {
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "HTML",
          icon: "icon-html.png",
        },
        {
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "CSS",
          icon: "icon-css.png",
        },
        {
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          name: "JavaScript",
          icon: "icon-js.png",
        },
      ],
    },
    profileSection: {
      title: "Profil",
      profile: {
        birthDateText: "Doğum Tarihi",
        cityText: "İkamet Şehri",
        universityText: "Eğitim Durumu",
        degreeText: "Lisans",
        preferredRoleText: "Tercih Ettiği Rol",
        birthDate: "24.03.1996",
        city: "Ankara",
        education: "Hacettepe Üniv. Biyoloji, 2016",
        preferredRole: "Frontend, UI"
      },
      aboutMe: {
        title: "Hakkımda",
        shortBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        extraText: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      },
    },
    projectSection: {
      title: "Projeler",
      projects: [
        {
          title: "Workintech",
          description: "Kullanıcıların hangi çerezleri kabul edip etmeyeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisidir. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu kod ve temalar üzerinde her türlü özelleştirmeye olanak tanır.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "./src/pictures/project1.png"
        },
        {
          title: "Random Jokes",
          description: "Kullanıcıların hangi çerezleri kabul edip etmeyeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisidir. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu kod ve temalar üzerinde her türlü özelleştirmeye olanak tanır.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "./src/pictures/project2.png"
        },
        {
          title: "Journey",
          description: "Kullanıcıların hangi çerezleri kabul edip etmeyeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisidir. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu kod ve temalar üzerinde her türlü özelleştirmeye olanak tanır.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "./src/pictures/project3.png"
        }
      ],
    },
    footerSection: {
      intro: "Bir sonraki projenizde birlikte çalışalım.",
      mail: "almilasucode@gmail.com",
      links: {
        blog: "Kişisel Blog",
        github: "Github",
        linkedin: "Linkedin"
      },
    },
  },
};

export default data;