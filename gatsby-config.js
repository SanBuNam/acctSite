module.exports = {
  siteMetadata: {
    title: `David Lee's website`,
    author: `freelancer web devloper`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `sanbunam`,
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
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "ovw1wra",
          api: "https://use.typekit.net/ovw1wra.css",
        },
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
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
