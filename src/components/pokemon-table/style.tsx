import styled from "styled-components";

export const PokemonTableContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 2rem;
`;

export const TableComponentContainer = styled.div`
	overflow-x: auto;
`;

export const Table = styled.table`
	margin: 1rem 0.5rem;
	min-width: 55.7rem;
`;

export const Thead = styled.thead`
	tr {
		text-align: left;
	}
`;

export const Tbody = styled.tbody`
	/* copy from .list-container */
	border-radius: 8px;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
		0px 3px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14);

	tr {
		border-bottom: 1px solid var(--color-gray);
	}
`;

export const Tr = styled.tr``;

export const Th = styled.th`
	padding: 1.0625rem 0;
	font-size: 0.75rem;
	font-weight: 700;

	&:first-child {
		min-width: 12.5rem;
	}

	&:first-child {
		min-width: 13rem;
	}

	&:nth-child(2) {
		min-width: 11rem;
	}

	&:not(:nth-child(-n + 2)) {
		text-align: center;
		min-width: 5rem;
	}
`;

type TdProps = { isHighLight?: boolean };
export const Td = styled.td<TdProps>`
	font-size: 1.5rem;
	font-weight: 700;
	text-align: center;

	color: ${(props) =>
		props.isHighLight ? "var(--color-red)" : "var(--color-black)"};

	&:nth-child(-n + 2) {
		text-align: left;
	}
	&:first-child {
		font-size: 1.3125rem;
	}
`;

export const AvatarContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 1rem;
`;

export const ImageContainer = styled.div`
	margin: 0.9375rem;
`;

export const Image = styled.img`
	height: 3rem;
	width: 3rem;
	vertical-align: middle;
	border-radius: 50%;
	border: 0.0625rem solid var(--color-blue);
`;
