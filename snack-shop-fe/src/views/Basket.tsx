import { Heading } from '@chakra-ui/react'
import Basket from '../Components/Basket'
const BasketView = () => {
    return (
        <>
            <Heading m='5' as='h2'>Basket</Heading>
            <Basket />
        </>
    )

}

export default BasketView