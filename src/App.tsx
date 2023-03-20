import "./global.css";
import RoutesApp from "./routes";
import { AppContextProvider } from "./context/AppContext";
import GlobalStyle from "./GlobalStyle";

const App = () => {
    return (
        <AppContextProvider>
			<GlobalStyle />
            <RoutesApp />
        </AppContextProvider>
    );
};

export default App;
