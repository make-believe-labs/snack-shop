import { Box, Heading } from "@chakra-ui/react"

export function Header({ headingText }){
    return(
        <Box bg='orange.300' h='165' p='10'>
            <Heading as='h1' size='4xl'>{headingText}</Heading>
        </Box>
    )
}