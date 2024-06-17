import { useLocation } from 'react-router-dom';

function Login() {
    const location = useLocation();

    return (
        <div>
            <h2>Login</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Login;