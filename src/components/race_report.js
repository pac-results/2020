import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const RaceReport = ({ race }) => {
  const { Description, Date, Discipline, Distance } = race[0];
  const firstMale = race.find(a => a.Gender === 'M');
  const firstFemale = race.find(a => a.Gender === 'F');

  const topTen = race.filter(r => r.Category_Position && r.Category_Position <= 10);

  return (
    <Fragment>
      <div style={{ padding: '10px' }}>
        <h2>{Date} - {Description} {Distance}km {Discipline}</h2>

        <div>{race.length} Pinelands athlete{race.length > 1 ? 's' : ''}</div>
        <div style={{ padding: '7px' }}>
          {firstMale &&
          <div>First male athlete: {firstMale.Firstname} {firstMale.Surname}  ({firstMale.Time})</div>
          }
          {firstFemale &&
          <div>First female athlete: {firstFemale.Firstname} {firstFemale.Surname} ({firstFemale.Time})</div>
          }
        </div>
        {topTen.map(r => (
          <div
            key={r.Firstname}>{r.Firstname} {r.Surname} placed {r.Category_Position} {r.fields.Category} ({r.Time})</div>
        ))}
      </div>
    </Fragment>
  )
};

RaceReport.propTypes = {
  race: PropTypes.arrayOf(
    PropTypes.shape({
      Description: PropTypes.string.isRequired,
      Distance: PropTypes.string.isRequired,
      Discipline: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
      Surname: PropTypes.string.isRequired,
      Firstname: PropTypes.string.isRequired,
      Time: PropTypes.string.isRequired,
      Gender: PropTypes.string,
      Category: PropTypes.string,
      Category_Position: PropTypes.string,
  })).isRequired,
};

export default RaceReport;
