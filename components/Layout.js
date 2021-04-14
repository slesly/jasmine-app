import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
