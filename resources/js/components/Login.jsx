import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, VStack, Text } from '@chakra-ui/react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {
                email,
                password
            });
            console.log(response.data);
        } catch (err) {
            setError('Credenciales inválidas');
        }
    };

    return (
        <Box w="100%" maxW="sm" mx="auto" mt="100px" p="8" boxShadow="lg" borderRadius="md">
            <Heading textAlign="center" mb="6">Iniciar Sesión</Heading>
            <VStack as="form" spacing={4} onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <Input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>

                <Button type="submit" colorScheme="teal" size="lg" width="full">
                    Iniciar Sesión
                </Button>

                {error && <Text color="red.500">{error}</Text>}
            </VStack>
        </Box>
    );
}

export default Login;
