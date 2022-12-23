import "./global.css";
import RoutesApp from "./routes";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
	return (
		<AppContextProvider>
			<RoutesApp />
		</AppContextProvider>
	);
};

export default App;
