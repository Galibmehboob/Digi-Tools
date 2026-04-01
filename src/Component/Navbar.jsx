const Navbar = ({ carts, setActiveTab }) => {
    return (
        <header className="  border-b-2 backdrop-blur-md bg-white/70 border-zinc-200 sticky top-0 z-10">
            <div className="flex justify-between items-center px-10 py-5 mx-10">
                <h1 className="text-4xl font-bold text-purple-600">DigiTools</h1>

                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#">Products</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>
                </nav>

                <div className="flex gap-3">
                    <button onClick={() => setActiveTab("cart")} className="btn btn-circle bg-white border-none relative"><img src="/shopping-cart.png" alt="" />
                        {carts.length > 0 && (
                            <span className="badge badge-sm text-white px-2 rounded-full border-none bg-red-400 absolute -top-1 -right-1 ">
                                {carts.length}
                            </span>
                        )}
                    </button>
                    <button className="text-sm">Login</button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;