import styled from "styled-components";

export const Header = styled.header`
	background-color: ${(props) => props.theme.primaryColor};
	box-shadow: ${({ theme }) => theme.headerBoxShadow};
	position: fixed;
	width: 100%;
	padding: 0.5rem;
	top: 0;
	z-index: 1;
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
		gap: 1.5rem;
	}

	& a {
		color: ${({ theme }) => theme.textColor};
		font-size: 1rem;
		font-weight: 500;
	}
`;

export const Link = styled.a`
	position: relative;
	display: block;
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		background-color: red;
		transform: scaleX(0);
		height: 1px;
		bottom: -7px;
		left: 0;
		background: linear-gradient(270deg, ${({theme}) => theme.mainColor} 0%, #17161d 100%);
		transform-origin: bottom right;
		transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
	}
	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;
