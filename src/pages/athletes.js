import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1>Hi from the athletes page</h1>
    <p>Welcome to the athletes page</p>
    <p><Link to="/">Go back to the homepage</Link></p>
    {data.allAthletes.nodes.map((athlete) => (
        <p><Link to={`/${athlete.first_name}_${athlete.last_name}`}>{athlete.first_name} {athlete.last_name}</Link></p>
      )
    ) }
    <p><Link to="/">Go back to the homepage</Link></p>
  </Layout>
)

export const query = graphql`
{
  allAthletes {
    nodes {
      fields{
        name
      }
      last_name
      first_name
    }
  }
}`;
