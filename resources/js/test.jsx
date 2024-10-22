import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Box, Heading, Button } from '@chakra-ui/react';

function TestPage() {
    return (
        <ChakraProvider>
            <Box p={4} textAlign="center">
                <Heading mb={6}>Página de Prueba con Chakra UI</Heading>
                <Button colorScheme="teal" size="lg">
                    ¡Funciona!
                </Button>
            </Box>
        </ChakraProvider>
    );
}

ReactDOM.createRoot(document.getElementById('app_test')).render(
    <React.StrictMode>
        <TestPage />
    </React.StrictMode>
);
