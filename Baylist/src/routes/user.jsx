import { useLocation } from 'react-router-dom';

function UserPage() {
    const location = useLocation();

    return (
        <div>
            <h2>User Page</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default UserPage;