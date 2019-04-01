import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1>Hi from the athletes page</h1>
    <p>Welcome to the athletes page</p>
    {data.allFile.edges[0].node.childrenAthletesJson.map((athlete) => (
    <Link to={`/${athlete.first_name}_${athlete.last_name}`}>{athlete.first_name} {athlete.last_name}</Link>
     )
    ) }
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
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
}`;
