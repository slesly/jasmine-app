import { useEffect, useState } from "react";
import Link from "next/link";
import useFetch from "../hooks/useFetch";

const Header = ({ productCartState, productWishlistState, menuOpenProp }) => {
    const { urlData: products, loading, error } = useFetch(
        "http://localhost:8000/products"
    );

    const [addedToCart, useAddedToCart] = useState([]);
    const [addedToWishlist, useAddedToWishlist] = useState([]);

    useEffect(() => {
        if (products) {
            useAddedToCart(
                products.filter((product) => product.addedToCart === true)
            );
            useAddedToWishlist(
                products.filter((product) => product.addedToWishlist === true)
            );
        }
    }, [products]);

    useEffect(() => {
        if (productCartState && productCartState.state) {
            useAddedToCart((oldAddedToCart) => [
                ...oldAddedToCart,
                productCartState.object,
            ]);
        } else if (productCartState && !productCartState.state) {
            const updatedArr = addedToCart.filter(
                (product) => product.id !== productCartState.object.id
            );
            useAddedToCart(updatedArr);
        }
    }, [productCartState]);

    useEffect(() => {
        if (productWishlistState && productWishlistState.state) {
            useAddedToWishlist((oldAddedToCart) => [
                ...oldAddedToCart,
                productWishlistState.object,
            ]);
        } else if (productWishlistState && !productWishlistState.state) {
            const updatedArr = addedToWishlist.filter(
                (product) => product.id !== productWishlistState.object.id
            );
            useAddedToWishlist(updatedArr);
        }
    }, [productWishlistState]);

    const [miniCart, useMiniCart] = useState(false);
    const [wishlist, useWishlist] = useState(false);
    const [miniCartClassName, useMiniCartClassName] = useState(
        "mini-cart_module col-md-4"
    );
    const [wishlistClassName, usewishlistClassName] = useState("wishlist-hide");

    const miniCartClose = () => {
        useMiniCartClassName("mini-cart_module col-md-4");
        useMiniCart(!miniCart);
    };

    const miniCartOpen = () => {
        useMiniCartClassName("mini-cart_module col-md-4 open");
        useMiniCart(!miniCart);
    };

    const wishlistToggle = () => {
        if (!wishlist) {
            usewishlistClassName("wishlist-hide open");
            useWishlist(!wishlist);
            console.log(wishlist);
        } else {
            usewishlistClassName("wishlist-hide");
            useWishlist(!wishlist);
            console.log(wishlist);
        }
    };

    useEffect(() => {
        const header = document.getElementById("header");
        const sticky = header.offsetTop + 20;

        const retina = window.devicePixelRatio > 1 ? true : false;
        const $logo = document.querySelector("#logo img");
        const $logo_retina = $logo.getAttribute("data-retina");
        const logo = document.querySelector(".logo-customize");

        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("header-sticky");
            } else {
                header.classList.remove("header-sticky");
            }

            if (window.innerWidth <= 768) {
                logo.setAttribute("style", "max-width: 230px");
            } else {
                if (window.pageYOffset >= 100) {
                    logo.setAttribute("style", "max-width: 230px");
                } else {
                    logo.setAttribute("style", "max-width: 300px");
                }
            }
        });

        if (retina && $logo_retina) {
            $logo.setAttribute("src", $logo.getAttribute("data-retina"));
            $logo.setAttribute("width", $logo.getAttribute("data-width"));
            $logo.setAttribute("height", $logo.getAttribute("data-height"));
        }

        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    const menuToggle = () => {
        menuOpenProp(true);
    };

    return (
        <div className="bg-bordcuct-2">
            <header
                id="header"
                className="header header-type2 header-style2 cl-bl"
            >
                <div className="nav">
                    <div className="header-wrap d-flex">
                        <div
                            id="logo"
                            className="logo logo-customize d-flex justify-content-end align-items-center"
                        >
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/logo/logo.png"
                                        data-width="85"
                                        data-height="27"
                                        alt="images"
                                        data-retina="/images/logo/logo.png"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="header-content d-flex flex-grow-1 align-items-center flex-row justify-content-lg-start justify-content-end">
                            <div className="nav-wrap d-flex justify-content-center">
                                <nav
                                    id="main-nav"
                                    className="main-nav"
                                    role="navigation"
                                >
                                    <ul
                                        id="menu-main-menu"
                                        className="d-flex menu justify-content-start"
                                    >
                                        <li className="menu-item menu-item-has-children">
                                            <a href="#">about us</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="#">Products</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <Link href="/contact">
                                                <a>contact us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="icon-header-wrap-left d-flex justify-content-center">
                                <form action="#" className="search-header">
                                    <a href="#">
                                        <em className="fas fa-search"></em>
                                    </a>
                                    <input
                                        type="search"
                                        className="search-product"
                                        placeholder="Enter your keyword"
                                    />
                                </form>
                            </div>
                            <div className="icon-header-wrap-right d-flex justify-content-end">
                                <div className="header-item-wrap d-flex justify-content-end align-items-center">
                                    <div className="wrap-language">
                                        <div className="language-name language-current">
                                            ENGLISH
                                        </div>
                                        <div className="list-flat-chooser">
                                            <ul className="select-name">
                                                <li>
                                                    <a href="#">FRANCE</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="wcml-dropdown product wcml-currency-switcher">
                                        <div className="wcml-cs-item-toggle">
                                            USD
                                        </div>
                                        <ul className="wcml-cs-submenu">
                                            <li>
                                                <a href="#">EUR</a>
                                            </li>
                                            <li>
                                                <a href="#">KMF</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        className="icon icon-header-user"
                                        href="login.html"
                                    >
                                        <em className="fas fa-user-alt"></em>
                                    </a>
                                    <div className="indicator indicator-trigger-click">
                                        <a
                                            className="icon icon-header-wishlist indicator_button"
                                            onClick={() => wishlistToggle()}
                                        >
                                            <em className="far fa-heart"></em>
                                            <span className="count-cart red">
                                                {addedToWishlist.length}
                                            </span>
                                        </a>
                                        <div className={wishlistClassName}>
                                            <div className="wishlist-hide-wrap">
                                                {loading && (
                                                    <div className="loading">
                                                        Loading ...
                                                    </div>
                                                )}
                                                {error && (
                                                    <div className="error">
                                                        {error}
                                                    </div>
                                                )}
                                                {addedToWishlist && (
                                                    <ul>
                                                        {addedToWishlist.map(
                                                            (product) => (
                                                                <li
                                                                    className="item d-flex"
                                                                    key={
                                                                        product.id
                                                                    }
                                                                >
                                                                    <div className="thumnail">
                                                                        <img
                                                                            src={
                                                                                product.image
                                                                            }
                                                                            alt={
                                                                                product.name
                                                                            }
                                                                            width="69"
                                                                            height="81"
                                                                        />
                                                                    </div>
                                                                    <div className="summary">
                                                                        <p>
                                                                            {
                                                                                product.category
                                                                            }
                                                                        </p>
                                                                        <a
                                                                            href="#"
                                                                            className="item-name"
                                                                        >
                                                                            {
                                                                                product.name
                                                                            }
                                                                        </a>
                                                                        <div className="item-price">
                                                                            {
                                                                                product.price
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}{" "}
                                                    </ul>
                                                )}

                                                <div className="wishlist-buttons">
                                                    <a
                                                        href="#"
                                                        className="hv-bounce-bl"
                                                    >
                                                        WISHLIST
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="indicator cart-indicator">
                                        <a
                                            className="icon icon-header-bag indicator_button"
                                            onClick={() => miniCartOpen()}
                                        >
                                            <em className="fas fa-shopping-bag"></em>
                                            <span className="count-cart cl-bl">
                                                {addedToCart.length}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            dir="rtl"
                            className="menu-btn d-lg-none d-flex justify-content-lg-end"
                        >
                            <div
                                className="mobile-header__menu-button"
                                onClick={() => menuToggle()}
                            >
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={miniCartClassName}>
                <div className="module-content module-hamburger cart-box">
                    <a
                        className="module-cancel clos-mini-cart"
                        onClick={() => miniCartClose()}
                    >
                        CLOSE
                    </a>
                    <div className="cart-title">
                        <h5>Shopping Cart</h5>
                    </div>
                    <div className="cart-overview">
                        {loading && <div className="loading">Loading ...</div>}
                        {error && <div className="error">{error}</div>}
                        {addedToCart && (
                            <ul className="list-unstyled">
                                {addedToCart.map((product) => (
                                    <li
                                        className="d-flex justify-content-between"
                                        key={product.id}
                                    >
                                        <div>
                                            <a href="#">
                                                <img
                                                    className="img-fluid"
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </a>
                                            <div className="product-meta">
                                                <a href="">
                                                    <h5 className="product-title">
                                                        {product.name}
                                                    </h5>
                                                </a>
                                                <a className="f-right" href="">
                                                    <em className="fa fa-trash-alt"></em>
                                                </a>
                                                <p className="product-qunt">
                                                    Quantity: 01
                                                </p>
                                                <p className="product-price">
                                                    {product.price}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="cart-cancel mx-2"></span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="cart-total">
                        <div className="total-desc">Sub total</div>
                        <div className="total-price">$48.00</div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="cart--control">
                        <a
                            className="btn btn--white btn--bordered btn--rounded hv-bounce-bk "
                            href="#"
                        >
                            view cart
                        </a>
                        <a
                            className="btn btn--primary btn--rounded checkout hv-bounce-bk"
                            href="#"
                        >
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
