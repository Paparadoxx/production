import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'App/providers/ThemeProvider';
import App from './App/App';

import i18n from './features/config/i18n/i18n';

render (
	<BrowserRouter>
		<ThemeProvider >
			<App/>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)