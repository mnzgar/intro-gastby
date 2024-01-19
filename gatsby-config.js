/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bienes patrimoniales de La Laguna`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
//    {
//      resolve: "gatsby-source-filesystem",
//      options: {
//        name: `blog`,
//        path: `${__dirname}/blog`,
//      }
//    },
  ],
}
