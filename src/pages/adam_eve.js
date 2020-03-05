import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "react-table/react-table.css"
import ReactTable from "react-table"
import { compareTotals } from '../lib/utils';

export default ({ data }) => {

  const { allResultsCsv: { edges } } = data
  const allResults = edges.map(({ node }) => node);

  const athleteTotals = allResults.reduce((a, c) => {
    const athlete = a.find(ath => ath.fields.athlete_slug === c.fields.athlete_slug);

    if (athlete) {
      athlete.Total = (parseFloat(athlete.Total, 10) + parseFloat(c.Distance, 10)).toFixed(1);
    } else {
      a.push({
        ...c,
        Total: parseFloat(c.Distance, 10),
      });
    }

    return a;
  }, []);

  return (
    <Layout>
      <h1>Adam & Eve Standings</h1>
      <ReactTable
        data={athleteTotals.sort(compareTotals)}
        columns={[
          {
            Header: "Distance",
            accessor: "Total",
            width: 80
          },
          {
            Header: "Name",
            id: "Name",
            accessor: d => <Link to={`/${d.fields.athlete_slug}`}>{d.fields.athlete_name}</Link>,
            width: 200
          }
        ]}
        defaultPageSize={15}
        className="-striped -highlight"
      />
    </Layout>
  )
}

export const query = graphql`
{
  allResultsCsv {
    edges {
      node {
        Distance
        Firstname
        Surname
        fields {
          athlete_name
          athlete_slug
        }
      }
    }
  }
}`
