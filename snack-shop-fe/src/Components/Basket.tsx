import { WrapperSingle } from './Wrapper';
// eslint-disable-next-line no-redeclare
import { Box, Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

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

function Basket() {

    const list = useSelector((state) => state);

    return (
        <>
            <Box as='section' id='basket'>
                <WrapperSingle>
                    {list.basket?.map(({ _id, snackName, details, unitPrice, categories }: snackItems, index: number) => (
                        <Card as='article' minW='250px' id={_id} bg='yellow.100' p={4} key={_id} data-testid={'snack_' + index}>
                            <CardHeader bgColor={'yellow.300'}>
                                <Heading as="h3" fontSize={'2em'}>{snackName}</Heading>
                            </CardHeader>
                            <CardBody bgColor='yellow.300'>
                                <Text>Flavour: {details.flavour}</Text>
                                <Text>Weight: {details.weight}</Text>
                                {categories && categories.map((category, index) => (
                                    <Text as="i" key={index}>Category: {category}</Text>
                                ))}
                                <Text>Price: £{unitPrice / 100}</Text>
                            </CardBody>
                        </Card>
                    ))}

                </WrapperSingle>
            </Box>
        </>
    )
};

export default Basket;