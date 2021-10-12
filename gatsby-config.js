require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Danijela's portofolio",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    "gatsby-plugin-use-query-params",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.CMS_ENDPOINT,
        token: process.env.CMS_TOKEN,
        buildMarkdownNodes: true,
      },
    },
  ],
};
