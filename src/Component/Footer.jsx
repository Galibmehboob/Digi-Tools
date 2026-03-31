const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-10 py-10">
            <div className="grid md:grid-cols-4 gap-6">
                <div>
                    <h2 className="text-xl font-bold">DigiTools</h2>
                    <p className="text-sm text-gray-400 mt-2">
                        Premium digital tools for creators.
                    </p>
                </div>

                <div>
                    <h4>Product</h4>
                    <p className="text-gray-400 text-sm">Features</p>
                    <p className="text-gray-400 text-sm">Pricing</p>
                </div>

                <div>
                    <h4>Company</h4>
                    <p className="text-gray-400 text-sm">About</p>
                    <p className="text-gray-400 text-sm">Careers</p>
                </div>

                <div>
                    <h4>Resources</h4>
                    <p className="text-gray-400 text-sm">Docs</p>
                    <p className="text-gray-400 text-sm">Support</p>
                </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
                © 2026 DigiTools
            </p>
        </footer>
    );
};

export default Footer;