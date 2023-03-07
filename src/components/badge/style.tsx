import styled from "styled-components";
import { Span } from "../typography/typography";

type BadgeContainerProps = {
	isSelected?: boolean;
};

export const BadgeContainer = styled(Span)<BadgeContainerProps>`
	color: ${(props) =>
		props.isSelected
			? `var(--color-white)`
			: props.color
			? `var(--color-type-${props.color}-alt)`
			: "var(--color-black)"};
	border: 0.0625rem solid
		${(props) =>
			props.color ? `var(--color-type-${props.color})` : "var(--color-black)"};
	background-color: ${(props) =>
		props.isSelected ? `var(--color-type-${props.color}-alt)` : props.bgColor};
	text-transform: capitalize;
	border-radius: 1rem;
	transition: all 0.8s ease-out;

	&:hover {
		cursor: pointer;
	}
`;
