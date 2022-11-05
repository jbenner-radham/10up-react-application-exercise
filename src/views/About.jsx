import DOMPurify from 'dompurify';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VerifyAuth from '../components/VerifyAuth';

async function loader() {
    const url = 'https://js1.10up.com/wp-json/wp/v2/pages';
    const options = {
        mode: 'cors'
    };
    const response = await fetch(url, options);
    const pages = await response.json();
    const aboutUsPage = pages.find(page => page?.slug === 'about-us');
    const about = aboutUsPage?.content?.rendered;

    return { about };
}

function About() {
    const { about } = useLoaderData();

    document.title = '10up Blog - About';

    return (
        <>
            <VerifyAuth />

            <h1>
                About
            </h1>

            <div className="page" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(about) }}>
                {/* Retrieve about text from WP API. */}
            </div>
        </>
    );
}

export { loader };

export default About;
