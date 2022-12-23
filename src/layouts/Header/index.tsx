import React from "react";
import * as S from "./style";

const Header: React.FC = () => {
	return (
		<S.Header>
			<S.HeaderContentContainer className="centralizer">
				<S.Logo>
					<a href="/">
						<span>/*</span>M.V DEV<span>*/</span>
					</a>
				</S.Logo>
				<S.HeaderNav>
					<ul>
						<li>
							<a href="#start">Início</a>
						</li>
						<li>
							<a href="#aboutMe">Sobre mim</a>
						</li>
						<li>
							<a href="#projects">Projetos</a>
						</li>
						<li>
							<a href="#courses">Cursos</a>
							
						</li>
						<li><a href="#skills">Habilidades</a></li>
					</ul>
				</S.HeaderNav>
			</S.HeaderContentContainer>
		</S.Header>
	);
};

export default Header;
