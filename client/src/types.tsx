import { SetStateAction } from 'react'; 


export type Props = {
  children?: React.ReactNode;
};

export type ProductType = {
  _v: number,
  _id: string,
  createdAt: string,
  price: number,
  quantity: number,
  title: string,
  updatedAt: string,
}

export type CartItem = {
  _v: number,
  _id: string,
  createdAt: string,
  price: number,
  quantity: number,
  title: string,
  updatedAt: string,
  productId: string
}


export interface ProductProps {
  products: ProductType[], 
  setProducts: React.Dispatch<SetStateAction<ProductType[]>>
}

export interface CartProps {
  cart: CartItem[], 
  setCart: React.Dispatch<SetStateAction<CartItem[]>>
}

export type newProduct = {
  title: string,
  price: number,
  quantity: number,
}

type ProductObject = {
  product: ProductType
}

// We want a type that consists of these types
export type AllProps = ProductProps & CartProps
export type EditableProduct = ProductObject & AllProps;
