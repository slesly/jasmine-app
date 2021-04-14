const ProductsSection = () => {
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
            <div className="products-wrapper  d-flex justify-content-between flex-wrap">
                <div
                    className="products-wrapper_item col-md-6 px-0 d-flex flex-wrap"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="10"
                >
                    <div className="products-wrapper_item-text d-flex flex-column justify-content-around col-md-6">
                        <div>
                            <a href="#">
                                <h3>Ultra-Soft Bath Towel</h3>
                            </a>
                            <p>
                                Our panel loved the feel and gave these towels.
                            </p>

                            <a href="#" className=" btn btn--underlined">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="products-wrapper_item-img  col-md-6  parallax_scroll"
                    >
                        <img src="./images/towels/product-img/p1.jpg" alt="" />
                    </a>
                </div>

                <div
                    className="products-wrapper_item col-md-6 px-0 d-flex flex-wrap"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                >
                    <div className="products-wrapper_item-text d-flex flex-column justify-content-around col-md-6">
                        <div>
                            <a href="#">
                                <h3>Textile Experts</h3>
                            </a>
                            <p>Lorem ipsum dolor sit amet ipsum</p>

                            <a href="#" className=" btn btn--underlined">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="products-wrapper_item-img  col-md-6 parallax_scroll"
                    >
                        <img src="./images/towels/product-img/p4.jpg" alt="" />
                    </a>
                </div>

                <div
                    className="products-wrapper_item col-md-6 px-0 d-flex flex-wrap"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                >
                    <div className="products-wrapper_item-text d-flex flex-column justify-content-around col-md-6">
                        <div>
                            <a href="#">
                                <h3>Face cloths</h3>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet ipsum Lorem ipsum
                                dolor sit amet ipsum
                            </p>

                            <a href="#" className=" btn btn--underlined">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="products-wrapper_item-img  col-md-6 parallax_scroll"
                    >
                        <img src="./images/towels/product-img/p2.jpg" alt="" />
                    </a>
                </div>

                <div
                    className="products-wrapper_item col-md-6 px-0 d-flex flex-wrap"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                >
                    <div className="products-wrapper_item-text d-flex flex-column justify-content-around col-md-6">
                        <div>
                            <a href="#">
                                <h3>Soft Colors</h3>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet ipsum Lorem ipsum
                                dolor sit amet ipsum Lorem ipsum dolor sit amet
                                ipsum
                            </p>

                            <a href="#" className=" btn btn--underlined">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="products-wrapper_item-img  col-md-6 parallax_scroll"
                    >
                        <img src="./images/towels/product-img/p3.jpg" alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
