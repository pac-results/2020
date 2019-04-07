import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { compareTimes, toTitleCase, toSlug } from '../lib/utils';
import RaceReport from '../components/race_report';

export default ({ data }) => (
  <Layout>
    <RaceReport race={data.races}/>

    <ReactTable
      data={ data.races.results.sort(compareTimes) }
      columns={[
        {
          Header: "General",
          columns: [
            {
              Header: "Name",
              id: "name",
              accessor: d => <Link to={ `/${toSlug(d.name)}` }>{ toTitleCase(d.name) }</Link>,
              width: 250
            },
            {
              Header: "Category",
              accessor: "category",
              width: 100
            },
            {
              Header: "Gender",
              accessor: "gender",
              width: 100
            },
            {
              Header: "Time",
              accessor: "time",
              width: 150
            }
          ]
        },
        {
          Header: 'Position',
          columns: [
            {
              Header: "Overall",
              accessor: "position",
              width: 100
            },
            {
              Header: "Category",
              accessor: "category_position",
              width: 100
            },
            {
              Header: "Gender",
              accessor: "gender_position",
              width: 100
            }
          ]
        }
      ]}
      defaultSorted={[
        {
          id: "position",
          desc: false
        }
      ]}
      defaultPageSize={15}
      className="-striped -highlight"
    />

    <Link to="/races/">Go to races</Link>

  </Layout>
);


export const query = graphql`
query($id: String!) {
  races(id: { eq: $id }) {
    name
    distance
    date
    discipline
    results {
      name
      category
      gender
      time
      position
      category_position
      gender_position
    }
  }
}`;
