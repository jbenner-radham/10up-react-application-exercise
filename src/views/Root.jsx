import { Link, Outlet } from 'react-router-dom';
import React from 'react';

function Root() {
    return (
        <>
            <header className="site-header" role="banner" itemScope="itemscope" itemType="http://schema.org/WPHeader">
                <div className="site-title" itemScope itemType="http://schema.org/Organization">
                    10up Blog
                </div>

                <nav className="site-navigation" role="navigation" itemScope="itemscope" itemType="http://schema.org/SiteNavigationElement">
                    <a href="#menu-main-nav" id="js-menu-toggle" className="site-menu-toggle">
                        <span className="screen-reader-text">Primary Menu</span>
                        <span aria-hidden="true">☰</span>
                    </a>

                    {/* Make sure to update menu links to work with your app. */}
                    <ul id="menu-main-nav" className="primary-menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
                            <Link to="/about">About</Link>
                        </li>

                        {/* Should only show when user is logged out */}
                        <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
                            <Link to="/login">Login</Link>
                        </li>

                        {/* Should only show when user is logged in */}
                        <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default Root;
