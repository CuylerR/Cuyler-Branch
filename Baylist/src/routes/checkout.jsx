import { useLocation } from 'react-router-dom';

function Checkout() {
    const location = useLocation();

    return (
        <div>
            <h2>Checkout</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Checkout;