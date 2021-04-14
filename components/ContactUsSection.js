const ContactUsSection = () => {
    const contactInfo = {
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        image: "/images/towels/product-img/s2.jpg",
        address: "Dambo dika,USA,road123",
        email: "dotsee@one.com",
        phone: "(+11) 987654321",
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
    };

    return (
        <div className="flat-row flat-contact-us ">
            <div className="container">
                <div className="content-contact-us py-0">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                            <div className="contact-info">
                                <div className="title-section ">
                                    <div className="title-section">
                                        <div className="flat-title medium">
                                            contact info
                                        </div>
                                    </div>
                                </div>
                                <p>{contactInfo.description}</p>
                                <ul>
                                    <li>
                                        <em className="fas fa-map-marker-alt"></em>
                                        <span>{contactInfo.address}</span>
                                    </li>
                                    <li>
                                        <em className="fas fa-envelope"></em>
                                        <span>{contactInfo.email}</span>
                                    </li>
                                    <li>
                                        <em className="fas fa-phone-alt"></em>
                                        <span>{contactInfo.phone}</span>
                                    </li>
                                </ul>
                                <h4>follow us</h4>

                                <ul className="social-icon d-flex justify-content-between col-5 pl-0 pt-3">
                                    {contactInfo.social.map((social) => (
                                        <li key={social.id}>
                                            <a href={social.link}>
                                                <em
                                                    className={
                                                        "fab fa-" +
                                                        social.className
                                                    }
                                                ></em>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className=" col-md-6 col-sm-12">
                            <div className="contact-us mt-4">
                                <img src={contactInfo.image} alt="images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;
