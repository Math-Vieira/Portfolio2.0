import React from "react";
import MainLogo from "../../assets/svgComponents/MainLogo";
import * as S from "./style";

const Home = () => {
	return (
		<S.Main>
			<div className="centralizer">
				<S.MainContentContainer>
					<div>
						<S.Name>Matheus Vieira</S.Name>
						<S.Occupation>Desenvolvedor Web</S.Occupation>
					</div>
					<MainLogo />
				</S.MainContentContainer>
			</div>
		</S.Main>
	);
};

export default Home;
