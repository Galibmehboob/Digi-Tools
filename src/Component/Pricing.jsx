import { Check } from "lucide-react";

const Pricing = () => {
    return (
        <section className="px-4 md:px-10 py-16 bg-gray-50">

            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900">
                Simple, Transparent Pricing
            </h2>

            <p className="text-center text-sm md:text-base text-gray-500 mt-3 px-2">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-6xl mx-auto w-full">


                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border text-center">

                    <h3 className="text-lg md:text-xl font-semibold">Starter</h3>
                    <p className="text-gray-500 mt-1 text-sm md:text-base">Perfect for getting started</p>

                    <p className="text-3xl md:text-4xl font-bold mt-6">
                        $0<span className="text-base md:text-lg font-normal text-gray-500">/Month</span>
                    </p>

                    <ul className="text-left mt-6 space-y-3 text-gray-600 text-sm md:text-base">
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Access to 10 free tools</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Basic templates</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Community support</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> 1 project per month</li>
                    </ul>

                    <button className="mt-8 w-full py-3 rounded-full bg-gray-900 text-white hover:bg-black transition">
                        Get Started Free
                    </button>

                </div>


                <div className="bg-linear-to-br from-purple-600 to-purple-800 text-white p-6 md:p-8 rounded-2xl shadow-xl relative text-center md:scale-105">

                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                        Most Popular
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold mt-4">Pro</h3>
                    <p className="text-purple-100 mt-1 text-sm md:text-base">Best for professionals</p>

                    <p className="text-3xl md:text-4xl font-bold mt-6">
                        $29<span className="text-base md:text-lg font-normal text-purple-200">/Month</span>
                    </p>

                    <ul className="text-left mt-6 space-y-3 text-purple-100 text-sm md:text-base">
                        <li className="flex items-center gap-2"><Check className="text-white w-4 h-4" /> Access to all premium tools</li>
                        <li className="flex items-center gap-2"><Check className="text-white w-4 h-4" /> Unlimited templates</li>
                        <li className="flex items-center gap-2"><Check className="text-white w-4 h-4" /> Priority support</li>
                        <li className="flex items-center gap-2"><Check className="text-white w-4 h-4" /> Unlimited projects</li>
                        <li className="flex items-center gap-2"><Check className="text-white w-4 h-4" /> Cloud sync</li>
                        <li className="flex items-center gap-2"><Check className="text-white w-4 h-4" /> Advanced analytics</li>
                    </ul>

                    <button className="mt-8 w-full py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition">
                        Start Pro Trial
                    </button>

                </div>


                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border text-center">

                    <h3 className="text-lg md:text-xl font-semibold">Enterprise</h3>
                    <p className="text-gray-500 mt-1 text-sm md:text-base">For teams and businesses</p>

                    <p className="text-3xl md:text-4xl font-bold mt-6">
                        $99<span className="text-base md:text-lg font-normal text-gray-500">/Month</span>
                    </p>

                    <ul className="text-left mt-6 space-y-3 text-gray-600 text-sm md:text-base">
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Everything in Pro</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Team collaboration</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Custom integrations</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Dedicated support</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> SLA guarantee</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500 w-4 h-4" /> Custom branding</li>
                    </ul>

                    <button className="mt-8 w-full py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
                        Contact Sales
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Pricing;