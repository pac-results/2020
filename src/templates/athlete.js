import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default ({ data }) => {
  const { Firstname, Surname } = data.allResultsCsv.nodes[0];

  const raceResults = data.allResultsCsv.nodes.map(race => {
    const { Category_Position, Description, Date, Discipline, Distance, Time, fields: { race_slug: slug, Category } } = race;
    return { Category, Category_Position, Description, Date, Discipline, Distance, Time, slug };
  });

  return (
    <Layout>
      <h2>{ Firstname } { Surname }</h2>
      <ReactTable
        data={ raceResults }
        columns={[
          {
            Header: "Date",
            accessor: "Date",
            width: 120
          },
          {
            Header: "Name",
            id: "Description",
            accessor: d => <Link to={ `/${ d.slug }` }>{ d.Description }</Link>,
            width: 300
          },
          {
            Header: "Distance",
            accessor: "Distance",
            width: 100
          },
          {
            Header: "Time",
            accessor: "Time",
            width: 100
          },
          {
            Header: "Category",
            accessor: "Category",
            width: 100
          },
          {
            Header: "Category Position",
            accessor: "Category_Position",
            width: 200
          },
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


      <Link to="/athletes/">Athletes</Link>
    </Layout>
  );
}


export const query = graphql`
query($slug: String!) {
  allResultsCsv(filter: {fields: {athlete_slug: {eq: $slug}}}) {
    nodes {
      Category_Position
      Date(formatString: "")
      Description
      Distance
      Firstname
      Surname
      Time
      fields {
        race_slug
        Category
      }
    }
  }
}`;
