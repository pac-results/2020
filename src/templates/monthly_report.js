import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import 'react-table/react-table.css';
import RaceReport from '../components/race_report';
import { compareStrings } from '../lib/utils';

export default ({ data, pageContext }) => (
  <Layout>
    { data.allRaces.nodes
      .filter(race => race.date.match(new RegExp('-0' + pageContext.month + '-')))
      .sort(compareStrings('date'))
      .map(race => (
      <RaceReport key={ race.fields.slug } race={race}/>
    ))}

    <Link to="/monthly_reports/">Go to monthly reports</Link>

  </Layout>
);


export const query = graphql`
query {
  allRaces {
    nodes {
      fields {
        slug
      }
      name
      distance
      date
      discipline
      results {
        name
        category
        gender
        time
        position
        category_position
        gender_position
      }
    }
  }
}`;
