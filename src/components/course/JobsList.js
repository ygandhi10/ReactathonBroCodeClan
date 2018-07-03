import React from 'react';
import PropTypes from 'prop-types';
import JobsListRow from './JobsListRow';

const JobsList = ({jobs}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Job Code</th>
        <th>Title</th>
        <th>Details</th>
        <th>Manager</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {jobs.map(job =>
        <JobsListRow key={job.jobCode} job={job}/>
      )}
      </tbody>
    </table>
  );
};

JobsList.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default JobsList;
