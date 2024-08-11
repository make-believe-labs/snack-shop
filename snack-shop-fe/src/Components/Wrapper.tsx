import { SimpleGrid } from '@chakra-ui/react'
export function Wrapper({ children }: any) {
    return (
        <SimpleGrid m={'10px'} minChildWidth={'300px'} spacing={'25px'}>
            {children}
        </SimpleGrid>
    )
}