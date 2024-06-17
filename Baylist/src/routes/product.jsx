import { useLocation } from 'react-router-dom';

function ProductDetail() {
    const location = useLocation();

    return (
        <div>
            <h2>Product</h2>
            <p>Current Pathname: {location.pathname}</p>
            {/* Add your content */}
        </div>
    );
}
export default ProductDetail;