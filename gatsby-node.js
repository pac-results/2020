const path = require(`path`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  const { createPage } = actions;

  return graphql(`
{
  allFile (filter: { 
    sourceInstanceName: { eq : "athletes" }
  }) {
    edges {
      node {
        childrenAthletesJson {
          last_name
          first_name
        }
      }
    }
  }
}  `
  ).then(result => {
    result.data.allFile.edges.forEach(({ node }) => {
      node.childrenAthletesJson.forEach((athlete) => {
        let name = `${athlete.first_name}_${athlete.last_name}`;
        createPage({
          path: name,
          component: path.resolve(`./src/templates/athlete.js`),
          context: {
            name: name,
          },
        })
      })
    })
  })
};