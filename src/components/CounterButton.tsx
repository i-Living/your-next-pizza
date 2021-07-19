import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'

interface CounterButtonProps {
  text?: React.ReactNode,
  amount: number,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  onPlusClick: React.MouseEventHandler<HTMLButtonElement>,
  onMinusClick: React.MouseEventHandler<HTMLButtonElement>
}

const buttonStyles = {
  colorScheme: 'orange',
  color: 'orange.400',
  borderColor: 'orange.400',
  variant: 'outline',
  px: 2,
  py: 2
}

export const CounterButton: React.FC<CounterButtonProps> = React.memo(({ text, amount, onClick, onPlusClick, onMinusClick }) => {
  if (amount === 0) return (
    <Button
      onClick={onClick}
      {...buttonStyles}
      mt={2}
      >
      Select
    </Button>
  )
  return (
    <HStack justifyContent='space-between' alignItems='center' mt={2}>
      <Button onClick={onMinusClick} {...buttonStyles}>-</Button>
      <Box>{text ? text : `Selected: ${amount}`}</Box>
      <Button onClick={onPlusClick} {...buttonStyles}>+</Button>
    </HStack>
  )
})
