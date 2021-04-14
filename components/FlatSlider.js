import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const FlatSlider = () => {
    const slides = [
        {
            title: "100% Egyptian Cotton Towels",
            description: "",
            button: "Shop Now",
            image: "/images/towels/product-img/s4.jpg",
        },
        {
            title: "A Treat of Luxury",
            description: "",
            button: "Shop Now",
            image: "/images/towels/product-img/s1.jpg",
        },
        {
            title: "The Best Bath Towels",
            description: "According to Textile Experts",
            button: "Feedback",
            image: "/images/towels/product-img/s2.jpg",
        },
        {
            title: "Elegant European Design",
            description: "",
            button: "Shop Now",
            image: "/images/towels/product-img/s3.jpg",
        },
    ];

    return (
        <section className="flat-slider clearfix">
            <div className="rev_slider_wrapper fullwidthbanner-container">
                <div id="rev-slider1" className="rev_slider fullwidthabanner">
                    <Slider autoplay={2000}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{
                                    background: `url('${slide.image}') no-repeat center center`,
                                }}
                            >
                                <div className="inner">
                                    <div className="tp-caption tp-resizeme winter-tx title">
                                        {slide.title}
                                    </div>
                                    <p className="description">
                                        {slide.description}
                                    </p>
                                    <div className="tp-caption btn-shop-now">
                                        <a
                                            className="link hv-bounce-bk"
                                            href="#"
                                        >
                                            {slide.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default FlatSlider;
