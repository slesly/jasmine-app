import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const loader = document.querySelector(".loader");
        const loadingOverlay = document.getElementById("loading-overlay");

        if (!loader.style.opacity) {
            loader.style.opacity = 1;
        }
        if (loader.style.opacity > 0) {
            loader.style.opacity -= 0.1;
        }

        const fadeEffect = setInterval(function() {
            if (!loadingOverlay.style.opacity) {
                loadingOverlay.style.opacity = 1;
            }
            if (loadingOverlay.style.opacity > 0) {
                loadingOverlay.style.opacity -= 0.1;
                loadingOverlay.remove();
            } else {
                clearInterval(fadeEffect);
            }
        }, 1000);
    }, []);

    return (
        <>
            <div id="loading-overlay">
                <div className="loader"></div>
            </div>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
