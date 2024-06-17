import { useLocation } from 'react-router-dom';

function Favorites() {
    const location = useLocation();

    return (
        <div>
            <h2>Favorites</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Favorites;