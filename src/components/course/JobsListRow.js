import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const JobsListRow = ({job}) => {
  return (
    <tr>
      <td>{job.jobCode}</td>
      <td>{job.title}</td>
      <td>{job.details}</td>
      <td>{job.manager}</td>
      <td><Link to={'/job/' + job.jobCode}>Apply</Link></td>
    </tr>
  );
};

JobsListRow.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobsListRow;
