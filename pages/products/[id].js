import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Styles from "../../styles/Product.module.css";

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/products");
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map((product) => {
        return {
            params: { id: product.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("http://localhost:8000/products/" + id);
    const data = await res.json();

    return {
        props: { product: data },
    };
};

const Details = ({ product }) => {
    return (
        <>
            <Head>
                <title>Jasmine Home | {product.name}</title>
                <meta name="keywords" content={product.name} />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <div className="container" style={{ padding: "200px 0 44px" }}>
                <div className="row">
                    <div className="col-xl-5">
                        <img
                            className="w-100 fit-cover"
                            height="350"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className="col-xl-7">
                        <h1>{product.name}</h1>
                        <p>{product.shortDescription}</p>
                        <div className="content-product">
                            <div className="info-product d-flex justify-content-between align-items-center my-3">
                                <span className="price">{product.price}</span>
                            </div>
                            <div className="colors">
                                {product.colors.map((color) => (
                                    <div key={color} className={color}></div>
                                ))}
                            </div>
                            <div className="text ">
                                <p className="gen-fasion">
                                    {product.shortDescription}
                                </p>
                            </div>
                            <div className="add-to-cart">
                                <a
                                    href="#"
                                    className={
                                        "hv-bounce-bk mr-2 " + Styles.btnAdd
                                    }
                                >
                                    {product.addedToCart
                                        ? "CONINUE TO CHECKOUT"
                                        : "+ ADD TO CART"}
                                </a>
                                <span className="favorite">
                                    <em
                                        className={
                                            product.addedToWishlist
                                                ? "far fa-heart active"
                                                : "far fa-heart"
                                        }
                                    ></em>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
