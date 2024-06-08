import { VStack } from '@chakra-ui/react'
export function Wrapper({ children }) {
    return (
        <VStack spacing={4} align='stretch'>
            {children}
        </VStack>
    )
}