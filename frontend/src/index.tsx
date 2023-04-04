import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache,  } from '@apollo/client';


// const DjangoGrapheneAPI = "http://localhost:8000/graphql/" 
// const HasuraAPI = "http://localhost:8080/v1/graphql" 


const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.split(
		(operation) => operation.getContext().version === 1,
		new HttpLink({ uri: "http://localhost:8000/graphql/" }),
		new HttpLink({ uri: "http://localhost:8080/v1/graphql" }),
	)

  });

ReactDOM.render(
	<ChakraProvider theme={theme} cssVarsRoot={undefined}>
		<ApolloProvider client={client}>
		<React.StrictMode>
			<HashRouter>
				<Switch>
					<Route path={`/auth`} component={AuthLayout} />
					<Route path={`/admin`} component={AdminLayout} />
					<Redirect from='/' to='/admin' />
				</Switch>
			</HashRouter>
		</React.StrictMode>
		</ApolloProvider>
	</ChakraProvider>,
	document.getElementById('root')
);
