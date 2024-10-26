import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <ChakraProvider>
            <Login />
        </ChakraProvider>
    </React.StrictMode>
);
