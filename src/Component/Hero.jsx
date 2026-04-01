const Hero = () => {
    return (
        <section className="grid md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-10 py-12 md:py-16 items-center w-full md:w-9/12 mx-auto">


            <div className="text-center md:text-left">


                <span className="inline-flex items-center bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">
                    <div className="inline-grid *:[grid-area:1/1] mr-2">
                        <div className="status status-success animate-ping"></div>
                        <div className="status status-success"></div>
                    </div>
                    New AI-Powered Tools Available
                </span>


                <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                    Supercharge Your <br /> Digital Workflow
                </h1>


                <p className="mt-4 text-gray-500 text-sm md:text-base">
                    Access premium AI tools, design assets, templates and productivity software.
                </p>


                <div className="mt-6 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">

                    <button className="bg-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto">
                        Explore Products
                    </button>

                    <button className="group border-2 border-purple-600 px-5 py-3 rounded-full flex items-center justify-center gap-2 
                    hover:bg-purple-600 hover:text-white hover:shadow-xl hover:-translate-y-1 
                    transition-all duration-300 ease-in-out w-full sm:w-auto">

                        <img
                            className="w-4 h-4 group-hover:invert group-hover:brightness-0 transition"
                            src="/Play.png"
                            alt="play icon"
                        />

                        Watch Demo
                    </button>

                </div>
            </div>


            <div className="flex justify-center md:justify-end">
                <img
                    src="/banner.png"
                    className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 ease-in-out"
                />
            </div>

        </section>
    );
};

export default Hero;