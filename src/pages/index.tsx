import {
  Box,
  Flex
} from '@chakra-ui/react'
import { CartMenu } from 'components/CartMenu'

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

  const res = await client.getEntries({ content_type: 'pizza' })

  return {
    props: {
      pizzaList: res?.items,
    }
  }
}

const Index: React.FC<IndexProps> = ({ pizzaList }) => {
  return (
    <Container>
      <Flex
        backgroundColor='orange.100'
        w='100%'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box w='12rem' ml={10}/>
        <Flex
          fontSize='6xl'
          fontFamily='sans-serif'
          alignItems='center'
          justifyContent='center'
          padding={2}
        >
          Your <Box ml={30} mr={30}><Logo /></Box> Pizza
        </Flex>
        <Box mr={10} w='12rem'><CartMenu /></Box>
      </Flex>
      <PizzaList list={pizzaList} />
      <Footer />
    </Container >
  )
}


export default Index
