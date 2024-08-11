import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink }  from '@chakra-ui/react'
import { Wrapper } from './Wrapper';

export const NavigationBar: React.FC = () => {
    return (
        <>
            <Wrapper>
                <ChakraLink as={ReactRouterLink} to='/' borderRadius={'5px'} p={3} bg='green.200' fontSize={'2em'} textAlign={'center'}>Snacks</ChakraLink>
                <ChakraLink as={ReactRouterLink} to='/orders' borderRadius={'5px'} p={3} bg='purple.200' fontSize={'2em'} textAlign={'center'}>Orders</ChakraLink>
                <ChakraLink as={ReactRouterLink} to='/basket' borderRadius={'5px'} p={3} bg='yellow.200' fontSize={'2em'} textAlign={'center'}>Basket</ChakraLink>
            </Wrapper>
        </>
    )
}