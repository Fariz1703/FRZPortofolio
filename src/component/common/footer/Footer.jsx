
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <h2>FRZPortfolio</h2>
                    <p>
                        Building creative and innovative
                        digital experiences.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <a href="#home">Home</a>
                </div>

                <div className="footer-social">
                    <h3>Social Media</h3>
                    <a href="https://github.com/fariz1703"
                       target="_blank"
                       rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/farizajyputra"
                       target="_blank"
                       rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} FRZPortfolio.
                    All Rights Reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;
