import { useLocation } from 'react-router-dom';

function Notifications() {
    const location = useLocation();

    return (
        <div>
            <h2>Notifications</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Notifications;