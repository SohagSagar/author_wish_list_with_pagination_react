import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ fontWeight: match ? "600" : "400", color: match && 'Black' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ''}
        </div>
    );
}

export default CustomLink;