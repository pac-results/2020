import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { compareTimes } from '../lib/utils';
import RaceReport from '../components/race_report';

export default ({ data }) => {
  const { Description, Date, Discipline, Distance } = data.allResultsCsv.nodes[0];

  const raceResults = data.allResultsCsv.nodes.map(result => {
    const { Category_Position, Firstname, Gender, Surname, Time, fields: { athlete_slug: slug, Category } } = result;
    return {  Description, Date, Discipline, Distance, Category, Category_Position, Surname, Firstname, Gender, Time,  Name: `${Firstname} ${Surname}`, slug, fields: { Category } };
  });

  return (
    <Layout>
      <Link to="/races/">Races</Link>
      <RaceReport race={raceResults} />

      <ReactTable
        data={raceResults.sort(compareTimes)}
        columns={[
          {
            Header: "Name",
            id: "Name",
            accessor: d => <Link to={`/${d.slug}`}>{d.Name}</Link>,
            width: 250
          },
          {
            Header: "Time",
            accessor: "Time",
            width: 150
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
          }
        ]}
        defaultSorted={[
          {
            id: "Time",
            desc: false
          }
        ]}
        defaultPageSize={15}
        className="-striped -highlight"
      />
    </Layout>
  );
};


export const query = graphql`
query($slug: String!) {
  allResultsCsv(filter: {fields: {race_slug: {eq: $slug}}}) {
    nodes {
      Category_Position
      Date(formatString: "")
      Description
      Discipline
      Distance
      Firstname
      Gender
      Surname
      Time
      fields {
        athlete_slug
        Category
      }
    }
  }
}`;
