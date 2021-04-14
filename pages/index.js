import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlatSlider from "../components/FlatSlider";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import FeatureProductsSection from "../components/FeatureProductsSection";
import ContactUsSection from "../components/ContactUsSection";
import NewsletterSection from "../components/NewsletterSection";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileMenu from "../components/MobileMenu";

export default function Home() {
    const [productCartState, useProductCartState] = useState();
    const [productWishlistState, useProductWishlistState] = useState();
    const [menuOpenProp, useMenuOpenProp] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Head>
                <title>Jasmine Home</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header
                productCartState={productCartState}
                productWishlistState={productWishlistState}
                menuOpenProp={(state) => useMenuOpenProp(state)}
            />
            <FlatSlider />
            <AboutSection />
            <ProductsSection />
            <FeatureProductsSection
                productCartState={(product) => useProductCartState(product)}
                productWishlistState={(product) =>
                    useProductWishlistState(product)
                }
            />
            <ContactUsSection />
            <NewsletterSection />
            <Footer />
            <MobileMenu
                menuOpenProp={menuOpenProp}
                menuCloseProp={(state) => useMenuOpenProp(state)}
            />
        </>
    );
}
