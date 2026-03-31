const Steps = () => {
    return (
        <section className="px-10 py-16 bg-gray-100">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold ">Get Started In 3 Steps</h2>
                <p className="text-zinc-500">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-center w-5xl mx-auto ">
                <div className="bg-white space-y-3 shadow px-6 py-24 rounded-xl flex flex-col items-center justify-center ">
                    <div className="relative bottom-20 left-30 flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white text-lg font-semibold">
                        01
                    </div>
                    <img className="w-16 bg-purple-200 p-3 rounded-full" src="/user.png" alt="" />
                    <h2>Create Account</h2>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="bg-white space-y-3 shadow  px-6 py-24 rounded-xl flex flex-col items-center justify-center ">
                    <div className="relative bottom-20 left-30  flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white text-lg font-semibold">
                        02
                    </div>
                    <img className="w-16 bg-purple-200 p-3 rounded-full" src="/package.png" alt="" />
                    <h2>Choose Products</h2>
                    <p>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="bg-white space-y-3 shadow px-6 py-24 rounded-xl flex flex-col items-center justify-center ">
                    <div className="relative bottom-20 left-30  flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white text-lg font-semibold">
                        03
                    </div>
                    <img className="w-16 bg-purple-200 p-3 rounded-full" src="/rocket.png" alt="" />
                    <h2>Start Creating</h2>
                    <p>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </section>
    );
};

export default Steps;

