import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default ({ data }) => {
  let athletes = data.allResultsCsv.group.map(athlete => {
    const details = athlete.nodes[0];
    const { Firstname, Surname, Licence, fields: { athlete_slug: slug } } = details;
    return { Licence, Firstname, Surname, slug };
  });

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
                Header: "Licence",
                id: "Licence",
                accessor: d => <Link to={ `/${d.slug}` }>{ d.Licence }</Link>,
                width: 100
              },
              {
                Header: "Surname",
                id: "Surname",
                accessor: d => d.Surname,
                width: 200
              },
              {
                Header: "First name",
                id: "Firstname",
                accessor: d => d.Firstname,
                width: 200
              }
            ]
          }
        ]}
        defaultSorted={[
          {
            id: "Surname",
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
  allResultsCsv {
    group(field: fields___athlete_slug) {
      nodes {
        Firstname
        Licence
        Surname
        fields {
          athlete_slug
        }
      }
    }
  }
}`;
//  allResultsCsv {
//     distinct(field: fields___athlete_slug)
//   }
