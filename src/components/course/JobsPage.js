import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as jobActions from '../../actions/jobActions';
import JobsList from './JobsList';

class JobsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddJobPage = this.redirectToAddJobPage.bind(this);
  }

  redirectToAddJobPage() {
    this.props.history.push('/jobs');
  }

  render() {
    return (
      <div>
        <h1>Jobs</h1>
        <input type="submit"
               value="Add Job"
               className="btn btn-primary"
               onClick={this.redirectToAddJobPage}/>

        <JobsList jobs={this.props.courses}/>
      </div>
    );
  }
}

JobsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobsPage));
