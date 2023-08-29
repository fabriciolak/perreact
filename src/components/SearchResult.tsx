import * as React from 'react'
import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem"

interface SearchResultProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
  totalPrice: number
  onAddToWishlist: (id: number) => void
}

export function SearchResult({ results, totalPrice, onAddToWishlist }: SearchResultProps) {
  // const totalPrice = React.useMemo(() => {
  //   return results.reduce((total, product) => {
  //     return total + product.price 
  //   }, 0)
  // }, [results])

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem 
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>Total price: {totalPrice}</h2>
      <ul>
        {/* {results.map((product) => {
          return (
            <ProductItem 
              key={product.id} 
              product={product}
              onAddToWishlist={onAddToWishlist}
            />
          )
        })} */}

        <List 
          height={300}
          rowHeight={30}
          width={900}
          overscanRowCount={5}
          rowCount={results.length}
          rowRenderer={rowRenderer}
        />
      </ul>
    </div>
  )
}