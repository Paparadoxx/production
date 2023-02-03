
import { ThemeProvider } from 'App/providers/ThemeProvider';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';


render (
	<BrowserRouter>
		<ThemeProvider >
			<App/>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
)