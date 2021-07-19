export interface IPizzaItem {
  metadata: object,
  sys: {
    id: string
  },
  fields: {
    name: string,
    description: string,
    image: any,
    sizes: [],
    priceSmall: number,
    priceMedium: number,
    priceBig: number
  }
}

export interface PizzaState {
  id: string,
  name: string;
  size: string,
  price: number;
  amount: number
}

export interface OrderState {
  pizza: Array<PizzaState>
}
