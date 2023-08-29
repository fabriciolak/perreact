import * as React from 'react'
import { AddToWishList } from './AddToWishList';
// import dynamic from 'next/dynamic'
// import { AddToWishListProps } from './AddToWishList';

// const AddProductToWishlist = React.lazy(() => {
//   return import('./AddToWishList').then(mod => mod.AddToWishList)
// });

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
  onAddToWishlist: (id: number) => void
}

export function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = React.useState<boolean>(false)

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>

      <button onClick={() => setIsAddingToWishlist(prev => !prev)}>adicionar a wishlist</button>

      { isAddingToWishlist && (
        <AddToWishList
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      ) }

    </div>
  )
}

export const ProductItem = React.memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})
