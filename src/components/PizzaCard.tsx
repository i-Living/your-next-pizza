import { Box, Flex, HStack, Image, Text, useRadioGroup } from '@chakra-ui/react'
import useCounterButton from 'hooks/useCounterButton'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IPizzaItem, PizzaState } from 'interfaces'
import React, { useMemo, useState } from 'react'
import { CounterButton } from './CounterButton'
import { RadioCard } from './RadioCard'

interface PizzaCardProps {
  pizza: IPizzaItem
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { image, name, description, sizes, priceSmall, priceMedium, priceBig } = pizza?.fields || {}
  const sortedSizes: string[] = sizes?.sort() || []
  const [activeSize, setActiveSize] = useState(sortedSizes[0])
  const [activePrice, setActivePrice] = useState(priceSmall)
  const { onCounterClick, onPlusClick, onMinusClick } = useCounterButton()
  const pizzaOptions: Array<{ size: string, price: number }> = [
    {
      size: sortedSizes[0],
      price: priceSmall
    },
    {
      size: sortedSizes[1],
      price: priceMedium
    },
    {
      size: sortedSizes[2],
      price: priceBig
    }
  ]
  const onSizeChange = (size) => {
    setActiveSize(size)
    setActivePrice(pizzaOptions.find(item => item.size === size)?.price)
  }
  const { getRadioProps } = useRadioGroup({
    name,
    defaultValue: sortedSizes[0],
    onChange: (value) => onSizeChange(value),
})
const pizzaState = useTypedSelector(state => state.orderReducer.pizza)
const currentPizzaState = pizzaState.find(item => item.size === activeSize && item.name === name)
const { amount = 0, id } = currentPizzaState || {}
return (
  <Flex width={250} height={500} m={30} justifyContent='flex-end' direction='column'>
    <Box flexGrow={1}>
      <Image src={image?.fields.file.url} boxSize={250} />
      <Box mt={2} fontWeight='semibold' fontSize={32}>{name}</Box>
      <Box mt={1} color='gray.600' fontSize='sm'><Text noOfLines={3}>{description}</Text></Box>
    </Box>
    <Flex justifyContent='space-between' alignItems='flex-end' mt={3}>
      <HStack spacing={2}>
        {sortedSizes.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
      <Box fontSize="3xl">{activePrice} p.</Box>
    </Flex>
    <CounterButton
      amount={amount}
      onClick={() => onCounterClick(name, activeSize, activePrice)}
      onMinusClick={() => onMinusClick(id)}
      onPlusClick={() => onPlusClick(id)}
    />
  </Flex>
)
}

export default React.memo(PizzaCard)
