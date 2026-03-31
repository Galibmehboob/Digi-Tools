const CTA = () => {
    return (
        <section className="bg-purple-600 text-white text-center py-16 space-y-3">
            <h2 className="text-3xl font-bold">
                Ready To Transform Your Workflow?
            </h2>
            <p className="opacity-70 w-150 mx-auto">Join thousands of professionals who are already using Digi tools to work smarter.Start your free trial today.</p>

            <div className=" flex items-center justify-center gap-2">
                <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full">
                    Explore Products
                </button>
                <button className="mt-6 border border-white bg-purple-600 text-white px-6 py-3 rounded-full">
                    View Pricing
                </button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </section>
    );
};

export default CTA;