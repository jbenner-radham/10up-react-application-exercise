import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import VerifyAuth from '../components/VerifyAuth';

function About() {
    const [about, setAbout] = useState(null);

    document.title = '10up Blog - About';

    async function getPages() {
        const url = 'https://js1.10up.com/wp-json/wp/v2/pages';
        const options = {
            mode: 'cors'
        };
        const response = await fetch(url, options);
        const pages = await response.json();

        return pages;
    }

    useEffect(() => {
        getPages().then(pages => {
            const aboutUsPage = pages.find(page => page?.slug === 'about-us');

            setAbout(aboutUsPage?.content?.rendered);
        });
    }, []);

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

export default About;
