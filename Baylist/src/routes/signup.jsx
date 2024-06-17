import { useLocation } from 'react-router-dom';

function Signup() {
    const location = useLocation();

    return (
        <div>
            <h2>Signup</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Signup;