import { useEffect } from "react";

const Footer = () => {
    const goTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const scrollTopEl = document.getElementById("scroll-top");
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 800) {
                scrollTopEl.classList.add("show");
            } else {
                scrollTopEl.classList.remove("show");
            }
        });

        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    const footerData = {
        logoImage: "/images/logo/logo-white.png",
        logoAlt: "Jasmine Home",
        topLinks: [
            {
                id: 1,
                name: "About Us",
                link: "#",
            },
            {
                id: 2,
                name: "Bath Towels",
                link: "#",
            },
            {
                id: 3,
                name: "Face Towels",
                link: "#",
            },
            {
                id: 4,
                name: "Contact us",
                link: "#",
            },
        ],
        accountLinks: [
            {
                id: 1,
                name: "My Profile",
                link: "#",
            },
            {
                id: 2,
                name: "Shopping Cart",
                link: "#",
            },
            {
                id: 3,
                name: "Wishlist",
                link: "#",
            },
            {
                id: 4,
                name: "Logout",
                link: "#",
            },
        ],
        termsLinks: [
            {
                id: 1,
                name: "Privacy Policy",
                link: "#",
            },
            {
                id: 2,
                name: "Terms & Conditions",
                link: "#",
            },
            {
                id: 3,
                name: "FAQ",
                link: "#",
            },
        ],
        social: [
            {
                id: 1,
                name: "facebook",
                className: "facebook-f",
                link: "#",
            },
            {
                id: 2,
                name: "pinterest",
                className: "pinterest",
                link: "#",
            },
            {
                id: 3,
                name: "twitter",
                className: "twitter",
                link: "#",
            },
            {
                id: 4,
                name: "instagram",
                className: "instagram",
                link: "#",
            },
        ],
        copyright: {
            copyName: "PSdigital",
            copyLink: "http://www.paradigmegypt.com/",
        },
    };

    return (
        <footer id="footer" className="footer footer-type3">
            <div className="footer-wrap clearfix">
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-lg-3 col-md-12">
                            <div className="logo-footer">
                                <div className="img-footer">
                                    <img
                                        src={footerData.logoImage}
                                        alt={footerData.logoAlt}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <div className="custom-serive widget">
                                <div className="widget-title">Top Links</div>
                                <ul className="widget-nav-menu">
                                    {footerData.topLinks.map((link) => (
                                        <li key={link.id}>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <div className="information widget">
                                <div className="widget-title">My Account</div>
                                <ul className="widget-nav-menu">
                                    {footerData.accountLinks.map((link) => (
                                        <li key={link.id}>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <div className="our-terms widget">
                                <div className="widget-title">Our Terms</div>
                                <ul className="widget-nav-menu">
                                    {footerData.termsLinks.map((link) => (
                                        <li key={link.id}>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right row justify-content-between align-items-center  ">
                        <ul className="social-icon d-flex col-md-2 justify-content-between col-6 pt-2">
                            {footerData.social.map((social) => (
                                <li key={social.id}>
                                    <a href={social.link}>
                                        <em
                                            className={
                                                "fab fa-" + social.className
                                            }
                                        ></em>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="copyright py-4 px-3">
                            © 2021{" "}
                            <a
                                href={footerData.copyright.copyLink}
                                target="_blank"
                                className="paradigm"
                            >
                                {footerData.copyright.copyName}
                            </a>
                            .All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>

            <a id="scroll-top" onClick={goTop}></a>
        </footer>
    );
};

export default Footer;
