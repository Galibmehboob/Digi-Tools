import { use } from "react";
import { Check } from "lucide-react";

const Products = ({ productProm }) => {
    const products = use(productProm);

    const tagStyles = {
        popular: "bg-purple-100 text-purple-600",
        new: "bg-green-100 text-green-600",
        best: "bg-yellow-100 text-yellow-600",
    };

    return (
        <section className="px-10 py-16">
            <div className="text-center items-center justify-center flex flex-col space-y-4">
                <h2 className="text-3xl font-bold text-center">Premium Digital Tools</h2>
                <p className="w-150 text-zinc-600">Choose from our curated collection of premium digital products design boost your productivity and creativity.</p>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box">
                    <button name="my_tabs_1" type="radio" className="btn text-white bg-linear-to-r from-purple-600 to-pink-400 w-30 rounded-full" defaultChecked>Product's</button>
                    <button name="my_tabs_1" type="radio" className="btn w-30 rounded-full">Cart</button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-10 w-5xl mx-auto">

                {products.map((p, i) => (
                    <div key={i} className="group bg-white p-6 rounded-xl shadow 
                     transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                        <div className="flex justify-between">
                            <div className="border border-zinc-300 rounded-full p-3">
                                <img src={p.icon} alt={p.name} className="w-5 h-5" />
                            </div>

                            <p className={`flex items-center text-xs px-2 h-7 rounded-full 
                           font-semibold relative bottom-4 left-4 transition duration-300 
                           group-hover:scale-110 ${tagStyles[p.tagType]}`}>
                                {p.tag}
                            </p>
                        </div>


                        <h3 className="font-bold text-lg mt-2">{p.name}</h3>
                        <p className="text-gray-600">{p.description}</p>


                        <p className="text-gray-500 text-lg mt-2">
                            <span className="font-semibold text-2xl text-black">
                                {p.price}
                            </span>
                            /{p.period}
                        </p>


                        <div className="mt-4 space-y-2">
                            {p.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 hover:translate-y-1 transition"
                                >
                                    <Check className="text-green-500 w-4 h-4" />
                                    <span className="text-sm text-gray-600">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>


                        <button className=" mt-4 bg-linear-to-r from-purple-600 to-pink-400
                         text-white px-4 py-2 rounded-full w-full transition hover:translate-y-1  hover:opacity-80">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;