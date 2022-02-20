module.exports = {
  siteMetadata: {
    title: `David's Creative Studio`,
    author: `David Lee`,
    description: `Orange County, California Web Developer`,
    siteUrl: `https://davidcreativestudio.com/`,
    social: {
      twitter: `davidcreativestudio`,
    },
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-modal-routing`,
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/content/markdown`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: `${__dirname}/content/markdown/blogs`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {},
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Lee`,
        short_name: `Freelancer Developer`,
        start_url: `/`,
        icon: `content/images/david-logo-black.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
