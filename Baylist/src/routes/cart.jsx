import { useLocation } from 'react-router-dom';

function Cart() {
    const location = useLocation();

    return (
        <div>
            <h2>Cart</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default Cart;