import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default ({ data }) => {
  let athletes = data.allAthletes.nodes.sort((a, b) => a.number - b.number);

  return (
    <Layout>
      <h1>All athletes</h1>

      <ReactTable
        data={ athletes }
        columns={[
          {
            Header: "General",
            columns: [
              {
                Header: "Number",
                id: "number",
                accessor: d => <Link to={ `/${d.fields.slug}` }>{ d.number }</Link>,
                width: 100
              },
              {
                Header: "Last name",
                id: "lastname",
                accessor: d => d.last_name,
                width: 200
              },
              {
                Header: "First name",
                id: "firstname",
                accessor: d => d.first_name,
                width: 200
              }
            ]
          }
        ]}
        defaultSorted={[
          {
            id: "lastname",
            desc: false
          }
        ]}
        defaultPageSize={15}
        className="-striped -highlight"
      />


      <p><Link to="/">Go back to the homepage</Link></p>
    </Layout>
  );
}

export const query = graphql`
{
  allAthletes {
    nodes {
      fields{
        slug
      }
      number
      last_name
      first_name
    }
  }
}`;
