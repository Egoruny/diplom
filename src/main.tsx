import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes-app/routes-app";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<BrowserRouter>
			<RoutesApp />
		</BrowserRouter>
	</Provider>
);
