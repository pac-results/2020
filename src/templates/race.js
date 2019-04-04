import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Collapsible from 'react-collapsible';

const toTitleCase = (str) =>
  str.replace(
    /([^\W_]+[^\s-]*) */g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

const toSlug = (str) => str.replace(/ /g, '_');

const compareStrings = (field) => (a, b) => {
  if (a[field] < b[field]) {
    return -1;
  }
  if (a[field] > b[field]) {
    return 1;
  }
  return 0;
};

const compareTimes = (a, b) => {
  const as = a.time.split(':');
  const bs = b.time.split(':');
  if (as.length !== bs.length) return as.length - bs.length;

  for (let i = 0; i< as.length; i++) {
    let aa = parseInt(as[i]);
    let bb = parseInt(bs[i]);
    if (aa !== bb) return aa - bb;
  }
  return 0;
};

export default ({ data }) => {
  const results = data.races.results.sort(compareTimes);

  const firstMale = results.find(a => a.gender === 'male');
  const firstFemale = results.find(a => a.gender === 'female');

  const alphabeticalResults = results.sort(compareStrings('name'));

  return (
    <Layout>
      <div>{ data.races.name }</div>
      <div>{ data.races.distance }km</div>
      <div>{ data.races.date}</div>

      <Collapsible trigger="Race report">
        <div>{ results.length} results</div>
        <div>First male athlete: { firstMale.name }</div>
        <div>First female athlete: { firstFemale.name }</div>

      </Collapsible>


      <ReactTable
        data={ alphabeticalResults }
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
