import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default ({ data }) => {
  let races = data.allResultsCsv.group.map(race => {
    const details = race.nodes[0];
    const { Description, Date, Discipline, Distance, fields: { race_slug: slug } } = details;
    return { Description, Date, Discipline, Distance, slug };
  });

  return (
    <Layout>
      <h1>All races</h1>

      <ReactTable
        data={races}
        columns={[
          {
            Header: "General",
            columns: [
              {
                Header: "Date",
                accessor: "Date",
                width: 150
              },
              {
                Header: "Name",
                id: "Description",
                accessor: d => <Link to={`/${d.slug}`}>{d.Description}</Link>,
                width: 300
              },
              {
                Header: "Distance",
                accessor: "Distance",
                width: 100
              },
              {
                Header: "Discipline",
                accessor: "Discipline",
                width: 100
              }
            ]
          }
        ]}
        defaultSorted={[
          {
            id: "Date",
            desc: false
          }
        ]}
        defaultPageSize={15}
        className="-striped -highlight"
      />
    </Layout>
  );
}

export const query = graphql`
{
  allResultsCsv {
    group(field: fields___race_slug) {
      nodes {
        fields {
          race_slug
        }
        Description
        Date(formatString: "")
        Discipline
        Distance
      }
    }
  }
}`;
