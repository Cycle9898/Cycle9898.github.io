import { IoIosMail } from "react-icons/io";

function FloatingContactButton() {
    return (
        <div className="medium-device-contact" title="Me contacter">
            <a href="#section-contact">
                <IoIosMail aria-label="Icône contact" />
            </a>
        </div>
    );
}

export default FloatingContactButton;