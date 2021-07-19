import { Box, Button, Flex, HStack, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger, Text } from '@chakra-ui/react'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React from 'react'
import Cart from '_assets/cartIcon'
import reduce from 'lodash/reduce'
import { OrderState, PizzaState } from 'interfaces'
import { CounterButton } from './CounterButton'
import useCounterButton from 'hooks/useCounterButton'
import { clearCart } from 'store/actions'
import { useDispatch } from 'react-redux'

interface CartMenuProps {

}

export const CartMenu: React.FC<CartMenuProps> = ({ }) => {
  const order: OrderState = useTypedSelector(state => state.orderReducer)
  const orderSum = reduce(order, function (sum: number, pizzas: Array<PizzaState>) {
    pizzas.forEach(pizza => sum += pizza.amount * pizza.price)
    return sum
  }, 0)
  const { onPlusClick, onMinusClick } = useCounterButton()
  const dispatch = useDispatch()
  const onClearClick = () => {
    dispatch(clearCart())
  }
  return (
    <Box cursor='pointer'>
      <Popover isLazy>
        <PopoverTrigger>
          <HStack alignItems='center' justifyContent='flex-end' minW={20}>
            <Box fontSize='xl' pt={2}>{orderSum === 0 ? '' : `${orderSum} p.`}</Box>
            <Flex w={10} ml={2}><Cart /></Flex>
          </HStack>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadow: 'none' }} mt={12} mr={10} w={'28rem'}>
          <PopoverBody pt={5} pr={10} pl={10} pb={10}>
            {order.pizza.length === 0 && <Text fontSize='2xl' pt={5} textAlign='center'>Your cart is empty</Text>}
            {order.pizza.map(item => {
              return (
                <HStack key={item.id} pt={5} justifyContent='flex-start'>
                  <Text fontSize='md' fontWeight='bold' mr='auto'>{`${item.name}  ${item.size} sm`}</Text>
                  <CounterButton
                    amount={item.amount}
                    text={<Text minW='1.2rem' textAlign='center'>{item.amount.toString()}</Text>}
                    onMinusClick={() => onMinusClick(item.id)}
                    onPlusClick={() => onPlusClick(item.id)}
                  />
                  <Text fontSize='md' fontWeight='medium' minW='4rem' textAlign='end'>{item.amount * item.price + ' p.'}</Text>
                </HStack>
              )
            })}
          </PopoverBody>
          <PopoverFooter py={5} px={10}>
            <HStack justifyContent='space-between'>
              <Button colorScheme='red' color='red.300' borderColor='red.300' variant='outline' px={8} onClick={onClearClick}>Clear</Button>
              <Button colorScheme='green' color='green.300' borderColor='green.300' variant='outline' px={8}>Order</Button>
            </HStack>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Box>
  )
}
