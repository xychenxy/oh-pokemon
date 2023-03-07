import styled from "styled-components";

export const BadgeFilterContainer = styled.div`
	width: 85%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;
export const BadgeFilterWrap = styled.span``;

export const BadgesContainer = styled.div`
	width: calc(100% - 4rem);
`;

export const FilterContainer = styled.div`
	width: 4rem;
	height: 2rem;
	border-left: 1px solid var(--color-gray-dark);

	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 0.5rem;

	p {
		color: var(--color-gray-dark);
		border-bottom: 0.0625rem solid var(--color-gray-dark);
	}

	&:hover {
		cursor: pointer;
	}
`;
