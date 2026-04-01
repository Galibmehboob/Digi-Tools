import { useState } from "react";

const Navbar = ({ carts, setActiveTab }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="border-b backdrop-blur-md bg-white/70 border-zinc-200 sticky top-0 z-50">

            <div className="flex justify-between items-center px-4 md:px-10 py-4">


                <h1 className="text-3xl md:text-4xl font-bold text-purple-600">
                    DigiTools
                </h1>


                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#">Products</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>
                </nav>


                <div className="flex items-center gap-3">


                    <button
                        onClick={() => setActiveTab("cart")}
                        className="btn btn-circle bg-white border-none relative"
                    >
                        <img src="/shopping-cart.png" alt="cart" />

                        {carts.length > 0 && (
                            <span className="badge badge-sm text-white border-none px-2 rounded-full bg-red-500 absolute -top-1 -right-1">
                                {carts.length}
                            </span>
                        )}
                    </button>


                    <button className="hidden md:block text-sm">Login</button>


                    <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                        Get Started
                    </button>


                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                    </button>

                </div>
            </div>


            {menuOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm border-t bg-white">

                    <a href="#">Products</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>


                    <button className="text-left">Login</button>

                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm w-fit">
                        Get Started
                    </button>

                </div>
            )}

        </header>
    );
};

export default Navbar;