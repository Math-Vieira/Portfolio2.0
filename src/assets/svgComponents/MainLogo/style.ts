import styled, { keyframes } from "styled-components";

const Floating = keyframes`
    from {
        top:15px;
    }
    to {
        top: -15px;
    }
`;

export const Svg = styled.svg`
	position: relative;
	animation: ${Floating} 2.1s infinite alternate-reverse linear;
`;
