import { Box, Button, Flex, HStack, Image, Text, useRadioGroup } from '@chakra-ui/react'
import { IPizzaItem } from 'interfaces'
import React from 'react'
import { RadioCard } from './RadioCard'

interface PizzaCardProps {
  pizza: IPizzaItem
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  console.log(pizza)
  const { image, name, description } = pizza?.fields || {}
  const options = ["23", "30", "40"]
  const { getRadioProps } = useRadioGroup({
    name: "pizzaSize" + name,
    defaultValue: "23",
    onChange: console.log,
  })
  return (
    <Flex width={250} height={500} m={30} justifyContent="flex-end" direction="column">
      <Box flexGrow={1}>
        <Image src={image?.fields.file.url} boxSize={250} />
        <Box mt={2} fontWeight="semibold" fontSize={32}>{name}</Box>
        <Box mt={1} color="gray.600" fontSize="sm"><Text noOfLines={3}>{description}</Text></Box>
      </Box>
      <Flex justifyContent="space-between" alignItems="flex-end" mt={3}>
        <HStack spacing={2}>
          {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </HStack>
        <Box fontSize="3xl">777 p.</Box>
      </Flex>
      <Button colorScheme="orange" color="orange.400" borderColor="orange.400" variant="outline" px={2} py={2} mt={2}>Select</Button>
    </Flex>
  )
}

export default PizzaCard
