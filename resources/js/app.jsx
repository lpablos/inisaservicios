import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <div>
                <h1>Bienvenido a Chakra UI en Laravel</h1>
                {/* Agrega aquí los componentes de Chakra UI que necesites */}
            </div>
        </ChakraProvider>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


