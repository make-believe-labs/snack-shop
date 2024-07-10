import { Box, Heading } from "@chakra-ui/react"

export function Header({ headingText }: { headingText: string }) {
    return (
        <Box bg='orange.200' mb='5' p='10'>
            <Heading as='h1' size='4xl'>{headingText}</Heading>
        </Box>
    )
}