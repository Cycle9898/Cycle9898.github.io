import type { IconType } from "react-icons";

type FloatingButtonProps = {
	Icon: IconType;
	link: string;
	ariaLabel: string;
};

function FloatingButton({ Icon, link, ariaLabel }: FloatingButtonProps) {
	return (
		<div className="floating-button">
			<a href={link}>
				<Icon aria-label={ariaLabel} />
			</a>
		</div>
	);
}

export default FloatingButton;
