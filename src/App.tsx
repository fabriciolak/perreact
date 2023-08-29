import * as React from 'react'
import { SearchResult } from './components/SearchResult'

interface Results {
  totalPrice: number
  data: any[]
}


export function App() {
  const [search, setSearch] = React.useState('')
  const [results, setResults] = React.useState<Results>({
    totalPrice: 0,
    data: []
  })

  async function handleSearch(event: React.FormEvent)  {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const totalPrice = data.reduce((total: number, product: { price: number } ) => {
      return total + product.price
    }, 0)

    setResults({ totalPrice, data })
  }

  const addToWishlist = React.useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Find</button>
      </form>

      <SearchResult 
        onAddToWishlist={addToWishlist} 
        results={results.data}
        totalPrice={results.totalPrice}
      />
    </div>
  )
}