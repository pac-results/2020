import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1>Hi from the races page</h1>
    <p>Welcome to the races page</p>
    {data.allRaces.nodes.map((race) => (
        <p><Link to={`/${race.fields.slug}`}>{race.name} {race.distance} on {race.date}</Link></p>
      )
    ) }
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
{
  allRaces {
    nodes {
      fields {
        slug
      }
      name
      date
      distance
    }
  }
}`;
