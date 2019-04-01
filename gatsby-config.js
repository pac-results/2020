module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-json`,
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



// {
// allFile (filter: {
//   sourceInstanceName: { eq : "athletes" }
// }) {
//   edges {
//     node {
//       childrenAthletesJson {
//         last_name
//         first_name
//       }
//     }
//   }
// }
// }