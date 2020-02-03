import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const RaceReport = ({ raceResults, Description, Date, Discipline, Distance }) => {
  const firstMale = raceResults.find(a => a.Gender === 'M');
  const firstFemale = raceResults.find(a => a.Gender === 'F');

  const topTen = raceResults.filter(r => r.Category_Position && r.Category_Position <= 10);

  return (
    <Fragment>
      <div style={{ padding: '10px' }}>
        <h2>{Date} - {Description} {Distance}km {Discipline}</h2>

        <div>{raceResults.length} athlete{raceResults.length > 1 ? 's' : ''}</div>
        <div style={{ padding: '7px' }}>
          {firstMale &&
          <div>First male athlete: {firstMale.Name} ({firstMale.Time})</div>
          }
          {firstFemale &&
          <div>First female athlete: {firstFemale.Name} ({firstFemale.Time})</div>
          }
        </div>
        {topTen.map(r => (
          <div
            key={r.Name}>{r.Name} placed {r.Category_Position} {r.Category} ({r.Time})</div>
        ))}
      </div>
    </Fragment>
  )
};

RaceReport.propTypes = {
  Description: PropTypes.number.isRequired,
  Distance: PropTypes.number.isRequired,
  Discipline: PropTypes.string.isRequired,
  Date: PropTypes.string.isRequired,
  raceResults: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Time: PropTypes.string.isRequired,
      Gender: PropTypes.string,
      Category: PropTypes.string,
      Category_Position: PropTypes.number,
    })).isRequired,
};

export default RaceReport;
