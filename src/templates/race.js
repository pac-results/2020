import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const toTitleCase = (str) =>
  str.replace(
    /([^\W_]+[^\s-]*) */g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

const toSlug = (str) => str.replace(/ /g, '_');

export default ({ data }) => {
  return (
    <Layout>
      <div>{ data.races.name }</div>
      <div>{ data.races.distance }km</div>
      <div>{ data.races.date}</div>
      <Link to="/races/">Go to races</Link>

      <ReactTable
        data={ data.races.results }
        columns={[
          {
            Header: "General",
            columns: [
              {
                Header: "Name",
                id: "name",
                accessor: d => <Link to={ toSlug(d.name) }>{ toTitleCase(d.name) }</Link>,
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
        defaultPageSize={15}
        className="-striped -highlight"
      />

    </Layout>
  );
}

export const query = graphql`
query($id: String!) {
  races(id: { eq: $id }) {
    name
    distance
    date
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
