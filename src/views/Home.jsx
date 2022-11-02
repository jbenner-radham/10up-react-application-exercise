import React from 'react';
import RequireAuth from '../components/RequireAuth';
import { useAuth } from '../auth';

function Home() {
    const { user } = useAuth();

    return (
        <>
            <RequireAuth />

            {/* Should only show when user is logged in */}
            <section className="welcome logged-in">
                Welcome {user?.user_display_name}!
            </section>

            {/* Retrieve blog posts from WP API. */}
            <div itemScope itemType="https://schema.org/Blog">

                <article itemScope itemType="http://schema.org/BlogPosting" className="post">

                    <header>

                        <h2 itemProp="headline">
                            Post Title 1
                        </h2>

                        {/* publication date */}
                        <div className="date">
                            <strong>Publish Date</strong>:
                            <span itemProp="datePublished">
                                <time dateTime="2016-05-01">May 1, 2016</time>
                            </span>
                        </div>

                        <div className="author">
                            <strong>Author</strong>:
                            <span itemProp="author">Jane Doe</span>
                        </div>

                    </header>

                    <div itemProp="articleBody" className="content">
                        Post content...
                    </div>

                </article>

                <article itemScope itemType="http://schema.org/BlogPosting" className="post">

                    <header>

                        <h2 itemProp="headline">
                            Post Title 2
                        </h2>

                        {/* publication date */}
                        <div className="date">
                            <strong>Publish Date</strong>:
                            <span itemProp="datePublished">
                                <time dateTime="2016-05-01">May 1, 2016</time>
                            </span>
                        </div>

                        <div className="author">
                            <strong>Author</strong>:
                            <span itemProp="author">Jane Doe</span>
                        </div>

                    </header>

                    <div itemProp="articleBody" className="content">
                        Post content...
                    </div>

                </article>

            </div>
        </>
    );
}

export default Home;
