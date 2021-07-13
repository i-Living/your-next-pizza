import { Flex } from '@chakra-ui/react'
import PizzaCard from './PizzaCard'
import { IPizzaItem } from 'interfaces'
import { useAdaptive } from '../../utils'

interface PizzaListProps {
  list: [IPizzaItem]
}

export const PizzaList: React.FC<PizzaListProps> = ({ list }) => {
  console.log('PizzaList')

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      maxW="1400px"
      m="0 auto"
    >
      {list.map(item =>
        <PizzaCard key={item.sys.id} pizza={item} />
      )}
    </Flex>
  )
}
