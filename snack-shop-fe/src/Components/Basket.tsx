import { WrapperSingle } from './Wrapper';
// eslint-disable-next-line no-redeclare
import { Box, Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
import { RootState} from '../store'
import { useSelector } from 'react-redux';

function Basket() {

    const list = useSelector((state: RootState) => state.basket);

    return (
        <>
            <Box as='section' id='basket'>
                <WrapperSingle>
                    {list.snacksInBasket?.map(({ _id, snackName, details, unitPrice, categories }, index: number) => (
                        <Card as='article' minW='250px' id={_id+'_'+index} bg='yellow.100' p={4} key={_id+'_'+index} data-testid={'basketSnack_' + index}>
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