import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ProductsSection = () => {
    const { urlData: products, productsLoading, productsError } = useFetch(
        "http://localhost:8000/products"
    );
    const [updatedProducts, useUpdatedProducts] = useState([]);
    useEffect(() => {
        if (products) {
            useUpdatedProducts(
                products.filter((product) => product.featured === false)
            );
        }
    }, [products]);

    return (
        <section className="products container">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-section">
                    <div className="flat-title medium">Jasmine Products</div>
                </div>
                <div className="crossbar">
                    <div className="line"></div>
                    <div className="line active"></div>
                    <div className="line"></div>
                </div>
            </div>
            {productsLoading && <div className="loading">Loading...</div>}
            {productsError && <p>{productsError}</p>}
            {products && (
                <div className="products-wrapper  d-flex justify-content-between flex-wrap">
                    {updatedProducts.map((product) => (
                        <div
                            className="products-wrapper_item col-md-6 px-0 d-flex flex-wrap"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="10"
                        >
                            <div className="products-wrapper_item-text d-flex flex-column justify-content-around col-md-6">
                                <div>
                                    <a href={"/products/" + product.id}>
                                        <h3>{product.name}</h3>
                                    </a>
                                    <p>{product.shortDescription}</p>

                                    <a
                                        href={"/products/" + product.id}
                                        className=" btn btn--underlined"
                                    >
                                        SHOP NOW
                                    </a>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="products-wrapper_item-img  col-md-6  parallax_scroll"
                            >
                                <img src={product.image} alt={product.image} />
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProductsSection;
