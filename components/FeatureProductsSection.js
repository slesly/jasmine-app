import Link from "next/link";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const FeatureProductsSection = ({ productCartState, productWishlistState }) => {
    const { urlData: products, productsLoading, productsError } = useFetch(
        "http://localhost:8000/products"
    );
    const {
        urlData: categories,
        categoriesLoading,
        categoriesError,
    } = useFetch("http://localhost:8000/categories");
    const [updatedProducts, useUpdatedProducts] = useState([]);

    const [selectedProducts, useSelectedProducts] = useState([]);

    const [switchedTab, useSwitchedTab] = useState([]);

    useEffect(() => {
        if (products) {
            useUpdatedProducts(
                products.filter((product) => product.featured === true)
            );
        }
    }, [products]);

    useEffect(() => {
        if (categories) {
            useSwitchedTab(() => {
                let updatedCategories = categories.filter(
                    (category) => category.featured
                );

                updatedCategories.forEach((category) => {
                    category.isActive = false;
                });
                updatedCategories.find(
                    (category) => category.name === "towels"
                ).isActive = true;
                return updatedCategories;
            });
        }
    }, [categories]);

    useEffect(() => {
        useSelectedProducts(
            updatedProducts.filter((product) => product.category === "towels")
        );
    }, [updatedProducts]);

    const switchTab = (tabName) => {
        useSelectedProducts(
            updatedProducts.filter((product) => product.category === tabName)
        );
        useSwitchedTab(() => {
            let updatedCategories = switchedTab;
            updatedCategories.forEach((category) => {
                category.isActive = false;
            });
            updatedCategories.find(
                (category) => category.name === tabName
            ).isActive = true;

            return updatedCategories;
        });
    };

    const addToCart = async (productId, tabName) => {
        await useUpdatedProducts(() => {
            let isAddedToCart = updatedProducts.find(
                (product) => product.id === productId
            ).addedToCart;

            updatedProducts.find(
                (product) => product.id === productId
            ).addedToCart = !isAddedToCart;

            return updatedProducts;
        });
        await useSelectedProducts(
            updatedProducts.filter((product) => product.category === tabName)
        );

        const addedProduct = updatedProducts.find(
            (product) => product.id === productId
        );

        fetch("http://localhost:8000/products/" + productId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addedProduct),
        });

        productCartState({
            object: addedProduct,
            state: addedProduct.addedToCart,
        });
    };

    const addToWishlist = async (productId, tabName) => {
        await useUpdatedProducts(() => {
            let isAddedToWishlist = updatedProducts.find(
                (product) => product.id === productId
            ).addedToWishlist;

            updatedProducts.find(
                (product) => product.id === productId
            ).addedToWishlist = !isAddedToWishlist;

            return updatedProducts;
        });
        await useSelectedProducts(
            updatedProducts.filter((product) => product.category === tabName)
        );

        const addedProduct = updatedProducts.find(
            (product) => product.id === productId
        );

        fetch("http://localhost:8000/products/" + productId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addedProduct),
        });

        productWishlistState({
            object: addedProduct,
            state: addedProduct.addedToWishlist,
        });
    };

    return (
        <section className="fea-tabs cl-re tabs-section-style4">
            <div className="container">
                <div className="title-section text-center my-4">
                    <div className="title-section">
                        <div className="flat-title medium m-auto ">
                            FEATURED PRODUCTS
                        </div>
                    </div>
                </div>
                {productsLoading && <div className="loading">Loading...</div>}
                {productsError && <p>{productsError}</p>}
                {products && (
                    <div className="flat-tabs tab-3 clearfix">
                        {categoriesLoading && (
                            <div className="loading">Loading...</div>
                        )}
                        {categoriesError && <p>{categoriesError}</p>}
                        {categories && (
                            <ul className="menu-tab">
                                {switchedTab.map((category) => (
                                    <li
                                        key={category.id}
                                        className={
                                            category.isActive ? "active" : ""
                                        }
                                        onClick={() => switchTab(category.name)}
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="content-tab">
                            <div className="content-inner">
                                <div className="row">
                                    {selectedProducts.map((product) => (
                                        <div
                                            className="col-lg-3 col-md-4 col-sm-6 col-6 col-fl2"
                                            key={product.id}
                                        >
                                            <div className="item-product item-product-grid cl-bl">
                                                <div className="featured-post">
                                                    <div className="entry-image">
                                                        <img
                                                            src={product.image}
                                                            alt="images"
                                                        />
                                                        <span
                                                            className={
                                                                product.badge ===
                                                                "New"
                                                                    ? "new"
                                                                    : product.badge ===
                                                                      "Promotion"
                                                                    ? "on-sale prom baig"
                                                                    : "on-sale"
                                                            }
                                                        >
                                                            {product.badge}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="content-product">
                                                    <div
                                                        className={
                                                            product.addedToCart
                                                                ? "btn-add minus"
                                                                : "btn-add"
                                                        }
                                                    >
                                                        <em
                                                            className={
                                                                product.addedToCart
                                                                    ? "fas fa-minus"
                                                                    : "fas fa-plus"
                                                            }
                                                            onClick={() =>
                                                                addToCart(
                                                                    product.id,
                                                                    product.category
                                                                )
                                                            }
                                                        ></em>
                                                    </div>
                                                    <div className="info-product d-flex justify-content-between align-items-center my-3">
                                                        <div className="title">
                                                            <Link
                                                                href={
                                                                    "/products/" +
                                                                    product.id
                                                                }
                                                            >
                                                                <a>
                                                                    {
                                                                        product.name
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <span className="price">
                                                            {product.price}
                                                        </span>
                                                    </div>
                                                    <div className="colors">
                                                        {product.colors.map(
                                                            (color) => (
                                                                <div
                                                                    key={color}
                                                                    className={
                                                                        color
                                                                    }
                                                                ></div>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="text ">
                                                        <p className="gen-fasion">
                                                            {
                                                                product.shortDescription
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="add-to-cart">
                                                        {!product.addedToCart && (
                                                            <a
                                                                onClick={() =>
                                                                    addToCart(
                                                                        product.id,
                                                                        product.category
                                                                    )
                                                                }
                                                                style={{
                                                                    cursor:
                                                                        "pointer",
                                                                }}
                                                                className="hv-bounce-bk"
                                                            >
                                                                ADD TO CART
                                                            </a>
                                                        )}
                                                        {product.addedToCart && (
                                                            <Link href="/checkout">
                                                                <a className="hv-bounce-bk">
                                                                    CONTINUE TO
                                                                    CHECKOUT
                                                                </a>
                                                            </Link>
                                                        )}
                                                        <span className="favorite">
                                                            <em
                                                                className={
                                                                    product.addedToWishlist
                                                                        ? "far fa-heart active"
                                                                        : "far fa-heart"
                                                                }
                                                                onClick={() => {
                                                                    addToWishlist(
                                                                        product.id,
                                                                        product.category
                                                                    );
                                                                }}
                                                            ></em>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeatureProductsSection;
