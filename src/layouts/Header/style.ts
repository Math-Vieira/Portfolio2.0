import styled from "styled-components";

export const Header = styled.header`
	width: 100vw;
	background-color: ${(props) => props.theme.primaryColor};
	padding: 0.5rem 0;
	box-shadow: ${({ theme }) => theme.headerBoxShadow};
`;

export const HeaderContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`;

export const Logo = styled.div`
	font-size: 2rem;
	cursor: pointer;
	margin-top: 0.2rem;
	font-weight: lighter;
	& a {
		color: ${({ theme }) => theme.textColor};
	}

	& span {
		color: ${({ theme }) => theme.mainColor};
	}
`;

export const HeaderNav = styled.nav`
	& ul {
		display: flex;
		gap: 1rem;
	}

	& a {
		color: ${({ theme }) => theme.textColor};
		font-size: 1rem;
		font-weight: 500;
	}

	& a:hover {
		color: ${({ theme }) => theme.mainColor};
	}
`;
