const CTA = () => {
    return (
        <section className="bg-purple-600 text-white text-center py-12 md:py-16 space-y-4 px-4">

            <h2 className="text-2xl md:text-3xl font-bold">
                Ready To Transform Your Workflow?
            </h2>

            <p className="opacity-70 max-w-xl mx-auto text-sm md:text-base">
                Join thousands of professionals who are already using Digi tools to work smarter.
                Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                <button className="bg-white text-purple-600 px-6 py-3 rounded-full w-full sm:w-auto">
                    Explore Products
                </button>

                <button className="border border-white text-white px-6 py-3 rounded-full w-full sm:w-auto">
                    View Pricing
                </button>

            </div>

            <p className="text-xs md:text-sm opacity-80 px-2">
                14-day free trial • No credit card required • Cancel anytime
            </p>

        </section>
    );
};

export default CTA;