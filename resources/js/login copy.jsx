import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Box, Button, Input, FormControl, FormLabel, Heading, VStack, Text, Link  } from '@chakra-ui/react';

function TestPage() {
    return (
        <ChakraProvider>
           <Box w="100%" maxW="sm" mx="auto" mt="100px" p="8" boxShadow="lg" borderRadius="md">
            <Heading textAlign="center" mb="6">Iniciar Sesión</Heading>
            <VStack spacing={4}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Ingresa tu email" />
                </FormControl>

                <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <Input type="password" placeholder="Ingresa tu contraseña" />
                </FormControl>

                <Button colorScheme="teal" size="lg" width="full" mt="4">
                    Iniciar Sesión
                </Button>

                <Text fontSize="sm" color="gray.600" mt="4">
                    ¿No tienes cuenta?{' '}
                    <Link color="teal.500" href="#">
                        Regístrate
                    </Link>
                </Text>
            </VStack>
        </Box>
        </ChakraProvider>
    );
}

ReactDOM.createRoot(document.getElementById('app_test')).render(
    <React.StrictMode>
        <TestPage />
    </React.StrictMode>
);
