import React from 'react';
// eslint-disable-next-line no-redeclare
import { Link }  from '@chakra-ui/react'
import { Wrapper } from './Wrapper';

export const NavigationBar: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Link borderRadius={'5px'} p={3} bg='green.200' fontSize={'2em'} textAlign={'center'}>Snacks</Link>
                <Link borderRadius={'5px'} p={3} bg='purple.200' fontSize={'2em'} textAlign={'center'}>Orders</Link>
                <Link borderRadius={'5px'} p={3} bg='yellow.200' fontSize={'2em'} textAlign={'center'}>Basket</Link>
            </Wrapper>
        </>
    )
}