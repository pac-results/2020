import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default ({ data, pageContext }) => {

  const raceResults = data.allRaces.nodes.reduce((all, race) => {
    const result = race.results.find(result => (result.name === pageContext.name));
    all.push({ ...result, ...race });
    return all;
  }, []);

  return (
    <Layout>
      <div>{ data.athletes.first_name} { data.athletes.last_name}</div>


      <ReactTable
        data={ raceResults }
        columns={[
          {
            Header: "Race",
            columns: [
              {
                Header: "Date",
                accessor: "date",
                width: 120
              },
              {
                Header: "Name",
                id: "name",
                accessor: d => <Link to={ `/${ d.fields.slug }` }>{ d.name }</Link>,
                width: 300
              },
              {
                Header: "Distance",
                accessor: "distance",
                width: 100
              },
              {
                Header: "Time",
                accessor: "time",
                width: 100
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
            id: "date",
            desc: false
          }
        ]}
        defaultPageSize={15}
        className="-striped -highlight"
      />


      <Link to="/athletes/">Go to athletes</Link>
    </Layout>
  );
}


export const query = graphql`
query($name: String!) {
  athletes(fields: {name: { eq: $name } }) {
    first_name
    last_name
  }
  allRaces(filter: { results: { elemMatch: {name: { eq: $name}}}}) {
    nodes {
      fields {
        slug
      }
      name
      distance
      date
      results {
        name
        time
        position
        category_position
        gender_position
      }
    }
  }
}`;
