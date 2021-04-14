const NewsletterSection = () => {
    return (
        <section className="newsletter newsletter-type2 newsletter-style5">
            <div>
                <div className="bg-newsletter">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="subscribe">
                                <div className="title-section ">
                                    <div className="title-section">
                                        <div className="flat-title medium  ">
                                            Subscribe newsletter.
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Hi ! Use the link below to verify your email
                                    and start enjoying cleanmock.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="#" className="sub-form">
                                <input
                                    type="search"
                                    placeholder="Enter your keywords....."
                                />
                                <button className="search-btn">
                                    <em className="fas fa-envelope-open-text"></em>
                                </button>
                            </form>
                            <div className="questions">
                                Questions? Email us at{" "}
                                <a href="mailto:feedback@jasmine.com">
                                    feedback@jasmine.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
