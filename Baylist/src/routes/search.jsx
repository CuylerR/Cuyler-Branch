import { useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();

    return (
        <div>
            <h2>Search</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Search;