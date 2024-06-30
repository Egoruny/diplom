import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes-app/routes-app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
		<BrowserRouter>
			<RoutesApp />
		</BrowserRouter>
);
