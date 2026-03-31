

const Carts = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePay = () => {
        setCarts([])
    }

    return (
        <div className="mb-5">
            <div className="border border-zinc-300 w-7xl px-5 py-3 m-5 mx-auto rounded-xl">

                {
                    carts.length === 0 ?
                        <div className="flex flex-col items-center justify-center py-20 text-center">


                            <div className="bg-purple-100 p-6 rounded-full mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-10 h-10 text-purple-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                                    />
                                </svg>
                            </div>


                            <h2 className="text-xl font-semibold text-gray-800">
                                Your cart is empty
                            </h2>
                            <p className="text-gray-500 mt-2">
                                Looks like you haven’t added anything yet.
                            </p>

                        </div> :
                        <>
                            <div className="mt-5">
                                {
                                    carts.map(items => <div key={items.id} className="flex justify-between  rounded-2xl shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-xl border border-zinc-200 mb-4 px-10 py-3 w-6xl mx-auto bg-zinc-100">

                                        <div className="flex gap-2">
                                            <div className="border border-zinc-300 rounded-full p-5  bg-purple-100">
                                                <img src={items.icon} alt={items.name} className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-xl">{items.name}</h2>
                                                <p className="text-gray-500 text-lg mt-2">
                                                    <span className="font-semibold text-md text-black">
                                                        ${items.price}
                                                    </span>
                                                    /{items.period}
                                                </p>
                                            </div>
                                        </div>
                                        <button className="text-red-500">Remove</button>

                                    </div>)
                                }


                            </div>
                            <div className="flex justify-between  rounded-2xl shadow border border-zinc-200 mb-4 px-10 py-3 w-6xl mx-auto bg-purple-200">
                                <h1 className="text-2xl font-bold">Total</h1>
                                <p className="text-2xl font-bold">
                                    ${totalPrice.toFixed(2)}
                                </p>
                            </div>
                        </>
                }




            </div>
            <button onClick={handlePay} className="btn bg-purple-600 text-white w-7xl flex mx-auto rounded-full shadow transition duration-300 hover:translate-y-0.5 hover:bg-blue-800 hover:shadow-xl  ">Proceed to Checkout</button>
        </div>

    );
};

export default Carts;