import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    document.title = '10up Blog - Error';

    return (
        <div id="error-page">
            <h1>Sorry!</h1>
            <p>It appears you&#39;ve encountered an unexpected error.</p>
            <p>
                <i>{error?.statusText ?? error?.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;
