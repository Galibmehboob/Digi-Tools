import { use } from "react";
import Cards from "./Cards";

const Products = ({ productProm, carts, setCarts }) => {
    const products = use(productProm);

    const tagStyles = {
        popular: "bg-purple-100 text-purple-600",
        new: "bg-green-100 text-green-600",
        best: "bg-yellow-100 text-yellow-600",
    };

    return (
        <section className="px-4 md:px-10 mb-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto w-full">

                {products.map((p, i) => (
                    <Cards
                        key={i}
                        p={p}
                        i={i}
                        tagStyles={tagStyles}
                        carts={carts}
                        setCarts={setCarts}
                    />
                ))}

            </div>

        </section>
    );
};

export default Products;