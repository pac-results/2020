import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { compareStrings, toTitleCase } from '../lib/utils';

const RaceReport = ({ race }) => {
  const results = race.results.sort((a, b) => a.position - b.position);

  const firstMale = results.find(a => a.gender === 'male');
  const firstFemale = results.find(a => a.gender === 'female');

  const topTen = results.filter(r => r.category_position && r.category_position <= 10);

  results.sort(compareStrings('name'));

  return (
    <Fragment>
      <div style={{ padding: '10px' }}>
        <div><b>{ race.date } - { race.name } { race.distance }km { race.discipline}</b></div>

        <div>{ results.length } athlete{ results.length > 1 ? 's': ''}</div>
        <div style={{ padding: '7px' }}>
          {firstMale &&
          <div>First male athlete: { toTitleCase(firstMale.name) } ({ firstMale.time })</div>
          }
          { firstFemale &&
          <div>First female athlete: { toTitleCase(firstFemale.name) } ({ firstFemale.time })</div>
          }
        </div>
        { topTen.map(r => (
          <div key={r.name}>{ toTitleCase(r.name) } placed { r.category_position } in { r.category } { r.gender } ({ r.time })</div>
        )) }
      </div>
    </Fragment>
  )
};

RaceReport.propTypes = {
  race: PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    discipline: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      gender_position: PropTypes.number,
      category: PropTypes.string,
      category_position: PropTypes.number,
    })).isRequired,
  })
};

export default RaceReport;
