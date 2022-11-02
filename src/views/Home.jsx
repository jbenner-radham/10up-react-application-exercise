import React, { useEffect, useState } from 'react';
import BlogPosting from '../components/BlogPosting';
import { useAuth } from '../auth';

function Home() {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const url = 'https://js1.10up.com/wp-json/wp/v2/posts';
        const options = {
            mode: 'cors'
        };
        const response = await fetch(url, options);
        const posts = await response.json();

        return posts;
    }

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    let postIndex = 0;

    return (
        <>
            {/* Should only show when user is logged in */}
            {user && <section className="welcome logged-in">
                Welcome {user?.user_display_name}!
            </section>}

            {/* Retrieve blog posts from WP API. */}
            <div itemScope itemType="https://schema.org/Blog">
                {posts.map(post => <BlogPosting blogPost={post} key={(postIndex++).toString()} />)}
            </div>
        </>
    );
}

export default Home;
