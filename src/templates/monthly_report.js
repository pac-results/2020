import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import 'react-table/react-table.css';
import RaceReport from '../components/race_report';
import { compareStrings } from '../lib/utils';

export default ({ data, pageContext }) => (
  <Layout>
    {/*{ data.allResultsCsv.group.nodes*/}
    {/*  .filter(race => race.date.match(new RegExp('-0' + pageContext.month + '-')))*/}
    {/*  .sort(compareStrings('Date'))*/}
    {/*  .map(race => (*/}
    {/*  <RaceReport key={ race.fields.slug } race={race}/>*/}
    {/*))}*/}

    <Link to="/monthly_reports/">Monthly Reports</Link>

  </Layout>
);


export const query = graphql`
query {
  allResultsCsv {
    group(field: fields___race_slug) {
      nodes {
        fields {
          race_slug
          Category
        }
        Description
        Date(formatString: "")
        Discipline
        Distance
        Long
        Short
        Time
        Surname
        Firstname
        Category_Position
      }
    }
  }
}`;
