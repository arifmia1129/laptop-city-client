import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            {/* apply style when link match. style: color, textDecoration and fontWeight */}
            <Link
                style={{ color: match ? "#FFBF00" : "white", textDecoration: match ? "none" : "none", fontWeight: match ? "800" : "400" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div >
    );
};

export default CustomLink;