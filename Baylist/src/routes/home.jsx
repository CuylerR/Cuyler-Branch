import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    return (
        <div>
            <h2>Homepage</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your homepage content */}
        </div>
    );
}
export default Home;