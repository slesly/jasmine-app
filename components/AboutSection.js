const AboutSection = () => {
    const aboutData = {
        heading: "WELCOME",
        title: "Our 10 years working experience make a different Towels.",
        content:
            "Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta finibus mauris. Aliquam consectetur, ex in gravida porttitor, Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta finibus mauris.",
    };

    return (
        <section className="about-us about-us-style5 text-center">
            <div className="container">
                <div className="title-section">
                    <p className="sub-heading">{aboutData.heading}</p>
                    <div className="flat-title medium">{aboutData.title}</div>
                </div>
                <div className="content">
                    <div className="text">{aboutData.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
