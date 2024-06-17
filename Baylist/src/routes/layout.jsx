import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <header>
                <nav style={{ position: 'fixed', left: 0, top: '10%', bottom: 0, width: '200px', backgroundColor: '#f0f0f0', padding: '20px' }}>
                    <h1>My App</h1>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/account">Account</Link></li>
                        <li><Link to="/notifications">Notifications</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/product/:id">ProductDetail</Link></li>
                        <li><Link to="/user/:username">Userpage</Link></li>
                        <li><Link to="/seller-dashboard">SellerDashboard</Link></li>
                    </ol>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;