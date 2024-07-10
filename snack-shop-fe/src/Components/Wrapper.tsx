import { SimpleGrid } from '@chakra-ui/react'
export function Wrapper({ children }: any) {
    return (
        <SimpleGrid columns={3} spacing={2}>
            {children}
        </SimpleGrid>
    )
}