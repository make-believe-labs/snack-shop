import React, { useEffect, useState } from 'react';
import { Wrapper } from './Wrapper';
// eslint-disable-next-line no-redeclare
import { Box, Card, CardBody, CardFooter, CardHeader, Text, Heading, Button } from '@chakra-ui/react';

interface snackItems {
    _id: string,
    snackName: string,
    details: snackDetails,
    unitPrice: number,
    stock: number,
    categories: string[],
}

interface snackDetails {
    flavour: string,
    weight: string
}

export const Products: React.FC = () => {
    const [data, setData] = useState<snackItems[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataForSnacks = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/snacks`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const snackData = await response.json();
                setData(snackData);
                setError(null);
            } catch (err) {
                if (err instanceof Error) {
                    let message = err.message;
                    setError(message);
                }
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDataForSnacks();
    }, []);

    return (
        <>
            <Box>
                {loading && (
                    <Text>Loading snacks...</Text>
                )}
                {error && <Text>{error}</Text>}
            </Box>
            <Box as='section' id='snacks'>
                <Heading as='h2'>Snacks</Heading>
                <Wrapper>
                    {data &&
                        data.map(({ _id, snackName, details, unitPrice, stock, categories }: snackItems, index: number) => (
                            <Card as='article' minW='250px' id={_id} bg='green.100' p={4} key={_id} data-testid={'snack_' + index}>
                                <CardHeader bgGradient='linear(to-t, pink.400, purple.400)'>
                                    <Heading as="h3">{snackName}</Heading>
                                </CardHeader>
                                <CardBody bgColor='green.300'>
                                    <Text>Flavour: {details.flavour}</Text>
                                    <Text>Weight: {details.weight}</Text>
                                    {categories && categories.map((category, index) => (
                                        <Text as="i" key={index}>{category}</Text>
                                    ))}
                                    <Text>£{unitPrice / 100}</Text>
                                </CardBody>
                                <CardFooter>
                                    {stock > 0 ? <><Button>Add</Button></> : <><Button disabled>Out of stock</Button></>}
                                </CardFooter>
                            </Card>
                        ))}

                </Wrapper>
            </Box>
        </>
    )
};