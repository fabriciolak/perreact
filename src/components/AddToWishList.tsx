export type AddToWishListProps = {
  onAddToWishlist: () => void
  onRequestClose: () => void
}

export function AddToWishList({ onAddToWishlist, onRequestClose }: AddToWishListProps) {
  return (
    <span>
      Adicionar aos favoritos
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Nao</button>
    </span>

  )
}

