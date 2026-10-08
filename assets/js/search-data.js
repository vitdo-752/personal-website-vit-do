// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/personal-website-vit-do/";
    },
  },{id: "nav-experience",
          title: "experience",
          description: "Product, strategy, design, and leadership experience. Click the PDF icon for my one-page resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website-vit-do/experience/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Case studies in product management, product design, and building communities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website-vit-do/projects/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "My one-page resume. Preview it below or download the PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal-website-vit-do/resume/";
          },
        },{id: "projects-ai-travel-itinerary-planner",
          title: 'AI Travel Itinerary Planner',
          description: "MoMo · 0-to-1 launch of an AI trip planner for a 30M+ user super app",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website-vit-do/projects/1_momo/";
            },},{id: "projects-physical-ai-strategy-for-gaming",
          title: 'Physical AI Strategy for Gaming',
          description: "Logitech · A 5–15 year AI roadmap for gaming peripherals, presented to senior leadership",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website-vit-do/projects/2_logitech/";
            },},{id: "projects-home-electrification-app",
          title: 'Home Electrification App',
          description: "PG&amp;E National Home Electrification Challenge · 1st place of 9 undergraduate and MBA finalist teams",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website-vit-do/projects/3_pge/";
            },},{id: "projects-nonprofit-website-redesign",
          title: 'Nonprofit Website Redesign',
          description: "Nuoc Solutions · Redesigned a Gates Foundation-funded nonprofit&#39;s site and grew traffic 78%",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website-vit-do/projects/4_nuoc/";
            },},{id: "projects-beta-launch-landing-page",
          title: 'Beta Launch Landing Page',
          description: "ExtendMe · Designed a landing page and messaging that more than doubled beta sign-ups",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website-vit-do/projects/5_extendme/";
            },},{id: "projects-vietbay-teens",
          title: 'Vietbay Teens',
          description: "Co-founded a cultural nonprofit that has raised $115K for Vietnamese nonprofits",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website-vit-do/projects/6_vietbay/";
            },},{id: "projects-camp-mac-enrollment-campaign",
          title: 'Camp MAC Enrollment Campaign',
          description: "Camp MAC · Marketing that produced the largest applicant class in the camp&#39;s history",
          section: "Projects",handler: () => {
              window.location.href = "/personal-website-vit-do/projects/7_campmac/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
