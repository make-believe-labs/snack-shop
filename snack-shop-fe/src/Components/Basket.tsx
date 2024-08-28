import { WrapperSingle } from './Wrapper';
// eslint-disable-next-line no-redeclare
import { Box, Button, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { RootState } from '../store'
import { useSelector } from 'react-redux';

function Basket() {

    const list = useSelector((state: RootState) => state.basket);

    return (
        <>
            <Box as='section' id='basket'>
                <WrapperSingle>
                    {list.snacksInBasket?.map(({ _id, snackName, details, unitPrice }, index: number) => (
                        <Card as='article' minW='250px' id={_id + '_' + index} bg='yellow.100' p={3} key={_id + '_' + index} data-testid={'basketSnack_' + index}>
                            <CardHeader bgColor={'yellow.300'} p={2}>
                                <Heading as="h3" fontSize={'1.6em'}>{snackName}</Heading>
                            </CardHeader>
                            <CardBody bgColor='yellow.300' p={2}>
                                <Text>
                                    Flavour: {details.flavour},
                                    Weight: {details.weight},
                                    Price: £{unitPrice / 100},
                                </Text>
                                <Button mt={2}>Remove</Button>
                            </CardBody>
                        </Card>
                    ))}

                </WrapperSingle>
            </Box>
        </>
    )
};

export default Basket;