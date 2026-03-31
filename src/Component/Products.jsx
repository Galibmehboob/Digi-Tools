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
        <section className="px-10 mb-10">

            <div className="grid md:grid-cols-3 gap-6 mt-10 w-5xl mx-auto">
                {products.map((p, i) => (
                    <Cards key={i} p={p} i={i} tagStyles={tagStyles} carts={carts} setCarts={setCarts}></Cards>
                ))}
            </div>
        </section>
    );
};

export default Products;