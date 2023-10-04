import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'

import App from './App'
import global from './styles/global'
import { ContextProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Global styles={global} />
    <ContextProvider>
		  <App />
    </ContextProvider>
	</React.StrictMode>
)
