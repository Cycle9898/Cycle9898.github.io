import { IoIosMail } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import FloatingButton from "./FloatingButton";

function FloatingShortcuts() {
	return (
		<div className="floating-shortcuts">
			<FloatingButton Icon={FaArrowUp} link="#" ariaLabel="Retour en début de page" />

			<FloatingButton Icon={IoIosMail} link="#section-contact" ariaLabel="Formulaire de contact" />
		</div>
	);
}

export default FloatingShortcuts;
