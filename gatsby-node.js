const path = require(`path`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */



// use this in a bit, to generate the name on the athletes from the underlying.

// also, maybe, to generate links between the nodes. like, attach all the race results to an athlete.
// although, maybe that can be done just by querying


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `races`) {
    let slug = `${node.name}_${node.date}_${node.distance}`.toLowerCase().replace(/ /g, '_');
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  if (node.internal.type === `athletes`) {
    let name = `${node.first_name} ${node.last_name}`.toLowerCase();
    createNodeField({
      node,
      name: `name`,
      value: name,
    })
  }
};


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
{
  allRaces {
    nodes {
      fields {
        slug
      }
      id
      name
      date
      distance
    }
  }
  allAthletes {
    nodes {
      last_name
      first_name
    }
  }
}`
  ).then(result => {
    result.data.allRaces.nodes.forEach((race) => {
      let slug = race.fields.slug;
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/race.js`),
        context: {
          id: race.id,
          slug
        },
      })
    });

    result.data.allAthletes.nodes.forEach((athlete) => {
      let firstName = athlete.first_name;
      let lastName = athlete.last_name;
      let name = `${firstName}_${lastName}`;
      createPage({
        path: name,
        component: path.resolve(`./src/templates/athlete.js`),
        context: {
          name,
          firstName,
          lastName
        },
      })
    })
  })
};