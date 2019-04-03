import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <div>Hello { data.athletes.first_name}</div>
    <Link to="/athletes/">Go to athletes</Link>
  </Layout>
);

// need to get all the races for which this athlete has a result


export const query = graphql`
query($name: String!) {
  athletes(fields: {name: { eq: $name } }) {
    first_name
  }
}`;
