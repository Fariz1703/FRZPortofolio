import "../Home"
import DeveloperSetup from "../../../assets/images/developer-setup.svg";
import AppButton from "../../../component/common/button/AppButton.jsx";

function Hero() {
    return <div className="invisible-container">
        <div className="row">
            <div className="column">
                <p>Hi, My Name</p>
                <h1>Fariz Ajy Putra</h1>
                <h2>Software Developer</h2>
                <p>
                    I enjoy turning ideas into reality through code,<br />building meaningful applications, and exploring technologies to solve real-world problems.
                </p>
                <div className="row">
                    <img
                        src="https://skillicons.dev/icons?i=python"
                        alt="Python"
                    />
                    <img
                        src="https://skillicons.dev/icons?i=fastapi"
                        alt="FastApi"
                    />
                    <img
                        className="tech-icon"
                        src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/odoo.svg"
                        alt="Odoo"
                    />
                    <img
                        src="https://skillicons.dev/icons?i=dart"
                        alt="Dart"
                    />
                    <img
                        src="https://skillicons.dev/icons?i=flutter"
                        alt="Flutter"
                    />
                    <img
                        src="https://skillicons.dev/icons?i=swift"
                        alt="Swift"
                    />
                    <img
                        src="https://skillicons.dev/icons?i=postgres"
                        alt="PostgreSQL"
                    />
                    <img
                        src="https://skillicons.dev/icons?i=react"
                        alt="React"
                    />
                </div>
                <AppButton Massage="See My Linkedin" Link="https://www.linkedin.com/in/farizajyputra" Green={false}></AppButton>
            </div>
            <img className="hero-img" src={DeveloperSetup} alt="Profile" />
            <div className="spacerrow"></div>
        </div>
    </div>
}

export default Hero;