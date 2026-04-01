const Stats = () => {
    return (
        <div className="w-full  mx-auto px-4">

            <div className="stats stats-vertical md:stats-horizontal shadow bg-purple-200 w-full overflow-hidden">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div className="stat-title text-black">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc text-black">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="stat-title text-black">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc text-black">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-8 w-8 text-yellow-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.26a1 1 0 00.95.69h6.585c.969 0 1.371 1.24.588 1.81l-5.33 3.87a1 1 0 00-.364 1.118l2.036 6.26c.3.921-.755 1.688-1.54 1.118l-5.33-3.87a1 1 0 00-1.176 0l-5.33 3.87c-.784.57-1.838-.197-1.539-1.118l2.036-6.26a1 1 0 00-.364-1.118l-5.33-3.87c-.783-.57-.38-1.81.588-1.81h6.585a1 1 0 00.95-.69l2.036-6.26z" />
                        </svg>
                    </div>
                    <div className="stat-title text-black">Rating</div>
                    <div className="stat-value">4.9</div>
                    <div className="stat-desc text-secondary">Recommended</div>
                </div>

            </div>
        </div>
    );
};

export default Stats;