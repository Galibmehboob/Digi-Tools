import { useState } from "react";
import { Check } from "lucide-react";
import Products from "./Products";
import { toast } from "react-toastify";


const Cards = ({ p, i, tagStyles, carts, setCarts }) => {
    const [isAddedCart, setIsAddedCart] = useState(false)
    const handleBuyNow = () => {
        setIsAddedCart(true)

        const isFound = carts.find(item => item.id === p.id)
        if (isFound) {
            toast.error("Already Added!");
            return
        }


        setCarts([...carts, p])
        toast.success("Item Added to Cart")
    }
    return (
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
                    ${p.price}
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


            <button
                onClick={handleBuyNow}
                className={`cursor-pointer mt-4 text-white px-4 py-2 rounded-full w-full transition-all duration-300 ease-in-out 
  ${isAddedCart
                        ? "bg-green-400"
                        : "bg-linear-to-r from-purple-600 to-pink-400"
                    } hover:translate-y-1 hover:opacity-80`}
            >
                {isAddedCart ? "Added to cart" : "Buy Now"}
            </button>
        </div>
    );
};

export default Cards;