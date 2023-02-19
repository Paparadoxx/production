import "./styles/index.scss";
import { classNames } from "shared/lib/classnames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";


const App = () => {
	const { theme } = useTheme();

	return (
		<Suspense fallback=''>
			<div className={classNames("app", {}, [theme])}>
				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</div>
		</Suspense>
	);
};

export default App;
