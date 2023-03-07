import styled from "styled-components";

type H3Props = {
	fWeight?: number;
	fSize?: number;
	mrLeft?: number;
	mrRight?: number;
	mrTop?: number;
	mrBottom?: number;
	pdLeft?: number;
	pdRight?: number;
	pdTop?: number;
	pdBottom?: number;
	width?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	textAlign?: string;
};
export const H3 = styled.h3<H3Props>`
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 0.02px;

	font-size: ${(props) => (props.fSize ? `${props.fSize}rem` : "1.5rem")};
	font-weight: ${(props) => (props.fWeight ? props.fWeight : "700")};

	color: ${(props) => (props.color ? props.color : "var(--color-black)")};

	margin-left: ${(props) => (props.mrLeft ? `${props.mrLeft}rem` : 0)};
	margin-right: ${(props) => (props.mrRight ? `${props.mrRight}rem` : 0)};
	margin-top: ${(props) => (props.mrTop ? `${props.mrTop}rem` : 0)};
	margin-bottom: ${(props) => (props.mrBottom ? `${props.mrBottom}rem` : 0)};

	padding-left: ${(props) => (props.pdLeft ? `${props.pdLeft}rem` : 0)};
	padding-right: ${(props) => (props.pdRight ? `${props.pdRight}rem` : 0)};
	padding-top: ${(props) => (props.pdTop ? `${props.pdTop}rem` : 0)};
	padding-bottom: ${(props) => (props.pdBottom ? `${props.pdBottom}rem` : 0)};

	width: ${(props) => props.width};
	display: ${(props) => (props.display ? props.display : "flex")};
	justify-content: ${(props) =>
		props.justifyContent ? `${props.justifyContent}` : "unset"};
	align-items: ${(props) =>
		props.alignItems ? `${props.alignItems}` : "center"};

	text-align: ${(props) => (props.textAlign ? props.textAlign : "unset")};
`;

type P1Props = {
	fWeight?: number;
	fSize?: number;
	mrLeft?: number;
	mrRight?: number;
	mrTop?: number;
	mrBottom?: number;
	pdLeft?: number;
	pdRight?: number;
	pdTop?: number;
	pdBottom?: number;
	width?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
};
export const P1 = styled.p<P1Props>`
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 0.02px;

	font-size: ${(props) => (props.fSize ? `${props.fSize}rem` : "1rem")};
	font-weight: ${(props) => (props.fWeight ? props.fWeight : "400")};

	color: ${(props) => (props.color ? props.color : "var(--color-black)")};

	margin-left: ${(props) => (props.mrLeft ? `${props.mrLeft}rem` : 0)};
	margin-right: ${(props) => (props.mrRight ? `${props.mrRight}rem` : 0)};
	margin-top: ${(props) => (props.mrTop ? `${props.mrTop}rem` : 0)};
	margin-bottom: ${(props) => (props.mrBottom ? `${props.mrBottom}rem` : 0)};

	padding-left: ${(props) => (props.pdLeft ? `${props.pdLeft}rem` : 0)};
	padding-right: ${(props) => (props.pdRight ? `${props.pdRight}rem` : 0)};
	padding-top: ${(props) => (props.pdTop ? `${props.pdTop}rem` : 0)};
	padding-bottom: ${(props) => (props.pdBottom ? `${props.pdBottom}rem` : 0)};

	width: ${(props) => props.width};
	display: ${(props) => (props.display ? props.display : "flex")};
	justify-content: ${(props) =>
		props.justifyContent ? `${props.justifyContent}` : "unset"};
	align-items: ${(props) =>
		props.alignItems ? `${props.alignItems}` : "center"};
`;

type SpanProps = {
	fWeight?: number;
	fSize?: number;
	mrLeft?: number;
	mrRight?: number;
	mrTop?: number;
	mrBottom?: number;
	pdLeft?: number;
	pdRight?: number;
	pdTop?: number;
	pdBottom?: number;
	width?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	bgColor?: string;
};
export const Span = styled.span<SpanProps>`
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 0.02px;

	font-size: ${(props) => (props.fSize ? `${props.fSize}rem` : "0.875rem")};
	font-weight: ${(props) => (props.fWeight ? props.fWeight : "400")};

	color: ${(props) => (props.color ? props.color : "var(--color-black)")};

	margin-left: ${(props) => (props.mrLeft ? `${props.mrLeft}rem` : 0)};
	margin-right: ${(props) => (props.mrRight ? `${props.mrRight}rem` : 0)};
	margin-top: ${(props) => (props.mrTop ? `${props.mrTop}rem` : 0)};
	margin-bottom: ${(props) => (props.mrBottom ? `${props.mrBottom}rem` : 0)};

	padding-left: ${(props) => (props.pdLeft ? `${props.pdLeft}rem` : 0)};
	padding-right: ${(props) => (props.pdRight ? `${props.pdRight}rem` : 0)};
	padding-top: ${(props) => (props.pdTop ? `${props.pdTop}rem` : 0)};
	padding-bottom: ${(props) => (props.pdBottom ? `${props.pdBottom}rem` : 0)};

	width: ${(props) => props.width};
	display: ${(props) => (props.display ? props.display : "flex")};
	justify-content: ${(props) =>
		props.justifyContent ? `${props.justifyContent}` : "unset"};
	align-items: ${(props) =>
		props.alignItems ? `${props.alignItems}` : "center"};

	background-color: ${(props) =>
		props.bgColor ? props.bgColor : "var(--color-white)"};
`;
