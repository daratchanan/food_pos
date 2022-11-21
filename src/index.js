import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<ConfigProvider
		theme={{
			token: {
				colorPrimary: '#F38100',
				headerColor: '#fafafa',
				siderColor: '#fdfdfb', //custome color
				colorBgBase: '#fafafa',
				// borderRadius:0
			},
		}}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ConfigProvider>
);