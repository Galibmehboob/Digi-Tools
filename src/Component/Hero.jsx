const Hero = () => {
    return (
        <section className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center w-9/12 mx-auto">
            <div>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs ">
                    <div className="inline-grid *:[grid-area:1/1] mr-2">
                        <div className="status status-success animate-ping"></div>
                        <div className="status status-success"></div>
                    </div>
                    New AI-Powered Tools Available
                </span>

                <h1 className="text-5xl font-bold mt-4 leading-tight">
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className="mt-4 text-gray-500">
                    Access premium AI tools, design assets, templates and productivity software.
                </p>

                <div className="mt-6 flex gap-4">
                    <button className="bg-purple-600 text-white px-5 py-3 rounded-full">
                        Explore Products
                    </button>
                    <button className="group border-2 border-purple-600 px-5 py-3 rounded-full flex items-center gap-2 
                    hover:bg-purple-600 hover:text-white hover:shadow-xl hover:-translate-y-1 
                    transition-all duration-300 ease-in-out">

                        <img
                            className="w-4 h-4 group-hover:invert group-hover:brightness-0 transition"
                            src="/Play.png"
                            alt="play icon"
                        />

                        Watch Demo
                    </button>
                </div>
            </div>

            <img
                src="/banner.png"
                className="rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 ease-in-out"
            />
        </section>
    );
};

export default Hero;