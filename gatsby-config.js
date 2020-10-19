module.exports = {
  siteMetadata: {
    title: `Jason Quach - In giving, I learn how to receive.`,
    description: `
      Jason Quach (Huu Thuan) is a software craftsman,
      inventor, author, mentor, angle investor and entrepreneur,
      business and marketing strategist, innovation consultant and coach.
    `,
    author: `jason@lungvang.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-2759478-30",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "thuanqh.github.io",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Quach`,
        short_name: `JQ`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#6b8e23`,
        display: `standalone`,
        icon: `src/assets/img/lungvang-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
