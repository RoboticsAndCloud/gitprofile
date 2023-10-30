// gitprofile.config.js

const config = {
  github: {
    username: 'RoboticsAndCloud', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'liang-fei-osu',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://roboticsandcloud.github.io/gitprofile',
    phone: '',
    email: 'liangfei567@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'Spring-boot',
    'Devops',
    'Kafka',
    'Jenkins',
    'Prometheus',
    'Grafana',
    'RESTful',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'K8S',
    'MLops',
    'JavaScript',
    'Typescript',
    'React',
    'Node',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Baidu(China)',
      position: 'Software Engineer',
      from: 'April 2015',
      to: 'October 2019',
      companyLink: 'https://www.linkedin.com/in/liang-fei-osu',
    },
    {
      company: 'Oklahoma State University',
      position: 'Research Assistant',
      from: 'Januray 2020',
      to: 'July 2024',
      companyLink: 'https://www.linkedin.com/in/liang-fei-osu',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Oklahoma State University',
      degree: 'PhD',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Beijing University of Posts and Telecommunications',
      degree: 'Master',
      from: '2012',
      to: '2015',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Device & Application Monitoring System (Frontend)',
      description:
        'A device management system based on React + React-Router + Antd + Echarts.',
      imageUrl: 'https://raw.githubusercontent.com/RoboticsAndCloud/gitprofile/main/public/chart.jpg',
      link: 'https://roboticsandcloud.github.io/eladmin_web_react',
    },
    {
      title: 'Device & Application Monitoring System (Backend)',
      description:
        'Based on opensourced project, Spring-Boot, JPA, JDBC, Spring Security, Actuator, MySQL, Docker, GitHub, Nginx(Load balancing), Redis(Rate limiting). \
        Prometheus and Grafana(Health monitoring).',
      imageUrl: 'https://raw.githubusercontent.com/RoboticsAndCloud/eladmin_web_react/main/docs/imgs/login.png',
      link: 'https://github.com/RoboticsAndCloud/eladmin',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/RoboticsAndCloud/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
