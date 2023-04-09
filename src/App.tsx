import "./global.css";
import RoutesApp from "./routes";
import { AppContextProvider } from "./context/AppContext";
import GlobalStyle from "./GlobalStyle";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <AppContextProvider>
			<GlobalStyle />
            <RoutesApp />
        </AppContextProvider>
    );
};

export default App;
