import { Box, Link, Text } from '@chakra-ui/react'

export const Footer = () => (
  <Box as="footer" py="1rem" bg="gray.50" w="100%" textAlign="center">
    <Text>
      <Box as="span" fontWeight="semibold">Images & data</Box> from <Link href="https://pizzaman.ru/" color="blue.300" isExternal>pizzaman.ru</Link>
    </Text>
  </Box>
)
