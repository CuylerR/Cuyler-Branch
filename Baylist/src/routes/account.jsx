import { useLocation } from 'react-router-dom';

function Account() {
    const location = useLocation();

    return (
        <div>
            <h2>Account</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Account;