$(function() {

  CMS.init({

    // Name of your site or location of logo file ,relative to root directory (img/logo.png)
    siteName: 'Maltazard',

    // Tagline for your site
    siteTagline: 'Simple blog',

    // Email address
    siteEmail: 'letatbinh130794@gmail.com',

    // Name
    siteAuthor: 'Binhle',

    // Navigation items
    siteNavItems: [
      { name: 'Project', href: 'https://github.com/binler', newWindow: false},
      { name: 'About'}
    ],

    // Posts folder name
    postsFolder: 'posts',

    // Homepage posts snippet length
    postSnippetLength: 120,

    // Pages folder name
          pagesFolder: 'pages',

          // Order of sorting (true for newest to oldest)
          sortDateOrder: true,

    // Site fade speed
    fadeSpeed: 300,

    // Site footer text
    footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

    // Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
    // to Github
    mode: 'Github',

    // If Github mode is set, your Github username and repo name. Defaults
    // to Github pages branch (gh-pages)
    githubUserSettings: {
      username: 'binler',
      repo: 'cmsjs'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
