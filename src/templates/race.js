import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <Layout>
      <div>Hello { data.races.name } { data.races.distance }</div>
      <Link to="/races/">Go to races</Link>
    </Layout>
  );
}

export const query = graphql`
query($id: String!) {
  races(id: { eq: $id }) {
    name
    distance
  }
}`;
