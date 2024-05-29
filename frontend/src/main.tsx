import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const quertClient = new QueryClient({
  defaultOptions: {
    queries:{
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={quertClient} >
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
