import React, { useEffect, useState } from 'react';
import { Wrapper } from './Wrapper';
// eslint-disable-next-line no-redeclare
import { Box, Text } from '@chakra-ui/react';

interface snackItems {
    _id: string,
    snackName: string,
    details: snackDetails,
    unitPrice: number,
    stock: number,
    categories: snackCategories[],
}

interface snackDetails {
    flavour: string,
    weight: string
}

interface snackCategories {
    categories: string
}

export const Products: React.FC = () => {
    const [data, setData] = useState<snackItems[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataForSnacks = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/snacks`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const snackData = await response.json();
                setData(snackData);
                setError(null);
            } catch (err) {
                if (err instanceof Error) {
                    let message = err.message;
                    setError(message);
                }
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDataForSnacks();
    }, []);

    return (
        <>
            <Box>
                {loading && (
                    <Text>Loading snacks...</Text>
                )}
                {error && <Text>{error}</Text>}
            </Box>
            <Wrapper>
                {data &&
                    data.map(({ _id, snackName, details, unitPrice, stock, categories }: snackItems) => (
                        <Box id={_id} bg='green.100' p={4} key={_id}>
                            <Text as="b">{snackName}</Text>
                            <Text>{details.flavour}</Text>
                            <Text>{details.weight}</Text>
                            <Text>£{unitPrice / 100}</Text>
                            <Text>{stock > 0 ? 'In stock' : 'Out of stock'}</Text>
                            {categories && categories.map(({categories}: snackCategories, index) => (
                                <Text as="i" key={index}>{categories}</Text>
                            ))}
                        </Box>
                    ))}
            </Wrapper>
        </>
    )
};