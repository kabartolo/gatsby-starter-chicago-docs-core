module.exports = {
  siteMetadata: {
    title: 'Chicago Docs Core',
    description: 'Customizable Gatsby documentation theme for easy navigation, accessibility, and readability.',
    siteUrl: 'localhost:8000',
    siteLanguage: 'en',
  },
  plugins: [
    {
      resolve: '@kabartolo/gatsby-theme-chicago-docs-core',
      options: {
        mainMenu: [
          {
            name: 'Sample MDX Page',
            path: '/sample/',
          },
        ],
        sidebarMenus: [
          {
            name: '',
            dropdownLabel: 'Menu',
            items: [
              {
                slug: 'example-api-doc',
              },
              {
                name: 'Example Group of Posts',
                slug: 'group',
                isGroup: true,
              },
            ],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chicago Docs Gatsby Theme Core',
        short_name: 'Chicago Docs Core',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#eee',
        display: 'standalone',
        icon: 'src/assets/chicago-docs-logo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
