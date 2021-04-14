import Head from "next/head";
import ContactUsSection from "../components/ContactUsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Jasmine Home | Contact Us</title>
                <meta name="keywords" content="Contact Us" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <div style={{ padding: "150px 0 44px" }}>
                <ContactUsSection />
            </div>
            <Footer />
        </>
    );
};

export default Contact;
