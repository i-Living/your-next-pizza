import { useDispatch } from "react-redux"
import { addPizzaToCart, minusCartItem, plusCartItem } from "store/actions"

const useCounterButton = () => {
  const dispatch = useDispatch()
  const onCounterClick = (name: string, size: string, price: number) => {
    dispatch(
      addPizzaToCart({
        id: name + '_' + price,
        name,
        size,
        price,
        amount: 1
      })
    )
  }
  const onPlusClick = (id: string) => {
    dispatch(
      plusCartItem(id)
    )
  }
  const onMinusClick = (id: string) => {
    dispatch(
      minusCartItem(id)
    )
  }

  return {
    onCounterClick,
    onPlusClick,
    onMinusClick
  }
}

export default useCounterButton
