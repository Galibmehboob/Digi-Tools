const Steps = () => {
    return (
        <section className="px-4 md:px-10 py-16 bg-gray-100">

            <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Get Started In 3 Steps
                </h2>
                <p className="text-sm md:text-base text-zinc-500">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center max-w-6xl mx-auto w-full">

                <div className="bg-white space-y-3 shadow px-6 py-16 md:py-24 rounded-xl flex flex-col items-center justify-center">

                    <div className="relative bottom-10 md:bottom-20 left-0 md:left-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-600 text-white text-sm md:text-lg font-semibold">
                        01
                    </div>

                    <img className="w-14 md:w-16 bg-purple-200 p-3 rounded-full" src="/user.png" alt="" />

                    <h2 className="text-sm md:text-base">Create Account</h2>

                    <p className="text-xs md:text-sm text-gray-600">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>

                </div>

                <div className="bg-white space-y-3 shadow px-6 py-16 md:py-24 rounded-xl flex flex-col items-center justify-center">

                    <div className="relative bottom-10 md:bottom-20 left-0 md:left-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-600 text-white text-sm md:text-lg font-semibold">
                        02
                    </div>

                    <img className="w-14 md:w-16 bg-purple-200 p-3 rounded-full" src="/package.png" alt="" />

                    <h2 className="text-sm md:text-base">Choose Products</h2>

                    <p className="text-xs md:text-sm text-gray-600">
                        Browse our catalog and select the tools that fit your needs.
                    </p>

                </div>

                <div className="bg-white space-y-3 shadow px-6 py-16 md:py-24 rounded-xl flex flex-col items-center justify-center">

                    <div className="relative bottom-10 md:bottom-20 left-0 md:left-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-600 text-white text-sm md:text-lg font-semibold">
                        03
                    </div>

                    <img className="w-14 md:w-16 bg-purple-200 p-3 rounded-full" src="/rocket.png" alt="" />

                    <h2 className="text-sm md:text-base">Start Creating</h2>

                    <p className="text-xs md:text-sm text-gray-600">
                        Download and start using your premium tools immediately.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default Steps;