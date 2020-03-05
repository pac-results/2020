import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "react-table/react-table.css"
import ReactTable from "react-table"
import { compareTimes } from '../lib/utils';

export default ({ data }) => {
  const distances = ["10", "15", "21.1", "42.2"]
  const categories = ['Juniors', 'Seniors', 'Veterans', 'Masters', 'Grand Masters', 'Great Grand Masters'];
  const genders = ['M', 'F'];

  const { allResultsCsv: { edges } } = data
  const allResults = edges
    .map(({ node }) => node)
    .filter(result => result.Long === "1" || result.Short === "1")

  const bestResults = [];
  for (const distance of distances) {
    for (const gender of genders) {
      for (const category of categories) {
        const qualifyingResults = allResults
          .filter(result => result.fields.Category === `${gender} ${category}` && result.Distance === distance)
          .sort(compareTimes);

        let result = qualifyingResults[0];
        if (result) {
          bestResults.push(result)
        }
      }
    }
  }

  return (
    <Layout>
      <h1>Championship standings</h1>
      <ReactTable
        data={bestResults}
        columns={[
          {
            Header: "Distance",
            accessor: "Distance",
            width: 80
          },
          {
            Header: "Category",
            accessor: "fields.Category",
            width: 200
          },
          {
            Header: "Name",
            id: "Name",
            accessor: d => <Link to={`/${d.fields.athlete_slug}`}>{d.fields.athlete_name}</Link>,
            width: 200
          },
          {
            Header: "Race",
            id: "Race",
            accessor: d => <Link to={`/${d.fields.race_slug}`}>{d.Description}</Link>,
            width: 300
          },
          {
            Header: "Time",
            accessor: "Time",
            width: 150
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
        id
        Category_Position
        Date
        Description
        Distance
        Firstname
        Long
        Short
        Surname
        Time
        fields {
          Category
          athlete_name
          athlete_slug
          race_slug
        }
      }
    }
  }
}`
