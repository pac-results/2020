import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default ({ data }) => (
  <Layout>
    <h1>All races</h1>

    <ReactTable
      data={ data.allRaces.nodes }
      columns={[
        {
          Header: "General",
          columns: [
            {
              Header: "Date",
              accessor: "date",
              width: 150
            },
            {
              Header: "Name",
              id: "name",
              accessor: d => <Link to={ `/${d.fields.slug}` }>{ d.name }</Link>,
              width: 300
            },
            {
              Header: "Distance",
              accessor: "distance",
              width: 100
            },
            {
              Header: "Discipline",
              accessor: "discipline",
              width: 100
            }
          ]
        }
      ]}
      defaultSorted={[
        {
          id: "date",
          desc: false
        }
      ]}
      defaultPageSize={15}
      className="-striped -highlight"
    />

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
      discipline
    }
  }
}`;
