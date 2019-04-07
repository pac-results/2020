const path = require(`path`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `races`) {
    let slug = `${node.name}_${node.date}_${node.distance}_${node.discipline}`.toLowerCase().replace(/ /g, '_');
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }

  if (node.internal.type === `athletes`) {
    let name = `${node.first_name} ${node.last_name}`.toLowerCase();
    let slug = name.replace(/ /g, '_');
    createNodeField({
      node,
      name: `name`,
      value: name,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
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
    }
  }
  allAthletes {
    nodes {
      fields {
        name
        slug
      }
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
      let slug = athlete.fields.slug;
      let name = athlete.fields.name;
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/athlete.js`),
        context: {
          name
        },
      })
    });

    const createMonthlyReport = (month, index) => {
      createPage({
        path: `/${month}`,
        component: path.resolve(`./src/templates/monthly_report.js`),
        context: {
          month: index + 1
        },
      })
    };
    ['January', 'February', 'March', 'April'].map(createMonthlyReport);
  });
};