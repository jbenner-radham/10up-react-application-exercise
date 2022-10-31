import React from 'react';

function Home() {
    return (
        <>
            {/* Should only show when user is logged in */}
            <section class="welcome logged-in">
                Welcome username!
            </section>

            {/* Retrieve blog posts from WP API. */}
            <div itemscope itemtype="https://schema.org/Blog">

                <article itemscope itemtype="http://schema.org/BlogPosting" class="post">

                    <header>

                        <h2 itemprop="headline">
                            Post Title 1
                        </h2>

                        {/* publication date */}
                        <div class="date">
                            <strong>Publish Date</strong>:
                            <span itemprop="datePublished">
                                <time datetime="2016-05-01">May 1, 2016</time>
                            </span>
                        </div>

                        <div class="author">
                            <strong>Author</strong>:
                            <span itemprop="author">Jane Doe</span>
                        </div>

                    </header>

                    <div itemprop="articleBody" class="content">
                        Post content...
                    </div>

                </article>

                <article itemscope itemtype="http://schema.org/BlogPosting" class="post">

                    <header>

                        <h2 itemprop="headline">
                            Post Title 2
                        </h2>

                        {/* publication date */}
                        <div class="date">
                            <strong>Publish Date</strong>:
                            <span itemprop="datePublished">
                                <time datetime="2016-05-01">May 1, 2016</time>
                            </span>
                        </div>

                        <div class="author">
                            <strong>Author</strong>:
                            <span itemprop="author">Jane Doe</span>
                        </div>

                    </header>

                    <div itemprop="articleBody" class="content">
                        Post content...
                    </div>

                </article>

            </div>
        </>
    );
}

export default Home;
