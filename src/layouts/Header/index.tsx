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
							<S.Link href="#start">Início</S.Link>
						</li>
						<li>
							<S.Link href="#aboutMe">Sobre mim</S.Link>
						</li>
						<li>
							<S.Link href="#projects">Projetos</S.Link>
						</li>
						<li>
							<S.Link href="#courses">Cursos</S.Link>
						</li>
						<li>
							<S.Link href="#skills">Habilidades</S.Link>
						</li>
					</ul>
				</S.HeaderNav>
			</S.HeaderContentContainer>
		</S.Header>
	);
};

export default Header;
