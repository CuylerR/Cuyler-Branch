import { useLocation } from 'react-router-dom';

function SellerDashboard() {
    const location = useLocation();

    return (
        <div>
            <h2>Seller dashboard</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default SellerDashboard;