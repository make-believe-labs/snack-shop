import { Heading, Text } from '@chakra-ui/react'
import Basket from '../Components/Basket'
import BasketCounter from '../Components/BasketCounter'
const BasketView = () => {
    return (
        <>
            <Heading m='5' as='h2'>
                Basket
            </Heading>
            <Text m='5'>
                You have <BasketCounter /> snacks in your basket.
            </Text>
            <Basket />
        </>
    )
}

export default BasketView