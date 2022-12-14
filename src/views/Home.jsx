import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogPosting from '../components/BlogPosting';
import { useAuth } from '../auth';
import VerifyAuth from '../components/VerifyAuth';

async function loader() {
    const url = 'https://js1.10up.com/wp-json/wp/v2/posts';
    const options = {
        mode: 'cors'
    };
    const response = await fetch(url, options);
    const posts = await response.json();

    return { posts };
}

function Home() {
    const { user } = useAuth();
    const { posts } = useLoaderData();

    document.title = '10up Blog';

    return (
        <>
            <VerifyAuth />

            {/* Should only show when user is logged in */}
            {user && <section className="welcome logged-in">
                Welcome {user?.user_display_name}!
            </section>}

            {/* Retrieve blog posts from WP API. */}
            <div itemScope itemType="https://schema.org/Blog">
                {posts.map(post => <BlogPosting blogPost={post} key={post.title.rendered} />)}
            </div>
        </>
    );
}

export { loader };

export default Home;
