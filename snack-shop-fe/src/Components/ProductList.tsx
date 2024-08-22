import React, { useEffect, useState } from 'react';
import { Wrapper } from './Wrapper';
// eslint-disable-next-line no-redeclare
import { Box, Card, CardBody, CardFooter, CardHeader, Text, Heading, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addSnack } from '../features/basketSlice';

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
    const dispatch = useDispatch();

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
                <Wrapper>
                    {data &&
                        data.map(({ _id, snackName, details, unitPrice, stock, categories }: snackItems, index: number) => (
                            <Card as='article' minW='250px' id={_id} bg='green.100' p={4} key={_id} data-testid={'storeSnack_' + index}>
                                <CardHeader bgColor={'green.300'}>
                                    <Heading as="h3" fontSize={'2em'}>{snackName}</Heading>
                                </CardHeader>
                                <CardBody bgColor='green.300'>
                                    <Text>Flavour: {details.flavour}</Text>
                                    <Text>Weight: {details.weight}</Text>
                                    {categories && categories.map((category, index) => (
                                        <Text as="i" key={index}>Category: {category}</Text>
                                    ))}
                                    <Text>Price: £{unitPrice / 100}</Text>
                                </CardBody>
                                <CardFooter>
                                    {stock > 0 ? <><Button area-label='Add to basket' onClick={() => dispatch(addSnack({ _id, snackName, details, unitPrice, stock, categories }))}>Add</Button></> : <><Button isDisabled>Out of stock</Button></>}
                                </CardFooter>
                            </Card>
                        ))}

                </Wrapper>
            </Box>
        </>
    )
};