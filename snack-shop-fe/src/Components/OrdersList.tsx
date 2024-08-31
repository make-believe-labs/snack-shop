import React, { useEffect, useState } from 'react';
import { Wrapper } from './Wrapper';
// eslint-disable-next-line no-redeclare
import { Box, Card, CardBody, CardHeader, Text, Heading } from '@chakra-ui/react';

interface orderItems {
    _id: string,
    orderStatus: Array<orderStatus>,
    snacks: Array<snacks>,
    vat: string,
    shippingCost: number,
    orderTotal: number
}

interface orderStatus {
    status: string,
    orderTime: string
}

interface snacks {
    snack: snack,
    qnt: number,
    unitPrice: number
}

interface snack {
    timestamp: string,
    date: string
}



export const OrdersList: React.FC = () => {
    const [data, setData] = useState<orderItems[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataForOrders = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/orders`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const orderData = await response.json();
                setData(orderData);
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

        fetchDataForOrders();
    }, []);

    return (
        <>
            <Box>
                {loading && (
                    <Text>Loading orders...</Text>
                )}
                {error && <Text>{error}</Text>}
            </Box>
            <Box as='section' id='orders'>
                <Wrapper>
                    {data &&
                        data.map(({ _id, vat, shippingCost, orderTotal }: orderItems, index: number) => (
                            <Card as='article' minW='250px' id={_id} bg='purple.100' p={4} key={_id} data-testid={'order_' + index}>
                                <CardHeader bgColor={'purple.300'}>
                                    <Heading as="h3" fontSize={'2em'}>{_id}</Heading>
                                </CardHeader>
                                <CardBody bgColor='purple.300'>
                                    <Text>VAT: £{vat}</Text>
                                    <Text>Shipping cost: £{shippingCost / 100}</Text>
                                    <Text>Order total: £{orderTotal / 100}</Text>
                                </CardBody>
                            </Card>
                        ))}

                </Wrapper>
            </Box>
        </>
    )
};