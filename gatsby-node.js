const path = require('path');
const moment = require('moment')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `ResultsCsv`) {
    let race_slug = `${node.Description}_${node.Distance}_${node.Date}_${node.Discipline}`.toLowerCase().replace(/ /g, '_').replace(/#/g, '_');
    createNodeField({
      node,
      name: 'race_slug',
      value: race_slug,
    });

    let athlete_name = `${node.Firstname} ${node.Surname}`;
    createNodeField({
      node,
      name: 'athlete_name',
      value: athlete_name,
    });

    let athlete_slug = athlete_name.toLowerCase().replace(/ /g, '_');
    createNodeField({
      node,
      name: 'athlete_slug',
      value: athlete_slug,
    });

    // make this a combo of age and gender
    const category = () => {
      let { Birthdate: birth_date, Date: race_date, Gender } = node;
      const race = moment(race_date, 'YYYY-MM-DD');
      const birth = moment(birth_date, 'YYYY-MM-DD');

      if (birth.year() >= 2001) return `${Gender} Juniors`;

      const age = race.diff(birth, 'years');
      if (age <= 39) return `${Gender} Seniors`;
      if (age <= 49) return `${Gender} Veterans`;
      if (age <= 59) return `${Gender} Masters`;
      if (age <= 69) return `${Gender} Grand Masters`;
      if (age >= 70) return `${Gender} Great Grand Masters`;
      return 'unknown';
    };

    createNodeField({
      node,
      name: 'Category',
      value: category(),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const races = await graphql(`
    {
      allResultsCsv {
        distinct(field: fields___race_slug)
      }
    }`);

  races.data.allResultsCsv.distinct.forEach((slug) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/race.js`),
      context: {
        slug
      },
    })
  });

  const athletes = await graphql(`
    {
      allResultsCsv {
        distinct(field: fields___athlete_slug)
      }
    }`);

  athletes.data.allResultsCsv.distinct.forEach((slug) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/athlete.js`),
      context: {
        slug
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
  ['January', 'February'].map(createMonthlyReport);
};
