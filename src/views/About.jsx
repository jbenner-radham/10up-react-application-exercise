import React from 'react';
import RequireAuth from '../components/RequireAuth';

function About() {
    return (
        <>
            <RequireAuth />

            <h1>
                About
            </h1>

            <div className="page">
                {/* Retrieve about text from WP API. */}
                10up about text...
            </div>
        </>
    );
}

export default About;
