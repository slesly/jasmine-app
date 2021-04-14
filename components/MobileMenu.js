import { useEffect } from "react";

const MobileMenu = ({ menuOpenProp, menuCloseProp }) => {
    useEffect(() => {
        const body = document.querySelector("body");
        const mobileMenu = document.querySelector(".mobile-menu");
        // const mobileMenuBody = mobileMenu.querySelector(".mobile-menu__body");

        if (menuOpenProp === true) {
            const bodyWidth = body.offsetWidth;
            body.style.overflow = "hidden";
            body.style.paddingRight = body.offsetWidth - bodyWidth + "px";

            mobileMenu.classList.add("mobile-menu--open");
        } else {
            body.style.overflow = "auto";
            body.style.paddingRight = "";

            mobileMenu.classList.remove("mobile-menu--open");
        }
    }, [menuOpenProp]);

    const closeMenu = () => {
        menuCloseProp(false);
    };
    return (
        <div className="mobile-menu">
            <div className="mobile-menu__backdrop"></div>
            <div className="mobile-menu__body">
                <button
                    className="mobile-menu__close"
                    type="button"
                    onClick={() => closeMenu()}
                >
                    <em className="fas fa-times"></em>
                </button>
                <div className="mobile-menu__panel">
                    <div className="mobile-menu__panel-header">
                        <div className="mobile-menu__panel-title">MENU</div>
                    </div>
                    <div className="mobile-menu__panel-body">
                        <div className="mobile-menu__divider"></div>
                        <div className="mobile-menu__indicators">
                            <a
                                className="mobile-menu__indicator"
                                href="login.html"
                            >
                                <span className="mobile-menu__indicator-icon">
                                    <em className="fas fa-user-alt"></em>{" "}
                                </span>
                                <span className="mobile-menu__indicator-title">
                                    Account
                                </span>
                            </a>
                            <a className="mobile-menu__indicator" href="#">
                                <span className="mobile-menu__indicator-icon">
                                    <em className="fas fa-heart"></em>
                                </span>
                                <span className="mobile-menu__indicator-title">
                                    Wishlist
                                </span>
                            </a>
                            <a
                                className="mobile-menu__indicator"
                                href="cart.html"
                            >
                                <span className="mobile-menu__indicator-icon">
                                    <em className="fas fa-shopping-bag"></em>
                                    <span className="mobile-menu__indicator-counter">
                                        2
                                    </span>
                                </span>
                                <span className="mobile-menu__indicator-title">
                                    Cart
                                </span>
                            </a>
                        </div>
                        <div className="mobile-menu__divider"></div>
                        <ul className="mobile-menu__links">
                            <li data-mobile-menu-item>
                                <a
                                    href="#"
                                    className="active"
                                    data-mobile-menu-trigger
                                >
                                    Home
                                </a>
                            </li>
                            <li data-mobile-menu-item>
                                <a
                                    href="#"
                                    className=""
                                    data-mobile-menu-trigger
                                >
                                    About Us
                                </a>
                            </li>
                            <li data-mobile-menu-item>
                                <a
                                    href="#"
                                    className=""
                                    data-mobile-menu-trigger
                                >
                                    Products
                                </a>
                            </li>
                            <li data-mobile-menu-item>
                                <a
                                    href="#"
                                    className=""
                                    data-mobile-menu-trigger
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
