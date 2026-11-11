
import "./AppButton.css";

function AppButton({ Massage, Green, Link}) {

    if (Link === null){
        console.log("Link Kosong")
        return null;
    }

    if (Green === false) {
        return (
            <div>
                <a href={Link} target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary">
                        {Massage}
                    </button>
                </a>
            </div>
        );
    }

    if (Green === true) {
        return (
            <div>
                <a href={Link} target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary-green">
                        {Massage}
                    </button>
                </a>
            </div>
        );
    }

}

export default AppButton;
