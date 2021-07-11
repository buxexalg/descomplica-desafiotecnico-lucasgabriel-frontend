import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Homepage from './pages/homepage/Homepage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import dotenv from 'dotenv';

dotenv.config();

const client = new ApolloClient({
	uri: (process.env.REACT_APP_API_URL || 'http://localhost:4000') + '/graphql',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Homepage />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
