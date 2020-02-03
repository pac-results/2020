module.exports = {
  pathPrefix: "/pac",
  siteMetadata: {
    title: `PAC Race Results and Athlete Summaries`,
    description: `Pinelands Athletic Club Race Results and Athlete Summaries`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
};
