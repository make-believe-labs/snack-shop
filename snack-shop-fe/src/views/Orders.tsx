import { Heading } from '@chakra-ui/react'
import { OrdersList } from '../Components/OrdersList'
const Orders = () => {
    return (
        <>
            <Heading m='5' as='h2'>Orders</Heading>
            <OrdersList />
        </>
    )

}

export default Orders