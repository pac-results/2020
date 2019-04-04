import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1>All athletes</h1>
    <p><Link to="/">Go back to the homepage</Link></p>
    {data.allAthletes.nodes.map((athlete) => (
        <p><Link to={`/${athlete.fields.slug}`}>{athlete.last_name}, {athlete.first_name}</Link></p>
      )
    ) }
    <p><Link to="/">Go back to the homepage</Link></p>
  </Layout>
);

export const query = graphql`
{
  allAthletes {
    nodes {
      fields{
        slug
      }
      last_name
      first_name
    }
  }
}`;
