import {
  Box,
  Flex
} from '@chakra-ui/react'

import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { PizzaList } from 'components/PizzaList'
import { createClient } from 'contentful'
import { IPizzaItem } from 'interfaces'
import { GetStaticProps } from 'next'
import Logo from '_assets/nextLogo'

interface IndexProps {
  pizzaList: [IPizzaItem]
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: "pizza" })

  return {
    props: {
      pizzaList: res.items,
    }
  }
}

const Index: React.FC<IndexProps> = ({ pizzaList }) => {
  return (
    <Container>
      <Flex
        backgroundColor='orange.100'
        fontSize="6xl"
        fontFamily="sans-serif"
        w="100%"
        alignItems="center"
        justifyContent="center"
        padding={2}
      >
        Your <Box ml={30} mr={30}><Logo /></Box> Pizza
      </Flex>
      <PizzaList list={pizzaList} />
      <Footer />
    </Container >
  )
}


export default Index
