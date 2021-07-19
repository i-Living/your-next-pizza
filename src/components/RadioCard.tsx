import { Box, RadioProps, useRadio } from '@chakra-ui/react'
import React from 'react'

export const RadioCard: React.FC<RadioProps> = React.memo((props) => {

  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        fontSize="sm"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="sm"
        color="orange.600"
        borderColor="orange.300"
        _checked={{
          bg: "orange.300",
          color: "orange.800",
          borderColor: "orange.300",
        }}
        _hover={{
          bg: "orange.100",
          color: "orange.600",
          borderColor: "orange.200",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
})
