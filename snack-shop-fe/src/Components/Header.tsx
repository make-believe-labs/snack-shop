import { Box, Divider, Heading } from "@chakra-ui/react"

export function Header({ headingText }) {
    return (
        <Box bg='orange.200'>
            <Heading as='h1' size='4xl'>{headingText}</Heading>
        </Box>
}