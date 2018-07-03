import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Job Portal</h1>
                <p>Apply,Check Status,Give and Get Feedback, Contact Manager.</p>
                <Link to="jobs" className="btn btn-primary btn-lg">Check Jobs</Link>
            </div>
        );
    }
}

export default HomePage;
