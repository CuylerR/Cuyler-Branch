import { useLocation } from 'react-router-dom';

function NotFound() {
    const location = useLocation();

    return (
        <div>
            <h2>404 not found page</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default NotFound;