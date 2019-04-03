import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

export default ({ pageContext }) => (
  <Layout>
    <div>Hello { pageContext.firstName} { pageContext.lastName }</div>
    <Link to="/athletes/">Go to athletes</Link>
  </Layout>
);

export const query = graphql`
{
  allAthletes {
    nodes {
      last_name
      first_name
    }
  }
}`;
