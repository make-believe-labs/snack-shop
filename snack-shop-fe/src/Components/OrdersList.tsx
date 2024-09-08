import React, { useEffect, useState } from 'react';
import { WrapperSingle } from './Wrapper';
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
    snackName: string,
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
                    `/api/orders`
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
                <WrapperSingle>
                    {data &&
                        data.map(({ _id, snacks, vat, shippingCost, orderTotal }: orderItems, index: number) => (
                            <Card as='article' minW='250px' id={_id} bg='purple.100' p={3} key={_id} data-testid={'order_' + index}>
                                <CardHeader bgColor={'purple.300'} p={2}>
                                    <Heading as="h3" fontSize={'1.6em'}>Order {_id}</Heading>
                                </CardHeader>
                                <CardBody bgColor='purple.300' p={2}>
                                    <Heading as="h4" fontSize={'1.2 em'}>Snacks</Heading>
                                    {snacks && snacks.map((snack, index) => (
                                        <Text key={index} >£{snack.unitPrice / 100 * snack.qnt} for {snack.qnt} x {snack.snackName} at £{snack.unitPrice / 100} each</Text>

                                    ))}
                                    <br />
                                    <Heading as="h4" fontSize={'1.2 em'}>Costs</Heading>
                                    <Text>UK value added tax: £{vat}</Text>
                                    <Text>Shipping: £{shippingCost / 100}</Text>
                                    <br />
                                    <Text as="b">Order total: £{orderTotal / 100}</Text>
                                </CardBody>
                            </Card>
                        ))}

                </WrapperSingle>
            </Box>
        </>
    )
};