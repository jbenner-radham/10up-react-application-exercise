import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import React from 'react';

function BlogPosting({ blogPost }) {
    function getDateTime(date) {
        return date.replace(/T.+$/, '');
    }

    function getHumanReadableDate(date) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        const dateObject = new Date(date);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth();
        const day = dateObject.getDate();

        return `${months[month]} ${day}, ${year}`;
    }

    const dateTime = getDateTime(blogPost?.date);
    const humanReadableDate = getHumanReadableDate(blogPost?.date);

    return (
        <article itemScope itemType="http://schema.org/BlogPosting" className="post">
            <header>
                <h2 itemProp="headline">
                    { blogPost?.title?.rendered }
                </h2>

                {/* publication date */}
                <div className="date">
                    <strong>Publish Date</strong>:{' '}
                    <span itemProp="datePublished">
                        <time dateTime={dateTime}>{humanReadableDate}</time>
                    </span>
                </div>

                <div className="author">
                    <strong>Author</strong>:{' '}
                    <span itemProp="author">{blogPost?.yoast_head_json?.author}</span>
                </div>
            </header>

            <div
                itemProp="articleBody"
                className="content"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogPost?.content?.rendered) }}
            >
            </div>
        </article>
    );
}

BlogPosting.propTypes = {
    blogPost: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.shape({
            rendered: PropTypes.string.isRequired
        }).isRequired,
        yoast_head_json: PropTypes.shape({
            author: PropTypes.string.isRequired
        }).isRequired,
        content: PropTypes.shape({
            rendered: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default BlogPosting;
