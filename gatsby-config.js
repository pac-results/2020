module.exports = {
  siteMetadata: {
    title: `Pinelands Athletic Club Race Results and Athlete Summaries`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => node.sourceInstanceName,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `athletes`,
        path: `${__dirname}/data/athletes.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `races`,
        path: `${__dirname}/data/races`,
      },
    },
  ],
};
