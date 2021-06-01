module.exports = {
  siteMetadata: {
    siteTitle: `Jason Quach - In giving, I learn how to receive.`,
    siteTitleAlt: ``,
    siteHeadline: ``,
    siteUrl: `https://thuanqh.github.io`,
    siteDescription: `
      Jason Quach (Huu Thuan) is a software craftsman,
      inventor, author, mentor, angle investor and entrepreneur,
      business and marketing strategist, innovation consultant and coach.
    `,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `jason@lungvang.com`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/huuthuan`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/thuanqh`,
      },
    ],
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/assets`,
        path: `content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/posts`,
        path: `content/posts`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
