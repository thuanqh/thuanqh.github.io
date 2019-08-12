module.exports = {
  siteMetadata: {
    title: `Jason Portfolio`,
    description: `Jason Portfolio`,
    author: `jason@lungvang.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-styled-components",
      option: {}
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Quach`,
        short_name: `JQ`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#6b8e23`,
        display: `standalone`,
        icon: `src/assets/img/lungvang-icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
