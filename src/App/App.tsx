import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";


function App() {
	const { theme } = useTheme();
	const dispatch = useDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div 
			id="App"
			className={classNames("app", {}, [theme])}
		>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{inited && <AppRouter />}
				</div>
			</Suspense>
		</div>
	);
}

export default App;
