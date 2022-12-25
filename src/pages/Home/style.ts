import styled from "styled-components";

export const Main = styled.main`
	min-height: 100vh;
	background-color: ${({ theme }) => theme.secondaryColor};
`;

export const MainContentContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
`;

export const Name = styled.h1`
	font-size: 3.7rem;
	color: ${({ theme }) => theme.textColor};
`;

export const Occupation = styled.p`
	color: ${({ theme }) => theme.mainColor};
	font-size: 2rem;
	margin-top: -1.5rem;
`;
